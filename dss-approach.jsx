// DSS Industria — Approach section
function DSSApproach() {
  const d = window.DSS.pendekatan;
  return (
    <section style={{ background: 'var(--bg-gray)', padding: '88px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>{d.label}</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em',
            maxWidth: 640, margin: '0 auto',
          }}>{d.h2}</h2>
        </div>

        {/* 3 cards with arrows */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, position: 'relative' }}
          className="approach-row">
          {d.cards.map((card, i) => (
            <React.Fragment key={i}>
              <div className="reveal card" style={{
                flex: 1, padding: '28px 24px',
                borderRadius: 16,
                position: 'relative',
                transitionDelay: `${i * 0.1}s`,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${card.color}14`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <span style={{ fontSize: 20, color: card.color, fontWeight: 700 }}>{card.icon}</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
                  color: card.color, letterSpacing: '0.06em',
                  marginBottom: 8, textTransform: 'uppercase',
                }}>{card.role}</div>
                <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{card.desc}</p>
              </div>
              {i < d.cards.length - 1 && (
                <div style={{
                  display: 'flex', alignItems: 'center', padding: '0 10px',
                  flexShrink: 0, zIndex: 1,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="reveal" style={{
          textAlign: 'center', marginTop: 36,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--muted)', letterSpacing: '0.05em', lineHeight: 1.8,
        }}>
          {d.footer}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DSSApproach });
