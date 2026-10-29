import { useState, useEffect, useRef } from 'react'

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const IcoBolt = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const IcoCheck = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const IcoTrend = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
)

const IcoCpu = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="6" height="6" /><rect x="2" y="2" width="20" height="20" rx="2" />
    <line x1="9" y1="2" x2="9" y2="9" /><line x1="15" y1="2" x2="15" y2="9" />
    <line x1="9" y1="15" x2="9" y2="22" /><line x1="15" y1="15" x2="15" y2="22" />
    <line x1="2" y1="9" x2="9" y2="9" /><line x1="2" y1="15" x2="9" y2="15" />
    <line x1="15" y1="9" x2="22" y2="9" /><line x1="15" y1="15" x2="22" y2="15" />
  </svg>
)

const IcoMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IcoX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const IcoBarChart = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)

const IcoRefresh = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
)

const IcoHistory = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="12 8 12 12 14 14" />
    <path d="M3.05 11a9 9 0 1 0 .5-4H1" /><polyline points="1 2 1 7 6 7" />
  </svg>
)

const IcoShield = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const IcoLinkedin = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)

const IcoInstagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const IcoYoutube = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
)

const IcoStar = ({ filled = false }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const IcoSmallCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const IcoArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

const IcoMail = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const IcoLock = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const IcoEye = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
)

const IcoEyeOff = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const IcoShoppingCart = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const IcoCog = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const IcoLogOut = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

const IcoBell = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const IcoSearch = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const IcoFilter = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)

// ─── Dashboard Mockup ─────────────────────────────────────────────────────────

function DashboardMockup() {
  const bars = [62, 80, 51, 93, 70, 85, 98]
  const products = [
    { name: 'Arduino Mega 2560', sku: 'ARD-001', qty: 47, status: 'ok' },
    { name: 'Raspberry Pi 4 4GB', sku: 'RPI-042', qty: 8, status: 'low' },
    { name: 'ESP32 Dev Board', sku: 'ESP-007', qty: 124, status: 'ok' },
    { name: 'L298N Motor Driver', sku: 'MOT-019', qty: 2, status: 'critical' },
  ]

  return (
    <div className="float-anim relative select-none">
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 rounded-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,240,255,0.1) 0%, transparent 70%)', zIndex: 0 }}
      />

      <div className="relative mockup-window overflow-hidden" style={{ zIndex: 1 }}>
        {/* Title bar */}
        <div className="mockup-bar px-4 py-3 flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          <div
            className="flex-1 mx-3 h-6 rounded-md flex items-center px-3"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <span className="font-mono-data text-slate-500" style={{ fontSize: '10px' }}>
              hexatech.app/dashboard
            </span>
          </div>
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(0,240,255,0.08)', color: '#00F0FF' }}
          >
            <IcoCpu size={14} />
          </div>
        </div>

        {/* Body */}
        <div className="flex" style={{ minHeight: 370 }}>
          {/* Sidebar */}
          <div
            className="flex flex-col items-center gap-3 py-4 px-2"
            style={{ borderRight: '1px solid rgba(255,255,255,0.05)', width: 52 }}
          >
            {[
              { l: 'M', active: true },
              { l: 'V', active: false },
              { l: 'P', active: false },
              { l: 'R', active: false },
              { l: 'C', active: false },
            ].map(({ l, active }) => (
              <div
                key={l}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                style={active
                  ? { background: '#00F0FF', color: '#0B132B' }
                  : { color: '#475569' }}
              >
                {l}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 p-4 space-y-3 overflow-hidden">
            {/* Alert */}
            <div
              className="pulse-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.28)', color: '#00F0FF' }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#00F0FF' }} />
              3 produtos abaixo do ponto de recompra
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Precisão', value: '99.8%', color: '#00F0FF' },
                { label: 'Giro/mês', value: '1.847', color: '#38BDF8' },
                { label: 'Em estoque', value: '2.341', color: '#a78bfa' },
              ].map(s => (
                <div
                  key={s.label}
                  className="rounded-xl p-2.5"
                  style={{ background: 'rgba(28,37,65,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="text-slate-400 mb-0.5" style={{ fontSize: 10 }}>{s.label}</div>
                  <div className="font-bold text-base" style={{ color: s.color }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div
              className="rounded-xl p-3"
              style={{ background: 'rgba(28,37,65,0.55)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300 font-semibold" style={{ fontSize: 11 }}>Giro de Estoque — 7 dias</span>
                <span className="font-semibold" style={{ fontSize: 11, color: '#00F0FF' }}>+12.4%</span>
              </div>
              <div className="flex items-end gap-1.5" style={{ height: 52 }}>
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === bars.length - 1
                        ? 'linear-gradient(to top, #00F0FF, #38BDF8)'
                        : 'linear-gradient(to top, rgba(0,240,255,0.55), rgba(56,189,248,0.3))',
                    }}
                  />
                ))}
              </div>
              <div className="flex mt-1">
                {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => (
                  <span key={i} className="flex-1 text-center text-slate-500" style={{ fontSize: 9 }}>{d}</span>
                ))}
              </div>
            </div>

            {/* Product table */}
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div
                className="px-3 py-2 flex items-center justify-between"
                style={{ background: 'rgba(8,16,32,0.7)' }}
              >
                <span className="text-slate-300 font-semibold" style={{ fontSize: 11 }}>Produtos</span>
                <span className="text-slate-500" style={{ fontSize: 10 }}>Atualizado agora</span>
              </div>
              {products.map((p, i) => (
                <div
                  key={i}
                  className="px-3 py-2 flex items-center justify-between"
                  style={{
                    background: i % 2 === 0 ? 'rgba(28,37,65,0.45)' : 'rgba(28,37,65,0.2)',
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <div>
                    <div className="text-slate-200" style={{ fontSize: 11, fontWeight: 500 }}>{p.name}</div>
                    <div className="font-mono-data text-slate-500" style={{ fontSize: 9 }}>{p.sku}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300" style={{ fontSize: 11 }}>{p.qty} un</span>
                    <span
                      className="font-semibold px-1.5 py-0.5 rounded-full"
                      style={{
                        fontSize: 9,
                        ...(p.status === 'ok'
                          ? { background: 'rgba(34,197,94,0.12)', color: '#4ade80' }
                          : p.status === 'low'
                          ? { background: 'rgba(251,191,36,0.12)', color: '#fbbf24' }
                          : { background: 'rgba(248,113,113,0.12)', color: '#f87171' }),
                      }}
                    >
                      {p.status === 'ok' ? 'OK' : p.status === 'low' ? 'Baixo' : 'Crítico'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.28)', color: '#00F0FF' }}
          >
            <IcoCpu size={18} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Hexa<span style={{ color: '#00F0FF' }}>tech</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contato"
          className="hidden md:block px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
          style={{
            background: '#00F0FF',
            color: '#0B132B',
            boxShadow: '0 0 22px rgba(0,240,255,0.28)',
          }}
        >
          Solicitar Demonstração
        </a>

        {/* Hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <IcoX /> : <IcoMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 space-y-3"
          style={{ background: 'rgba(8,16,35,0.97)', borderTop: '1px solid rgba(0,240,255,0.09)' }}
        >
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="block nav-link py-2.5 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="block w-full mt-2 py-3 rounded-xl text-sm font-semibold text-center"
            style={{ background: '#00F0FF', color: '#0B132B' }}
            onClick={() => setOpen(false)}
          >
            Solicitar Demonstração
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-mesh overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div className="space-y-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.22)', color: '#00F0FF' }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#00F0FF' }} />
            Sistema Especialista em Varejo de Hardware
          </div>

          <h1 className="font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>
            Elimine perdas e<br />
            <span className="gradient-text">acelere o atendimento</span><br />
            no seu varejo de hardware.
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
            Controle total de estoque próximo a 100%, baixa automática no caixa e gestão inteligente de capital de giro em uma única plataforma.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: '#00F0FF', color: '#0B132B', boxShadow: '0 0 32px rgba(0,240,255,0.32)' }}
            >
              Agendar Demonstração
              <IcoArrow />
            </a>
            <a
              href="#tour"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 transition-all duration-200 hover:text-white"
              style={{ border: '1.5px solid rgba(0,240,255,0.28)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,240,255,0.06)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              Conhecer a Plataforma
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2.5">
              {['RA', 'FC', 'MS', 'LB', 'GT'].map((initials, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `hsl(${200 + i * 55}, 65%, 38%)`,
                    border: '2.5px solid #0B132B',
                    color: 'white',
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => <IcoStar key={i} filled />)}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-semibold">+180 lojas</span> de eletrônicos confiam na Hexatech
              </p>
            </div>
          </div>
        </div>

        {/* Right — Dashboard Mockup */}
        <div className="hidden lg:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

// ─── Problems / Solutions ─────────────────────────────────────────────────────

function ProblemsSection() {
  const cards = [
    {
      icon: <IcoBolt size={22} />,
      title: 'Atendimento Ágil',
      desc: 'Consulta instantânea de localização e disponibilidade de componentes direto no balcão. Reduza filas e aumente a conversão.',
      color: '#00F0FF',
    },
    {
      icon: <IcoCheck size={22} />,
      title: 'Precisão Absoluta',
      desc: 'Baixa automática e imediata no estoque a cada venda finalizada. Zero vendas duplicadas e divergências de inventário.',
      color: '#38BDF8',
    },
    {
      icon: <IcoTrend size={22} />,
      title: 'Capital Otimizado',
      desc: 'Alertas inteligentes de ponto de recompra e identificação de produtos sem giro. Pare de congelar capital em itens parados.',
      color: '#a78bfa',
    },
  ]

  return (
    <section id="solucoes" className="py-24" style={{ background: 'linear-gradient(180deg, #0B132B 0%, #0A192F 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00F0FF' }}>
            Por que a Hexatech
          </p>
          <h2 className="text-4xl font-bold text-white mb-5">
            Desenvolvido para resolver os maiores{' '}
            <span className="gradient-text">gargalos do seu balcão</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Cada funcionalidade foi criada a partir dos problemas reais que lojistas de hardware enfrentam todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="neo-card rounded-2xl p-8 cursor-default group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${c.color}14`, color: c.color, border: `1px solid ${c.color}2e` }}
              >
                {c.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-slate-400 leading-relaxed">{c.desc}</p>
              <a href="#recursos" className="mt-6 flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80" style={{ color: c.color }}>
                Saiba mais <IcoArrow />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Feature Visuals ──────────────────────────────────────────────────────────

function InventoryVisual() {
  const items = [
    { name: 'HDMI 2.1 Cable 2m', pct: 92, qty: 46 },
    { name: 'USB-C Hub 7-in-1', pct: 45, qty: 22 },
    { name: 'SSD NVMe 1TB', pct: 78, qty: 39 },
    { name: '16GB DDR5 RAM', pct: 20, qty: 10 },
  ]

  return (
    <div className="rounded-2xl p-6" style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.1)' }}>
      <div className="flex items-center justify-between mb-5">
        <span className="font-semibold text-white">Inventário Rotativo</span>
        <span
          className="font-mono-data px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(0,240,255,0.1)', color: '#00F0FF' }}
        >
          AO VIVO
        </span>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-slate-300">{item.name}</span>
              <span className="text-slate-400 font-mono-data text-xs">{item.qty} un</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.pct}%`,
                  background: 'linear-gradient(90deg, #00F0FF, #38BDF8)',
                  opacity: item.pct < 25 ? 1 : 1,
                  boxShadow: item.pct > 70 ? '0 0 8px rgba(0,240,255,0.4)' : 'none',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Últimas movimentações</div>
        {[
          'Entrada: 50× ESP8266 — 09:14',
          'Saída: 3× Arduino Uno — 09:22',
          'Auditoria concluída — 09:30',
        ].map((log, i) => (
          <div key={i} className="font-mono-data text-xs text-slate-400 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  )
}

function ExchangeVisual() {
  const steps = [
    { label: 'Venda registrada', done: true },
    { label: 'Devolução solicitada', done: true },
    { label: 'Produto recebido', done: true },
    { label: 'Reentrada no estoque', done: false, active: true },
    { label: 'Troca processada', done: false },
  ]

  return (
    <div className="rounded-2xl p-6" style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.1)' }}>
      <div className="font-semibold text-white mb-5">
        Fluxo de Troca —{' '}
        <span className="font-mono-data text-sm" style={{ color: '#38BDF8' }}>#TRK-0842</span>
      </div>
      <div>
        {steps.map((s, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${s.active ? 'pulse-badge' : ''}`}
                style={
                  s.done
                    ? { background: 'rgba(34,197,94,0.15)', color: '#4ade80' }
                    : s.active
                    ? { background: 'rgba(0,240,255,0.12)', color: '#00F0FF', border: '1px solid rgba(0,240,255,0.3)' }
                    : { background: 'rgba(255,255,255,0.04)', color: '#475569' }
                }
              >
                {s.done ? <IcoSmallCheck /> : <span style={{ fontSize: 11, fontWeight: 600 }}>{i + 1}</span>}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px my-1" style={{ height: 22, background: 'rgba(255,255,255,0.08)' }} />
              )}
            </div>
            <div className="pb-5">
              <span
                className="text-sm font-medium"
                style={s.done ? { color: '#94a3b8' } : s.active ? { color: '#00F0FF' } : { color: '#475569' }}
              >
                {s.label}
              </span>
              {s.active && <div className="text-xs text-slate-500 mt-0.5">Em processamento...</div>}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-2 p-3 rounded-xl text-xs font-medium"
        style={{ background: 'rgba(0,240,255,0.05)', border: '1px solid rgba(0,240,255,0.15)', color: '#67e8f9' }}
      >
        Produto reinserido automaticamente no estoque após confirmação.
      </div>
    </div>
  )
}

function HistoryVisual() {
  const events = [
    { time: '09:45', type: 'entrada', desc: '100× Capacitor 10µF — Depósito', color: '#4ade80' },
    { time: '10:12', type: 'saída', desc: '5× Transistor BC547 — Balcão 2', color: '#fbbf24' },
    { time: '10:33', type: 'transf.', desc: '20× LED RGB → Depósito → Balcão 1', color: '#38BDF8' },
    { time: '11:01', type: 'saída', desc: '2× Arduino Mega 2560 — Balcão 3', color: '#fbbf24' },
    { time: '11:28', type: 'entrada', desc: '50× Resistor 10kΩ — Depósito', color: '#4ade80' },
  ]

  return (
    <div className="rounded-2xl p-6" style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.1)' }}>
      <div className="flex items-center justify-between mb-5">
        <span className="font-semibold text-white">Histórico Auditável</span>
        <div className="flex gap-1.5">
          {['Entrada', 'Saída', 'Todos'].map((f, i) => (
            <span
              key={f}
              className="text-xs px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
              style={i === 2
                ? { background: 'rgba(0,240,255,0.1)', color: '#00F0FF', border: '1px solid rgba(0,240,255,0.2)' }
                : { color: '#64748b' }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>
      <div>
        {events.map((e, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-2.5"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
          >
            <span className="font-mono-data text-slate-500 flex-shrink-0 pt-0.5" style={{ fontSize: 10, width: 36 }}>
              {e.time}
            </span>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: e.color }} />
            <div>
              <span className="text-xs uppercase font-bold tracking-wider" style={{ color: e.color }}>{e.type}</span>
              <p className="text-xs text-slate-400 mt-0.5">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Features Section ─────────────────────────────────────────────────────────

function FeaturesSection() {
  const features = [
    {
      icon: <IcoBarChart size={18} />,
      tag: 'Inventário',
      title: 'Inventário Rotativo com Controle Total',
      desc: 'Contagem e controle por código de barras com auditoria completa de cada movimentação. Cada item rastreado do depósito ao balcão em tempo real, sem brechas.',
      points: [
        'Leitura por QR Code e código de barras',
        'Auditoria em tempo real de cada movimentação',
        'Relatórios de divergência automáticos',
      ],
      visual: <InventoryVisual />,
      flip: false,
    },
    {
      icon: <IcoRefresh size={18} />,
      tag: 'Trocas',
      title: 'Trocas e Devoluções sem Fricção',
      desc: 'Processamento rápido de trocas com reentrada automática e imediata no estoque da loja. Clientes satisfeitos, inventário sempre fiel à realidade.',
      points: [
        'Fluxo guiado passo a passo',
        'Reentrada automática no estoque',
        'Histórico completo de trocas por cliente',
      ],
      visual: <ExchangeVisual />,
      flip: true,
    },
    {
      icon: <IcoHistory size={18} />,
      tag: 'Auditoria',
      title: 'Histórico 100% Auditável',
      desc: 'Registro imutável de cada entrada, saída e transferência entre depósito e balcão. Rastreie qualquer movimentação em segundos, com filtros completos.',
      points: [
        'Logs imutáveis com timestamp e usuário',
        'Filtros avançados por data, tipo e operador',
        'Exportação direta para contabilidade',
      ],
      visual: <HistoryVisual />,
      flip: false,
    },
  ]

  return (
    <section id="recursos" className="py-24" style={{ background: '#0A192F' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00F0FF' }}>
            Plataforma
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Recursos que fazem a diferença</h2>
          <p className="text-slate-400 text-lg">
            Projetados para o dia a dia real de quem trabalha com hardware e componentes eletrônicos.
          </p>
        </div>

        <div className="space-y-28">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-14 items-center ${f.flip ? 'lg:[grid-template-areas:"visual_text"]' : ''}`}
              style={f.flip ? { direction: 'rtl' } : {}}
            >
              <div style={f.flip ? { direction: 'ltr' } : {}}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{ background: 'rgba(0,240,255,0.08)', color: '#00F0FF', border: '1px solid rgba(0,240,255,0.2)' }}
                >
                  <span style={{ color: '#00F0FF' }}>{f.icon}</span>
                  {f.tag}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-snug">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-7 text-base">{f.desc}</p>
                <ul className="space-y-3">
                  {f.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}
                      >
                        <IcoSmallCheck />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={f.flip ? { direction: 'ltr' } : {}}>{f.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Platform Tour ────────────────────────────────────────────────────────────

type CartItem = { id: string; name: string; price: number; qty: number; stock: number }
type StockProduct = { code: string; name: string; cat: string; qty: number; cost: number; price: number; minQty: number }
type AuthUser = { name: string; email: string; role: 'operador' | 'admin'; avatar: string; color: string }
type AppPage = 'dashboard' | 'estoque' | 'pdv' | 'finalizacao' | 'relatorios' | 'configuracoes'

const PRODUCT_CATALOG: StockProduct[] = [
  { code: '7891234567890', name: 'Arduino Mega 2560',     cat: 'Microcontroladores', qty: 47,  cost: 89.90,  price: 149.90, minQty: 10 },
  { code: '7890987654321', name: 'Raspberry Pi 4 4GB',    cat: 'SBC',                qty: 5,   cost: 390.00, price: 599.90, minQty: 8  },
  { code: '7891111111111', name: 'ESP32 Dev Board',        cat: 'WiFi/BT',            qty: 124, cost: 28.00,  price: 54.90,  minQty: 15 },
  { code: '7892222222222', name: 'L298N Motor Driver',     cat: 'Motores',            qty: 0,   cost: 12.00,  price: 24.90,  minQty: 5  },
  { code: '7893333333333', name: 'Capacitor 100µF',        cat: 'Passivos',           qty: 320, cost: 0.50,   price: 1.90,   minQty: 50 },
  { code: '7894444444444', name: 'Jumper Kit 65pcs',       cat: 'Acessórios',         qty: 88,  cost: 8.00,   price: 19.90,  minQty: 20 },
  { code: '7895555555555', name: 'Protoboard 830pts',      cat: 'Prototipagem',       qty: 31,  cost: 18.00,  price: 34.90,  minQty: 10 },
  { code: '7896666666666', name: 'LED RGB 5mm (10un)',     cat: 'Componentes',        qty: 200, cost: 2.50,   price: 6.90,   minQty: 30 },
  { code: '7897777777777', name: 'Resistor 10kΩ Kit',      cat: 'Passivos',           qty: 450, cost: 3.00,   price: 8.90,   minQty: 50 },
  { code: '7898888888888', name: 'Módulo Bluetooth HC-05', cat: 'Comunicação',        qty: 18,  cost: 22.00,  price: 44.90,  minQty: 5  },
]

const AVATAR_EMOJIS = ['🤖', '⚡', '🔧', '💡', '🎯', '🚀', '⭐', '🛡️', '🔬', '🧩', '🎮', '🌐']
const AVATAR_COLORS = ['#00F0FF', '#38BDF8', '#818cf8', '#34d399', '#f472b6', '#fbbf24', '#f87171', '#a78bfa', '#fb923c', '#4ade80']

function stockStatus(qty: number, min: number): 'ok' | 'low' | 'zero' {
  return qty === 0 ? 'zero' : qty <= min ? 'low' : 'ok'
}

function initials(name: string) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

// ── Window chrome ─────────────────────────────────────────────────────────────

function MockupWindow({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="mockup-window overflow-hidden w-full" style={{ minHeight: 500 }}>
      <div className="mockup-bar px-4 py-2.5 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
        <div className="flex-1 mx-3 h-5 rounded flex items-center px-2.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <span className="font-mono-data text-slate-500" style={{ fontSize: 9 }}>{url}</span>
        </div>
      </div>
      {children}
    </div>
  )
}

// ── App Shell with Sidebar ────────────────────────────────────────────────────

function AppShell({ user, page, setPage, onLogout, children }: {
  user: AuthUser
  page: AppPage
  setPage: (p: AppPage) => void
  onLogout: () => void
  children: React.ReactNode
}) {
  const navItems: { icon: React.ReactNode; label: string; page: AppPage; badge?: string }[] = [
    { icon: <IcoBarChart size={14} />, label: 'Dashboard',     page: 'dashboard' },
    { icon: <IcoCpu size={14} />,      label: 'Estoque',       page: 'estoque', badge: user.role === 'admin' ? '7' : undefined },
    { icon: <IcoShoppingCart size={14} />, label: 'PDV',       page: 'pdv' },
    { icon: <IcoTrend size={14} />,    label: 'Relatórios',    page: 'relatorios' },
    { icon: <IcoCog size={14} />,      label: 'Configurações', page: 'configuracoes' },
  ]

  return (
    <MockupWindow url={`hexatech.app/${page}`}>
      <div className="flex" style={{ minHeight: 460 }}>
        {/* Sidebar */}
        <div className="flex flex-col py-4 gap-0.5 flex-shrink-0"
          style={{ width: 152, background: '#000000', borderRight: '1px solid rgba(0,240,255,0.08)' }}>
          <div className="px-4 py-2 mb-3">
            <span className="text-white font-bold text-sm">Hexa<span style={{ color: '#00F0FF' }}>tech</span></span>
            <div className="text-xs mt-0.5" style={{ color: '#64748b', fontSize: 9 }}>v2.4.1</div>
          </div>

          {navItems.map(item => (
            <div key={item.page}
              onClick={() => setPage(item.page)}
              className="flex items-center gap-2.5 px-3 py-2.5 mx-2 rounded-xl text-xs font-medium transition-all cursor-pointer relative"
              style={page === item.page
                ? { background: 'rgba(0,240,255,0.12)', color: '#00F0FF', borderLeft: '2px solid #00F0FF' }
                : { color: '#64748b' }}
              onMouseEnter={e => { if (page !== item.page) (e.currentTarget as HTMLElement).style.color = '#94a3b8' }}
              onMouseLeave={e => { if (page !== item.page) (e.currentTarget as HTMLElement).style.color = '#64748b' }}>
              {item.icon}
              <span>{item.label}</span>
              {item.badge && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center font-bold"
                  style={{ background: '#f87171', color: '#fff', fontSize: 8 }}>{item.badge}</span>
              )}
            </div>
          ))}

          <div className="mt-auto px-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2 mb-3 px-1">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: user.color, color: '#000' }}>
                {user.avatar.length <= 2 && /\p{Emoji}/u.test(user.avatar) ? user.avatar : initials(user.name)}
              </div>
              <div className="min-w-0">
                <div className="text-white font-semibold truncate" style={{ fontSize: 10 }}>{user.name}</div>
                <div className="capitalize" style={{ color: '#64748b', fontSize: 8 }}>{user.role}</div>
              </div>
            </div>
            <button onClick={onLogout}
              className="w-full flex items-center gap-2 px-2 py-2 rounded-xl text-xs transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f87171')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
              <IcoLogOut size={13} /><span>Sair</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 overflow-hidden" style={{ background: '#080f24' }}>
          {children}
        </div>
      </div>
    </MockupWindow>
  )
}

// ── 1. Login ──────────────────────────────────────────────────────────────────

function LoginScreen({ onLogin, onGoRegister }: {
  onLogin: (u: AuthUser) => void
  onGoRegister: () => void
}) {
  const [profile, setProfile] = useState<'operador' | 'admin'>('operador')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email.trim()) { setError('Informe seu e-mail.'); return }
    if (password.length < 3) { setError('Senha deve ter pelo menos 3 caracteres.'); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
      onLogin({ name, email, role: profile, avatar: '🤖', color: '#00F0FF' })
    }, 1200)
  }

  return (
    <MockupWindow url="hexatech.app/login">
      <div className="flex items-center justify-center py-10 px-4" style={{ background: '#080f24', minHeight: 500 }}>
        <div className="w-full max-w-xs">
          <div className="flex flex-col items-center mb-7">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
              style={{ background: '#000000', border: '1px solid rgba(0,240,255,0.3)', color: '#00F0FF', boxShadow: '0 0 24px rgba(0,240,255,0.15)' }}>
              <IcoCpu size={28} />
            </div>
            <span className="text-2xl font-bold text-white">Hexa<span style={{ color: '#00F0FF' }}>tech</span></span>
            <p className="text-slate-500 text-xs mt-1">Sistema de Gestão para Varejo Eletrônico</p>
          </div>

          <div className="flex rounded-xl p-1 mb-5" style={{ background: '#000000' }}>
            {(['operador', 'admin'] as const).map(p => (
              <button key={p} type="button" onClick={() => setProfile(p)}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold capitalize transition-all duration-150"
                style={profile === p
                  ? { background: '#00F0FF', color: '#000000', boxShadow: '0 0 12px rgba(0,240,255,0.25)' }
                  : { color: '#64748b' }}>
                {p === 'operador' ? 'Operador' : 'Administrador'}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-3 mb-4">
            <div>
              <label className="text-xs text-slate-400 mb-1.5 font-medium block">E-mail</label>
              <div className="flex items-center gap-2.5 px-3 rounded-xl transition-all"
                style={{ background: '#1C2541', border: `1px solid ${email ? 'rgba(0,240,255,0.45)' : 'rgba(0,240,255,0.12)'}` }}>
                <span style={{ color: '#64748b', flexShrink: 0 }}><IcoMail size={15} /></span>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="operador@tecparts.com.br"
                  className="flex-1 py-3 bg-transparent text-white placeholder-slate-600 outline-none"
                  style={{ fontSize: 11, fontFamily: 'inherit' }} />
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 font-medium block">Senha</label>
              <div className="flex items-center gap-2.5 px-3 rounded-xl transition-all"
                style={{ background: '#1C2541', border: `1px solid ${password ? 'rgba(0,240,255,0.45)' : 'rgba(0,240,255,0.12)'}` }}>
                <span style={{ color: '#64748b', flexShrink: 0 }}><IcoLock size={15} /></span>
                <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Mínimo 3 caracteres"
                  className="flex-1 py-3 bg-transparent text-white placeholder-slate-600 outline-none"
                  style={{ fontSize: 11, fontFamily: 'inherit' }} />
                <button type="button" onClick={() => setShowPass(v => !v)} className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0">
                  {showPass ? <IcoEyeOff size={15} /> : <IcoEye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-xs px-3 py-2 rounded-lg"
                style={{ background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>
                {error}
              </div>
            )}

            <div className="flex items-center justify-between">
              <button type="button" className="text-xs" style={{ color: '#64748b' }}>Lembrar de mim</button>
              <button type="button" className="text-xs" style={{ color: '#00F0FF' }}>Esqueci a senha</button>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm transition-all"
              style={{ background: loading ? 'rgba(0,240,255,0.5)' : '#00F0FF', color: '#000000', boxShadow: '0 0 24px rgba(0,240,255,0.3)' }}>
              {loading ? 'Verificando...' : 'Entrar na Plataforma'}
            </button>
          </form>

          <div className="text-center">
            <span className="text-slate-500 text-xs">Não tem conta? </span>
            <button onClick={onGoRegister} className="text-xs font-semibold" style={{ color: '#00F0FF' }}>
              Criar conta grátis
            </button>
          </div>

          <div className="mt-4 p-3 rounded-xl" style={{ background: '#000000', border: '1px solid rgba(0,240,255,0.08)' }}>
            <div className="flex items-start gap-2 text-xs text-slate-500">
              <span className="flex-shrink-0 mt-0.5"><IcoShield size={12} /></span>
              <span>
                <span className="text-slate-300 font-semibold">{profile === 'operador' ? 'Operador' : 'Administrador'}:</span>{' '}
                {profile === 'operador'
                  ? 'PDV e consulta de estoque. Sem acesso a relatórios ou configurações.'
                  : 'Acesso total: cadastros, relatórios, configurações e gestão de usuários.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MockupWindow>
  )
}

// ── 2. Register ───────────────────────────────────────────────────────────────

function RegisterScreen({ onRegister, onGoLogin }: {
  onRegister: (u: AuthUser) => void
  onGoLogin: () => void
}) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', role: 'operador' as 'operador' | 'admin', store: '' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const setF = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  function handleRegister(ex: React.FormEvent) {
    ex.preventDefault()
    setError('')
    if (!form.name.trim()) { setError('Informe seu nome completo.'); return }
    if (!form.email.includes('@')) { setError('E-mail inválido.'); return }
    if (form.password.length < 6) { setError('Senha deve ter pelo menos 6 caracteres.'); return }
    if (form.password !== form.confirm) { setError('As senhas não coincidem.'); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onRegister({ name: form.name, email: form.email, role: form.role, avatar: '🚀', color: '#38BDF8' })
    }, 1500)
  }

  return (
    <MockupWindow url="hexatech.app/cadastro">
      <div className="flex items-center justify-center py-8 px-4" style={{ background: '#080f24', minHeight: 500 }}>
        <div className="w-full max-w-xs">
          <div className="flex flex-col items-center mb-6">
            <span className="text-xl font-bold text-white mb-0.5">Criar Conta</span>
            <p className="text-slate-500 text-xs">Comece gratuitamente. Sem cartão de crédito.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-2.5">
            {[
              { k: 'name',  l: 'Nome Completo',    t: 'text',     ph: 'João Silva',                  icon: <IcoSearch size={14} /> },
              { k: 'store', l: 'Nome da Loja',      t: 'text',     ph: 'TechParts Curitiba',          icon: <IcoCpu size={14} /> },
              { k: 'email', l: 'E-mail Corporativo',t: 'email',    ph: 'joao@tecparts.com.br',        icon: <IcoMail size={14} /> },
            ].map(f => (
              <div key={f.k}>
                <label className="text-xs text-slate-400 mb-1 block font-medium">{f.l}</label>
                <div className="flex items-center gap-2 px-3 rounded-xl"
                  style={{ background: '#1C2541', border: `1px solid ${(form as Record<string,string>)[f.k] ? 'rgba(0,240,255,0.4)' : 'rgba(0,240,255,0.12)'}` }}>
                  <span style={{ color: '#64748b', flexShrink: 0 }}>{f.icon}</span>
                  <input type={f.t} value={(form as Record<string,string>)[f.k]} onChange={setF(f.k)} placeholder={f.ph}
                    className="flex-1 py-2.5 bg-transparent text-white placeholder-slate-600 outline-none"
                    style={{ fontSize: 11, fontFamily: 'inherit' }} />
                </div>
              </div>
            ))}

            <div>
              <label className="text-xs text-slate-400 mb-1 block font-medium">Perfil de Acesso</label>
              <select value={form.role} onChange={setF('role')}
                className="w-full px-3 py-2.5 rounded-xl text-white outline-none"
                style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.12)', fontSize: 11, fontFamily: 'inherit' }}>
                <option value="operador">Operador (PDV + Estoque)</option>
                <option value="admin">Administrador (Acesso Total)</option>
              </select>
            </div>

            {['password', 'confirm'].map((k, i) => (
              <div key={k}>
                <label className="text-xs text-slate-400 mb-1 block font-medium">{i === 0 ? 'Senha' : 'Confirmar Senha'}</label>
                <div className="flex items-center gap-2 px-3 rounded-xl"
                  style={{ background: '#1C2541', border: `1px solid ${(form as Record<string,string>)[k] ? 'rgba(0,240,255,0.4)' : 'rgba(0,240,255,0.12)'}` }}>
                  <span style={{ color: '#64748b', flexShrink: 0 }}><IcoLock size={14} /></span>
                  <input type={showPass ? 'text' : 'password'} value={(form as Record<string,string>)[k]} onChange={setF(k)}
                    placeholder={i === 0 ? 'Mínimo 6 caracteres' : 'Repita a senha'}
                    className="flex-1 py-2.5 bg-transparent text-white placeholder-slate-600 outline-none"
                    style={{ fontSize: 11, fontFamily: 'inherit' }} />
                  {i === 1 && (
                    <button type="button" onClick={() => setShowPass(v => !v)} className="text-slate-500 hover:text-slate-300 transition-colors">
                      {showPass ? <IcoEyeOff size={14} /> : <IcoEye size={14} />}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {error && (
              <div className="text-xs px-3 py-2 rounded-lg"
                style={{ background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>
                {error}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm transition-all mt-1"
              style={{ background: loading ? 'rgba(0,240,255,0.5)' : '#00F0FF', color: '#000000', boxShadow: '0 0 24px rgba(0,240,255,0.25)' }}>
              {loading ? 'Criando conta...' : 'Criar Conta Grátis'}
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-slate-500 text-xs">Já tem conta? </span>
            <button onClick={onGoLogin} className="text-xs font-semibold" style={{ color: '#00F0FF' }}>Fazer login</button>
          </div>
        </div>
      </div>
    </MockupWindow>
  )
}

// ── 3. Dashboard ──────────────────────────────────────────────────────────────

function DashboardScreen({ onNavigate, user }: { onNavigate: (p: AppPage) => void; user: AuthUser }) {
  const [showNotif, setShowNotif] = useState(false)
  const pts = [30, 45, 35, 60, 55, 75, 65, 90, 80, 95]
  const svgPts = pts.map((y, i) => `${(i / (pts.length - 1)) * 280},${100 - y}`).join(' ')
  const notifications = [
    { msg: 'L298N Motor Driver: estoque zerado', type: 'error' },
    { msg: 'Raspberry Pi 4: abaixo do mínimo (5 un)', type: 'warn' },
    { msg: 'Venda #VD-2847 — R$ 212,60 confirmada', type: 'ok' },
  ]

  return (
    <div className="p-4 h-full" style={{ background: '#080f24' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-white font-semibold text-sm">Painel Principal</div>
          <div className="text-slate-500 text-xs">Olá, <span style={{ color: '#00F0FF' }}>{user.name}</span> — Segunda, 14 set. 2026</div>
        </div>
        <div className="relative">
          <button onClick={() => setShowNotif(v => !v)}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            style={{ background: '#1C2541' }}>
            <IcoBell size={15} />
          </button>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center font-bold"
            style={{ background: '#f87171', color: '#fff', fontSize: 8 }}>
            {notifications.length}
          </div>
          {showNotif && (
            <div className="absolute right-0 top-10 w-64 rounded-xl overflow-hidden z-10"
              style={{ background: '#000000', border: '1px solid rgba(0,240,255,0.15)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
              <div className="px-3 py-2 font-semibold text-white text-xs flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span>Notificações</span>
                <button onClick={() => setShowNotif(false)} className="text-slate-500 hover:text-white transition-colors" style={{ fontSize: 10 }}>✕</button>
              </div>
              {notifications.map((n, i) => (
                <div key={i} className="px-3 py-2.5 flex items-start gap-2"
                  style={{ borderBottom: i < notifications.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                    style={{ background: n.type === 'error' ? '#f87171' : n.type === 'warn' ? '#fbbf24' : '#4ade80' }} />
                  <span className="text-slate-300" style={{ fontSize: 10 }}>{n.msg}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: 'Estoque em risco', value: '7 itens', color: '#f87171', page: 'estoque' as AppPage },
          { label: 'Vendas hoje',      value: 'R$ 4.820', color: '#00F0FF', page: null },
          { label: 'Ticket médio',     value: 'R$ 128',   color: '#38BDF8', page: 'relatorios' as AppPage },
          { label: 'Sem giro',         value: '23 itens', color: '#fbbf24', page: 'relatorios' as AppPage },
        ].map(s => (
          <div key={s.label}
            onClick={() => s.page && onNavigate(s.page)}
            className="rounded-xl p-2.5 transition-all hover:scale-105"
            style={{ background: '#1C2541', border: `1px solid ${s.color}18`, cursor: s.page ? 'pointer' : 'default' }}>
            <div className="text-slate-500 mb-1" style={{ fontSize: 9 }}>{s.label}</div>
            <div className="font-bold text-xs" style={{ color: s.color }}>{s.value}</div>
            {s.page && <div style={{ fontSize: 8, color: s.color, opacity: 0.7 }}>Ver detalhes →</div>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="col-span-2 rounded-xl p-3" style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 font-semibold" style={{ fontSize: 10 }}>Giro de Estoque — 10 dias</span>
            <span style={{ fontSize: 9, color: '#4ade80' }}>+18% vs semana anterior</span>
          </div>
          <svg viewBox="0 0 280 100" className="w-full" style={{ height: 60 }}>
            <defs>
              <linearGradient id="dG2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <polyline points={svgPts} fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polygon points={`0,100 ${svgPts} 280,100`} fill="url(#dG2)" />
          </svg>
        </div>
        <div className="rounded-xl p-2.5" style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-slate-300 font-semibold mb-2" style={{ fontSize: 10 }}>Atalhos Rápidos</div>
          <div className="space-y-1.5">
            {[
              { label: '⚡ Abrir PDV',            page: 'pdv'           as AppPage },
              { label: '📦 Gerenciar Estoque',     page: 'estoque'       as AppPage },
              { label: '📊 Ver Relatórios',        page: 'relatorios'    as AppPage },
              { label: '⚙️ Configurações',         page: 'configuracoes' as AppPage },
            ].map(a => (
              <div key={a.label}
                onClick={() => onNavigate(a.page)}
                className="px-2 py-1.5 rounded-lg text-slate-300 transition-all cursor-pointer hover:text-white"
                style={{ background: 'rgba(0,240,255,0.06)', fontSize: 9 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,240,255,0.14)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,240,255,0.06)' }}>
                {a.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl p-2.5" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-300 font-semibold" style={{ fontSize: 10 }}>Alertas de Recompra</span>
          <button onClick={() => onNavigate('estoque')} style={{ color: '#00F0FF', fontSize: 9 }}>Ver estoque →</button>
        </div>
        {[
          { name: 'L298N Motor Driver',  qty: 0, color: '#f87171' },
          { name: 'Raspberry Pi 4 4GB',  qty: 5, color: '#fbbf24' },
          { name: 'ESP32 Dev Board',     qty: 6, color: '#fbbf24' },
        ].map(a => (
          <div key={a.name} className="flex items-center justify-between py-0.5">
            <span className="text-slate-400" style={{ fontSize: 9 }}>{a.name}</span>
            <span className="font-bold" style={{ color: a.color, fontSize: 9 }}>{a.qty === 0 ? 'ZERADO' : `${a.qty} un`}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── 4. Estoque ────────────────────────────────────────────────────────────────

function EstoqueScreen() {
  const [products, setProducts] = useState<StockProduct[]>(PRODUCT_CATALOG.map(p => ({ ...p })))
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('todos')
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<StockProduct | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [saved, setSaved] = useState('')
  const [form, setForm] = useState({ code: '', name: '', cat: 'Microcontroladores', qty: '', cost: '', price: '', minQty: '10' })
  const cats = ['Microcontroladores', 'SBC', 'WiFi/BT', 'Motores', 'Passivos', 'Acessórios', 'Prototipagem', 'Componentes', 'Comunicação']

  const filtered = products.filter(p => {
    const q = search.toLowerCase()
    const match = !q || p.name.toLowerCase().includes(q) || p.code.includes(q) || p.cat.toLowerCase().includes(q)
    const s = stockStatus(p.qty, p.minQty)
    return match && (filterStatus === 'todos' || s === filterStatus)
  })

  function openAdd() { setForm({ code: '', name: '', cat: 'Microcontroladores', qty: '', cost: '', price: '', minQty: '10' }); setEditing(null); setShowModal(true) }
  function openEdit(p: StockProduct) {
    setForm({ code: p.code, name: p.name, cat: p.cat, qty: String(p.qty), cost: String(p.cost), price: String(p.price), minQty: String(p.minQty) })
    setEditing(p); setShowModal(true)
  }
  function save() {
    if (!form.name.trim()) return
    if (editing) {
      setProducts(prev => prev.map(p => p.code === editing.code ? { ...p, name: form.name, cat: form.cat, qty: parseInt(form.qty) || 0, cost: parseFloat(form.cost) || 0, price: parseFloat(form.price) || 0, minQty: parseInt(form.minQty) || 10 } : p))
      setSaved('Produto atualizado!')
    } else {
      setProducts(prev => [...prev, { code: form.code || `PRD-${Date.now()}`, name: form.name, cat: form.cat, qty: parseInt(form.qty) || 0, cost: parseFloat(form.cost) || 0, price: parseFloat(form.price) || 0, minQty: parseInt(form.minQty) || 10 }])
      setSaved('Produto adicionado!')
    }
    setShowModal(false); setTimeout(() => setSaved(''), 2500)
  }

  const badge = (p: StockProduct) => {
    const s = stockStatus(p.qty, p.minQty)
    return s === 'ok'  ? { bg: 'rgba(34,197,94,0.1)',   color: '#4ade80', label: 'OK'     }
         : s === 'low' ? { bg: 'rgba(251,191,36,0.1)',  color: '#fbbf24', label: 'Baixo'  }
         :               { bg: 'rgba(248,113,113,0.1)', color: '#f87171', label: 'Zerado' }
  }
  const setF = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  return (
    <div className="relative h-full" style={{ background: '#080f24' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.15)' }}>
          <span style={{ color: '#64748b' }}><IcoSearch size={14} /></span>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar produto, código ou categoria..."
            className="flex-1 bg-transparent text-white placeholder-slate-600 outline-none"
            style={{ fontSize: 11, fontFamily: 'inherit' }} />
          {search && <button onClick={() => setSearch('')} className="text-slate-500 hover:text-white text-xs">✕</button>}
        </div>
        {(['todos', 'ok', 'low', 'zero'] as const).map(f => (
          <button key={f} onClick={() => setFilterStatus(f)}
            className="px-2.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap"
            style={filterStatus === f
              ? { background: 'rgba(0,240,255,0.15)', color: '#00F0FF', border: '1px solid rgba(0,240,255,0.3)' }
              : { background: '#1C2541', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
            {f === 'todos' ? 'Todos' : f === 'ok' ? 'OK' : f === 'low' ? 'Baixo' : 'Zerado'}
          </button>
        ))}
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-2 rounded-xl font-semibold whitespace-nowrap"
          style={{ background: '#00F0FF', color: '#000000', fontSize: 11 }}>
          + Novo
        </button>
      </div>

      {saved && (
        <div className="absolute top-14 right-4 z-20 px-4 py-2 rounded-xl text-xs font-semibold"
          style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>
          ✓ {saved}
        </div>
      )}

      <div style={{ overflowY: 'auto', maxHeight: 340 }}>
        <table className="w-full" style={{ fontSize: 10 }}>
          <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            <tr style={{ background: '#000000', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {['Produto', 'Cat.', 'Qtd.', 'Custo', 'Venda', 'Status', 'Ações'].map(h => (
                <th key={h} className="px-3 py-2.5 text-left font-semibold text-slate-400 whitespace-nowrap" style={{ fontSize: 9 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0
              ? <tr><td colSpan={7} className="px-3 py-10 text-center text-slate-500 text-xs">Nenhum produto encontrado.</td></tr>
              : filtered.map((p, i) => {
                const b = badge(p)
                return (
                  <tr key={p.code}
                    style={{ background: i % 2 === 0 ? 'rgba(28,37,65,0.3)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td className="px-3 py-2.5">
                      <div className="text-slate-200 font-medium" style={{ fontSize: 10 }}>{p.name}</div>
                      <div className="font-mono-data text-slate-600" style={{ fontSize: 8 }}>{p.code}</div>
                    </td>
                    <td className="px-3 py-2.5 text-slate-400" style={{ fontSize: 9 }}>{p.cat}</td>
                    <td className="px-3 py-2.5 font-bold" style={{ color: p.qty === 0 ? '#f87171' : p.qty <= p.minQty ? '#fbbf24' : '#e2e8f0' }}>{p.qty}</td>
                    <td className="px-3 py-2.5 text-slate-400">R$ {p.cost.toFixed(2)}</td>
                    <td className="px-3 py-2.5 text-slate-300">R$ {p.price.toFixed(2)}</td>
                    <td className="px-3 py-2.5">
                      <span className="px-2 py-0.5 rounded-full font-semibold" style={{ background: b.bg, color: b.color, fontSize: 8 }}>{b.label}</span>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex gap-2">
                        <button onClick={() => openEdit(p)} className="text-slate-400 hover:text-white transition-colors" style={{ fontSize: 9 }}>Editar</button>
                        {deleteId === p.code
                          ? <><button onClick={() => { setProducts(prev => prev.filter(x => x.code !== p.code)); setDeleteId(null) }} className="font-bold" style={{ color: '#f87171', fontSize: 9 }}>Confirmar</button>
                              <button onClick={() => setDeleteId(null)} className="text-slate-500" style={{ fontSize: 9 }}>Não</button></>
                          : <button onClick={() => setDeleteId(p.code)} className="transition-colors" style={{ color: '#f87171', fontSize: 9 }}>Excluir</button>
                        }
                      </div>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-4 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex gap-4">
          {[{ c: '#4ade80', l: 'OK' }, { c: '#fbbf24', l: 'Baixo' }, { c: '#f87171', l: 'Zerado' }].map(x => (
            <div key={x.l} className="flex items-center gap-1.5 text-xs text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: x.c }} />{x.l}
            </div>
          ))}
        </div>
        <span className="text-xs text-slate-500">{filtered.length} / {products.length} produtos</span>
      </div>

      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center z-30"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}>
          <div className="w-80 rounded-2xl p-5" style={{ background: '#0d1b35', border: '1px solid rgba(0,240,255,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-white text-sm">{editing ? 'Editar Produto' : 'Novo Produto'}</span>
              <button onClick={() => setShowModal(false)} className="text-slate-500 hover:text-white transition-colors"><IcoX /></button>
            </div>
            <div className="space-y-2.5">
              <div>
                <label className="text-xs text-slate-400 mb-1 block font-medium">Nome do Produto *</label>
                <input type="text" value={form.name} onChange={setF('name')} placeholder="Ex: Arduino Uno R3"
                  className="w-full px-3 py-2 rounded-xl text-white placeholder-slate-600 outline-none text-xs"
                  style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.15)', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block font-medium">Código de Barras</label>
                <input type="text" value={form.code} onChange={setF('code')} placeholder="Gerado automaticamente se vazio"
                  className="w-full px-3 py-2 rounded-xl text-white placeholder-slate-600 outline-none text-xs font-mono-data"
                  style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.15)', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block font-medium">Categoria</label>
                <select value={form.cat} onChange={setF('cat')}
                  className="w-full px-3 py-2 rounded-xl text-white outline-none text-xs"
                  style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.15)', fontFamily: 'inherit' }}>
                  {cats.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[{ k: 'qty', l: 'Qtd.' }, { k: 'cost', l: 'Custo R$' }, { k: 'price', l: 'Venda R$' }].map(f => (
                  <div key={f.k}>
                    <label className="text-xs text-slate-400 mb-1 block font-medium">{f.l}</label>
                    <input type="number" min="0" step="0.01" value={form[f.k as keyof typeof form]} onChange={setF(f.k)}
                      className="w-full px-2 py-2 rounded-xl text-white outline-none text-xs"
                      style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.15)', fontFamily: 'inherit' }} />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block font-medium">Qtd. Mínima (ponto de recompra)</label>
                <input type="number" min="1" value={form.minQty} onChange={setF('minQty')}
                  className="w-full px-3 py-2 rounded-xl text-white outline-none text-xs"
                  style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.15)', fontFamily: 'inherit' }} />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm text-slate-400"
                style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.07)' }}>Cancelar</button>
              <button onClick={save}
                className="flex-1 py-2.5 rounded-xl font-semibold text-sm"
                style={{ background: '#00F0FF', color: '#000000' }}>
                {editing ? 'Salvar' : 'Adicionar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── 5. PDV ────────────────────────────────────────────────────────────────────

function PDVScreen({ cart, setCart, payment, setPayment, discountStr, setDiscountStr, onFinalize }: {
  cart: CartItem[]; setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
  payment: string; setPayment: (v: string) => void
  discountStr: string; setDiscountStr: (v: string) => void
  onFinalize: () => void
}) {
  const [search, setSearch] = useState('')
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const discount = parseFloat(discountStr.replace(',', '.')) || 0
  const subtotal = cart.reduce((s, i) => s + i.qty * i.price, 0)
  const total = Math.max(0, subtotal - discount)
  const results = search.trim().length > 0
    ? PRODUCT_CATALOG.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.code.includes(search)).slice(0, 5)
    : []

  function addToCart(p: StockProduct) {
    setCart(prev => {
      const ex = prev.find(i => i.id === p.code)
      if (ex) return prev.map(i => i.id === p.code ? { ...i, qty: Math.min(i.qty + 1, i.stock) } : i)
      return [...prev, { id: p.code, name: p.name, price: p.price, qty: 1, stock: p.qty }]
    })
    setSearch(''); setShowResults(false)
    setTimeout(() => searchRef.current?.focus(), 50)
  }

  function changeQty(id: string, delta: number) {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(0, Math.min(i.qty + delta, i.stock)) } : i).filter(i => i.qty > 0))
  }

  return (
    <div className="flex h-full" style={{ background: '#080f24' }}>
      <div className="flex-1 flex flex-col p-3" style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="relative mb-3">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
            style={{ background: '#1C2541', border: '2px solid rgba(0,240,255,0.4)' }}>
            <span style={{ color: '#64748b' }}><IcoSearch size={16} /></span>
            <input ref={searchRef} type="text" value={search}
              onChange={e => { setSearch(e.target.value); setShowResults(true) }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 160)}
              placeholder="Código de barras ou nome do produto..."
              className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-sm"
              style={{ fontFamily: 'inherit' }} />
            <span className="font-mono-data px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,240,255,0.1)', color: '#00F0FF', fontSize: 9 }}>F2</span>
          </div>
          {showResults && results.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 rounded-xl overflow-hidden z-10"
              style={{ background: '#000000', border: '1px solid rgba(0,240,255,0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
              {results.map(r => (
                <div key={r.code}
                  className="flex items-center justify-between px-4 py-3 cursor-pointer transition-colors"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                  onMouseDown={() => addToCart(r)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,240,255,0.07)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                  <div>
                    <div className="text-slate-200 text-sm font-medium">{r.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono-data text-slate-500" style={{ fontSize: 9 }}>{r.code}</span>
                      <span className="px-1.5 py-0.5 rounded-full"
                        style={r.qty === 0 ? { background: 'rgba(248,113,113,0.1)', color: '#f87171', fontSize: 8 } : { background: 'rgba(34,197,94,0.1)', color: '#4ade80', fontSize: 8 }}>
                        {r.qty === 0 ? 'Sem estoque' : `${r.qty} un`}
                      </span>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-sm ml-4">R$ {r.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto" style={{ maxHeight: 220 }}>
          {cart.length === 0
            ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-600 py-10">
                <IcoShoppingCart size={30} />
                <p className="text-xs mt-2 text-center">Nenhum item. Busque um produto acima.</p>
              </div>
            )
            : cart.map(item => (
              <div key={item.id} className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex-1 min-w-0">
                  <div className="text-slate-200 text-sm font-medium truncate">{item.name}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-slate-500 text-xs">R$ {item.price.toFixed(2)} un.</span>
                    <span className="px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80', fontSize: 8 }}>{item.stock} em estoque</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex items-center rounded-lg" style={{ background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.15)' }}>
                    <button onClick={() => changeQty(item.id, -1)} className="px-2.5 py-1.5 text-slate-400 hover:text-white transition-colors text-sm leading-none">−</button>
                    <span className="px-2 text-white text-sm font-bold min-w-[22px] text-center">{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)} className="px-2.5 py-1.5 text-slate-400 hover:text-white transition-colors text-sm leading-none">+</button>
                  </div>
                  <span className="text-white font-semibold text-sm w-16 text-right">R$ {(item.qty * item.price).toFixed(2)}</span>
                  <button onClick={() => setCart(prev => prev.filter(i => i.id !== item.id))} className="text-slate-600 hover:text-red-400 transition-colors text-sm ml-1">✕</button>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-3">
          <div className="text-xs text-slate-500 mb-2">Forma de pagamento</div>
          <div className="flex gap-1.5">
            {[{ id: 'dinheiro', l: 'Dinheiro' }, { id: 'credito', l: 'Crédito' }, { id: 'debito', l: 'Débito' }, { id: 'pix', l: 'PIX' }].map(m => (
              <button key={m.id} onClick={() => setPayment(m.id)}
                className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all"
                style={payment === m.id
                  ? { background: '#00F0FF', color: '#000000', boxShadow: '0 0 12px rgba(0,240,255,0.2)' }
                  : { background: '#1C2541', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
                {m.l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4" style={{ width: 200, flexShrink: 0 }}>
        <div className="text-white font-semibold text-sm mb-4">Resumo</div>
        <div className="space-y-2.5 flex-1">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Itens ({cart.reduce((s, i) => s + i.qty, 0)})</span>
            <span className="text-slate-200">R$ {subtotal.toFixed(2)}</span>
          </div>
          <div>
            <div className="text-xs text-slate-400 mb-1">Desconto (R$)</div>
            <input type="text" value={discountStr} onChange={e => setDiscountStr(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg text-sm outline-none text-right font-semibold"
              style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171', fontFamily: 'inherit' }} />
          </div>
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <div className="flex justify-between items-baseline">
            <span className="text-slate-200 font-semibold">Total</span>
            <span className="text-white font-bold text-xl">R$ {total.toFixed(2)}</span>
          </div>
        </div>
        <div className="space-y-2 mt-5">
          <button onClick={() => setCart([])}
            className="w-full py-2 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
            style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.07)' }}>
            Limpar venda
          </button>
          <button onClick={onFinalize} disabled={cart.length === 0}
            className="w-full py-3.5 rounded-xl text-sm font-bold transition-all"
            style={cart.length === 0
              ? { background: '#1C2541', color: '#4a5568', cursor: 'not-allowed' }
              : { background: '#00F0FF', color: '#000000', boxShadow: '0 0 24px rgba(0,240,255,0.35)' }}>
            Finalizar →
          </button>
        </div>
      </div>
    </div>
  )
}

// ── 6. Finalização ────────────────────────────────────────────────────────────

function FinalizacaoScreen({ cart, discountStr, payment, onNewSale }: {
  cart: CartItem[]; discountStr: string; payment: string; onNewSale: () => void
}) {
  const [confirmed, setConfirmed] = useState(false)
  const [actionFeedback, setActionFeedback] = useState('')
  const displayCart = cart.length > 0 ? cart : [
    { id: '1', name: 'Arduino Mega 2560', price: 149.90, qty: 1, stock: 46 },
    { id: '2', name: 'Jumper Kit 65pcs',  price: 19.90,  qty: 2, stock: 88 },
    { id: '3', name: 'Protoboard 830pts', price: 34.90,  qty: 1, stock: 31 },
  ]
  const discount = parseFloat(discountStr.replace(',', '.')) || (cart.length > 0 ? 0 : 12)
  const subtotal = displayCart.reduce((s, i) => s + i.qty * i.price, 0)
  const total = Math.max(0, subtotal - discount)
  const payLabel: Record<string, string> = { pix: 'PIX', dinheiro: 'Dinheiro', credito: 'Cartão Crédito', debito: 'Cartão Débito' }
  const saleId = '#VD-2847'
  const now = new Date()

  function doAction(a: string) { setActionFeedback(`${a} enviado`); setTimeout(() => setActionFeedback(''), 2500) }

  if (confirmed) {
    return (
      <div className="flex items-center justify-center" style={{ background: '#080f24', minHeight: 460 }}>
        <div className="text-center max-w-xs px-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' }}>
            <IcoCheck size={40} />
          </div>
          <div className="text-white font-bold text-xl mb-1">Venda Confirmada!</div>
          <div className="text-slate-400 text-sm mb-1">
            <span className="font-mono-data" style={{ color: '#38BDF8' }}>{saleId}</span> registrada com sucesso.
          </div>
          <div className="text-slate-500 text-xs mb-2">Baixa automática realizada no estoque.</div>
          <div className="font-extrabold text-2xl mb-6" style={{ color: '#00F0FF' }}>R$ {total.toFixed(2)}</div>
          <div className="flex gap-2 justify-center mb-3">
            {['🖨 Imprimir', '💬 WhatsApp', '📧 E-mail'].map(a => (
              <button key={a} onClick={() => doAction(a)}
                className="px-3 py-2 rounded-xl text-slate-300 hover:text-white transition-all"
                style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.07)', fontSize: 10 }}>{a}</button>
            ))}
          </div>
          {actionFeedback && <div className="text-xs mb-3" style={{ color: '#4ade80' }}>✓ {actionFeedback}</div>}
          <button onClick={() => { setConfirmed(false); onNewSale() }}
            className="px-7 py-2.5 rounded-xl font-semibold text-sm"
            style={{ background: '#00F0FF', color: '#000000' }}>
            Nova Venda
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2" style={{ background: '#080f24', minHeight: 460 }}>
      <div className="p-4 flex flex-col" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="text-white font-semibold text-sm mb-3">
          Confirmar Venda <span className="font-mono-data" style={{ color: '#38BDF8', fontSize: 11 }}>{saleId}</span>
        </div>
        <div className="rounded-xl overflow-hidden mb-3" style={{ border: '1px solid rgba(255,255,255,0.06)', maxHeight: 160, overflowY: 'auto' }}>
          {displayCart.map((item, i) => (
            <div key={item.id} className="flex items-center justify-between px-3 py-2"
              style={{ background: i % 2 === 0 ? 'rgba(28,37,65,0.45)' : 'rgba(28,37,65,0.15)', borderBottom: i < displayCart.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <div>
                <div className="text-slate-200" style={{ fontSize: 10 }}>{item.name}</div>
                <div className="text-slate-500" style={{ fontSize: 9 }}>x{item.qty} · R$ {item.price.toFixed(2)}</div>
              </div>
              <span className="text-slate-300 font-semibold ml-4" style={{ fontSize: 10 }}>R$ {(item.qty * item.price).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 mb-4">
          <div className="flex justify-between" style={{ fontSize: 11 }}><span className="text-slate-500">Subtotal</span><span className="text-slate-300">R$ {subtotal.toFixed(2)}</span></div>
          {discount > 0 && <div className="flex justify-between" style={{ fontSize: 11 }}><span className="text-slate-500">Desconto</span><span style={{ color: '#f87171' }}>− R$ {discount.toFixed(2)}</span></div>}
          <div className="flex justify-between" style={{ fontSize: 11 }}><span className="text-slate-500">Pagamento</span><span style={{ color: '#38BDF8' }}>{payLabel[payment] || 'PIX'}</span></div>
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <div className="flex justify-between items-baseline">
            <span className="text-slate-200 font-bold text-sm">TOTAL</span>
            <span className="font-extrabold" style={{ color: '#00F0FF', fontSize: 20 }}>R$ {total.toFixed(2)}</span>
          </div>
        </div>
        <button onClick={() => setConfirmed(true)}
          className="w-full py-3.5 rounded-xl font-bold text-sm mb-2 transition-all hover:scale-105"
          style={{ background: '#00F0FF', color: '#000000', boxShadow: '0 0 24px rgba(0,240,255,0.32)' }}>
          Confirmar Venda
        </button>
        <div className="flex gap-2">
          {['🖨 Imprimir', '💬 WhatsApp', '📧 E-mail'].map(a => (
            <button key={a} onClick={() => doAction(a)}
              className="flex-1 py-2 rounded-xl text-slate-400 hover:text-white transition-colors"
              style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.07)', fontSize: 10 }}>{a}</button>
          ))}
        </div>
        {actionFeedback && <div className="text-center text-xs mt-2" style={{ color: '#4ade80' }}>✓ {actionFeedback}</div>}
      </div>

      <div className="p-4 flex flex-col">
        <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Prévia do Comprovante</div>
        <div className="flex-1 rounded-xl p-4 font-mono-data overflow-y-auto" style={{ background: '#ffffff', color: '#0f172a' }}>
          <div className="text-center mb-3">
            <div className="font-bold" style={{ fontSize: 13, color: '#00a3b0' }}>HEXATECH</div>
            <div style={{ fontSize: 9, color: '#475569' }}>TechParts Curitiba LTDA</div>
            <div style={{ fontSize: 8, color: '#94a3b8' }}>CNPJ: 12.345.678/0001-90</div>
          </div>
          <div className="py-2 text-center" style={{ borderTop: '1px dashed #d1d5db', borderBottom: '1px dashed #d1d5db', fontSize: 8, color: '#475569' }}>
            <div>CUPOM NÃO FISCAL</div>
            <div>{saleId} — {now.toLocaleDateString('pt-BR')} {now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
          </div>
          <div className="py-2" style={{ fontSize: 8 }}>
            {displayCart.map((item, i) => (
              <div key={i} className="flex justify-between mb-0.5">
                <span style={{ color: '#334155' }}>{item.name} x{item.qty}</span>
                <span>{(item.qty * item.price).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="pt-2" style={{ borderTop: '1px dashed #d1d5db', fontSize: 8 }}>
            <div className="flex justify-between"><span style={{ color: '#64748b' }}>Subtotal</span><span>{subtotal.toFixed(2)}</span></div>
            {discount > 0 && <div className="flex justify-between" style={{ color: '#dc2626' }}><span>Desconto</span><span>-{discount.toFixed(2)}</span></div>}
            <div className="flex justify-between font-bold mt-1" style={{ fontSize: 10 }}>
              <span>TOTAL {(payLabel[payment] || 'PIX').toUpperCase()}</span><span>{total.toFixed(2)}</span>
            </div>
          </div>
          <div className="text-center pt-3 mt-2" style={{ borderTop: '1px dashed #d1d5db', fontSize: 8, color: '#94a3b8' }}>
            <div>Obrigado pela preferência!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 7. Relatórios ─────────────────────────────────────────────────────────────

function RelatoriosScreen() {
  const [period, setPeriod] = useState<'7d' | '30d' | '3m'>('7d')

  const salesData7d  = [1820, 3240, 2180, 4760, 3890, 5120, 4280]
  const salesData30d = [1200, 2100, 1800, 3200, 2700, 4100, 3500, 2900, 4200, 3800, 5100, 4400, 3700, 4900, 5300, 4100, 3600, 4800, 5600, 4300, 3900, 5100, 4700, 5400, 4200, 4800, 5200, 4600, 5000, 5500]
  const salesData3m  = [42000, 61000, 57000]

  const raw = period === '7d' ? salesData7d : period === '30d' ? salesData30d : salesData3m
  const labels7d  = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
  const labels30d = Array.from({ length: 30 }, (_, i) => `${i + 1}`)
  const labels3m  = ['Jul', 'Ago', 'Set']
  const labels = period === '7d' ? labels7d : period === '30d' ? labels30d : labels3m

  const total = raw.reduce((a, b) => a + b, 0)
  const avg = total / raw.length
  const maxVal = Math.max(...raw)
  const barW = Math.floor(240 / raw.length) - 2

  const topProducts = [
    { name: 'Arduino Mega 2560',     qty: 34, rev: 5096.60, color: '#00F0FF' },
    { name: 'ESP32 Dev Board',       qty: 89, rev: 4886.10, color: '#38BDF8' },
    { name: 'Raspberry Pi 4 4GB',    qty: 8,  rev: 4799.20, color: '#818cf8' },
    { name: 'Jumper Kit 65pcs',      qty: 210, rev: 4179.00, color: '#34d399' },
    { name: 'Módulo Bluetooth HC-05', qty: 82, rev: 3681.80, color: '#fbbf24' },
  ]

  const categories = [
    { name: 'Microcontroladores', pct: 38, color: '#00F0FF' },
    { name: 'WiFi/BT',            pct: 24, color: '#38BDF8' },
    { name: 'SBC',                pct: 18, color: '#818cf8' },
    { name: 'Acessórios',         pct: 12, color: '#34d399' },
    { name: 'Outros',             pct: 8,  color: '#64748b' },
  ]

  return (
    <div className="p-4 h-full overflow-y-auto" style={{ background: '#080f24' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-white font-semibold text-sm">Relatórios e Análises</div>
        <div className="flex gap-1">
          {(['7d', '30d', '3m'] as const).map(p => (
            <button key={p} onClick={() => setPeriod(p)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={period === p
                ? { background: '#00F0FF', color: '#000000' }
                : { background: '#1C2541', color: '#64748b' }}>
              {p === '7d' ? '7 dias' : p === '30d' ? '30 dias' : '3 meses'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: 'Receita Total',    value: `R$ ${(total / 1000).toFixed(1)}k`, color: '#00F0FF' },
          { label: 'Média Diária',     value: `R$ ${avg.toFixed(0)}`,             color: '#38BDF8' },
          { label: 'Transações',       value: `${raw.length * 12}`,               color: '#4ade80' },
          { label: 'Margem Estimada',  value: '34.2%',                            color: '#fbbf24' },
        ].map(s => (
          <div key={s.label} className="rounded-xl p-2.5" style={{ background: '#1C2541', border: `1px solid ${s.color}20` }}>
            <div className="text-slate-500 mb-1" style={{ fontSize: 9 }}>{s.label}</div>
            <div className="font-bold text-xs" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="col-span-2 rounded-xl p-3" style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-slate-300 font-semibold mb-3" style={{ fontSize: 10 }}>
            Vendas — {period === '7d' ? 'Últimos 7 dias' : period === '30d' ? 'Últimos 30 dias' : 'Últimos 3 meses'}
          </div>
          <div className="relative" style={{ height: 80 }}>
            <svg viewBox={`0 0 ${Math.max(240, raw.length * (barW + 2))} 80`} className="w-full h-full">
              {raw.map((v, i) => {
                const h = Math.max(4, (v / maxVal) * 70)
                const x = i * (barW + 2)
                return (
                  <g key={i}>
                    <rect x={x} y={80 - h} width={Math.max(barW, 2)} height={h} rx={2}
                      fill={v === maxVal ? '#00F0FF' : 'rgba(0,240,255,0.3)'}
                      style={{ transition: 'height 0.3s' }} />
                  </g>
                )
              })}
            </svg>
          </div>
          <div className="flex justify-between mt-1">
            {(period !== '30d' ? labels : ['1', '10', '20', '30']).map(l => (
              <span key={l} style={{ color: '#64748b', fontSize: 8 }}>{l}</span>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-3" style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-slate-300 font-semibold mb-3" style={{ fontSize: 10 }}>Por Categoria</div>
          <div className="space-y-2">
            {categories.map(c => (
              <div key={c.name}>
                <div className="flex justify-between mb-0.5">
                  <span style={{ color: '#94a3b8', fontSize: 8 }}>{c.name}</span>
                  <span className="font-semibold" style={{ color: c.color, fontSize: 8 }}>{c.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${c.pct}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="px-3 py-2.5 font-semibold text-slate-300" style={{ background: '#000000', fontSize: 10 }}>
          Top Produtos — Receita
        </div>
        {topProducts.map((p, i) => (
          <div key={p.name} className="flex items-center gap-3 px-3 py-2"
            style={{ background: i % 2 === 0 ? 'rgba(28,37,65,0.4)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <span className="font-bold w-4 text-center" style={{ color: p.color, fontSize: 10 }}>{i + 1}</span>
            <div className="flex-1">
              <div className="text-slate-200" style={{ fontSize: 10 }}>{p.name}</div>
              <div className="text-slate-500" style={{ fontSize: 8 }}>{p.qty} unidades vendidas</div>
            </div>
            <span className="font-semibold" style={{ color: p.color, fontSize: 10 }}>R$ {p.rev.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── 8. Configurações ──────────────────────────────────────────────────────────

function ConfiguracoesScreen({ user, onUpdate }: { user: AuthUser; onUpdate: (u: AuthUser) => void }) {
  const [tab, setTab] = useState<'perfil' | 'seguranca' | 'preferencias'>('perfil')
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar)
  const [selectedColor, setSelectedColor] = useState(user.color)
  const [saved, setSaved] = useState(false)

  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [passError, setPassError] = useState('')
  const [passSaved, setPassSaved] = useState(false)

  const [notifEmail, setNotifEmail] = useState(true)
  const [notifStock, setNotifStock] = useState(true)
  const [notifSales, setNotifSales] = useState(false)
  const [notifReport, setNotifReport] = useState(true)

  function saveProfile() {
    if (!name.trim()) return
    onUpdate({ ...user, name, email, avatar: selectedAvatar, color: selectedColor })
    setSaved(true); setTimeout(() => setSaved(false), 2500)
  }

  function savePassword() {
    setPassError('')
    if (currentPass.length < 3) { setPassError('Senha atual deve ter pelo menos 3 caracteres.'); return }
    if (newPass.length < 6) { setPassError('Nova senha deve ter pelo menos 6 caracteres.'); return }
    if (newPass !== confirmPass) { setPassError('Senhas não coincidem.'); return }
    setPassSaved(true); setCurrentPass(''); setNewPass(''); setConfirmPass('')
    setTimeout(() => setPassSaved(false), 2500)
  }

  return (
    <div className="p-4 h-full overflow-y-auto" style={{ background: '#080f24' }}>
      <div className="text-white font-semibold text-sm mb-4">Configurações</div>

      <div className="flex gap-1 mb-5">
        {(['perfil', 'seguranca', 'preferencias'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className="px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all"
            style={tab === t
              ? { background: '#00F0FF', color: '#000000' }
              : { background: '#1C2541', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
            {t === 'perfil' ? 'Perfil' : t === 'seguranca' ? 'Segurança' : 'Preferências'}
          </button>
        ))}
      </div>

      {tab === 'perfil' && (
        <div className="max-w-sm space-y-5">
          {/* Avatar preview */}
          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: '#000000', border: '1px solid rgba(0,240,255,0.1)' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0"
              style={{ background: selectedColor, color: '#000000', boxShadow: `0 0 20px ${selectedColor}40` }}>
              {/\p{Emoji}/u.test(selectedAvatar) ? selectedAvatar : initials(name || user.name)}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{name || user.name}</div>
              <div className="text-slate-500 text-xs mt-0.5 capitalize">{user.role}</div>
              <div className="text-xs mt-1" style={{ color: '#00F0FF' }}>Clique em um avatar abaixo para trocar</div>
            </div>
          </div>

          {/* Avatar grid */}
          <div>
            <label className="text-xs text-slate-400 mb-2 block font-medium">Escolha um Avatar</label>
            <div className="flex flex-wrap gap-2">
              {AVATAR_EMOJIS.map(emoji => (
                <button key={emoji} onClick={() => setSelectedAvatar(emoji)}
                  className="w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-all"
                  style={selectedAvatar === emoji
                    ? { background: selectedColor, border: `2px solid ${selectedColor}`, transform: 'scale(1.15)', boxShadow: `0 0 12px ${selectedColor}60` }
                    : { background: '#1C2541', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Color picker */}
          <div>
            <label className="text-xs text-slate-400 mb-2 block font-medium">Cor do Avatar</label>
            <div className="flex gap-2 flex-wrap">
              {AVATAR_COLORS.map(c => (
                <button key={c} onClick={() => setSelectedColor(c)}
                  className="w-7 h-7 rounded-full transition-all"
                  style={{ background: c, transform: selectedColor === c ? 'scale(1.25)' : 'scale(1)', boxShadow: selectedColor === c ? `0 0 10px ${c}80` : 'none', border: selectedColor === c ? '2px solid white' : '2px solid transparent' }} />
              ))}
            </div>
          </div>

          {/* Name & Email */}
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block font-medium">Nome</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl text-white placeholder-slate-600 outline-none text-sm"
              style={{ background: '#1C2541', border: `1px solid ${name !== user.name ? 'rgba(0,240,255,0.4)' : 'rgba(0,240,255,0.12)'}`, fontFamily: 'inherit' }} />
          </div>
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block font-medium">E-mail</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl text-white placeholder-slate-600 outline-none text-sm"
              style={{ background: '#1C2541', border: `1px solid ${email !== user.email ? 'rgba(0,240,255,0.4)' : 'rgba(0,240,255,0.12)'}`, fontFamily: 'inherit' }} />
          </div>
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block font-medium">Perfil de Acesso</label>
            <div className="px-3 py-2.5 rounded-xl flex items-center justify-between"
              style={{ background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.12)' }}>
              <span className="text-white text-sm capitalize">{user.role === 'admin' ? 'Administrador' : 'Operador'}</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(0,240,255,0.1)', color: '#00F0FF' }}>
                {user.role === 'admin' ? 'Acesso Total' : 'Acesso Limitado'}
              </span>
            </div>
          </div>

          {saved && (
            <div className="px-3 py-2.5 rounded-xl text-xs font-semibold"
              style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' }}>
              ✓ Perfil atualizado com sucesso!
            </div>
          )}
          <button onClick={saveProfile}
            className="w-full py-3 rounded-xl font-bold text-sm"
            style={{ background: '#00F0FF', color: '#000000', boxShadow: '0 0 20px rgba(0,240,255,0.25)' }}>
            Salvar Alterações
          </button>
        </div>
      )}

      {tab === 'seguranca' && (
        <div className="max-w-sm space-y-4">
          <div className="p-3 rounded-xl" style={{ background: '#000000', border: '1px solid rgba(0,240,255,0.1)' }}>
            <div className="flex items-center gap-2 text-xs">
              <span style={{ color: '#4ade80' }}><IcoShield size={14} /></span>
              <span className="text-slate-300">Autenticação em 2 fatores: <span style={{ color: '#4ade80' }}>Ativada</span></span>
            </div>
          </div>

          {[
            { k: 'currentPass', l: 'Senha Atual',      v: currentPass, s: setCurrentPass },
            { k: 'newPass',     l: 'Nova Senha',        v: newPass,     s: setNewPass },
            { k: 'confirmPass', l: 'Confirmar Senha',   v: confirmPass, s: setConfirmPass },
          ].map(f => (
            <div key={f.k}>
              <label className="text-xs text-slate-400 mb-1.5 block font-medium">{f.l}</label>
              <div className="flex items-center gap-2 px-3 rounded-xl"
                style={{ background: '#1C2541', border: '1px solid rgba(0,240,255,0.12)' }}>
                <span style={{ color: '#64748b', flexShrink: 0 }}><IcoLock size={14} /></span>
                <input type="password" value={f.v} onChange={e => f.s(e.target.value)}
                  placeholder={f.k === 'currentPass' ? 'Senha atual' : 'Mínimo 6 caracteres'}
                  className="flex-1 py-2.5 bg-transparent text-white placeholder-slate-600 outline-none text-sm"
                  style={{ fontFamily: 'inherit' }} />
              </div>
            </div>
          ))}

          {passError && (
            <div className="text-xs px-3 py-2 rounded-lg"
              style={{ background: 'rgba(248,113,113,0.1)', color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}>
              {passError}
            </div>
          )}
          {passSaved && (
            <div className="text-xs px-3 py-2 rounded-lg"
              style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' }}>
              ✓ Senha alterada com sucesso!
            </div>
          )}

          <button onClick={savePassword}
            className="w-full py-3 rounded-xl font-bold text-sm"
            style={{ background: '#00F0FF', color: '#000000' }}>
            Alterar Senha
          </button>

          <div className="pt-2">
            <div className="text-xs text-slate-400 mb-3 font-medium">Histórico de Acesso</div>
            {[
              { device: 'Chrome — Windows 11', time: 'Agora',               ip: '192.168.1.100', current: true },
              { device: 'Firefox — MacOS',      time: 'Ontem, 18:42',        ip: '187.45.23.11',  current: false },
              { device: 'Mobile — Android',     time: '12 set. 2026, 09:15', ip: '187.45.23.11',  current: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between py-2.5"
                style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div>
                  <div className="text-slate-300" style={{ fontSize: 10 }}>{s.device}</div>
                  <div className="text-slate-500" style={{ fontSize: 9 }}>{s.ip} · {s.time}</div>
                </div>
                {s.current
                  ? <span className="px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80', fontSize: 8 }}>Atual</span>
                  : <button className="text-xs" style={{ color: '#f87171', fontSize: 9 }}>Encerrar</button>
                }
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'preferencias' && (
        <div className="max-w-sm space-y-4">
          <div>
            <div className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">Notificações</div>
            <div className="space-y-3">
              {[
                { label: 'Alertas por e-mail',                   val: notifEmail, set: setNotifEmail },
                { label: 'Notificações de estoque baixo',        val: notifStock, set: setNotifStock },
                { label: 'Confirmação de vendas',                val: notifSales, set: setNotifSales },
                { label: 'Relatórios semanais automáticos',      val: notifReport, set: setNotifReport },
              ].map(n => (
                <div key={n.label} className="flex items-center justify-between px-3 py-3 rounded-xl"
                  style={{ background: '#1C2541', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-slate-300 text-xs">{n.label}</span>
                  <button onClick={() => n.set(v => !v)}
                    className="relative w-9 h-5 rounded-full transition-all flex-shrink-0"
                    style={{ background: n.val ? '#00F0FF' : '#374151' }}>
                    <span className="absolute top-0.5 w-4 h-4 rounded-full transition-all"
                      style={{ background: '#ffffff', left: n.val ? '18px' : '2px' }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">Tema de Cor do Acento</div>
            <div className="flex gap-2 flex-wrap">
              {[['#00F0FF', 'Ciano'], ['#38BDF8', 'Azul'], ['#818cf8', 'Índigo'], ['#34d399', 'Verde'], ['#fbbf24', 'Âmbar'], ['#f472b6', 'Rosa']].map(([c, label]) => (
                <button key={c} onClick={() => { setSelectedColor(c); onUpdate({ ...user, color: c }) }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                  style={user.color === c
                    ? { background: c, color: '#000000', boxShadow: `0 0 10px ${c}60` }
                    : { background: '#1C2541', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-xs text-slate-400 mb-2 font-medium">Zona Horária</div>
            <div className="text-slate-300 text-xs">America/Sao_Paulo (UTC-3)</div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}>Configurado automaticamente pelo servidor</div>
          </div>

          <div className="p-3 rounded-xl" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-xs text-slate-400 mb-2 font-medium">Idioma</div>
            <div className="text-slate-300 text-xs">🇧🇷 Português (Brasil)</div>
          </div>

          <button onClick={() => {}}
            className="w-full py-3 rounded-xl font-bold text-sm"
            style={{ background: '#00F0FF', color: '#000000' }}>
            Salvar Preferências
          </button>
        </div>
      )}
    </div>
  )
}

// ── Tour Section ──────────────────────────────────────────────────────────────

const TOUR_TABS_LOGGED: { id: AppPage; label: string }[] = [
  { id: 'dashboard',     label: 'Dashboard'     },
  { id: 'estoque',       label: 'Estoque'       },
  { id: 'pdv',           label: 'PDV'           },
  { id: 'relatorios',    label: 'Relatórios'    },
  { id: 'configuracoes', label: 'Configurações' },
]

function PlatformTourSection() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [authPage, setAuthPage] = useState<'login' | 'register'>('login')
  const [page, setPage] = useState<AppPage>('dashboard')
  const [cart, setCart] = useState<CartItem[]>([])
  const [payment, setPayment] = useState('pix')
  const [discountStr, setDiscountStr] = useState('0,00')

  function handleLogin(u: AuthUser) { setAuthUser(u); setPage('dashboard') }
  function handleLogout() { setAuthUser(null); setAuthPage('login') }
  function handleFinalize() { setPage('finalizacao') }
  function handleNewSale() { setCart([]); setDiscountStr('0,00'); setPage('pdv') }
  function handleNavigate(p: AppPage) { setPage(p) }

  const desc: Record<AppPage, string> = {
    dashboard:     'Visão executiva em tempo real — métricas, alertas de recompra e atalhos para cada módulo.',
    estoque:       'Gestão completa com busca ao vivo, filtros, CRUD de produtos e status de disponibilidade.',
    pdv:           'Frente de caixa: busque produtos, ajuste quantidades, aplique desconto e finalize a venda.',
    finalizacao:   'Confirmação da venda, comprovante digital e opções de impressão ou envio por WhatsApp.',
    relatorios:    'Análise de vendas por período, top produtos, categorias e métricas financeiras.',
    configuracoes: 'Edite seu perfil, avatar, senha, notificações e preferências de sistema.',
  }

  return (
    <section id="tour" className="py-24" style={{ background: '#0A192F' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00F0FF' }}>
            Tour Interativo
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Conheça a Plataforma por Dentro</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {authUser
              ? `Logado como ${authUser.name}. Navegue pelo sistema e interaja livremente.`
              : 'Faça login para explorar todas as telas. Ou cadastre-se — é grátis!'}
          </p>
        </div>

        {authUser && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {TOUR_TABS_LOGGED.map(tab => (
              <button key={tab.id} onClick={() => setPage(tab.id)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={page === tab.id
                  ? { background: '#00F0FF', color: '#000000', boxShadow: '0 0 20px rgba(0,240,255,0.25)' }
                  : { background: '#1C2541', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {authUser && (
          <p className="text-center text-slate-400 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            {desc[page]}
          </p>
        )}

        <div className="float-anim">
          {!authUser ? (
            authPage === 'login'
              ? <LoginScreen onLogin={handleLogin} onGoRegister={() => setAuthPage('register')} />
              : <RegisterScreen onRegister={handleLogin} onGoLogin={() => setAuthPage('login')} />
          ) : (
            <AppShell user={authUser} page={page} setPage={setPage} onLogout={handleLogout}>
              {page === 'dashboard'     && <DashboardScreen onNavigate={handleNavigate} user={authUser} />}
              {page === 'estoque'       && <EstoqueScreen />}
              {page === 'pdv'           && (
                <PDVScreen cart={cart} setCart={setCart} payment={payment} setPayment={setPayment}
                  discountStr={discountStr} setDiscountStr={setDiscountStr} onFinalize={handleFinalize} />
              )}
              {page === 'finalizacao'   && (
                <FinalizacaoScreen cart={cart} discountStr={discountStr} payment={payment} onNewSale={handleNewSale} />
              )}
              {page === 'relatorios'    && <RelatoriosScreen />}
              {page === 'configuracoes' && <ConfiguracoesScreen user={authUser} onUpdate={setAuthUser} />}
            </AppShell>
          )}
        </div>

        <div className="text-center mt-14">
          <a href="#contato"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{ background: '#00F0FF', color: '#000000', boxShadow: '0 0 32px rgba(0,240,255,0.3)' }}>
            Agendar Demonstração ao Vivo
            <IcoArrow />
          </a>
          <p className="text-slate-500 text-xs mt-3">Veja tudo isso funcionando com os dados reais da sua loja</p>
        </div>
      </div>
    </section>
  )
}

// ─── Metrics ──────────────────────────────────────────────────────────────────

function MetricsSection() {
  const metrics = [
    { value: '99.8%', label: 'Precisão de estoque alcançada', icon: <IcoCheck size={22} />, color: '#00F0FF' },
    { value: '-70%', label: 'Redução no tempo de espera em fila', icon: <IcoBolt size={22} />, color: '#38BDF8' },
    { value: '0%', label: 'Vendas duplicadas por falha de sincronização', icon: <IcoShield size={22} />, color: '#a78bfa' },
  ]

  return (
    <section
      id="beneficios"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #0A192F 0%, #0B132B 60%, #0A192F 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00F0FF' }}>
            Resultados
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Números que falam por si</h2>
          <p className="text-slate-400 text-lg">
            Resultados reais de clientes que transformaram sua gestão com a Hexatech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="text-center p-10 rounded-2xl"
              style={{ background: '#1C2541', border: `1px solid ${m.color}1a` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ background: `${m.color}12`, color: m.color }}
              >
                {m.icon}
              </div>
              <div className="metric-number mb-3" style={{ color: m.color }}>
                {m.value}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Desde que implementamos a Hexatech, nossa precisão de estoque foi de 87% para 99.8%. Simplesmente não perdemos mais vendas por não saber o que temos na loja.',
      name: 'Ricardo Almeida',
      role: 'Gerente de Operações',
      company: 'TechParts Curitiba',
      avatar: 'RA',
      color: '#00F0FF',
    },
    {
      quote: 'O atendimento no balcão ficou três vezes mais rápido. O sistema encontra o produto e confirma o estoque em segundos. Nossos clientes perceberam a diferença imediatamente.',
      name: 'Fernanda Costa',
      role: 'Proprietária',
      company: 'ElecShop BH',
      avatar: 'FC',
      color: '#38BDF8',
    },
    {
      quote: 'Paramos de congelar capital em produtos sem giro. Os alertas inteligentes nos ajudaram a liberar mais de R$ 80.000 que estavam parados no estoque.',
      name: 'Marcos Souza',
      role: 'Diretor Financeiro',
      company: 'Componentes Sul',
      avatar: 'MS',
      color: '#a78bfa',
    },
  ]

  return (
    <section id="depoimentos" className="py-24" style={{ background: '#0B132B' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00F0FF' }}>
            Depoimentos
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">O que dizem nossos clientes</h2>
          <p className="text-slate-400 text-lg">Lojistas que transformaram a gestão com a Hexatech.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="neo-card rounded-2xl p-8 flex flex-col gap-5">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, j) => <IcoStar key={j} filled />)}
              </div>
              <p className="text-slate-300 leading-relaxed flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: `${t.color}18`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  return (
    <section
      id="contato"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B132B 0%, #162040 55%, #0d1b35 100%)' }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 280,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.09) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-bold text-white mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Pronto para assumir o controle total da sua{' '}
          <span className="gradient-text">loja de eletrônicos?</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Sem compromisso. Demonstração personalizada em até 24h.
        </p>

        {sent ? (
          <div
            className="max-w-lg mx-auto p-8 rounded-2xl text-center"
            style={{ background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.25)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(0,240,255,0.12)', color: '#00F0FF' }}
            >
              <IcoCheck size={28} />
            </div>
            <div className="text-xl font-bold text-white mb-2">Solicitação recebida!</div>
            <p className="text-slate-400 text-sm">
              Nosso especialista vai entrar em contato com <span className="text-white font-medium">{email}</span> em até 24h para agendar sua demonstração personalizada.
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.corporativo.com"
              required
              className="flex-1 px-5 py-4 rounded-xl text-white placeholder-slate-500 text-sm outline-none"
              style={{
                background: '#1C2541',
                border: '1px solid rgba(0,240,255,0.2)',
                fontFamily: 'inherit',
              }}
              onFocus={e => { (e.target as HTMLElement).style.borderColor = 'rgba(0,240,255,0.5)' }}
              onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(0,240,255,0.2)' }}
            />
            <button
              type="submit"
              className="px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ background: '#00F0FF', color: '#0B132B', boxShadow: '0 0 32px rgba(0,240,255,0.3)' }}
            >
              Falar com Especialista
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <IcoShield size={14} /> Sem spam
          </span>
          <span className="flex items-center gap-1.5">
            <IcoSmallCheck /> LGPD compliant
          </span>
          <span className="flex items-center gap-1.5">
            <IcoSmallCheck /> Resposta em até 24h
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const cols = [
    { title: 'Produto', links: ['Soluções', 'Recursos', 'Integrações', 'Preços', 'Changelog'] },
    { title: 'Empresa', links: ['Sobre', 'Blog', 'Carreiras', 'Contato', 'Imprensa'] },
    { title: 'Suporte', links: ['Documentação', 'API', 'Status', 'Central de Ajuda', 'Comunidade'] },
  ]

  return (
    <footer style={{ background: '#060d1f', borderTop: '1px solid rgba(0,240,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.28)', color: '#00F0FF' }}
              >
                <IcoCpu size={18} />
              </div>
              <span className="text-xl font-bold text-white">Hexa<span style={{ color: '#00F0FF' }}>tech</span></span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Sistema especialista em gestão de varejo de hardware e eletrônicos.
            </p>
            <div className="flex gap-2.5">
              {[<IcoLinkedin />, <IcoInstagram />, <IcoYoutube />].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00F0FF'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,240,255,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#64748b'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-slate-500 text-sm transition-colors hover:text-slate-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-slate-600 text-sm">© 2025 Hexatech. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Termos de Uso</a>
            <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Política de Privacidade</a>
            <div className="flex gap-2">
              {['SSL', 'LGPD'].map(s => (
                <span
                  key={s}
                  className="font-mono-data text-xs px-2 py-0.5 rounded"
                  style={{ color: '#4a5568', border: '1px solid #1e2d4a' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <PlatformTourSection />
        <MetricsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
