import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

// Public site address, used for absolute link-preview URLs (messengers need the full https:// address).
const repository = process.env.GITHUB_REPOSITORY?.split("/");
const siteUrl = repository ? `https://${repository[0]}.github.io${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}` : "http://localhost:3000";
const description =
  "位于板桥大庄洞的高端商务住宅，将工作、休憩与有意义的交流融为一体。提供商务套房与宾客套房。";

export const metadata: Metadata = {
  title: {
    default: "板桥环球园区 Pangyo Global Campus",
    template: "%s | 板桥环球园区",
  },
  description,
  // Link preview shown when the site address is shared in a messenger or social app.
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: `${siteUrl}/`,
    siteName: "板桥环球园区",
    title: "板桥环球园区 Pangyo Global Campus",
    description,
    images: [{ url: `${siteUrl}/images/og-pgc-2026.jpg`, width: 1200, height: 630, alt: "板桥环球园区205栋" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "板桥环球园区 Pangyo Global Campus",
    description,
    images: [`${siteUrl}/images/og-pgc-2026.jpg`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <head>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
