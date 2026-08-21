import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

/** A drawn diamond — Satori has no font that covers the ◆ character. */
function Diamond() {
  return (
    <div
      style={{
        display: "flex",
        width: 7,
        height: 7,
        background: "#bc8f2f",
        transform: "rotate(45deg)",
      }}
    />
  );
}

export default async function OpenGraphImage() {
  // Satori ships no serif, so the display face is handed to it directly.
  // It reads ttf/otf/woff — not woff2 — hence the decompressed copies here.
  const fontDir = join(process.cwd(), "src", "og-fonts");
  const [roman, italic] = await Promise.all([
    readFile(join(fontDir, "ebgaramond.ttf")),
    readFile(join(fontDir, "ebgaramond-italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 76px",
          background: "#221e17",
          color: "#fbf7ee",
          fontFamily: "EB Garamond",
          position: "relative",
        }}
      >
        {/* warm gold wash, top-left, matching the site's page headers */}
        <div
          style={{
            position: "absolute",
            top: -280,
            left: -160,
            width: 900,
            height: 700,
            background:
              "radial-gradient(circle, rgba(188,143,47,0.42) 0%, rgba(34,30,23,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 7,
              textTransform: "uppercase",
              color: "#ffd479",
            }}
          >
            Countryside Baptist Church
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(251,247,238,0.55)",
            }}
          >
            <div style={{ display: "flex" }}>
              {site.address.city}, {site.address.regionName}
            </div>
            <Diamond />
            <div style={{ display: "flex" }}>Established {site.founded}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontStyle: "italic",
            lineHeight: 1.05,
            maxWidth: 720,
          }}
        >
          Church the way it used to be.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            fontSize: 25,
            color: "rgba(251,247,238,0.72)",
          }}
        >
          <div style={{ display: "flex", width: 76, height: 3, background: "#bc8f2f" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex" }}>Sunday School 10:00</div>
            <Diamond />
            <div style={{ display: "flex" }}>Worship 11:00</div>
            <Diamond />
            <div style={{ display: "flex" }}>Sunday Evening 6:00</div>
            <Diamond />
            <div style={{ display: "flex" }}>Wednesday 7:00</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "EB Garamond",
          data: roman,
          weight: 400,
          style: "normal",
        },
        {
          name: "EB Garamond",
          data: italic,
          weight: 400,
          style: "italic",
        },
      ],
    },
  );
}
