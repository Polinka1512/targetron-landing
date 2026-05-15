function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden px-6 py-20 max-w-7xl mx-auto">
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

      <div className="relative z-10">
        {/* Метка секции */}
        <div className="flex items-center gap-2.5 text-[10px] text-tg-green tracking-[0.2em] font-mono mb-4">
          <span className="w-4 h-px bg-tg-green"></span>
          // SECTION_04 · HOW_IT_WORKS
        </div>

        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-5 max-w-2xl">
          Три шага до{" "}
          <span className="text-tg-green">первого лида</span>
        </h2>

        {/* Подзаголовок */}
        <p className="text-sm text-tg-text-dim leading-relaxed mb-8 max-w-2xl">
          Без интеграций, без кода, без обучения нейросетки. Запуск занимает 5 минут.
        </p>

        {/* Сетка шагов */}
        <div className="grid md:grid-cols-3 gap-3.5">
          {/* Шаг 1 */}
          <div className="relative p-5 rounded-xl bg-tg-bg-soft/60 border border-tg-green/18">
            <div className="flex items-center gap-2 text-[10px] text-tg-green tracking-[0.18em] font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tg-green" style={{ boxShadow: "0 0 8px #00FF94" }}></span>
              STEP_01
            </div>
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-green/8 border border-tg-green/30 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8">
                <path d="M4 6h16M4 12h16M4 18h10" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">Задаёшь ключи</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Описываешь, кого ищем:{" "}
              <code className="text-tg-green bg-tg-green/8 px-1.5 py-px rounded text-[10.5px]">«react разработчик»</code>,{" "}
              <code className="text-tg-green bg-tg-green/8 px-1.5 py-px rounded text-[10.5px]">«нужен дизайнер»</code>
            </p>
            <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-tg-green/40 text-sm">→</div>
          </div>

          {/* Шаг 2 */}
          <div className="relative p-5 rounded-xl bg-tg-bg-soft/60 border border-tg-green/18">
            <div className="flex items-center gap-2 text-[10px] text-tg-green tracking-[0.18em] font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tg-green" style={{ boxShadow: "0 0 8px #00FF94" }}></span>
              STEP_02
            </div>
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-green/8 border border-tg-green/30 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
                <circle cx="12" cy="12" r="2" fill="#00FF94" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">Бот сканит 1000+ чатов</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              AI отсекает мусор и спам, оставляет только горячие запросы с релевантностью{" "}
              <code className="text-tg-green bg-tg-green/8 px-1.5 py-px rounded text-[10.5px]">&gt;85%</code>
            </p>
            <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-tg-green/40 text-sm">→</div>
          </div>

          {/* Шаг 3 */}
          <div className="relative p-5 rounded-xl bg-tg-bg-soft/60 border border-tg-green/18">
            <div className="flex items-center gap-2 text-[10px] text-tg-green tracking-[0.18em] font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tg-green" style={{ boxShadow: "0 0 8px #00FF94" }}></span>
              STEP_03
            </div>
            <div className="w-9 h-9 mb-3.5 flex items-center justify-center bg-tg-green/8 border border-tg-green/30 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8">
                <path d="M21 12l-9 9-9-9M12 21V3" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight">Получаешь в личку</h3>
            <p className="text-[11.5px] leading-relaxed text-tg-text-dim">
              Прямая ссылка на сообщение и автора — пишешь первым, пока конкуренты спят
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;