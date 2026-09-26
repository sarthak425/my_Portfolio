import React, { useEffect, useState } from "react";

const phrases = [
  "Loading Portfolio...",
  "Brewing some code ☕",
  "Spinning up the servers...",
  "Almost there! 🚀",
  "Crafting pixels & logic...",
  "Just a moment... ✨",
];

const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadePhrase, setFadePhrase] = useState(true);

  useEffect(() => {
    // Cycle phrases every 500ms
    const phraseInterval = setInterval(() => {
      setFadePhrase(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFadePhrase(true);
      }, 200);
    }, 600);

    // Start fading the whole loader at 1.8s
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 1800);

    // Fully hide at 2.4s
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050816",
        opacity: opacity,
        transition: "opacity 0.6s ease",
        pointerEvents: "auto",
      }}
    >
      {/* Spinning ring */}
      <div style={{ position: "relative", width: 80, height: 80, marginBottom: 24 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "4px solid transparent",
            borderTop: "4px solid #915EFF",
            borderRight: "4px solid #00d4ff",
            animation: "spin 1s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 10,
            borderRadius: "50%",
            border: "4px solid transparent",
            borderBottom: "4px solid #915EFF",
            borderLeft: "4px solid #00d4ff",
            animation: "spin 0.8s linear infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          💻
        </div>
      </div>

      {/* Name */}
      <h1 style={{ color: "white", fontSize: 24, fontWeight: 700, margin: 0 }}>
        <span style={{ color: "#915EFF" }}>Sarthak</span> Khatpe
      </h1>

      {/* Cycling phrase */}
      <p
        style={{
          color: "#aaa6c3",
          fontSize: 13,
          marginTop: 12,
          letterSpacing: "0.1em",
          opacity: fadePhrase ? 1 : 0,
          transition: "opacity 0.2s ease",
          minHeight: 20,
        }}
      >
        {phrases[phraseIndex]}
      </p>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #915EFF, #00d4ff)",
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
