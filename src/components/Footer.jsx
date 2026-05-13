function Footer() {
  return (
    <div>
      {/* ============ ФИНАЛЬНЫЙ CTA ============ */}
      <section className="relative overflow-hidden px-6 py-20 max-w-7xl mx-auto">
        {/* Зелёное свечение слева сверху */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,148,0.15) 0%, transparent 60%)",
            top: "-160px",
            left: "-100px",
            filter: "blur(50px)",
          }}
        />
        {/* Фиолетовое свечение справа снизу */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 60%)",
            bottom: "-160px",
            right: "-100px",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 text-center">
          {/* Метка */}
          <div className="inline-flex items-center gap-2.5 text-[10px] text-tg-green tracking-[0.2em] mb-4">
            // READY_TO_START
          </div>

          {/* Заголовок */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-5 max-w-3xl mx-auto">
            Пока ты читаешь —{" "}
            <span className="bg-gradient-to-br from-tg-green to-tg-purple bg-clip-text text-transparent">
              кто-то уже забрал твоего лида
            </span>
          </h2>

          {/* Подзаголовок */}
          <p className="text-sm text-tg-text-dim leading-relaxed mb-8 max-w-xl mx-auto">
            Оставь контакт — пришлём ссылку на бота и 5 примеров лидов под твою нишу. Бесплатно.
          </p>

          {/* Форма */}
          <div className="flex flex-wrap gap-2.5 max-w-lg mx-auto mb-5 justify-center">
            <input
              type="text"
              placeholder="@твой_telegram или email"
              className="flex-1 min-w-[200px] px-4 py-3.5 rounded-xl bg-tg-bg-soft/80 border border-tg-green/25 text-white text-sm outline-none placeholder:text-tg-text-muted focus:border-tg-green focus:ring-2 focus:ring-tg-green/15"
            />
            <button
              className="px-6 py-3.5 rounded-xl bg-tg-green text-tg-bg font-bold text-sm cursor-pointer tracking-tight transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "0 0 28px rgba(0,255,148,0.35)" }}
            >
              → Получить лидов
            </button>
          </div>

          {/* Разделитель */}
          <div className="text-[10.5px] text-tg-text-muted tracking-[0.15em] my-4">
            — ИЛИ —
          </div>

          {/* Кнопка Telegram */}
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent text-tg-text border border-white/15 text-sm cursor-pointer transition-colors hover:border-tg-green/55 hover:text-tg-green">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.5 4.5L2.5 11.5L9 14.5M21.5 4.5L19 19L9 14.5M9 14.5L9 19.5L13 15" />
            </svg>
            Открыть в Telegram
          </button>
        </div>
      </section>

      {/* ============ ФУТЕР ============ */}
      <footer className="relative px-6 pb-10 max-w-7xl mx-auto">
        <div className="bg-[#070710] border border-tg-green/8 rounded-2xl p-7">
          {/* Верх футера */}
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 pb-5 border-b border-dashed border-white/8">
            {/* Бренд */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <svg width="26" height="26" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" fill="none" stroke="#00FF94" strokeWidth="1" opacity="0.4" />
                  <circle cx="20" cy="20" r="11" fill="none" stroke="#00FF94" strokeWidth="1" opacity="0.6" />
                  <circle cx="20" cy="20" r="5" fill="none" stroke="#00FF94" strokeWidth="1" opacity="0.8" />
                  <g className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: "20px 20px" }}>
                    <path d="M20 20 L20 3 A17 17 0 0 1 36 23 Z" fill="#00FF94" opacity="0.18" />
                    <line x1="20" y1="20" x2="20" y2="3" stroke="#00FF94" strokeWidth="1.5" />
                  </g>
                  <circle cx="20" cy="20" r="2" fill="#00FF94" />
                </svg>
                <span className="text-base font-bold text-white tracking-tight">TARGETRON</span>
              </div>
              <p className="text-[11px] text-tg-text-muted leading-relaxed max-w-[230px]">
                AI-бот для поиска горящих лидов в Telegram. Сканируем 1000+ чатов 24/7.
              </p>
            </div>

            {/* Колонка Product */}
            <div>
              <div className="text-[10px] text-tg-green tracking-[0.18em] mb-3">// PRODUCT</div>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Возможности</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Как работает</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Цены</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">FAQ</a>
            </div>

            {/* Колонка Company */}
            <div>
              <div className="text-[10px] text-tg-green tracking-[0.18em] mb-3">// COMPANY</div>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">О нас</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Блог</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Контакты</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Поддержка</a>
            </div>

            {/* Колонка Legal */}
            <div>
              <div className="text-[10px] text-tg-green tracking-[0.18em] mb-3">// LEGAL</div>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Условия</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Конфиденциальность</a>
              <a className="block text-[11.5px] text-tg-text-dim mb-2 cursor-pointer hover:text-tg-green">Оферта</a>
            </div>
          </div>

          {/* Низ футера */}
          <div className="flex justify-between items-center pt-4 text-[10px] text-tg-text-muted tracking-wider">
            <span>© 2026 TARGETRON · ALL RIGHTS RESERVED</span>
            <div className="flex gap-1.5">
              <a className="w-7 h-7 border border-white/12 rounded-lg flex items-center justify-center cursor-pointer hover:border-tg-green">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A0A0B8" strokeWidth="2">
                  <path d="M21.5 4.5L2.5 11.5L9 14.5M21.5 4.5L19 19L9 14.5" />
                </svg>
              </a>
              <a className="w-7 h-7 border border-white/12 rounded-lg flex items-center justify-center cursor-pointer hover:border-tg-green">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A0A0B8" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;