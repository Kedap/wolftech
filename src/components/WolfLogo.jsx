export default function WolfLogo ({ size = 80, className = '', variant = 'svg' }) {
  // Variante con imagen PNG del logo horizontal (sin texto)
  if (variant === 'icon') {
    return (
      <img
        src="/logo.png"
        alt="WolfTech"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      />
    )
  }

  // Variante con imagen PNG del logo completo (lobo + texto WOLFTEC)
  // Es vertical, así que size controla el ancho y el alto es automático
  if (variant === 'full') {
    return (
      <img
        src="/logo_completo.png"
        alt="WolfTech"
        width={size}
        className={`h-auto object-contain ${className}`}
      />
    )
  }

  // Variante original SVG (default)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head base */}
      <polygon
        points="50,2 22,8 8,44 12,80 28,100 50,107 72,100 88,80 92,44 78,8"
        fill="#0D1117"
        stroke="#00D4FF"
        strokeWidth="1.4"
      />
      {/* Left ear fill */}
      <polygon points="22,8 8,44 34,40" fill="#00D4FF" opacity="0.75" />
      {/* Left ear inner */}
      <polygon points="22,13 12,42 32,39" fill="#0D1117" />
      {/* Right ear fill */}
      <polygon points="78,8 92,44 66,40" fill="#00D4FF" opacity="0.75" />
      {/* Right ear inner */}
      <polygon points="78,13 88,42 68,39" fill="#0D1117" />
      {/* Forehead divider */}
      <polygon
        points="40,42 50,32 60,42 50,52"
        fill="#1C2333"
        stroke="#00D4FF"
        strokeWidth="0.6"
        opacity="0.8"
      />
      {/* Left eye */}
      <polygon points="22,60 32,52 40,60 32,68" fill="#00D4FF" />
      <polygon points="25,60 32,54 38,60 32,66" fill="white" opacity="0.35" />
      {/* Right eye */}
      <polygon points="60,60 68,52 78,60 68,68" fill="#00D4FF" />
      <polygon points="63,60 68,54 74,60 68,66" fill="white" opacity="0.35" />
      {/* Nose */}
      <polygon points="43,82 50,74 57,82 50,90" fill="#FF6B35" />
      {/* Muzzle lines */}
      <polyline
        points="38,94 43,82 50,90 57,82 62,94"
        fill="none"
        stroke="#8B95A6"
        strokeWidth="0.9"
        opacity="0.55"
      />
      {/* Circuit details */}
      <polyline points="42,38 38,34 34,34" fill="none" stroke="#00D4FF" strokeWidth="0.7" opacity="0.35" />
      <polyline points="58,38 62,34 66,34" fill="none" stroke="#00D4FF" strokeWidth="0.7" opacity="0.35" />
    </svg>
  )
}
