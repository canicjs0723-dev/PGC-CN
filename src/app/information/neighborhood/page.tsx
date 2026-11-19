import type { Metadata } from "next";
import NeighborhoodView from "@/components/NeighborhoodView";

export const metadata: Metadata = {
  title: "周边信息 · 周边",
  description: "板桥环球园区（TH212，205栋）周边的餐饮、景点及生活便利设施。",
};

export default function NeighborhoodPage() {
  return <NeighborhoodView />;
}
