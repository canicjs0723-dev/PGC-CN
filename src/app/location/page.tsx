import type { Metadata } from "next";
import LocationView from "@/components/LocationView";

// Legacy URL kept working; canonical is /information/location.
export const metadata: Metadata = {
  title: "周边信息 · 位置",
  alternates: { canonical: "/information/location/" },
};

export default function LocationPage() {
  return <LocationView />;
}
