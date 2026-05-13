function Features() {
  return (
    <section className="relative overflow-hidden px-6 py-20 max-w-7xl mx-auto">
      {/* Grid-сетка на фоне */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,148,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,148,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 80%)",
        }}
      />

      {/* Фиолетовое свечение в углу */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 60%)",
          top: "-120px",
          right: "-80px",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10">
        {/* Метка секции */}
        <div className="flex items-center gap-2.5 text-[10px] text-tg-green tracking-[0.2em] mb-4">
          <span className="w-4 h-px bg-tg-green"></span>
          // SECTION_05 · FEATURES
        </div>

        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-5 max-w-2xl">
          Не просто парсер —{" "}
          <span className="bg-gradient-to-br from-tg-green to-tg-purple bg-clip-text text-transparent">
            умная система
          </span>
        </h2>

        {/* Подзаголовок */}
        <p className="text-sm text-tg-text-dim leading-relaxed mb-8 max-w-2xl">
          Каждый лид проходит через AI-фильтрацию: бот понимает контекст и отсекает спам, рекламу и обсуждения "вообще".
        </p>

        {/* Сетка фич */}
        <div className="grid md:grid-cols-3 gap-3.5">
          {/* Карточка 1 — БОЛЬШАЯ (на 2 колонки) */}
          <div className="relative md:col-span-2 p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8 hover:border-tg-green/40 transition-colors">
            <span className="absolute top-3.5 right-3.5 text-[9px] text-tg-purple tracking-[0.12em] px-1.5 py-0.5 border border-tg-purple/35 rounded bg-tg-purple/8">
              CORE
            </span>
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-green/8 border border-tg-green/30 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">
              AI-скоринг релевантности
            </h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Каждое сообщение получает оценку от 0 до 100%. Настраиваешь порог — получаешь только то, что нужно. Никакого спама и случайных упоминаний.
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8 hover:border-tg-green/40 transition-colors">
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-green/8 border border-tg-green/30 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">1000+ источников</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Telegram-чаты, каналы, паблики. База постоянно расширяется.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8 hover:border-tg-green/40 transition-colors">
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-purple/12 border border-tg-purple/40 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">Реалтайм</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Уведомление приходит за 30 секунд. Ты первый — ты выиграл.
            </p>
          </div>

          {/* Карточка 4 */}
          <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8 hover:border-tg-green/40 transition-colors">
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-green/8 border border-tg-green/30 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">Прямая ссылка на автора</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Пишешь в личку одним кликом — никакого поиска контактов.
            </p>
          </div>

          {/* Карточка 5 */}
          <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8 hover:border-tg-green/40 transition-colors">
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-purple/12 border border-tg-purple/40 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8">
                <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">Экспорт в CRM</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Выгрузка в Bitrix, AmoCRM, Notion и Google Sheets через webhook.
            </p>
          </div>

          {/* Карточка 6 */}
          <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8 hover:border-tg-green/40 transition-colors">
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-green/8 border border-tg-green/30 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">Антидубль</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Один автор — одно уведомление в день. Не заваливаем спамом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;