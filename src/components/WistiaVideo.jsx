import { useEffect } from "react";

export default function WistiaVideo({ videoId, className = "" }) {
  useEffect(() => {
    // Load Wistia scripts dynamically if not already present
    const scriptId = `wistia-script-${videoId}`;
    if (!document.getElementById(scriptId)) {
      const jsonpScript = document.createElement("script");
      jsonpScript.id = scriptId;
      jsonpScript.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
      jsonpScript.async = true;
      document.head.appendChild(jsonpScript);
    }

    if (!document.getElementById("wistia-external")) {
      const extScript = document.createElement("script");
      extScript.id = "wistia-external";
      extScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
      extScript.async = true;
      document.head.appendChild(extScript);
    }
  }, [videoId]);

  return (
    <div className={className}>
      <div
        className={`wistia_embed wistia_async_${videoId} seo=true videoFoam=true`}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <div
          className="wistia_swatch"
          style={{
            height: "100%",
            left: 0,
            opacity: 0,
            overflow: "hidden",
            position: "absolute",
            top: 0,
            transition: "opacity 200ms",
            width: "100%",
          }}
        >
          <img
            src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
            style={{
              filter: "blur(5px)",
              height: "100%",
              objectFit: "contain",
              width: "100%",
            }}
            alt="Video thumbnail"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
