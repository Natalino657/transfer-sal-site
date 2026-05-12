import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

/** Favicon “ST” (Sal Transfer) — legível em resultados de pesquisa e no separador. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0369a1 0%, #0c4a6e 55%, #b45309 100%)",
          color: "#fff",
          fontSize: 22,
          fontWeight: 900,
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          letterSpacing: "-0.12em",
          borderRadius: 10,
        }}
      >
        ST
      </div>
    ),
    { ...size },
  );
}
