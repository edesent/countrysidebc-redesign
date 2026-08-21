import { NextResponse } from "next/server";

/** Temporary: is YouTube's block on Vercel egress region-specific? */
export const dynamic = "force-dynamic";
export const preferredRegion = "sfo1";

export async function GET() {
  const url =
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCfOTOQ7Uucrqv_EE5Q0Asxw";
  try {
    const response = await fetch(url, { cache: "no-store" });
    const body = await response.text();
    return NextResponse.json({
      region: "sfo1",
      status: response.status,
      bytes: body.length,
      entries: (body.match(/<entry>/g) || []).length,
    });
  } catch (error) {
    return NextResponse.json({ region: "sfo1", error: String(error) });
  }
}
