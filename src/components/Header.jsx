function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-dashed border-white/8">
      {/* Логотип: радар + название */}
      <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="17" fill="none" stroke="#00FF94" strokeWidth="1" opacity="0.4" />
          <circle cx="20" cy="20" r="11" fill="none" stroke="#00FF94" strokeWidth="1" opacity="0.6" />
          <circle cx="20" cy="20" r="5" fill="none" stroke="#00FF94" strokeWidth="1" opacity="0.8" />
          <g className="origin-center animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "20px 20px" }}>
            <path d="M20 20 L20 3 A17 17 0 0 1 36 23 Z" fill="#00FF94" opacity="0.18" />
            <line x1="20" y1="20" x2="20" y2="3" stroke="#00FF94" strokeWidth="1.5" />
          </g>
          <circle cx="20" cy="20" r="2" fill="#00FF94" />
        </svg>
        <span className="font-bold text-base text-white tracking-tight">
          TARGETON 
        </span>
      </div>

      {/* Навигационные ссылки */}
      <nav className="hidden md:flex gap-6 text-xs text-tg-text-muted tracking-wider">
        <a href="#product" className="hover:text-tg-green transition-colors">// product</a>
        <a href="#pricing" className="hover:text-tg-green transition-colors">// pricing</a>
        <a href="#docs" className="hover:text-tg-green transition-colors">// docs</a>
      </nav>
    </header>
  );
}

export default Header;