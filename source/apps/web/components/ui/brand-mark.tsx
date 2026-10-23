/**
 * Interview Studio's neutral conversation mark. Inline SVG keeps the same
 * shape in navigation and other small contexts without loading an asset.
 */
export function BrandMark({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="6" y="6" width="128" height="128" rx="30" fill="#FBF9F4" />
      <rect
        x="6.75"
        y="6.75"
        width="126.5"
        height="126.5"
        rx="29.25"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      <path
        d="M43 39 H97 A17 17 0 0 1 114 56 V79 A17 17 0 0 1 97 96 H64 L43 111 V96 A17 17 0 0 1 26 79 V56 A17 17 0 0 1 43 39 Z"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="68" r="5" fill="#1A1A1A" />
      <circle cx="70" cy="68" r="5" fill="#4338CA" />
      <circle cx="90" cy="68" r="5" fill="#1A1A1A" />
    </svg>
  );
}
