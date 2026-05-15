function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 max-w-7xl mx-auto">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,255,148,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,148,0.05) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at 75% 35%, black 0%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at 75% 35%, black 0%, transparent 75%)" }} />
      <div className="absolute pointer-events-none" style={{ width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,255,148,0.16) 0%, transparent 60%)", top: "-140px", right: "-100px", filter: "blur(50px)" }} />
      <div className="absolute pointer-events-none" style={{ width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 60%)", bottom: "-120px", left: "-80px", filter: "blur(50px)" }} />
      <div className="relative z-10 grid md:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-tg-green/25 bg-tg-green/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-tg-green animate-pulse" style={{ boxShadow: "0 0 10px #00FF94" }}></span>
            <span className="text-[10.5px] text-tg-green tracking-[0.18em] font-mono">SCANNING 1000+ CHATS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
            Перехватываем<br />
            <span className="bg-gradient-to-br from-tg-green to-tg-purple bg-clip-text text-transparent">горящие лиды</span><br />
            из <span className="text-tg-green">1000+</span> tg-чатов
          </h1>
          <p className="text-tg-text-dim leading-relaxed mb-9 max-w-[480px] text-sm">
            AI-бот <span className="text-tg-green">Targeton</span> мониторит тысячи Telegram-чатов в реальном времени, ловит запросы под твой продукт и шлёт их прямо в личку — без скрапинга вручную и холодных рассылок.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-10">
            <a href="https://t.me/polly_hv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-tg-green text-tg-bg font-bold text-sm tracking-tight cursor-pointer transition-transform hover:-translate-y-0.5" style={{ boxShadow: "0 0 32px rgba(0,255,148,0.35)" }}>→ Открыть в Telegram</a>
            <a href="#cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent text-tg-text border border-white/15 font-medium text-sm cursor-pointer transition-colors hover:border-tg-green/55 hover:text-tg-green">Оставить контакт</a>
          </div>
          <div className="flex gap-9 pt-7 border-t border-dashed border-white/10">
            <div>
              <div className="text-2xl font-bold text-tg-green leading-none tracking-tight font-mono">1000+</div>
              <div className="text-[10px] text-tg-text-muted mt-1.5 tracking-widest uppercase">чатов</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-tg-green leading-none tracking-tight font-mono">24/7</div>
              <div className="text-[10px] text-tg-text-muted mt-1.5 tracking-widest uppercase">онлайн</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-tg-green leading-none tracking-tight font-mono">&lt;30s</div>
              <div className="text-[10px] text-tg-text-muted mt-1.5 tracking-widest uppercase">отклик</div>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl border border-tg-green/25 p-5 overflow-hidden backdrop-blur-md" style={{ background: "rgba(15,15,25,0.88)", boxShadow: "0 0 50px rgba(0,255,148,0.08)" }}>
          <div className="absolute left-0 right-0 h-[1.5px] pointer-events-none animate-[scan_3s_linear_infinite]" style={{ background: "linear-gradient(90deg, transparent, #00FF94, transparent)", opacity: 0.5 }}></div>
          <div className="flex justify-between items-center pb-3.5 mb-1.5 border-b border-tg-green/15">
            <span className="text-[10.5px] text-tg-green tracking-[0.18em] font-mono">// LIVE_FEED.tgt</span>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tg-green/40"></span>
              <span className="w-2 h-2 rounded-full bg-tg-purple/50"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
            </div>
          </div>
          <div className="py-3 border-b border-dashed border-white/10">
            <div className="flex justify-between items-center text-[10px] text-tg-text-muted tracking-wide mb-1.5">
              <span className="text-tg-text-dim font-mono">@startupchat · 12:04</span>
              <span className="px-1.5 py-0.5 rounded text-[9.5px] tracking-widest text-tg-green bg-tg-green/12 border border-tg-green/30 font-medium font-mono">MATCH 97%</span>
            </div>
            <div className="text-[12.5px] leading-snug text-tg-text">«Ищу разработчика для MVP на React, бюджет до 200к...»</div>
          </div>
          <div className="py-3 border-b border-dashed border-white/10">
            <div className="flex justify-between items-center text-[10px] text-tg-text-muted tracking-wide mb-1.5">
              <span className="text-tg-text-dim font-mono">@marketing_pro · 12:01</span>
              <span className="px-1.5 py-0.5 rounded text-[9.5px] tracking-widest text-tg-purple-soft bg-tg-purple/15 border border-tg-purple/35 font-medium font-mono">MATCH 91%</span>
            </div>
            <div className="text-[12.5px] leading-snug text-tg-text">«Кто настраивает таргет под B2B SaaS? Срочно нужен подрядчик»</div>
          </div>
          <div className="py-3 border-b border-dashed border-white/10">
            <div className="flex justify-between items-center text-[10px] text-tg-text-muted tracking-wide mb-1.5">
              <span className="text-tg-text-dim font-mono">@freelance_ru · 11:58</span>
              <span className="px-1.5 py-0.5 rounded text-[9.5px] tracking-widest text-tg-green bg-tg-green/12 border border-tg-green/30 font-medium font-mono">MATCH 88%</span>
            </div>
            <div className="text-[12.5px] leading-snug text-tg-text">«Подскажите хорошего дизайнера лендингов, готов платить»</div>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-center text-[10px] text-tg-text-muted tracking-wide mb-1.5">
              <span className="text-tg-text-dim font-mono">@bizclub · 11:55</span>
              <span className="px-1.5 py-0.5 rounded text-[9.5px] tracking-widest text-tg-purple-soft bg-tg-purple/15 border border-tg-purple/35 font-medium font-mono">MATCH 85%</span>
            </div>
            <div className="text-[12.5px] leading-snug text-tg-text">«Нужен CRM-специалист, бюджет обсудим — пишите в лс»</div>
          </div>
          <div className="mt-2.5 pt-3 border-t border-dashed border-white/10 flex justify-between items-center text-[10px] text-tg-text-muted tracking-wider font-mono">
            <span>3,847 leads captured today</span>
            <span className="flex items-center gap-1.5 text-tg-green">
              <span className="w-1.5 h-1.5 rounded-full bg-tg-green animate-pulse" style={{ boxShadow: "0 0 8px #00FF94" }}></span>
              LIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;