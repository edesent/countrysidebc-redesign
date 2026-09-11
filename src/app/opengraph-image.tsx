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
        background: "#9e7211",
        transform: "rotate(45deg)",
      }}
    />
  );
}

export default async function OpenGraphImage() {
  // Satori ships neither face, so both are handed to it directly. It reads
  // ttf/otf/woff — not woff2 — hence the static copies here; cinzel-bold.ttf is
  // the variable Cinzel pinned at wght 700, which Satori cannot do itself.
  const fontDir = join(process.cwd(), "src", "og-fonts");
  const [cinzel, poppins] = await Promise.all([
    readFile(join(fontDir, "cinzel-bold.ttf")),
    readFile(join(fontDir, "poppins-regular.ttf")),
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
          background: "#2b3422",
          color: "#fffbf6",
          fontFamily: "Cinzel",
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
              "radial-gradient(circle, rgba(158,114,17,0.40) 0%, rgba(43,52,34,0) 70%)",
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
              color: "#fcd68a",
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
              color: "rgba(255,251,246,0.58)",
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
            fontSize: 68,
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
            fontSize: 20,
            color: "rgba(255,251,246,0.74)",
          }}
        >
          <div style={{ display: "flex", width: 76, height: 3, background: "#9e7211" }} />
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
          name: "Cinzel",
          data: cinzel,
          weight: 700,
          style: "normal",
        },
        {
          name: "Poppins",
          data: poppins,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
