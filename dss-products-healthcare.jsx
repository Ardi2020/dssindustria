// DSS Industria — Healthcare Products Section
function HealthcareCard({ product, onOpen, fullWidth }) {
  const [hovered, setHovered] = React.useState(false);
  const u = window.DSS.ui.cards;
  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px',
        borderTop: hovered ? '3px solid var(--teal)' : '3px solid transparent',
        transition: 'all 0.25s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
        <span className="badge badge-pilot">{product.badge}</span>
        {fullWidth && (
          <button onClick={() => onOpen(product)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: 4 }}>
            {u.tonton}
          </button>
        )}
      </div>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: fullWidth ? 22 : 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>
        {product.name}
      </h3>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--teal)', fontWeight: 600, marginBottom: 10 }}>
        {product.tagline}
      </p>
      <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, marginBottom: product.chip ? 14 : 20 }}>
        {product.description}
      </p>
      {product.chip && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: '#CCFBF1', color: '#134E4A',
          border: '1px solid #99F6E4',
          borderRadius: 100, padding: '5px 12px',
          fontFamily: 'var(--font-mono)', fontSize: 11, marginBottom: 20,
        }}>
          ◎ {product.chip}
        </div>
      )}
      {!fullWidth && (
        <button onClick={() => onOpen(product)} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
          {u.demoLabel}
        </button>
      )}
      {fullWidth && (
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
          <button onClick={() => onOpen(product)} className="btn btn-outline btn-sm">
            {u.detail}
          </button>
          <a href={window.DSS.healthcare.waUrl} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
            {u.hubungi}
          </a>
        </div>
      )}
    </div>
  );
}

function DSSProductsHealthcare() {
  const d = window.DSS.healthcare;
  const u = window.DSS.ui.cards;
  const openModal = (p) => window.__dssOpenModal && window.__dssOpenModal(p);
  const smallCards = d.products.filter(p => !p.fullWidth);
  const wideCard   = d.products.find(p => p.fullWidth);

  return (
    <section id="healthcare" style={{ background: 'var(--bg-warm)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12, color: 'var(--teal)' }}>{d.label}</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 14,
          }}>{d.h2}</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', maxWidth: 600 }}>{d.intro}</p>
        </div>

        {/* 2 small cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 20 }}
          className="hc-grid">
          {smallCards.map((p, i) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <HealthcareCard product={p} onOpen={openModal} fullWidth={false} />
            </div>
          ))}
        </div>

        {/* JadwalAI — full width */}
        {wideCard && (
          <div className="reveal" style={{ marginBottom: 32 }}>
            <HealthcareCard product={wideCard} onOpen={openModal} fullWidth={true} />
          </div>
        )}

        {/* Pilot CTA strip */}
        <div className="reveal" style={{
          background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(20,184,166,0.03))',
          border: '1px solid rgba(20,184,166,0.2)',
          borderRadius: 14, padding: '20px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, flexWrap: 'wrap', marginBottom: 24,
        }}>
          <p style={{ fontSize: 15, color: 'var(--navy)', fontWeight: 500 }}>
            {d.pilotCta} →
          </p>
          <a href={d.waUrl} target="_blank" rel="noopener" className="btn btn-primary btn-sm"
            style={{ background: 'var(--teal)', boxShadow: '0 4px 16px rgba(20,184,166,0.25)' }}>
            {u.hubungi}
          </a>
        </div>

        {/* Privacy box */}
        <div className="reveal" style={{
          background: '#F0FDFA', border: '1px solid #99F6E4',
          borderRadius: 14, padding: '20px 24px',
          display: 'flex', alignItems: 'flex-start', gap: 14,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0,
            background: '#CCFBF1', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <p style={{ fontSize: 13, color: '#134E4A', lineHeight: 1.7 }}>
            🔒 {d.privacy}
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DSSProductsHealthcare });
