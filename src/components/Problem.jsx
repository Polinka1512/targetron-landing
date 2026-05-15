function Problem() {
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

      {/* Контент */}
      <div className="relative z-10">
        {/* Метка секции */}
        <div className="flex items-center gap-2.5 text-[10px] text-tg-green tracking-[0.2em] font-mono mb-4">
          <span className="w-4 h-px bg-tg-green"></span>
          // SECTION_03 · PROBLEM
        </div>

        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-5 max-w-2xl">
          Холодные рассылки{" "}
          <span className="bg-gradient-to-br from-tg-green to-tg-purple bg-clip-text text-transparent">
            больше не работают
          </span>
        </h2>

        {/* Подзаголовок */}
        <p className="text-sm text-tg-text-dim leading-relaxed mb-8 max-w-2xl">
          Конверсия cold outreach упала до 1–2%. А твои клиенты в этот момент уже пишут в чатах «ищу подрядчика, бюджет N». Вопрос — кто их найдёт первым.
        </p>

        {/* Сетка проблем */}
        <div className="grid md:grid-cols-2 gap-3.5">
          {/* Карточка 1 */}
          <div className="flex gap-3 p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8">
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-tg-purple/15 border border-tg-purple/40 flex items-center justify-center text-tg-purple-soft font-bold text-sm">
              ✕
            </div>
            <div className="text-[12.5px] leading-relaxed text-tg-text">
              <b className="text-white font-medium">Холодные базы</b>{" "}
              <span className="text-tg-text-dim">выгорают за месяц. Спам-фильтры режут открываемость</span>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="flex gap-3 p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8">
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-tg-purple/15 border border-tg-purple/40 flex items-center justify-center text-tg-purple-soft font-bold text-sm">
              ✕
            </div>
            <div className="text-[12.5px] leading-relaxed text-tg-text">
              <b className="text-white font-medium">Мониторить чаты вручную</b>{" "}
              <span className="text-tg-text-dim">= сидеть 12 часов в Telegram и листать ленту</span>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="flex gap-3 p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8">
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-tg-purple/15 border border-tg-purple/40 flex items-center justify-center text-tg-purple-soft font-bold text-sm">
              ✕
            </div>
            <div className="text-[12.5px] leading-relaxed text-tg-text">
              <b className="text-white font-medium">Лидген-агентства</b>{" "}
              <span className="text-tg-text-dim">берут 50–100к в месяц и присылают мусор из общих баз</span>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="flex gap-3 p-5 rounded-xl bg-tg-bg-soft/60 border border-white/8">
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-tg-purple/15 border border-tg-purple/40 flex items-center justify-center text-tg-purple-soft font-bold text-sm">
              ✕
            </div>
            <div className="text-[12.5px] leading-relaxed text-tg-text">
              <b className="text-white font-medium">Парсеры без AI</b>{" "}
              <span className="text-tg-text-dim">ловят все упоминания подряд — фильтровать всё равно тебе</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;