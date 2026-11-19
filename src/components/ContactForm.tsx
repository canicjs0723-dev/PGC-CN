"use client";

import SiteLink from "@/components/SiteLink";
import { useState } from "react";
import { privacyConsent } from "@/content/contact";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "mailed" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

// GitHub Pages has no server to send mail. Inquiries go, in order of preference, to:
// 1. the operator's Google Apps Script mailer (site.contactFormUrl, docs/contact-form-apps-script.gs), which
//    emails them straight to the inquiry inbox;
// 2. Web3Forms, if an access key is set (site.web3formsAccessKey);
// 3. otherwise the visitor's own email app, opened with the inquiry filled in.
// The free FormSubmit relay used before proved unreliable and has been dropped.
const relay = site.contactFormUrl ? "apps-script" : site.web3formsAccessKey ? "web3forms" : "";

const field =
  "w-full border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-[16px] outline-none transition-colors placeholder:text-charcoal/35 focus:border-charcoal";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const inquiry = String(formData.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "请输入您的姓名。";
    if (!email) nextErrors.email = "请输入您的电子邮箱。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "请输入有效的电子邮箱地址。";
    if (!inquiry) nextErrors.message = "请输入咨询内容。";
    if (formData.get("consent") !== "yes") nextErrors.consent = "请同意个人信息的收集与使用。";
    setErrors(nextErrors);
    const firstInvalid = (["name", "email", "message", "consent"] as const).find((key) => nextErrors[key]);
    if (firstInvalid) {
      setStatus("error");
      setMessage("请检查标出的项目。");
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }
    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", inquiry);

    const subject = `[PGC 咨询] ${name}`;
    const company = String(formData.get("company") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!relay) {
      const body = [
        `姓名：${name}`,
        company ? `公司：${company}` : null,
        `电子邮箱：${email}`,
        phone ? `电话：${phone}` : null,
        "",
        inquiry,
        "",
        "（本人同意为处理本次咨询而收集和使用本人的个人信息。）",
      ]
        .filter((line) => line !== null)
        .join("\n");
      const href = `mailto:${site.inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setMailto(href);
      setStatus("mailed");
      setMessage("");
      window.location.href = href;
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const fields = { name, company, email, phone, message: inquiry, consent: "yes", botcheck: Boolean(formData.get("_honey")) };
      const res =
        relay === "apps-script"
          ? // text/plain keeps this a "simple" request (no CORS preflight), which Apps Script web apps require.
            await fetch(site.contactFormUrl, { method: "POST", headers: { "content-type": "text/plain;charset=utf-8" }, body: JSON.stringify(fields) })
          : await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { Accept: "application/json", "content-type": "application/json" },
              body: JSON.stringify({
                access_key: site.web3formsAccessKey,
                subject,
                from_name: "PGC 官网",
                replyto: email,
                botcheck: fields.botcheck,
                姓名: name,
                公司: company,
                电子邮箱: email,
                电话: phone,
                咨询内容: inquiry,
                个人信息同意: "已同意",
              }),
            });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      if (!res.ok || String(data.success) !== "true") {
        throw new Error(data.message || "咨询未能发送。");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      const reason = err instanceof Error ? err.message : "咨询未能发送。";
      setMessage(`${reason.replace(/[.!?。！？]?\s*$/, "。")}请稍后再试。`);
    }
  }

  if (status === "mailed") {
    return (
      <div className="border-t border-charcoal/20 pt-10" role="status">
        <p className="font-serif text-[36px] font-light">即将完成。</p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
          您的邮件应用应已打开，并已填好咨询内容。请在邮件应用中点击<strong className="font-semibold text-charcoal">发送</strong>，即可将咨询发送给我们。
        </p>
        <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-charcoal/60">
          邮件应用没有打开？请{" "}
          <a href={mailto} className="underline underline-offset-2">
            重试
          </a>{" "}
          ，或直接发送邮件至{" "}
          <a href={`mailto:${site.inquiryEmail}`} className="underline underline-offset-2">
            {site.inquiryEmail}
          </a>
          。
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-8 border-b border-charcoal/40 pb-0.5 text-[0.8125rem] uppercase tracking-[0.14em] hover:border-charcoal">
          返回表单
        </button>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="border-t border-charcoal/20 pt-10" role="status">
        <p className="font-serif text-[36px] font-light">感谢您的咨询。</p>
        <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
          我们已收到您的咨询，将尽快与您联系。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">姓名 *</span>
          <input name="name" required maxLength={80} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={field} />
          {errors.name && <span id="name-error" className="mt-2 block text-[13px] text-red-700">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">公司</span>
          <input name="company" maxLength={120} autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">电子邮箱 *</span>
          <input name="email" type="email" required maxLength={120} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={field} />
          {errors.email && <span id="email-error" className="mt-2 block text-[13px] text-red-700">{errors.email}</span>}
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">电话</span>
          <input name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">咨询内容 *</span>
        <textarea name="message" required rows={5} maxLength={relay ? 3000 : 1500} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={`${field} resize-y`} />
        {errors.message && <span id="message-error" className="mt-2 block text-[13px] text-red-700">{errors.message}</span>}
      </label>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="space-y-3 text-[13px] leading-relaxed text-charcoal/75">
        <p className="font-medium text-charcoal">个人信息收集及使用同意</p>
        <ul className="space-y-1">
          <li>收集项目：{privacyConsent.items}</li>
          <li>使用目的：{privacyConsent.purpose}</li>
          <li>保存期限：{privacyConsent.retention}</li>
        </ul>
        <p>
          您有权拒绝，但拒绝后我们将无法回复您的咨询。{" "}
          <SiteLink href="/privacy" className="underline underline-offset-2">
            隐私政策
          </SiteLink>
        </p>
        <label className="flex cursor-pointer items-center gap-3 text-charcoal">
          <input type="checkbox" name="consent" value="yes" required aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} className="size-4 accent-charcoal" />我同意
        </label>
        {errors.consent && <p id="consent-error" className="text-[13px] text-red-700">{errors.consent}</p>}
      </div>

      {status === "error" && (
        <p className="text-[14px] text-red-700" role="alert">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="group inline-flex items-center gap-4 bg-charcoal px-8 py-4 text-[13px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-navy disabled:opacity-60"
      >
        {status === "sending" ? "发送中…" : "发送咨询"}
      </button>
    </form>
  );
}
