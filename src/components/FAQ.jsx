import { useState } from "react";

function FAQ() {
  // Состояние: какой вопрос открыт (0..5 или null)
  const [openIndex, setOpenIndex] = useState(0);

  // Список вопросов и ответов
  const items = [
    {
      q: "Это законно? Бот же читает чужие сообщения",
      a: "Targeton анализирует только публичные Telegram-чаты — те, куда любой может зайти по ссылке. Это те же сообщения, которые видишь ты сам, когда заходишь в чат. Бот не имеет доступа к личным перепискам и закрытым группам.",
    },
    {
      q: "Сколько стоит и есть ли бесплатный период?",
      a: "Цена будет определена после запуска. Сейчас можно оставить контакт, чтобы получить ранний доступ и индивидуальные условия.",
    },
    {
      q: "Что если нужного чата нет в базе?",
      a: "Напиши нам — мы подключим новые чаты под твою нишу. База постоянно расширяется по запросам клиентов.",
    },
    {
      q: "Как бот понимает, что запрос «горящий»?",
      a: "AI анализирует контекст сообщения: ключевые слова, наличие бюджета, срочности, формулировки «ищу/нужен/готов платить». Каждому сообщению присваивается оценка релевантности от 0 до 100%.",
    },
    {
      q: "Можно экспортировать лидов в CRM?",
      a: "Да, поддерживаем экспорт в Bitrix24, AmoCRM, Notion и Google Sheets через webhooks. Также можно настроить пересылку в нужный Telegram-чат.",
    },
    {
      q: "Чем отличается от обычного парсера?",
      a: "Обычный парсер ловит все упоминания ключевых слов подряд — фильтровать тебе. Targeton понимает контекст и отсекает рекламу, спам и обсуждения «вообще» — присылает только реальные запросы.",
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-20 max-w-7xl mx-auto">
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
          // SECTION_07 · FAQ
        </div>

        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-8 max-w-2xl">
          Частые{" "}
          <span className="bg-gradient-to-br from-tg-green to-tg-purple bg-clip-text text-transparent">
            вопросы
          </span>
        </h2>

        {/* Список вопросов */}
        <div className="flex flex-col gap-2.5 max-w-3xl">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={
                  "p-4 rounded-xl cursor-pointer transition-colors border " +
                  (isOpen
                    ? "border-tg-green/40 bg-tg-green/4"
                    : "border-white/8 bg-tg-bg-soft/60 hover:border-tg-green/30")
                }
              >
                <div className="flex justify-between items-center gap-3">
                  <span className="text-sm text-white font-medium tracking-tight">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-md bg-tg-green/10 border border-tg-green/30 flex items-center justify-center text-tg-green font-bold text-sm">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-dashed border-white/10 text-[12px] leading-relaxed text-tg-text-dim">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;