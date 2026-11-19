import type { Metadata } from "next";
import GuideView from "@/components/GuideView";

// The stay guide, shown as the last tab under Rooms.
export const metadata: Metadata = {
  title: "入住指南",
  description: "板桥环球园区入住须知：抵达、办理入住、住客守则及常见问题。",
};

export default function GuidePage() {
  return <GuideView />;
}
