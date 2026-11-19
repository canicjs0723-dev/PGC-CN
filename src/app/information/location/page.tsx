import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "周边信息 · 位置",
  description: `${site.address.rooms}，${site.address.street}。板桥环球园区交通指引与停车登记。`,
};

export default function InformationLocationPage() {
  return <LocationView />;
}
