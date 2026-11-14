import React from "react";

interface KhoisanDividerProps {
  tone?: "light" | "dark";
  className?: string;
}

export const KhoisanDivider: React.FC<KhoisanDividerProps> = ({
  tone = "light",
  className = "",
}) => {
  const lineColor = tone === "dark" ? "rgba(197, 155, 39, 0.35)" : "rgba(74, 21, 37, 0.16)";
  const diamondStroke = tone === "dark" ? "#F3C969" : "#C59B27";
  const diamondFill = tone === "dark" ? "#4A1525" : "#FAF8F5";

  return (
    <div className={`flex items-center justify-center gap-4 my-2 ${className}`} aria-hidden="true">
      <div className="h-px flex-1" style={{ backgroundColor: lineColor }} />
      <svg
        width="56"
        height="14"
        viewBox="0 0 56 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M2 7H16M40 7H54"
          stroke={diamondStroke}
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <polygon
          points="20,7 24,3 28,7 24,11"
          fill={diamondFill}
          stroke={diamondStroke}
          strokeWidth="1.2"
        />
        <polygon
          points="28,7 32,3 36,7 32,11"
          fill={diamondFill}
          stroke={diamondStroke}
          strokeWidth="1.2"
        />
        <polygon
          points="25,7 28,4 31,7 28,10"
          fill={diamondStroke}
        />
      </svg>
      <div className="h-px flex-1" style={{ backgroundColor: lineColor }} />
    </div>
  );
};
