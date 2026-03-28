import { useState, useEffect } from "react";

const TikTokIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const socials = [
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@ciiekcom",
    url: "https://tiktok.com/@ciiekcom",
    icon: "tiktok",
    gradientColors: ["#ff0050", "#ff00c8", "#7b2fff"],
    glow: "rgba(255,0,80,0.5)",
    glowHover: "rgba(255,0,200,0.7)",
    border: "rgba(255,0,80,0.3)",
    borderHover: "rgba(255,0,200,0.8)",
  },
  {
    id: "tg-personal",
    label: "Telegram",
    handle: "@KarmnetCom",
    url: "https://t.me/KarmnetCom",
    icon: "telegram",
    gradientColors: ["#00b4ff", "#0088cc", "#005f99"],
    glow: "rgba(0,136,204,0.5)",
    glowHover: "rgba(0,180,255,0.7)",
    border: "rgba(0,136,204,0.3)",
    borderHover: "rgba(0,180,255,0.8)",
  },
  {
    id: "tg-channel",
    label: "Telegram канал",
    handle: "@CIIEKlOGO",
    url: "https://t.me/CIIEKlOGO",
    icon: "telegram",
    gradientColors: ["#43e97b", "#00c9a7", "#0088cc"],
    glow: "rgba(67,233,123,0.5)",
    glowHover: "rgba(0,201,167,0.7)",
    border: "rgba(67,233,123,0.3)",
    borderHover: "rgba(0,201,167,0.8)",
  },
];

export default function Index() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "#060612" }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          top: "-10%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,47,255,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,255,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 5s ease-in-out infinite reverse",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: "40%",
          left: "30%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,80,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">

        {/* Avatar */}
        <div
          style={{
            marginBottom: "1.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7b2fff, #ff0050, #00b4ff)",
              padding: 3,
              boxShadow: "0 0 40px rgba(123,47,255,0.5)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/bc144e7c-0edc-4854-a749-62de78b03ca8/bucket/bdec6c54-5a25-45d9-94d8-1f618f279971.jpg"
                alt="CIIEK"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1
          className="font-display text-center"
          style={{
            fontSize: "clamp(1.6rem, 6vw, 2.4rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "0.25rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
          }}
        >
          #ᴋᴀʀᴍɴᴇᴛ.ᴄᴏᴍ
        </h1>

        {/* Tagline */}
        <p
          className="font-body text-center"
          style={{
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
          }}
        >
          Навигация
        </p>

        {/* Social buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", width: "100%" }}>
          {socials.map((s, i) => {
            const isHovered = hovered === s.id;
            return (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "1rem",
                  background: isHovered
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isHovered ? s.borderHover : s.border}`,
                  backdropFilter: "blur(16px)",
                  boxShadow: isHovered
                    ? `0 0 35px ${s.glowHover}, inset 0 1px 0 rgba(255,255,255,0.08)`
                    : `0 0 0 transparent, inset 0 1px 0 rgba(255,255,255,0.04)`,
                  cursor: "pointer",
                  textDecoration: "none",
                  transform: isHovered
                    ? "translateY(-4px) scale(1.015)"
                    : "translateY(0) scale(1)",
                  opacity: visible ? 1 : 0,
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: visible ? `${0.3 + i * 0.12}s` : "0s",
                }}
              >
                {/* Icon bubble */}
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "0.875rem",
                    background: `linear-gradient(135deg, ${s.gradientColors[0]}, ${s.gradientColors[1]}, ${s.gradientColors[2]})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: isHovered ? `0 6px 24px ${s.glow}` : "none",
                    transition: "box-shadow 0.35s ease",
                  }}
                >
                  {s.icon === "tiktok" ? <TikTokIcon /> : <TelegramIcon />}
                </div>

                {/* Label + handle */}
                <div style={{ flex: 1 }}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "0.02em",
                      marginBottom: 3,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="font-body"
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {s.handle}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    color: isHovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)",
                    fontSize: 20,
                    transform: isHovered ? "translateX(5px)" : "translateX(0)",
                    transition: "all 0.3s ease",
                  }}
                >
                  →
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <p
          className="font-body text-center"
          style={{
            marginTop: "2.5rem",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.1em",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.8s",
          }}
        >
          © 2026 CIIEK
        </p>
      </div>
    </div>
  );
}