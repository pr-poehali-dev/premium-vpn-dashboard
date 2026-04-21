/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'subscription' | 'keys' | 'devices' | 'payments' | 'profile' | 'support' | 'referral' | 'promo' | 'auth';

function copyToClipboard(text: string, setCopied: (v: string) => void, id: string) {
  navigator.clipboard.writeText(text).catch(() => {});
  setCopied(id);
  setTimeout(() => setCopied(''), 2000);
}

/* ─── LANDING ─── */
function HomePage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <nav className="hidden md:flex items-center justify-between px-10 py-5 bg-[#f5f5f7]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-black/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[hsl(var(--blue))] flex items-center justify-center">
            <Icon name="Shield" size={16} className="text-white" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight text-[hsl(var(--text-primary))]">SecureVPN</span>
        </div>
        <div className="flex items-center gap-8">
          {['Тарифы', 'Функции', 'Поддержка'].map(item => (
            <button key={item} className="text-[14px] text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors font-medium">
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={onEnter}
          className="press-effect bg-[hsl(var(--blue))] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-[hsl(var(--blue-dark))] transition-colors"
        >
          Войти в кабинет
        </button>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="animate-fade-in stagger-1">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--blue-light))] text-[hsl(var(--blue))] text-[13px] font-semibold px-4 py-2 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--blue))] animate-pulse-soft" />
            Сервис работает стабильно
          </div>
        </div>

        <h1 className="animate-fade-in stagger-2 text-[48px] md:text-[72px] font-black tracking-tight leading-[1.05] text-[hsl(var(--text-primary))] max-w-3xl">
          Интернет без{' '}
          <span className="gradient-blue">границ</span>{' '}
          и слежки
        </h1>

        <p className="animate-fade-in stagger-3 mt-6 text-[17px] md:text-[20px] text-[hsl(var(--text-secondary))] max-w-xl leading-relaxed font-medium">
          Быстрый, надёжный и приватный VPN-сервис.<br className="hidden md:block" />
          Два ключа в одной подписке — обычный и White List.
        </p>

        <div className="animate-fade-in stagger-4 mt-10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onEnter}
            className="press-effect bg-[hsl(var(--blue))] text-white text-[16px] font-semibold px-8 py-4 rounded-2xl hover:bg-[hsl(var(--blue-dark))] transition-all shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.4)]"
          >
            Открыть кабинет
          </button>
          <button
            onClick={onEnter}
            className="press-effect bg-white text-[hsl(var(--text-primary))] text-[16px] font-semibold px-8 py-4 rounded-2xl hover:bg-[hsl(var(--surface-3))] transition-colors border border-black/8"
          >
            Смотреть тарифы
          </button>
        </div>

        <div className="animate-fade-in stagger-5 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full">
          {[
            { icon: '🔒', title: 'Шифрование', desc: 'AES-256 военный стандарт' },
            { icon: '⚡', title: 'Скорость', desc: 'До 1 Гбит/с без ограничений' },
            { icon: '🌍', title: 'Серверы', desc: '40+ стран, 200+ серверов' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-3xl p-6 text-left border border-black/5 card-hover">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-semibold text-[15px] text-[hsl(var(--text-primary))]">{f.title}</div>
              <div className="text-[13px] text-[hsl(var(--text-secondary))] mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </main>

      <div className="md:hidden p-6 pb-10">
        <button
          onClick={onEnter}
          className="press-effect w-full bg-[hsl(var(--blue))] text-white text-[16px] font-semibold py-4 rounded-2xl shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
        >
          Войти в кабинет
        </button>
      </div>
    </div>
  );
}

/* ─── AUTH ─── */
function AuthPage({ onAuth }: { onAuth: () => void }) {
  const [step, setStep] = useState<'select' | 'email'>('select');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm animate-scale-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--blue))] flex items-center justify-center mx-auto mb-4 shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
            <Icon name="Shield" size={28} className="text-white" />
          </div>
          <h1 className="text-[28px] font-black tracking-tight text-[hsl(var(--text-primary))]">SecureVPN</h1>
          <p className="text-[15px] text-[hsl(var(--text-secondary))] mt-2">Войдите, чтобы управлять подпиской</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-black/5">
          {step === 'select' ? (
            <div className="space-y-3">
              <button
                onClick={() => setStep('email')}
                className="press-effect w-full flex items-center gap-4 bg-[hsl(var(--surface-2))] hover:bg-[hsl(var(--surface-3))] text-[hsl(var(--text-primary))] font-semibold py-4 px-5 rounded-2xl transition-colors text-[15px]"
              >
                <div className="w-9 h-9 rounded-xl bg-[hsl(var(--blue-light))] flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={18} className="text-[hsl(var(--blue))]" />
                </div>
                Войти через Email
              </button>
              <button className="press-effect w-full flex items-center gap-4 bg-[#229ED9] hover:bg-[#1a8bc2] text-white font-semibold py-4 px-5 rounded-2xl transition-colors text-[15px]">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Send" size={18} className="text-white" />
                </div>
                Войти через Telegram
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <button onClick={() => setStep('select')} className="flex items-center gap-1.5 text-[hsl(var(--blue))] text-[14px] font-medium mb-2 -mt-1">
                <Icon name="ChevronLeft" size={16} />
                Назад
              </button>
              <div>
                <label className="block text-[13px] font-semibold text-[hsl(var(--text-secondary))] mb-2 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-xl px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[hsl(var(--blue))] focus:border-transparent transition-all"
                />
              </div>
              <button
                onClick={onAuth}
                className="press-effect w-full bg-[hsl(var(--blue))] text-white font-semibold py-4 rounded-2xl text-[15px] hover:bg-[hsl(var(--blue-dark))] transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.3)]"
              >
                Получить код на почту
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-[13px] text-[hsl(var(--text-tertiary))] mt-6 leading-relaxed">
          Нажимая кнопку, вы соглашаетесь<br />с условиями использования сервиса
        </p>
      </div>
    </div>
  );
}

/* ─── SUBSCRIPTION ─── */
function SubscriptionPage({ copied, setCopied }: { copied: string; setCopied: (v: string) => void }) {
  const normalKey = 'vless://abc123...@server1.securevpn.pro:443?type=ws&security=tls#SecureVPN-Normal';
  const wlKey = 'vless://wl456...@server2.securevpn.pro:443?type=ws&security=tls#SecureVPN-WhiteList';
  const trafficUsed = 18.4;
  const trafficTotal = 50;
  const trafficPct = (trafficUsed / trafficTotal) * 100;

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-[hsl(var(--blue))] rounded-3xl p-6 text-white shadow-[0_8px_32px_rgba(37,99,235,0.25)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
            <span className="text-[13px] font-semibold text-white/80 uppercase tracking-wide">Активна</span>
          </div>
          <span className="text-[13px] font-medium text-white/70">до 21 июля 2025</span>
        </div>
        <div className="text-[32px] font-black tracking-tight">Premium</div>
        <div className="text-[15px] text-white/80 mt-1 font-medium">5 устройств · 2 ключа</div>
        <button className="press-effect mt-5 bg-white/15 hover:bg-white/25 text-white font-semibold text-[14px] px-5 py-2.5 rounded-xl transition-colors backdrop-blur-sm border border-white/20">
          Продлить подписку
        </button>
      </div>

      <div className="flex items-center gap-3 px-1">
        <div className="h-px flex-1 bg-[hsl(var(--border))]" />
        <span className="text-[12px] font-semibold text-[hsl(var(--text-tertiary))] uppercase tracking-wider">Ваши ключи</span>
        <div className="h-px flex-1 bg-[hsl(var(--border))]" />
      </div>

      {/* Normal key */}
      <div className="bg-white rounded-3xl p-5 border border-black/5 card-hover">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[hsl(var(--blue-light))] flex items-center justify-center">
              <Icon name="Key" size={18} className="text-[hsl(var(--blue))]" />
            </div>
            <div>
              <div className="font-semibold text-[14px] text-[hsl(var(--text-primary))]">Обычный ключ</div>
              <div className="text-[12px] text-[hsl(var(--text-secondary))]">Безлимитный трафик</div>
            </div>
          </div>
          <span className="text-[11px] bg-[hsl(var(--success-light))] text-[hsl(var(--success))] font-semibold px-2.5 py-1 rounded-lg">Активен</span>
        </div>
        <div className="bg-[hsl(var(--surface-2))] rounded-xl px-4 py-3 font-mono text-[12px] text-[hsl(var(--text-secondary))] truncate mb-3 border border-[hsl(var(--border))]">
          {normalKey.slice(0, 48)}...
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => copyToClipboard(normalKey, setCopied, 'normal')}
            className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--surface-2))] hover:bg-[hsl(var(--surface-3))] text-[hsl(var(--text-primary))] font-semibold text-[13px] py-2.5 rounded-xl transition-colors border border-[hsl(var(--border))]"
          >
            <Icon name={copied === 'normal' ? 'Check' : 'Copy'} size={14} className={copied === 'normal' ? 'text-[hsl(var(--success))]' : ''} />
            {copied === 'normal' ? 'Скопировано' : 'Копировать'}
          </button>
          <button className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--blue))] text-white font-semibold text-[13px] py-2.5 rounded-xl transition-colors hover:bg-[hsl(var(--blue-dark))]">
            <Icon name="Zap" size={14} />
            Подключить
          </button>
        </div>
      </div>

      {/* White List key */}
      <div className="bg-white rounded-3xl p-5 border border-black/5 card-hover">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center">
              <Icon name="Star" size={18} className="text-purple-500" />
            </div>
            <div>
              <div className="font-semibold text-[14px] text-[hsl(var(--text-primary))]">White List ключ</div>
              <div className="text-[12px] text-[hsl(var(--text-secondary))]">Только разрешённые сайты</div>
            </div>
          </div>
          <span className="text-[11px] bg-[hsl(var(--success-light))] text-[hsl(var(--success))] font-semibold px-2.5 py-1 rounded-lg">Активен</span>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[12px] text-[hsl(var(--text-secondary))] font-medium">Трафик</span>
            <span className="text-[12px] font-semibold text-[hsl(var(--text-primary))]">{trafficUsed} / {trafficTotal} ГБ</span>
          </div>
          <div className="h-2 bg-[hsl(var(--surface-2))] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${trafficPct}%`, background: trafficPct > 80 ? 'hsl(var(--warning))' : 'hsl(var(--blue))' }}
            />
          </div>
          <div className="text-[11px] text-[hsl(var(--text-tertiary))] mt-1">Осталось {(trafficTotal - trafficUsed).toFixed(1)} ГБ</div>
        </div>

        <div className="bg-[hsl(var(--surface-2))] rounded-xl px-4 py-3 font-mono text-[12px] text-[hsl(var(--text-secondary))] truncate mb-3 border border-[hsl(var(--border))]">
          {wlKey.slice(0, 48)}...
        </div>
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => copyToClipboard(wlKey, setCopied, 'wl')}
            className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--surface-2))] hover:bg-[hsl(var(--surface-3))] text-[hsl(var(--text-primary))] font-semibold text-[13px] py-2.5 rounded-xl transition-colors border border-[hsl(var(--border))]"
          >
            <Icon name={copied === 'wl' ? 'Check' : 'Copy'} size={14} className={copied === 'wl' ? 'text-[hsl(var(--success))]' : ''} />
            {copied === 'wl' ? 'Скопировано' : 'Копировать'}
          </button>
          <button className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--blue))] text-white font-semibold text-[13px] py-2.5 rounded-xl transition-colors hover:bg-[hsl(var(--blue-dark))]">
            <Icon name="Zap" size={14} />
            Подключить
          </button>
        </div>
        <button className="press-effect w-full flex items-center justify-center gap-2 bg-[hsl(var(--warning-light))] text-[hsl(var(--warning))] font-semibold text-[13px] py-2.5 rounded-xl transition-colors">
          <Icon name="Plus" size={14} />
          Докупить трафик
        </button>
      </div>
    </div>
  );
}

/* ─── KEYS ─── */
function KeysPage({ copied, setCopied }: { copied: string; setCopied: (v: string) => void }) {
  const normalKey = 'vless://abc123def456ghi789@server1.securevpn.pro:443?type=ws&security=tls&host=cdn.securevpn.pro#SecureVPN-Normal';
  const wlKey = 'vless://wl456xyz789abc123@server2.securevpn.pro:443?type=ws&security=tls&host=cdn.securevpn.pro#SecureVPN-WhiteList';

  const keys = [
    { id: 'normal', type: 'Обычный ключ', desc: 'Весь трафик через VPN. Безлимитный.', badge: 'Без лимита', icon: 'Key', iconBg: 'hsl(var(--blue-light))', iconColor: 'hsl(var(--blue))', badgeBg: 'hsl(var(--blue-light))', badgeColor: 'hsl(var(--blue))', value: normalKey, server: 'server1.securevpn.pro', protocol: 'VLESS / WS / TLS' },
    { id: 'wl', type: 'White List ключ', desc: 'Только заблокированные сайты. Экономит трафик.', badge: '50 ГБ', icon: 'Star', iconBg: 'rgba(168,85,247,0.1)', iconColor: 'rgb(168,85,247)', badgeBg: 'rgba(168,85,247,0.1)', badgeColor: 'rgb(168,85,247)', value: wlKey, server: 'server2.securevpn.pro', protocol: 'VLESS / WS / TLS' },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed px-1">
        В вашей подписке два ключа. Используйте тот, который удобен в данный момент.
      </p>
      {keys.map((key, i) => (
        <div key={key.id} className={`bg-white rounded-3xl p-5 border border-black/5 animate-fade-in stagger-${i + 1}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: key.iconBg }}>
                <Icon name={key.icon as any} size={20} style={{ color: key.iconColor }} />
              </div>
              <div>
                <div className="font-semibold text-[15px] text-[hsl(var(--text-primary))]">{key.type}</div>
                <div className="text-[13px] text-[hsl(var(--text-secondary))] mt-0.5">{key.desc}</div>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg flex-shrink-0 ml-2" style={{ background: key.badgeBg, color: key.badgeColor }}>
              {key.badge}
            </span>
          </div>
          <div className="space-y-2 mb-4">
            {[{ label: 'Сервер', value: key.server }, { label: 'Протокол', value: key.protocol }].map(row => (
              <div key={row.label} className="flex items-center justify-between text-[13px]">
                <span className="text-[hsl(var(--text-secondary))]">{row.label}</span>
                <span className="font-medium text-[hsl(var(--text-primary))]">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--surface-2))] rounded-xl px-4 py-3 font-mono text-[11px] text-[hsl(var(--text-secondary))] break-all mb-3 border border-[hsl(var(--border))] leading-relaxed">
            {key.value}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard(key.value, setCopied, key.id)}
              className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--surface-2))] hover:bg-[hsl(var(--surface-3))] text-[hsl(var(--text-primary))] font-semibold text-[13px] py-3 rounded-xl transition-colors border border-[hsl(var(--border))]"
            >
              <Icon name={copied === key.id ? 'Check' : 'Copy'} size={14} className={copied === key.id ? 'text-[hsl(var(--success))]' : ''} />
              {copied === key.id ? 'Скопировано' : 'Копировать'}
            </button>
            <button className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--blue))] text-white font-semibold text-[13px] py-3 rounded-xl hover:bg-[hsl(var(--blue-dark))] transition-colors">
              <Icon name="ExternalLink" size={14} />
              Подключить
            </button>
          </div>
        </div>
      ))}
      <div className="bg-[hsl(var(--blue-light))] rounded-2xl p-4">
        <div className="flex gap-3">
          <Icon name="Info" size={18} className="text-[hsl(var(--blue))] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] text-[hsl(var(--blue-dark))] leading-relaxed">
            <strong>Совет:</strong> используйте White List ключ для экономии трафика — он подключает VPN только для нужных сайтов.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── DEVICES ─── */
function DevicesPage() {
  const [devices, setDevices] = useState([
    { id: 1, name: 'iPhone 15 Pro', platform: 'iOS', lastSeen: 'Сейчас', icon: 'Smartphone', active: true },
    { id: 2, name: 'MacBook Pro', platform: 'macOS', lastSeen: '2 часа назад', icon: 'Laptop', active: false },
    { id: 3, name: 'Android Samsung', platform: 'Android', lastSeen: 'Вчера', icon: 'Smartphone', active: false },
    { id: 4, name: 'iPad Air', platform: 'iPadOS', lastSeen: '3 дня назад', icon: 'Tablet', active: false },
  ]);

  const remove = (id: number) => setDevices(prev => prev.filter(d => d.id !== id));

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between px-1">
        <p className="text-[14px] text-[hsl(var(--text-secondary))]">{devices.length} из 5 устройств</p>
        <div className="h-1.5 w-24 bg-[hsl(var(--surface-3))] rounded-full overflow-hidden">
          <div className="h-full bg-[hsl(var(--blue))] rounded-full transition-all" style={{ width: `${(devices.length / 5) * 100}%` }} />
        </div>
      </div>
      <div className="space-y-3">
        {devices.map((device, i) => (
          <div key={device.id} className={`bg-white rounded-2xl p-4 border border-black/5 flex items-center gap-4 animate-fade-in stagger-${i + 1}`}>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${device.active ? 'bg-[hsl(var(--blue-light))]' : 'bg-[hsl(var(--surface-2))]'}`}>
              <Icon name={device.icon as any} size={20} className={device.active ? 'text-[hsl(var(--blue))]' : 'text-[hsl(var(--text-tertiary))]'} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[14px] text-[hsl(var(--text-primary))] flex items-center gap-2">
                {device.name}
                {device.active && <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--success))] animate-pulse-soft" />}
              </div>
              <div className="text-[12px] text-[hsl(var(--text-secondary))] mt-0.5">{device.platform} · {device.lastSeen}</div>
            </div>
            <button onClick={() => remove(device.id)} className="press-effect w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors flex-shrink-0">
              <Icon name="X" size={14} className="text-red-500" />
            </button>
          </div>
        ))}
      </div>
      <button className="press-effect w-full flex items-center justify-center gap-2 bg-white text-[hsl(var(--blue))] font-semibold text-[14px] py-3.5 rounded-2xl border border-[hsl(var(--border))] hover:bg-[hsl(var(--surface-2))] transition-colors">
        <Icon name="Plus" size={16} />
        Добавить устройство
      </button>
    </div>
  );
}

/* ─── PAYMENTS ─── */
function PaymentsPage() {
  const history = [
    { id: 1, title: 'Premium подписка', sub: '3 месяца', amount: '+90 дней', price: '990 ₽', date: '15 апр 2025', type: 'subscription' },
    { id: 2, title: 'White List трафик', sub: 'Пополнение +20 ГБ', amount: '+20 ГБ', price: '199 ₽', date: '02 апр 2025', type: 'traffic' },
    { id: 3, title: 'Premium подписка', sub: '1 месяц', amount: '+30 дней', price: '390 ₽', date: '10 янв 2025', type: 'subscription' },
  ];
  const plans = [
    { title: '1 месяц', price: '390 ₽', popular: false },
    { title: '3 месяца', price: '990 ₽', popular: true, save: 'Скидка 15%' },
    { title: '1 год', price: '2 990 ₽', popular: false, save: 'Скидка 36%' },
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="bg-white rounded-3xl p-5 border border-black/5">
        <h3 className="font-bold text-[16px] text-[hsl(var(--text-primary))] mb-4">Тарифы</h3>
        <div className="space-y-2">
          {plans.map((plan, i) => (
            <button key={plan.title} className={`press-effect w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left animate-fade-in stagger-${i + 1} ${plan.popular ? 'bg-[hsl(var(--blue))] border-transparent' : 'bg-[hsl(var(--surface-2))] border-[hsl(var(--border))] hover:border-[hsl(var(--blue))]'}`}>
              <div>
                <div className={`font-semibold text-[15px] ${plan.popular ? 'text-white' : 'text-[hsl(var(--text-primary))]'}`}>{plan.title}</div>
                {plan.save && <div className={`text-[12px] mt-0.5 font-medium ${plan.popular ? 'text-blue-100' : 'text-[hsl(var(--success))]'}`}>{plan.save}</div>}
              </div>
              <div className="flex items-center gap-2">
                {plan.popular && <span className="text-[11px] bg-white/20 text-white font-bold px-2 py-0.5 rounded-lg">Хит</span>}
                <span className={`font-black text-[18px] ${plan.popular ? 'text-white' : 'text-[hsl(var(--text-primary))]'}`}>{plan.price}</span>
              </div>
            </button>
          ))}
        </div>
        <button className="press-effect w-full bg-[hsl(var(--blue))] text-white font-semibold text-[15px] py-4 rounded-2xl mt-4 hover:bg-[hsl(var(--blue-dark))] transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.25)]">
          Оплатить картой
        </button>
      </div>

      <div className="bg-white rounded-3xl p-5 border border-black/5">
        <h3 className="font-bold text-[16px] text-[hsl(var(--text-primary))] mb-1">Докупить трафик</h3>
        <p className="text-[13px] text-[hsl(var(--text-secondary))] mb-4">Для White List ключа</p>
        <div className="grid grid-cols-3 gap-2">
          {[{ gb: '10 ГБ', price: '99 ₽' }, { gb: '50 ГБ', price: '299 ₽', best: true }, { gb: '100 ГБ', price: '499 ₽' }].map(t => (
            <button key={t.gb} className={`press-effect p-3 rounded-2xl border text-center transition-all ${(t as any).best ? 'bg-[hsl(var(--blue-light))] border-[hsl(var(--blue))]' : 'bg-[hsl(var(--surface-2))] border-[hsl(var(--border))] hover:border-[hsl(var(--blue))]'}`}>
              <div className={`font-bold text-[15px] ${(t as any).best ? 'text-[hsl(var(--blue))]' : 'text-[hsl(var(--text-primary))]'}`}>{t.gb}</div>
              <div className={`text-[12px] font-semibold mt-0.5 ${(t as any).best ? 'text-[hsl(var(--blue))]' : 'text-[hsl(var(--text-secondary))]'}`}>{t.price}</div>
            </button>
          ))}
        </div>
        <button className="press-effect w-full bg-[hsl(var(--surface-2))] text-[hsl(var(--text-primary))] border border-[hsl(var(--border))] font-semibold text-[14px] py-3.5 rounded-2xl mt-4 hover:bg-[hsl(var(--surface-3))] transition-colors">
          Купить трафик
        </button>
      </div>

      <div className="bg-white rounded-3xl p-5 border border-black/5">
        <h3 className="font-bold text-[16px] text-[hsl(var(--text-primary))] mb-4">История платежей</h3>
        <div className="space-y-1">
          {history.map((tx, i) => (
            <div key={tx.id} className={`flex items-center gap-3 py-3 ${i < history.length - 1 ? 'border-b border-[hsl(var(--border))]' : ''}`}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${tx.type === 'subscription' ? 'bg-[hsl(var(--blue-light))]' : 'bg-purple-50'}`}>
                <Icon name={tx.type === 'subscription' ? 'Shield' : 'Zap'} size={16} className={tx.type === 'subscription' ? 'text-[hsl(var(--blue))]' : 'text-purple-500'} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[14px] text-[hsl(var(--text-primary))]">{tx.title}</div>
                <div className="text-[12px] text-[hsl(var(--text-secondary))]">{tx.date} · {tx.sub}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-bold text-[14px] text-[hsl(var(--text-primary))]">{tx.price}</div>
                <div className="text-[11px] text-[hsl(var(--success))] font-medium">{tx.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── PROFILE ─── */
function ProfilePage({ onLogout }: { onLogout: () => void }) {
  const menuItems = [
    { icon: 'Bell', label: 'Уведомления', desc: 'Напоминания об оплате' },
    { icon: 'Lock', label: 'Безопасность', desc: 'Пароль и привязки' },
    { icon: 'HelpCircle', label: 'Поддержка', desc: 'Написать в чат' },
    { icon: 'Gift', label: 'Реферальная программа', desc: 'Зарабатывай с друзьями' },
    { icon: 'Tag', label: 'Промокод', desc: 'Ввести код скидки' },
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 border border-black/5 text-center">
        <div className="w-20 h-20 rounded-full bg-[hsl(var(--blue))] flex items-center justify-center mx-auto mb-4 shadow-[0_8px_24px_rgba(37,99,235,0.25)]">
          <span className="text-white font-black text-[28px]">А</span>
        </div>
        <div className="font-bold text-[22px] text-[hsl(var(--text-primary))]">Алексей</div>
        <div className="text-[14px] text-[hsl(var(--text-secondary))] mt-1">alex@example.com</div>
        <div className="inline-flex items-center gap-1.5 bg-[hsl(var(--success-light))] text-[hsl(var(--success))] text-[12px] font-bold px-3 py-1.5 rounded-full mt-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--success))]" />
          Premium до 21 июля
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-black/5 overflow-hidden">
        {menuItems.map((item, i) => (
          <button key={item.label} className={`press-effect w-full flex items-center gap-4 px-5 py-4 hover:bg-[hsl(var(--surface-2))] transition-colors text-left ${i < menuItems.length - 1 ? 'border-b border-[hsl(var(--border))]' : ''}`}>
            <div className="w-9 h-9 rounded-xl bg-[hsl(var(--surface-2))] flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon as any} size={18} className="text-[hsl(var(--text-secondary))]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[14px] text-[hsl(var(--text-primary))]">{item.label}</div>
              <div className="text-[12px] text-[hsl(var(--text-secondary))]">{item.desc}</div>
            </div>
            <Icon name="ChevronRight" size={16} className="text-[hsl(var(--text-tertiary))] flex-shrink-0" />
          </button>
        ))}
      </div>

      <button onClick={onLogout} className="press-effect w-full flex items-center justify-center gap-2 text-red-500 font-semibold text-[15px] py-4 rounded-2xl border border-red-100 bg-red-50 hover:bg-red-100 transition-colors">
        <Icon name="LogOut" size={18} />
        Выйти из аккаунта
      </button>

      <div className="text-center text-[12px] text-[hsl(var(--text-tertiary))] pb-2">
        SecureVPN v2.1.0 · Политика конфиденциальности
      </div>
    </div>
  );
}

/* ─── SUPPORT ─── */
function SupportPage() {
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'Как подключить VPN?', a: 'Скопируйте ключ из раздела «Ключи» и импортируйте его в приложение (Outline, v2rayNG, Shadowrocket).' },
    { q: 'Почему не работает подключение?', a: 'Проверьте, не истекла ли подписка. Если всё в порядке — напишите в поддержку, поможем в течение часа.' },
    { q: 'Можно ли использовать на нескольких устройствах?', a: 'Да! Premium-подписка поддерживает до 5 устройств одновременно.' },
    { q: 'Что такое White List ключ?', a: 'Это особый ключ, который включает VPN только для заблокированных сайтов. Остальной трафик идёт напрямую — быстрее и экономит трафик.' },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid grid-cols-2 gap-3">
        <button className="press-effect bg-[#229ED9] text-white rounded-2xl p-4 flex flex-col items-start gap-2 hover:opacity-90 transition-opacity">
          <Icon name="Send" size={20} className="text-white" />
          <span className="font-semibold text-[14px]">Telegram</span>
          <span className="text-[12px] text-blue-100">Ответим за 15 мин</span>
        </button>
        <button className="press-effect bg-white border border-black/8 rounded-2xl p-4 flex flex-col items-start gap-2 hover:bg-[hsl(var(--surface-2))] transition-colors">
          <Icon name="Mail" size={20} className="text-[hsl(var(--blue))]" />
          <span className="font-semibold text-[14px] text-[hsl(var(--text-primary))]">Email</span>
          <span className="text-[12px] text-[hsl(var(--text-secondary))]">support@securevpn</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl p-5 border border-black/5">
        <h3 className="font-bold text-[16px] text-[hsl(var(--text-primary))] mb-3">Написать сообщение</h3>
        <textarea
          value={msg}
          onChange={e => setMsg(e.target.value)}
          placeholder="Опишите вашу проблему..."
          rows={4}
          className="w-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-xl px-4 py-3 text-[14px] resize-none outline-none focus:ring-2 focus:ring-[hsl(var(--blue))] focus:border-transparent transition-all text-[hsl(var(--text-primary))]"
        />
        <button className="press-effect w-full bg-[hsl(var(--blue))] text-white font-semibold text-[14px] py-3.5 rounded-xl mt-3 hover:bg-[hsl(var(--blue-dark))] transition-colors">
          Отправить
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-black/5 overflow-hidden">
        <div className="px-5 pt-5 pb-3">
          <h3 className="font-bold text-[16px] text-[hsl(var(--text-primary))]">Частые вопросы</h3>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} className={`${i < faqs.length - 1 ? 'border-b border-[hsl(var(--border))]' : ''}`}>
            <button onClick={() => setOpen(open === i ? null : i)} className="press-effect w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[hsl(var(--surface-2))] transition-colors">
              <span className="font-semibold text-[14px] text-[hsl(var(--text-primary))] pr-4">{faq.q}</span>
              <Icon name={open === i ? 'ChevronUp' : 'ChevronDown'} size={16} className="text-[hsl(var(--text-tertiary))] flex-shrink-0" />
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed animate-fade-in-fast">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── REFERRAL ─── */
function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const refLink = 'https://securevpn.pro/r/ALEX2025';
  const stats = [
    { label: 'Приглашено', value: '7' },
    { label: 'Заработано', value: '1 890 ₽' },
    { label: 'К выплате', value: '890 ₽' },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-[hsl(var(--blue))] rounded-3xl p-6 text-white shadow-[0_8px_32px_rgba(37,99,235,0.25)]">
        <div className="text-[40px] font-black leading-none">20%</div>
        <div className="text-[16px] font-semibold mt-1">с каждой оплаты друга</div>
        <div className="text-[13px] text-white/70 mt-2 leading-relaxed">Приглашайте друзей и получайте 20% от их платежей на баланс или выводите на карту</div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 border border-black/5 text-center">
            <div className="font-black text-[18px] text-[hsl(var(--text-primary))]">{s.value}</div>
            <div className="text-[11px] text-[hsl(var(--text-secondary))] mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-5 border border-black/5">
        <h3 className="font-bold text-[15px] text-[hsl(var(--text-primary))] mb-3">Ваша реферальная ссылка</h3>
        <div className="bg-[hsl(var(--surface-2))] rounded-xl px-4 py-3 text-[13px] font-medium text-[hsl(var(--text-secondary))] break-all mb-3 border border-[hsl(var(--border))]">
          {refLink}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { navigator.clipboard.writeText(refLink).catch(() => {}); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] font-semibold text-[13px] py-3 rounded-xl transition-colors hover:bg-[hsl(var(--surface-3))]"
          >
            <Icon name={copied ? 'Check' : 'Copy'} size={14} className={copied ? 'text-[hsl(var(--success))]' : ''} />
            {copied ? 'Скопировано' : 'Копировать'}
          </button>
          <button className="press-effect flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--blue))] text-white font-semibold text-[13px] py-3 rounded-xl hover:bg-[hsl(var(--blue-dark))] transition-colors">
            <Icon name="Share2" size={14} />
            Поделиться
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-5 border border-black/5">
        <h3 className="font-bold text-[15px] text-[hsl(var(--text-primary))] mb-4">Как это работает</h3>
        <div className="space-y-4">
          {['Поделитесь ссылкой с другом', 'Друг покупает подписку по вашей ссылке', 'Вы получаете 20% от суммы на баланс'].map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[hsl(var(--blue))] text-white font-bold text-[13px] flex items-center justify-center flex-shrink-0">{i + 1}</div>
              <div className="text-[14px] text-[hsl(var(--text-primary))] font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="press-effect w-full bg-[hsl(var(--success-light))] text-[hsl(var(--success))] font-semibold text-[14px] py-4 rounded-2xl hover:opacity-90 border border-[hsl(var(--success))]/20">
        Вывести 890 ₽ на карту
      </button>
    </div>
  );
}

/* ─── PROMO ─── */
function PromoPage() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const apply = () => {
    if (!code.trim()) return;
    setStatus(code.toUpperCase() === 'SECURE30' ? 'success' : 'error');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 border border-black/5">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--blue-light))] flex items-center justify-center mx-auto mb-4">
            <Icon name="Tag" size={28} className="text-[hsl(var(--blue))]" />
          </div>
          <h3 className="font-bold text-[20px] text-[hsl(var(--text-primary))]">Промокод</h3>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] mt-2">Введите код скидки или бонусного доступа</p>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value.toUpperCase())}
            placeholder="SECURE30"
            className="w-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-xl px-4 py-4 text-[16px] font-bold tracking-widest text-center outline-none focus:ring-2 focus:ring-[hsl(var(--blue))] focus:border-transparent transition-all text-[hsl(var(--text-primary))] uppercase"
          />
          <button onClick={apply} className="press-effect w-full bg-[hsl(var(--blue))] text-white font-semibold text-[15px] py-4 rounded-2xl hover:bg-[hsl(var(--blue-dark))] transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.25)]">
            Применить
          </button>
        </div>
        {status === 'success' && (
          <div className="mt-4 bg-[hsl(var(--success-light))] text-[hsl(var(--success))] rounded-xl px-4 py-3 text-[14px] font-semibold flex items-center gap-2 animate-fade-in-fast">
            <Icon name="CheckCircle" size={18} />
            Промокод применён! +30 дней к подписке.
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 bg-red-50 text-red-500 rounded-xl px-4 py-3 text-[14px] font-semibold flex items-center gap-2 animate-fade-in-fast">
            <Icon name="XCircle" size={18} />
            Промокод недействителен или уже использован.
          </div>
        )}
      </div>
      <div className="bg-[hsl(var(--surface-2))] rounded-2xl p-4">
        <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed text-center">
          Промокоды действительны однократно и не суммируются с другими акциями
        </p>
      </div>
    </div>
  );
}

/* ─── CABINET SHELL ─── */
function Cabinet({ onLogout }: { onLogout: () => void }) {
  const [page, setPage] = useState<Page>('subscription');
  const [copied, setCopied] = useState('');

  const mobileNav = [
    { id: 'subscription', label: 'Подписка', icon: 'Shield' },
    { id: 'keys', label: 'Ключи', icon: 'Key' },
    { id: 'devices', label: 'Устройства', icon: 'Smartphone' },
    { id: 'payments', label: 'Платежи', icon: 'CreditCard' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
  ];

  const desktopNav = [
    { id: 'subscription', label: 'Подписка', icon: 'Shield' },
    { id: 'keys', label: 'Ключи', icon: 'Key' },
    { id: 'devices', label: 'Устройства', icon: 'Smartphone' },
    { id: 'payments', label: 'Платежи', icon: 'CreditCard' },
    { id: 'support', label: 'Поддержка', icon: 'HelpCircle' },
    { id: 'referral', label: 'Рефералы', icon: 'Gift' },
    { id: 'promo', label: 'Промокод', icon: 'Tag' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
  ];

  const titles: Record<string, string> = {
    subscription: 'Подписка', keys: 'Мои ключи', devices: 'Устройства',
    payments: 'Платежи', profile: 'Профиль', support: 'Поддержка',
    referral: 'Рефералы', promo: 'Промокод',
  };

  const renderPage = () => {
    switch (page) {
      case 'subscription': return <SubscriptionPage copied={copied} setCopied={setCopied} />;
      case 'keys': return <KeysPage copied={copied} setCopied={setCopied} />;
      case 'devices': return <DevicesPage />;
      case 'payments': return <PaymentsPage />;
      case 'profile': return <ProfilePage onLogout={onLogout} />;
      case 'support': return <SupportPage />;
      case 'referral': return <ReferralPage />;
      case 'promo': return <PromoPage />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-white border-r border-[hsl(var(--border))] fixed left-0 top-0 bottom-0 z-40">
        <div className="px-5 py-6 border-b border-[hsl(var(--border))]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[hsl(var(--blue))] flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
              <Icon name="Shield" size={18} className="text-white" />
            </div>
            <span className="font-bold text-[16px] tracking-tight text-[hsl(var(--text-primary))]">SecureVPN</span>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {desktopNav.map(item => {
            const active = page === item.id;
            return (
              <button key={item.id} onClick={() => setPage(item.id as Page)} className={`press-effect w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all text-[14px] font-medium ${active ? 'bg-[hsl(var(--blue-light))] text-[hsl(var(--blue))]' : 'text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text-primary))]'}`}>
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="px-5 py-4 border-t border-[hsl(var(--border))]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[hsl(var(--blue))] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-[13px]">А</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[13px] text-[hsl(var(--text-primary))] truncate">Алексей</div>
              <div className="text-[11px] text-[hsl(var(--text-secondary))] truncate">Premium</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-60 flex flex-col min-h-screen">
        {/* Mobile header */}
        <header className="md:hidden sticky top-0 z-30 bg-[#f5f5f7]/90 backdrop-blur-xl px-5 pt-[calc(env(safe-area-inset-top)+12px)] pb-3 border-b border-black/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[hsl(var(--blue))] flex items-center justify-center">
                <Icon name="Shield" size={14} className="text-white" />
              </div>
              <h1 className="font-bold text-[17px] text-[hsl(var(--text-primary))]">{titles[page]}</h1>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setPage('referral')} className="press-effect w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-black/8">
                <Icon name="Gift" size={16} className="text-[hsl(var(--text-secondary))]" />
              </button>
              <button onClick={() => setPage('promo')} className="press-effect w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-black/8">
                <Icon name="Tag" size={16} className="text-[hsl(var(--text-secondary))]" />
              </button>
            </div>
          </div>
        </header>

        {/* Desktop header */}
        <header className="hidden md:flex items-center justify-between px-8 py-5 border-b border-[hsl(var(--border))] bg-white/60 backdrop-blur-xl sticky top-0 z-30">
          <h1 className="font-bold text-[22px] text-[hsl(var(--text-primary))]">{titles[page]}</h1>
          <button onClick={() => setPage('support')} className="press-effect flex items-center gap-2 text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--blue))] font-medium text-[14px] transition-colors px-3 py-2 rounded-xl hover:bg-[hsl(var(--surface-2))]">
            <Icon name="HelpCircle" size={16} />
            Поддержка
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 px-4 md:px-8 py-5 pb-safe md:pb-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto" key={page}>
            {renderPage()}
          </div>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-black/8 bottom-nav">
        <div className="flex items-center">
          {mobileNav.map(item => {
            const active = page === item.id;
            return (
              <button key={item.id} onClick={() => setPage(item.id as Page)} className={`press-effect flex-1 flex flex-col items-center gap-1 py-2.5 transition-all ${active ? 'text-[hsl(var(--blue))]' : 'text-[hsl(var(--text-tertiary))]'}`}>
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${active ? 'bg-[hsl(var(--blue-light))]' : ''}`}>
                  <Icon name={item.icon as any} size={18} />
                </div>
                <span className={`text-[10px] font-semibold ${active ? 'text-[hsl(var(--blue))]' : ''}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

/* ─── ROOT ─── */
export default function App() {
  const [view, setView] = useState<'home' | 'auth' | 'cabinet'>('home');

  useEffect(() => {
    document.body.style.overscrollBehavior = 'none';
  }, []);

  if (view === 'home') return <HomePage onEnter={() => setView('auth')} />;
  if (view === 'auth') return <AuthPage onAuth={() => setView('cabinet')} />;
  return <Cabinet onLogout={() => setView('home')} />;
}