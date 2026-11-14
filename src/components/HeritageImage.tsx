import React, { useState } from "react";
import { Crown } from "lucide-react";

interface HeritageImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  wrapperClassName?: string;
}

export const HeritageImage: React.FC<HeritageImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  decoding = "async",
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#340B18] via-[#4A1525] to-[#240711] flex flex-col items-center justify-center p-4 text-center ${wrapperClassName}`}
        role="img"
        aria-label={alt}
      >
        <Crown className="w-7 h-7 text-[#C59B27] mb-2" />
        <span className="font-cinzel text-xs font-semibold text-[#FAF8F5] leading-snug max-w-[18ch]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
