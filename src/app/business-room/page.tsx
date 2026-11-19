import type { Metadata } from "next";
import RoomPage from "@/components/RoomPage";
import { businessRoom, guestRoom } from "@/content/rooms";

export const metadata: Metadata = {
  title: "商务套房",
  description: businessRoom.description[0],
};

export default function BusinessRoomPage() {
  return <RoomPage room={businessRoom} other={guestRoom} />;
}
