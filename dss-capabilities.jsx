// DSS Industria — Capabilities + How It Works
function DSSCapabilities() {
  const caps = window.DSS.capabilities;
  const u = window.DSS.ui.caps;
  return (
    <section id="kemampuan" style={{ background: 'var(--bg-gray)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>{u.label}</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em',
          }}>{u.h2}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
          className="caps-grid">
          {caps.map((cap, i) => (
            <div key={i} className="reveal card" style={{ padding: '22px 20px', transitionDelay: `${(i % 4) * 0.07}s` }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${cap.color}18`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14,
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, color: cap.color, letterSpacing: '0.04em' }}>
                  {cap.icon}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, color: 'var(--navy)', marginBottom: 6, lineHeight: 1.35 }}>
                {cap.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--body)', lineHeight: 1.55 }}>
                {cap.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DSSHowItWorks() {
  const steps = window.DSS.howItWorks;
  const u = window.DSS.ui.howItWorks;
  return (
    <section id="cara-kerja" style={{ background: 'white', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>{u.label}</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em',
          }}>{u.h2}</h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 2,
            background: 'repeating-linear-gradient(90deg, var(--amber-200) 0, var(--amber-200) 8px, transparent 8px, transparent 16px)',
            zIndex: 0,
          }} className="steps-line" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative', zIndex: 1 }}
            className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="reveal" style={{ textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'white', border: '2px solid var(--amber-200)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 16px rgba(245,158,11,0.12)',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: 'var(--amber)' }}>
                    {step.step}
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, lineHeight: 1.3 }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{
          textAlign: 'center', marginTop: 40, padding: '16px 24px',
          background: 'var(--bg-gray)', borderRadius: 10,
          fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--body)', lineHeight: 1.6,
        }}>
          {u.customNote}
          <a href="https://digdayasolusi.co.id" target="_blank" rel="noopener"
            style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>
            {u.customLink}
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DSSCapabilities, DSSHowItWorks });
