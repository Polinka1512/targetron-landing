function Case() {
  return (
    <section id="case" className="relative overflow-hidden px-6 py-20 max-w-7xl mx-auto">
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
          // SECTION_06 · CASE
        </div>

        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-5 max-w-2xl">
          Как это <span className="text-tg-green">в реальности</span>
        </h2>

        {/* Подзаголовок */}
        <p className="text-sm text-tg-text-dim leading-relaxed mb-8 max-w-2xl">
          Пример того, как может выглядеть уведомление о горящем лиде, перехваченное ботом.
        </p>

        {/* Двухколоночная сетка */}
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 items-start">

          {/* ЛЕВАЯ КОЛОНКА — Telegram-сообщение */}
          <div
            className="rounded-2xl p-5 border border-tg-green/15"
            style={{
              background: "#17212B",
              boxShadow: "0 0 40px rgba(0,255,148,0.05)",
              fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif",
            }}
          >
            {/* Шапка с аватаром */}
            <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-white/6">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-tg-bg text-[13px]"
                style={{ background: "linear-gradient(135deg, #00FF94, #7C3AED)" }}
              >
                T
              </div>
              <div>
                <div className="text-sm text-white font-semibold">Targeton</div>
                <div className="text-[11px] text-[#7A8A99]">@Targeton_bot</div>
              </div>
            </div>

            {/* Метаданные лида */}
            <div
              className="flex justify-between text-[10px] tracking-[0.1em] mb-1.5"
              style={{ fontFamily: '"JetBrains Mono", monospace', color: "#00FF94" }}
            >
              <span>NEW LEAD · @startupchat</span>
              <span style={{ color: "#A78BFA" }}>MATCH 94%</span>
            </div>

            {/* Само сообщение */}
            <div
              className="p-3 rounded-[10px] rounded-bl-[2px] text-[13px] leading-snug text-white mb-2 max-w-[90%]"
              style={{ background: "#2B5278" }}
            >
              Ищу React-разработчика на доработку MVP. Нужно подключить Stripe и сделать дашборд. Бюджет 150–200к, готов созвониться завтра.
              <div
                className="text-[9.5px] mt-1 text-right"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: '"JetBrains Mono", monospace' }}
              >
                15 минут назад · @mikhail_founder
              </div>
            </div>

            {/* Ответное сообщение бота */}
            <div
              className="ml-auto p-3 rounded-[10px] rounded-br-[2px] text-[13px] leading-snug text-tg-text max-w-[95%] border border-tg-green/30"
              style={{ background: "rgba(0,255,148,0.12)" }}
            >
              → Открыть в Telegram
              <div
                className="text-[11px] mt-1.5 underline text-tg-green"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                t.me/startupchat/4729
              </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА — Метрики */}
          <div className="flex flex-col gap-3">
            {/* Метрика 1 — время до ответа */}
            <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-tg-green/20">
              <div className="text-[10px] text-tg-text-muted tracking-widest mb-2 font-mono">
                // TIME_TO_REPLY
              </div>
              <div className="text-3xl font-bold text-tg-green leading-none tracking-tight font-mono mb-1.5">
                8 мин
              </div>
              <div className="text-[11.5px] leading-relaxed text-tg-text-dim">
                До первого ответа клиенту — пока остальные ещё не увидели сообщение в чате
              </div>
            </div>

            {/* Метрика 2 — сумма сделки (фиолетовая) */}
            <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-tg-green/20">
              <div className="text-[10px] text-tg-text-muted tracking-widest mb-2 font-mono">
                // DEAL_CLOSED
              </div>
              <div className="text-3xl font-bold text-tg-purple-soft leading-none tracking-tight mb-1.5">
                180k ₽
              </div>
              <div className="text-[11.5px] leading-relaxed text-tg-text-dim">
                Возможная сумма закрытого контракта через несколько дней после первого сообщения
              </div>
            </div>

            {/* Метрика 3 — ROI */}
            <div className="p-5 rounded-xl bg-tg-bg-soft/60 border border-tg-green/20">
              <div className="text-[10px] text-tg-text-muted tracking-widest mb-2 font-mono">
                // ROI_EXAMPLE
              </div>
              <div className="text-3xl font-bold text-tg-green leading-none tracking-tight font-mono mb-1.5">
                ×60
              </div>
              <div className="text-[11.5px] leading-relaxed text-tg-text-dim">
                Подписка на Targeton окупается с одного закрытого лида
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Case;