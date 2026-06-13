// DSS Industria — Delivery Model (SaaS / Custom / Consulting) + About sections

function DSSDeliveryModel() {
  const d = window.DSS.deliveryModel;
  return (
    <section id="model" style={{ background: 'var(--bg-gray)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>{d.label}</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 14,
          }}>{d.h2}</h2>
          <p style={{ fontSize: 15, color: 'var(--body)', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
            {d.sub}
          </p>
        </div>

        {/* 3 model cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 36 }}
          className="delivery-grid">
          {d.cards.map((card, i) => (
            <div key={i} className="reveal card" style={{ padding: '32px 28px', transitionDelay: `${i * 0.1}s` }}>
              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${card.color}14`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, fontSize: 24, color: card.color, fontWeight: 700,
              }}>
                {card.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700,
                color: 'var(--navy)', marginBottom: 10, lineHeight: 1.3,
              }}>{card.type}</h3>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.72, marginBottom: 20 }}>
                {card.desc}
              </p>
              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {card.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
                    background: `${card.color}10`, color: card.color,
                    border: `1px solid ${card.color}28`,
                    borderRadius: 100, padding: '3px 10px',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)',
            letterSpacing: '0.04em', marginBottom: 20,
          }}>
            {d.cta}
          </p>
          <a href={d.waUrl} target="_blank" rel="noopener" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {d.waCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function DSSAbout() {
  const u = window.DSS.ui.about;
  return (
    <section id="tentang" style={{ background: 'white', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>{u.label}</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(22px, 2.5vw, 32px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 18,
          }}>{u.h2}</h2>
          <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.8, marginBottom: 28 }}>
            {u.p}
          </p>
          <a href="https://digdayasolusi.co.id" target="_blank" rel="noopener" className="btn btn-outline">
            {u.company}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DSSDeliveryModel, DSSAbout });
