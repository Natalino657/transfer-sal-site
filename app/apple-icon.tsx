import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Ícone para ecrã inicial iOS / atalhos — mesma identidade “ST”. */
export default function AppleIcon() {
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
          fontSize: 88,
          fontWeight: 900,
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          letterSpacing: "-0.1em",
          borderRadius: 36,
        }}
      >
        ST
      </div>
    ),
    { ...size },
  );
}
