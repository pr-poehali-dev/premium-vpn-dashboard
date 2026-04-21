/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

type Page = 'subscription' | 'keys' | 'devices' | 'payments' | 'profile' | 'support' | 'referral' | 'promo';

function copy(text: string, setCopied: (v: string) => void, id: string) {
  navigator.clipboard.writeText(text).catch(() => {});
  setCopied(id);
  setTimeout(() => setCopied(''), 1800);
}

/* ═══════════════ APPLE-STYLE NAV ═══════════════ */
function AppleNav({ onEnter, cabinet = false }: { onEnter?: () => void; cabinet?: boolean }) {
  const links = ['Обзор', 'Тарифы', 'Приложения', 'Поддержка', 'Безопасность'];
  return (
    <nav className="apple-nav fixed top-0 left-0 right-0 z-50 hairline-b">
      <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between h-[44px]">
        <button className="press-effect">
          <Icon name="Shield" size={16} className="text-[hsl(var(--apple-text))]" />
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l} className="text-[12px] text-[hsl(var(--apple-text))] hover:opacity-70 transition-opacity font-normal tracking-apple">
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <button className="press-effect">
            <Icon name="Search" size={14} className="text-[hsl(var(--apple-text))]" />
          </button>
          {onEnter && !cabinet && (
            <button onClick={onEnter} className="press-effect text-[12px] text-[hsl(var(--apple-text))] hover:opacity-70 tracking-apple">
              Войти
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════ HOME (APPLE LANDING) ═══════════════ */
function HomePage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <AppleNav onEnter={onEnter} />

      {/* HERO — Apple big headline */}
      <section className="pt-[88px] pb-12 text-center px-6 bg-white">
        <p className="animate-fade-in stagger-1 text-[14px] text-[hsl(var(--apple-link))] font-normal mb-2 tracking-apple">
          SecureVPN Premium
        </p>
        <h1 className="animate-fade-in stagger-2 font-display text-[56px] md:text-[96px] leading-[1.05] text-[hsl(var(--apple-text))] tracking-apple-tight">
          Интернет.
          <br />
          <span className="gradient-apple">Без границ.</span>
        </h1>
        <p className="animate-fade-in stagger-3 text-[19px] md:text-[28px] mt-5 text-[hsl(var(--apple-text))] font-normal max-w-2xl mx-auto tracking-apple leading-[1.2]">
          Два ключа. Пять устройств. Одна подписка — всё под защитой.
        </p>
        <div className="animate-fade-in stagger-4 mt-7 flex items-center justify-center gap-6 flex-wrap">
          <button onClick={onEnter} className="btn-apple-primary press-effect text-[14px] px-5 py-2.5 md:px-6 md:py-3">
            Открыть кабинет
          </button>
          <button onClick={onEnter} className="btn-apple-ghost press-effect text-[14px] md:text-[17px] tracking-apple flex items-center gap-1">
            Узнать больше
            <Icon name="ChevronRight" size={14} />
          </button>
        </div>

        {/* Visual hero */}
        <div className="animate-fade-in stagger-5 mt-16 relative max-w-[980px] mx-auto">
          <div className="aspect-[16/9] rounded-[32px] bg-gradient-to-br from-[#f5f5f7] via-white to-[#e8e8ed] overflow-hidden relative shadow-apple-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-float w-32 h-32 md:w-56 md:h-56 rounded-[40%_60%_55%_45%_/_55%_45%_60%_40%] bg-gradient-to-br from-[#0071e3] to-[#00c6ff] opacity-90" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name="Shield" size={80} className="text-white relative z-10 drop-shadow-2xl" />
            </div>
            <div className="absolute top-6 left-6 flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
          </div>
        </div>
      </section>

      {/* BENTO TILES — Apple-style dual cards */}
      <section className="bg-[hsl(var(--apple-bg-alt))] py-3">
        <div className="max-w-[980px] mx-auto px-3 grid md:grid-cols-2 gap-3">
          {/* Tile 1 */}
          <div className="bg-white rounded-[28px] overflow-hidden text-center pt-14 pb-10 px-6 card-hover">
            <p className="text-[12px] text-[hsl(var(--apple-link))] font-normal mb-1 tracking-apple">Premium</p>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] text-[hsl(var(--apple-text))] tracking-apple-tight">
              2 ключа<br />
              <span className="text-[hsl(var(--apple-text-secondary))]">в одной подписке</span>
            </h2>
            <p className="mt-3 text-[15px] text-[hsl(var(--apple-text-secondary))] max-w-xs mx-auto tracking-apple">
              Обычный и White List — для умной экономии трафика.
            </p>
            <button onClick={onEnter} className="btn-apple-ghost text-[15px] mt-5 inline-flex items-center gap-1 tracking-apple">
              Подробнее <Icon name="ChevronRight" size={13} />
            </button>
          </div>

          {/* Tile 2 — dark */}
          <div className="bg-[#1d1d1f] rounded-[28px] overflow-hidden text-center pt-14 pb-10 px-6 card-hover">
            <p className="text-[12px] text-[#66d4ff] font-normal mb-1 tracking-apple">Privacy. That's it.</p>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] text-white tracking-apple-tight">
              Скорость<br />
              <span className="gradient-blue-apple">до 1 Гбит/с</span>
            </h2>
            <p className="mt-3 text-[15px] text-[#a1a1a6] max-w-xs mx-auto tracking-apple">
              200+ серверов в 40 странах. Без лимитов и логов.
            </p>
            <button onClick={onEnter} className="text-[#2997ff] hover:underline text-[15px] mt-5 inline-flex items-center gap-1 tracking-apple font-normal">
              Посмотреть <Icon name="ChevronRight" size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE ROW */}
      <section className="py-24 px-6 text-center bg-white">
        <h3 className="font-display text-[32px] md:text-[56px] leading-[1.05] text-[hsl(var(--apple-text))] tracking-apple-tight max-w-3xl mx-auto">
          Надёжно как <span className="gradient-blue-apple">Apple Silicon</span>.
        </h3>
        <div className="mt-14 max-w-[980px] mx-auto grid md:grid-cols-3 gap-px bg-[hsl(var(--apple-hairline))] rounded-[24px] overflow-hidden">
          {[
            { icon: 'Lock', title: 'AES-256', sub: 'Военный стандарт шифрования' },
            { icon: 'Zap', title: '< 10 мс', sub: 'Задержка до ближайшего сервера' },
            { icon: 'Globe', title: '40 стран', sub: 'На всех континентах' },
          ].map(f => (
            <div key={f.title} className="bg-white p-10 flex flex-col items-center">
              <Icon name={f.icon as any} size={28} className="text-[hsl(var(--apple-link))] mb-4" />
              <div className="font-display text-[32px] tracking-apple-tight text-[hsl(var(--apple-text))]">{f.title}</div>
              <div className="text-[14px] text-[hsl(var(--apple-text-secondary))] mt-1 tracking-apple">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA — Apple style */}
      <section className="bg-[hsl(var(--apple-bg-alt))] py-20 px-6 text-center">
        <h3 className="font-display text-[32px] md:text-[48px] text-[hsl(var(--apple-text))] tracking-apple-tight max-w-2xl mx-auto leading-[1.1]">
          Всё готово. <br className="md:hidden" />Осталось только подключиться.
        </h3>
        <button onClick={onEnter} className="btn-apple-primary press-effect mt-8 text-[15px] px-7 py-3">
          Войти в кабинет
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--apple-bg-alt))] hairline-t text-[12px] text-[hsl(var(--apple-text-secondary))] py-6 px-6 text-center tracking-apple">
        © 2025 SecureVPN. Все права защищены.
      </footer>
    </div>
  );
}

/* ═══════════════ AUTH ═══════════════ */
function AuthPage({ onAuth }: { onAuth: () => void }) {
  const [step, setStep] = useState<'select' | 'email'>('select');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] animate-scale-in">
        <div className="text-center mb-10">
          <Icon name="Shield" size={44} className="text-[hsl(var(--apple-text))] mx-auto mb-6" />
          <h1 className="font-display text-[40px] leading-[1.05] text-[hsl(var(--apple-text))] tracking-apple-tight">
            Вход
          </h1>
          <p className="text-[17px] text-[hsl(var(--apple-text-secondary))] mt-2 tracking-apple">
            Управляйте подпиской и ключами
          </p>
        </div>

        {step === 'select' ? (
          <div className="space-y-2.5">
            <button
              onClick={() => setStep('email')}
              className="press-effect w-full flex items-center justify-between bg-white hairline border rounded-[14px] px-5 py-4 text-[15px] text-[hsl(var(--apple-text))] tracking-apple hover:bg-[hsl(var(--apple-bg-alt))] transition-colors"
            >
              <span className="flex items-center gap-3">
                <Icon name="Mail" size={18} />
                Продолжить с Email
              </span>
              <Icon name="ChevronRight" size={14} className="text-[hsl(var(--apple-text-tertiary))]" />
            </button>
            <button className="press-effect w-full flex items-center justify-between bg-[#1d1d1f] rounded-[14px] px-5 py-4 text-[15px] text-white tracking-apple hover:bg-black transition-colors">
              <span className="flex items-center gap-3">
                <Icon name="Send" size={18} />
                Продолжить с Telegram
              </span>
              <Icon name="ChevronRight" size={14} className="text-white/60" />
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <button onClick={() => setStep('select')} className="btn-apple-ghost flex items-center gap-1 text-[14px] -mt-2 mb-1">
              <Icon name="ChevronLeft" size={14} />
              Назад
            </button>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@icloud.com"
              className="w-full bg-white hairline border rounded-[14px] px-5 py-4 text-[15px] outline-none focus:border-[hsl(var(--apple-link))] focus:ring-2 focus:ring-[hsl(var(--apple-link))]/20 transition-all tracking-apple"
            />
            <button
              onClick={onAuth}
              className="btn-apple-primary press-effect w-full py-3.5 text-[15px]"
            >
              Получить код
            </button>
          </div>
        )}

        <p className="text-center text-[12px] text-[hsl(var(--apple-text-tertiary))] mt-10 tracking-apple leading-relaxed">
          Продолжая, вы соглашаетесь с <button className="text-[hsl(var(--apple-link))] hover:underline">условиями</button> и <button className="text-[hsl(var(--apple-link))] hover:underline">политикой конфиденциальности</button>.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════ PAGES — Apple-style cards ═══════════════ */

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] text-[hsl(var(--apple-text))] tracking-apple-tight">{title}</h2>
      {sub && <p className="text-[17px] text-[hsl(var(--apple-text-secondary))] mt-2 tracking-apple">{sub}</p>}
    </div>
  );
}

function AppleCard({ children, className = '' }: { children: any; className?: string }) {
  return (
    <div className={`bg-white hairline border rounded-[22px] ${className}`}>
      {children}
    </div>
  );
}

function SubscriptionPage({ copied, setCopied }: { copied: string; setCopied: (v: string) => void }) {
  const normalKey = 'vless://abc123...@server1.securevpn.pro:443?type=ws&security=tls';
  const wlKey = 'vless://wl456...@server2.securevpn.pro:443?type=ws&security=tls';
  const trafficUsed = 18.4;
  const trafficTotal = 50;
  const pct = (trafficUsed / trafficTotal) * 100;

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Подписка" sub="Premium активна до 21 июля 2025" />

      {/* Hero status card — Apple style */}
      <div className="bg-gradient-to-br from-[#1d1d1f] to-[#2c2c2e] rounded-[28px] p-8 text-white mb-10">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse-soft" />
          <span className="text-[12px] font-normal text-[#a1a1a6] uppercase tracking-[0.08em]">Активна</span>
        </div>
        <div className="font-display text-[40px] md:text-[64px] leading-[1] tracking-apple-tight">
          Premium.
        </div>
        <div className="font-display text-[40px] md:text-[64px] leading-[1] tracking-apple-tight text-[#a1a1a6]">
          До 21 июля.
        </div>
        <div className="flex items-center gap-6 mt-8 flex-wrap">
          <div>
            <div className="text-[11px] text-[#a1a1a6] uppercase tracking-[0.08em] mb-1">Устройств</div>
            <div className="font-display text-[24px] tracking-apple-tight">4 / 5</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <div className="text-[11px] text-[#a1a1a6] uppercase tracking-[0.08em] mb-1">Ключей</div>
            <div className="font-display text-[24px] tracking-apple-tight">2</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <div className="text-[11px] text-[#a1a1a6] uppercase tracking-[0.08em] mb-1">Осталось</div>
            <div className="font-display text-[24px] tracking-apple-tight">87 дней</div>
          </div>
        </div>
        <button className="btn-apple-primary press-effect mt-7 px-5 py-2.5 text-[13px]">
          Продлить подписку
        </button>
      </div>

      {/* Keys — 2 cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <AppleCard className="p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[11px] text-[hsl(var(--apple-link))] uppercase tracking-[0.08em] mb-1">Ключ · 1</p>
              <h3 className="font-display text-[22px] text-[hsl(var(--apple-text))] tracking-apple-tight">Обычный</h3>
              <p className="text-[13px] text-[hsl(var(--apple-text-secondary))] tracking-apple">Безлимитный трафик</p>
            </div>
            <Icon name="Key" size={20} className="text-[hsl(var(--apple-text-tertiary))]" />
          </div>
          <div className="bg-[hsl(var(--apple-bg-alt))] rounded-[12px] px-4 py-3 font-mono text-[11px] text-[hsl(var(--apple-text-secondary))] truncate mb-4">
            {normalKey.slice(0, 40)}...
          </div>
          <div className="flex gap-2">
            <button onClick={() => copy(normalKey, setCopied, 'n')} className="press-effect flex-1 bg-[hsl(var(--apple-bg-alt))] rounded-full py-2.5 text-[13px] font-normal text-[hsl(var(--apple-text))] tracking-apple hover:bg-[#e8e8ed] transition-colors">
              {copied === 'n' ? 'Скопировано' : 'Копировать'}
            </button>
            <button className="btn-apple-primary press-effect flex-1 py-2.5 text-[13px]">Подключить</button>
          </div>
        </AppleCard>

        <AppleCard className="p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[11px] text-[#bf5af2] uppercase tracking-[0.08em] mb-1">Ключ · 2</p>
              <h3 className="font-display text-[22px] text-[hsl(var(--apple-text))] tracking-apple-tight">White List</h3>
              <p className="text-[13px] text-[hsl(var(--apple-text-secondary))] tracking-apple">Только заблокированные сайты</p>
            </div>
            <Icon name="Sparkles" size={20} className="text-[#bf5af2]" />
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[12px] text-[hsl(var(--apple-text-secondary))] tracking-apple">Трафик</span>
              <span className="text-[12px] font-normal text-[hsl(var(--apple-text))] tracking-apple">{trafficUsed} / {trafficTotal} ГБ</span>
            </div>
            <div className="h-1 bg-[hsl(var(--apple-bg-alt))] rounded-full overflow-hidden">
              <div className="h-full bg-[hsl(var(--apple-link))] rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div className="bg-[hsl(var(--apple-bg-alt))] rounded-[12px] px-4 py-3 font-mono text-[11px] text-[hsl(var(--apple-text-secondary))] truncate mb-4">
            {wlKey.slice(0, 40)}...
          </div>
          <div className="flex gap-2">
            <button onClick={() => copy(wlKey, setCopied, 'w')} className="press-effect flex-1 bg-[hsl(var(--apple-bg-alt))] rounded-full py-2.5 text-[13px] font-normal text-[hsl(var(--apple-text))] tracking-apple hover:bg-[#e8e8ed] transition-colors">
              {copied === 'w' ? 'Скопировано' : 'Копировать'}
            </button>
            <button className="btn-apple-primary press-effect flex-1 py-2.5 text-[13px]">Подключить</button>
          </div>
        </AppleCard>
      </div>
    </div>
  );
}

function KeysPage({ copied, setCopied }: { copied: string; setCopied: (v: string) => void }) {
  const keys = [
    { id: 'n', type: 'Обычный', desc: 'Весь трафик через VPN. Безлимитный.', icon: 'Key', color: 'hsl(var(--apple-link))', value: 'vless://abc123def456ghi789@server1.securevpn.pro:443?type=ws&security=tls&host=cdn.securevpn.pro#Normal', server: 'server1.securevpn.pro', badge: 'Без лимита' },
    { id: 'w', type: 'White List', desc: 'Только заблокированные сайты.', icon: 'Sparkles', color: '#bf5af2', value: 'vless://wl456xyz789abc123@server2.securevpn.pro:443?type=ws&security=tls&host=cdn.securevpn.pro#WhiteList', server: 'server2.securevpn.pro', badge: '50 ГБ' },
  ];

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Мои ключи" sub="Два ключа в одной подписке" />
      <div className="space-y-4">
        {keys.map((k, i) => (
          <AppleCard key={k.id} className={`p-6 animate-fade-in stagger-${i + 1}`}>
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ background: `${k.color}15` }}>
                  <Icon name={k.icon as any} size={22} style={{ color: k.color }} />
                </div>
                <div>
                  <h3 className="font-display text-[22px] tracking-apple-tight text-[hsl(var(--apple-text))]">{k.type}</h3>
                  <p className="text-[13px] text-[hsl(var(--apple-text-secondary))] tracking-apple mt-0.5">{k.desc}</p>
                </div>
              </div>
              <span className="text-[11px] font-normal px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: `${k.color}15`, color: k.color }}>
                {k.badge}
              </span>
            </div>

            <div className="space-y-2 mb-5 hairline-t pt-4">
              {[['Сервер', k.server], ['Протокол', 'VLESS / WS / TLS'], ['Шифрование', 'AES-256-GCM']].map(([l, v]) => (
                <div key={l} className="flex items-center justify-between text-[13px] tracking-apple">
                  <span className="text-[hsl(var(--apple-text-secondary))]">{l}</span>
                  <span className="text-[hsl(var(--apple-text))]">{v}</span>
                </div>
              ))}
            </div>

            <div className="bg-[hsl(var(--apple-bg-alt))] rounded-[12px] px-4 py-3 font-mono text-[11px] text-[hsl(var(--apple-text-secondary))] break-all mb-4 leading-relaxed">
              {k.value}
            </div>

            <div className="flex gap-2">
              <button onClick={() => copy(k.value, setCopied, k.id)} className="press-effect flex-1 bg-[hsl(var(--apple-bg-alt))] rounded-full py-2.5 text-[13px] text-[hsl(var(--apple-text))] tracking-apple hover:bg-[#e8e8ed] transition-colors flex items-center justify-center gap-2">
                <Icon name={copied === k.id ? 'Check' : 'Copy'} size={13} />
                {copied === k.id ? 'Скопировано' : 'Копировать'}
              </button>
              <button className="btn-apple-primary press-effect flex-1 py-2.5 text-[13px] flex items-center justify-center gap-2">
                <Icon name="ExternalLink" size={13} />
                Подключить
              </button>
            </div>
          </AppleCard>
        ))}
      </div>
    </div>
  );
}

function DevicesPage() {
  const [devices, setDevices] = useState([
    { id: 1, name: 'iPhone 15 Pro', platform: 'iOS 17.4', lastSeen: 'Сейчас', icon: 'Smartphone', active: true },
    { id: 2, name: 'MacBook Pro', platform: 'macOS Sonoma', lastSeen: '2 часа назад', icon: 'Laptop', active: false },
    { id: 3, name: 'iPad Air', platform: 'iPadOS 17', lastSeen: 'Вчера', icon: 'Tablet', active: false },
    { id: 4, name: 'Samsung S24', platform: 'Android 14', lastSeen: '3 дня назад', icon: 'Smartphone', active: false },
  ]);
  const remove = (id: number) => setDevices(p => p.filter(d => d.id !== id));

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Устройства" sub={`${devices.length} из 5 активно`} />

      <AppleCard className="overflow-hidden mb-4">
        {devices.map((d, i) => (
          <div key={d.id} className={`flex items-center gap-4 p-5 ${i < devices.length - 1 ? 'hairline-b' : ''}`}>
            <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 ${d.active ? 'bg-[hsl(var(--apple-link))]/10' : 'bg-[hsl(var(--apple-bg-alt))]'}`}>
              <Icon name={d.icon as any} size={18} className={d.active ? 'text-[hsl(var(--apple-link))]' : 'text-[hsl(var(--apple-text-tertiary))]'} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-[15px] text-[hsl(var(--apple-text))] tracking-apple flex items-center gap-2">
                {d.name}
                {d.active && <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse-soft" />}
              </div>
              <div className="text-[12px] text-[hsl(var(--apple-text-secondary))] tracking-apple">{d.platform} · {d.lastSeen}</div>
            </div>
            <button onClick={() => remove(d.id)} className="press-effect text-[13px] text-[#ff3b30] hover:opacity-70 tracking-apple">
              Отключить
            </button>
          </div>
        ))}
      </AppleCard>

      <button className="w-full bg-white hairline border rounded-[14px] py-4 text-[14px] text-[hsl(var(--apple-link))] hover:bg-[hsl(var(--apple-bg-alt))] transition-colors flex items-center justify-center gap-2 press-effect tracking-apple">
        <Icon name="Plus" size={14} />
        Добавить устройство
      </button>
    </div>
  );
}

function PaymentsPage() {
  const plans = [
    { t: '1 месяц', p: '390 ₽', pop: false },
    { t: '3 месяца', p: '990 ₽', pop: true, save: 'Скидка 15%' },
    { t: '1 год', p: '2 990 ₽', pop: false, save: 'Скидка 36%' },
  ];
  const history = [
    { t: 'Premium · 3 месяца', d: '15 апр 2025', p: '990 ₽', icon: 'Shield' },
    { t: 'White List · +20 ГБ', d: '02 апр 2025', p: '199 ₽', icon: 'Zap' },
    { t: 'Premium · 1 месяц', d: '10 янв 2025', p: '390 ₽', icon: 'Shield' },
  ];

  return (
    <div className="animate-fade-in space-y-10">
      <div>
        <SectionTitle title="Тарифы" sub="Выберите план и получите доступ за минуту" />
        <div className="grid md:grid-cols-3 gap-3">
          {plans.map((plan, i) => (
            <button
              key={plan.t}
              className={`press-effect rounded-[22px] p-6 text-left transition-all animate-fade-in stagger-${i + 1} ${plan.pop ? 'bg-[#1d1d1f] text-white' : 'bg-white hairline border text-[hsl(var(--apple-text))] card-hover'}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`text-[13px] tracking-apple ${plan.pop ? 'text-[#a1a1a6]' : 'text-[hsl(var(--apple-text-secondary))]'}`}>{plan.t}</div>
                {plan.pop && <span className="text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 bg-[#2997ff] text-white rounded-full">Хит</span>}
              </div>
              <div className="font-display text-[40px] leading-[1] tracking-apple-tight">{plan.p}</div>
              {plan.save && <div className={`text-[12px] mt-2 tracking-apple ${plan.pop ? 'text-[#30d158]' : 'text-[hsl(var(--apple-success))]'}`}>{plan.save}</div>}
            </button>
          ))}
        </div>
        <button className="btn-apple-primary press-effect mt-5 px-6 py-3 text-[14px]">
          Оплатить картой
        </button>
      </div>

      <div>
        <SectionTitle title="Докупить трафик" sub="Для White List ключа" />
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[{ gb: '10', p: '99 ₽' }, { gb: '50', p: '299 ₽', best: true }, { gb: '100', p: '499 ₽' }].map((t: any) => (
            <button key={t.gb} className={`press-effect p-5 rounded-[18px] text-left transition-all ${t.best ? 'bg-[hsl(var(--apple-link))]/10 ring-1 ring-[hsl(var(--apple-link))]' : 'bg-white hairline border'}`}>
              <div className="font-display text-[32px] tracking-apple-tight text-[hsl(var(--apple-text))]">{t.gb}<span className="text-[16px] text-[hsl(var(--apple-text-secondary))]"> ГБ</span></div>
              <div className="text-[13px] text-[hsl(var(--apple-text-secondary))] tracking-apple mt-1">{t.p}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle title="История" />
        <AppleCard className="overflow-hidden">
          {history.map((tx, i) => (
            <div key={i} className={`flex items-center gap-4 p-5 ${i < history.length - 1 ? 'hairline-b' : ''}`}>
              <div className="w-9 h-9 rounded-[12px] bg-[hsl(var(--apple-bg-alt))] flex items-center justify-center flex-shrink-0">
                <Icon name={tx.icon as any} size={15} className="text-[hsl(var(--apple-text-secondary))]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-[14px] text-[hsl(var(--apple-text))] tracking-apple">{tx.t}</div>
                <div className="text-[12px] text-[hsl(var(--apple-text-secondary))] tracking-apple">{tx.d}</div>
              </div>
              <div className="font-display text-[17px] tracking-apple-tight text-[hsl(var(--apple-text))]">{tx.p}</div>
            </div>
          ))}
        </AppleCard>
      </div>
    </div>
  );
}

function ProfilePage({ onLogout }: { onLogout: () => void }) {
  const menu = [
    { icon: 'Bell', label: 'Уведомления' },
    { icon: 'Lock', label: 'Безопасность' },
    { icon: 'Globe', label: 'Язык и регион' },
    { icon: 'CircleHelp', label: 'О сервисе' },
  ];

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Профиль" />

      <AppleCard className="p-8 mb-4 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0071e3] to-[#00c6ff] flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-display text-[32px] tracking-apple-tight">А</span>
        </div>
        <div className="font-display text-[28px] tracking-apple-tight text-[hsl(var(--apple-text))]">Алексей</div>
        <div className="text-[15px] text-[hsl(var(--apple-text-secondary))] tracking-apple">alex@icloud.com</div>
        <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full bg-[hsl(var(--apple-link))]/10 text-[hsl(var(--apple-link))] text-[12px] tracking-apple">
          <Icon name="Check" size={12} />
          Premium до 21 июля
        </div>
      </AppleCard>

      <AppleCard className="overflow-hidden mb-4">
        {menu.map((m, i) => (
          <button key={m.label} className={`press-effect w-full flex items-center gap-4 p-4 hover:bg-[hsl(var(--apple-bg-alt))] transition-colors ${i < menu.length - 1 ? 'hairline-b' : ''}`}>
            <Icon name={m.icon as any} size={17} className="text-[hsl(var(--apple-text-secondary))]" />
            <span className="flex-1 text-left text-[15px] text-[hsl(var(--apple-text))] tracking-apple">{m.label}</span>
            <Icon name="ChevronRight" size={14} className="text-[hsl(var(--apple-text-tertiary))]" />
          </button>
        ))}
      </AppleCard>

      <button onClick={onLogout} className="press-effect w-full py-4 text-[15px] text-[#ff3b30] bg-white hairline border rounded-[14px] hover:bg-[hsl(var(--apple-bg-alt))] transition-colors tracking-apple">
        Выйти
      </button>

      <p className="text-center text-[12px] text-[hsl(var(--apple-text-tertiary))] mt-6 tracking-apple">
        SecureVPN v2.1.0
      </p>
    </div>
  );
}

function SupportPage() {
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'Как подключить VPN?', a: 'Скопируйте ключ в разделе «Ключи» и импортируйте в приложение (Outline, v2rayNG, Shadowrocket).' },
    { q: 'Почему не работает подключение?', a: 'Проверьте, не истекла ли подписка. Если всё в порядке — напишите в поддержку.' },
    { q: 'Сколько устройств можно подключить?', a: 'Premium поддерживает до 5 устройств одновременно.' },
    { q: 'Что такое White List ключ?', a: 'Особый ключ, включающий VPN только для заблокированных сайтов — экономит трафик.' },
  ];

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Поддержка" sub="Ответим быстро. Обычно — в течение часа." />

      <div className="grid md:grid-cols-2 gap-3 mb-10">
        <button className="press-effect text-left bg-[#1d1d1f] rounded-[22px] p-6 text-white card-hover">
          <Icon name="Send" size={22} className="mb-6" />
          <div className="font-display text-[22px] tracking-apple-tight">Telegram</div>
          <div className="text-[13px] text-[#a1a1a6] tracking-apple mt-1">@securevpn_support</div>
        </button>
        <AppleCard className="p-6 card-hover cursor-pointer">
          <Icon name="Mail" size={22} className="text-[hsl(var(--apple-link))] mb-6" />
          <div className="font-display text-[22px] tracking-apple-tight text-[hsl(var(--apple-text))]">Email</div>
          <div className="text-[13px] text-[hsl(var(--apple-text-secondary))] tracking-apple mt-1">support@securevpn.pro</div>
        </AppleCard>
      </div>

      <AppleCard className="p-6 mb-10">
        <h3 className="font-display text-[22px] tracking-apple-tight text-[hsl(var(--apple-text))] mb-4">Написать сообщение</h3>
        <textarea
          value={msg}
          onChange={e => setMsg(e.target.value)}
          placeholder="Опишите проблему..."
          rows={4}
          className="w-full bg-[hsl(var(--apple-bg-alt))] rounded-[14px] px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[hsl(var(--apple-link))]/30 transition-all resize-none tracking-apple"
        />
        <button className="btn-apple-primary press-effect mt-3 px-5 py-2.5 text-[13px]">
          Отправить
        </button>
      </AppleCard>

      <h3 className="font-display text-[28px] tracking-apple-tight text-[hsl(var(--apple-text))] mb-4">Частые вопросы</h3>
      <AppleCard className="overflow-hidden">
        {faqs.map((f, i) => (
          <div key={i} className={`${i < faqs.length - 1 ? 'hairline-b' : ''}`}>
            <button onClick={() => setOpen(open === i ? null : i)} className="press-effect w-full flex items-center justify-between p-5 text-left hover:bg-[hsl(var(--apple-bg-alt))] transition-colors">
              <span className="text-[15px] text-[hsl(var(--apple-text))] tracking-apple font-medium pr-4">{f.q}</span>
              <Icon name={open === i ? 'Minus' : 'Plus'} size={15} className="text-[hsl(var(--apple-text-secondary))] flex-shrink-0" />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-[14px] text-[hsl(var(--apple-text-secondary))] tracking-apple leading-relaxed animate-fade-in-fast">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </AppleCard>
    </div>
  );
}

function ReferralPage() {
  const [c, setC] = useState(false);
  const link = 'securevpn.pro/r/ALEX2025';

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Рефералы" />

      <div className="bg-gradient-to-br from-[#0071e3] to-[#00c6ff] rounded-[28px] p-8 text-white mb-4">
        <div className="font-display text-[80px] md:text-[120px] leading-[0.9] tracking-apple-tight">20%</div>
        <div className="font-display text-[24px] tracking-apple-tight mt-2">с каждой оплаты друга.</div>
        <p className="text-[15px] text-white/80 mt-3 tracking-apple max-w-sm">
          Приглашайте друзей — получайте процент от их платежей на баланс.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[{ l: 'Приглашено', v: '7' }, { l: 'Заработано', v: '1 890 ₽' }, { l: 'К выплате', v: '890 ₽' }].map(s => (
          <AppleCard key={s.l} className="p-5 text-center">
            <div className="font-display text-[28px] tracking-apple-tight text-[hsl(var(--apple-text))]">{s.v}</div>
            <div className="text-[11px] text-[hsl(var(--apple-text-secondary))] tracking-apple mt-1">{s.l}</div>
          </AppleCard>
        ))}
      </div>

      <AppleCard className="p-6 mb-4">
        <div className="text-[13px] text-[hsl(var(--apple-text-secondary))] tracking-apple mb-2">Ваша ссылка</div>
        <div className="bg-[hsl(var(--apple-bg-alt))] rounded-[12px] px-4 py-3 text-[14px] font-mono text-[hsl(var(--apple-text))] mb-3 break-all">{link}</div>
        <div className="flex gap-2">
          <button
            onClick={() => { navigator.clipboard.writeText(link).catch(() => {}); setC(true); setTimeout(() => setC(false), 1800); }}
            className="press-effect flex-1 bg-[hsl(var(--apple-bg-alt))] rounded-full py-2.5 text-[13px] text-[hsl(var(--apple-text))] tracking-apple hover:bg-[#e8e8ed] transition-colors"
          >
            {c ? 'Скопировано' : 'Копировать'}
          </button>
          <button className="btn-apple-primary press-effect flex-1 py-2.5 text-[13px]">Поделиться</button>
        </div>
      </AppleCard>

      <button className="w-full btn-apple-primary press-effect py-4 text-[14px]">
        Вывести 890 ₽
      </button>
    </div>
  );
}

function PromoPage() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const apply = () => {
    if (!code.trim()) return;
    setStatus(code.toUpperCase() === 'SECURE30' ? 'success' : 'error');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="animate-fade-in">
      <SectionTitle title="Промокод" sub="Скидка или бонусные дни" />

      <AppleCard className="p-8 mb-4">
        <input
          value={code}
          onChange={e => setCode(e.target.value.toUpperCase())}
          placeholder="SECURE30"
          className="w-full bg-[hsl(var(--apple-bg-alt))] rounded-[14px] px-5 py-5 text-[22px] font-display text-center tracking-[0.2em] uppercase outline-none focus:ring-2 focus:ring-[hsl(var(--apple-link))]/30 transition-all"
        />
        <button onClick={apply} className="btn-apple-primary press-effect w-full mt-3 py-3 text-[14px]">
          Применить
        </button>
        {status === 'success' && (
          <div className="mt-4 px-4 py-3 rounded-[12px] bg-[hsl(var(--apple-success))]/10 text-[hsl(var(--apple-success))] text-[13px] tracking-apple animate-fade-in-fast flex items-center gap-2">
            <Icon name="Check" size={14} />
            Промокод применён! +30 дней.
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 px-4 py-3 rounded-[12px] bg-[#ff3b30]/10 text-[#ff3b30] text-[13px] tracking-apple animate-fade-in-fast flex items-center gap-2">
            <Icon name="X" size={14} />
            Промокод недействителен.
          </div>
        )}
      </AppleCard>

      <p className="text-center text-[12px] text-[hsl(var(--apple-text-tertiary))] tracking-apple">
        Промокоды однократны и не суммируются.
      </p>
    </div>
  );
}

/* ═══════════════ CABINET SHELL ═══════════════ */
function Cabinet({ onLogout }: { onLogout: () => void }) {
  const [page, setPage] = useState<Page>('subscription');
  const [copied, setCopied] = useState('');

  const nav = [
    { id: 'subscription', label: 'Подписка' },
    { id: 'keys', label: 'Ключи' },
    { id: 'devices', label: 'Устройства' },
    { id: 'payments', label: 'Платежи' },
    { id: 'support', label: 'Поддержка' },
    { id: 'referral', label: 'Рефералы' },
    { id: 'promo', label: 'Промокод' },
    { id: 'profile', label: 'Профиль' },
  ];

  const mobileNav = [
    { id: 'subscription', label: 'Подписка', icon: 'Shield' },
    { id: 'keys', label: 'Ключи', icon: 'Key' },
    { id: 'devices', label: 'Устройства', icon: 'Smartphone' },
    { id: 'payments', label: 'Платежи', icon: 'CreditCard' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
  ];

  const renderPage = () => {
    switch (page) {
      case 'subscription': return <SubscriptionPage copied={copied} setCopied={setCopied} />;
      case 'keys': return <KeysPage copied={copied} setCopied={setCopied} />;
      case 'devices': return <DevicesPage />;
      case 'payments': return <PaymentsPage />;
      case 'support': return <SupportPage />;
      case 'referral': return <ReferralPage />;
      case 'promo': return <PromoPage />;
      case 'profile': return <ProfilePage onLogout={onLogout} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Apple-style top nav */}
      <nav className="apple-nav fixed top-0 left-0 right-0 z-50 hairline-b">
        <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between h-[44px]">
          <div className="flex items-center gap-6">
            <button onClick={onLogout} className="press-effect">
              <Icon name="Shield" size={16} className="text-[hsl(var(--apple-text))]" />
            </button>
            <div className="hidden md:flex items-center gap-6">
              {nav.map(n => (
                <button
                  key={n.id}
                  onClick={() => setPage(n.id as Page)}
                  className={`text-[12px] tracking-apple transition-all ${page === n.id ? 'text-[hsl(var(--apple-text))]' : 'text-[hsl(var(--apple-text-secondary))] hover:text-[hsl(var(--apple-text))]'}`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="press-effect">
              <Icon name="Search" size={14} className="text-[hsl(var(--apple-text))]" />
            </button>
            <button onClick={() => setPage('profile')} className="press-effect w-6 h-6 rounded-full bg-gradient-to-br from-[#0071e3] to-[#00c6ff] flex items-center justify-center">
              <span className="text-white text-[10px] font-medium">А</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-[84px] md:pt-[100px] pb-20 md:pb-24 px-6">
        <div className="max-w-[820px] mx-auto" key={page}>
          {renderPage()}
        </div>
      </main>

      {/* Mobile bottom nav — Apple TabBar style */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 apple-nav hairline-t bottom-nav">
        <div className="flex items-center max-w-md mx-auto">
          {mobileNav.map(item => {
            const active = page === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id as Page)}
                className={`press-effect flex-1 flex flex-col items-center gap-1 py-2 transition-all ${active ? 'text-[hsl(var(--apple-link))]' : 'text-[hsl(var(--apple-text-tertiary))]'}`}
              >
                <Icon name={item.icon as any} size={20} />
                <span className="text-[10px] tracking-apple">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer (desktop) */}
      <footer className="hidden md:block hairline-t bg-[hsl(var(--apple-bg-alt))] text-[12px] text-[hsl(var(--apple-text-secondary))] py-6 px-6 text-center tracking-apple">
        © 2025 SecureVPN. Все права защищены. <span className="mx-2">·</span> <button className="hover:underline">Политика конфиденциальности</button> <span className="mx-2">·</span> <button className="hover:underline">Условия</button>
      </footer>
    </div>
  );
}

/* ═══════════════ ROOT ═══════════════ */
export default function App() {
  const [view, setView] = useState<'home' | 'auth' | 'cabinet'>('home');

  useEffect(() => {
    document.body.style.overscrollBehavior = 'none';
  }, []);

  if (view === 'home') return <HomePage onEnter={() => setView('auth')} />;
  if (view === 'auth') return <AuthPage onAuth={() => setView('cabinet')} />;
  return <Cabinet onLogout={() => setView('home')} />;
}
