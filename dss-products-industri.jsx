// DSS Industria — Industri Products Section
function BrowserMockup() {
  return (
    <div style={{
      background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: 10,
      overflow: 'hidden', boxShadow: '0 4px 16px rgba(15,27,45,0.06)',
    }}>
      <div style={{
        background: '#F1F5F9', borderBottom: '1px solid var(--border)',
        padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        {['#FF5F56','#FFBD2E','#27C93F'].map((c,i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.7 }} />
        ))}
        <div style={{
          flex: 1, background: 'white', borderRadius: 4, padding: '3px 10px',
          fontFamily: 'var(--font-mono)', fontSize: 10, color: '#94A3B8',
          border: '1px solid #E2E8F0',
        }}>
          dss-industria.streamlit.app
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Ranking Supplier</div>
          {[
            { name: 'Supplier A', score: 0.87, rank: 1 },
            { name: 'Supplier B', score: 0.71, rank: 2 },
            { name: 'Supplier C', score: 0.54, rank: 3 },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{
                width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                background: i === 0 ? 'var(--amber)' : 'var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700,
                color: i === 0 ? 'white' : 'var(--muted)',
              }}>{s.rank}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--navy)', flex: 1 }}>{s.name}</span>
              <div style={{ width: 80, height: 6, background: '#EEF2F7', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${s.score * 100}%`, height: '100%', background: i === 0 ? 'var(--amber)' : '#CBD5E1', borderRadius: 3 }} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', minWidth: 30, textAlign: 'right' }}>{s.score}</span>
            </div>
          ))}
        </div>
        <div style={{
          background: 'var(--amber-100)', border: '1px solid var(--amber-200)',
          borderRadius: 6, padding: '6px 10px',
          fontFamily: 'var(--font-mono)', fontSize: 10, color: '#92400E',
        }}>
          ✓ CR = 0.04 — konsisten · Laporan PDF siap
        </div>
      </div>
    </div>
  );
}

function ToolCard({ product, onOpen }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '24px',
        borderLeft: hovered ? '3px solid var(--amber)' : '3px solid transparent',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <span className="badge badge-demo">✅ Siap Demo</span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
          color: 'var(--border)',
        }}>{product.seq}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>
        {product.name}
      </h3>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--amber)', fontWeight: 600, marginBottom: 10 }}>
        {product.tagline}
      </p>
      <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.6, marginBottom: 16 }}>
        {product.description}
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button onClick={() => onOpen(product)} className="btn btn-outline btn-sm"
          style={{ flex: 1, justifyContent: 'center' }}>
          Lihat Detail
        </button>
        <button onClick={() => onOpen(product)} className="btn btn-outline btn-sm"
          style={{ flex: 1, justifyContent: 'center', color: 'var(--body)', fontSize: 12 }}>
          ▶ Video Demo
        </button>
      </div>
    </div>
  );
}

function DSSProductsIndustri() {
  const d = window.DSS.industri;
  const openModal = (p) => window.__dssOpenModal && window.__dssOpenModal(p);

  return (
    <section id="industri" style={{ background: 'white', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>{d.label}</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em',
            marginBottom: 14,
          }}>{d.h2}</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', maxWidth: 600 }}>{d.intro}</p>
        </div>

        {/* Flagship card */}
        <div className="reveal card" style={{
          padding: '0', marginBottom: 40, overflow: 'hidden',
          borderLeft: '4px solid var(--amber)',
          borderRadius: 20,
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 380px', gap: 0,
            alignItems: 'stretch',
          }} className="flagship-grid">
            <div style={{ padding: '36px 40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span className="badge badge-live">{d.flagship.badge}</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800,
                color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 8,
              }}>{d.flagship.name}</h2>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--amber)', fontWeight: 600, marginBottom: 14 }}>
                {d.flagship.tagline}
              </p>
              <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
                {d.flagship.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
                  color: 'var(--navy)', background: 'var(--bg-gray)',
                  padding: '6px 12px', borderRadius: 8,
                }}>
                  {d.flagship.price}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>
                  {d.flagship.timeline}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href={d.flagship.liveUrl} target="_blank" rel="noopener" className="btn btn-primary">
                  Buka Demo Live →
                </a>
                <button onClick={() => openModal(d.flagship)} className="btn btn-outline">
                  Lihat Detail
                </button>
              </div>
            </div>
            <div style={{
              background: 'var(--bg-gray)', borderLeft: '1px solid var(--border)',
              padding: '32px 28px', display: 'flex', alignItems: 'center',
            }} className="flagship-mockup">
              <BrowserMockup />
            </div>
          </div>
        </div>

        {/* Hulu→Hilir label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em' }}>HULU</span>
          <div style={{ flex: 1, height: 1, background: 'repeating-linear-gradient(90deg, var(--border) 0, var(--border) 6px, transparent 6px, transparent 12px)' }} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em' }}>HILIR</span>
        </div>

        {/* 4 tool cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 32 }}
          className="tools-grid">
          {d.tools.map((t, i) => (
            <div key={t.id} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <ToolCard product={t} onOpen={openModal} />
            </div>
          ))}
        </div>

        {/* Inventory Industria — full width */}
        <div className="reveal card" style={{
          padding: '0', overflow: 'hidden',
          borderRadius: 20,
          background: 'linear-gradient(135deg, #FFFBF3 0%, white 100%)',
        }}>
          <div style={{ padding: '36px 40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <span className="badge badge-demo">{d.integrated.badge}</span>
              <button
                onClick={() => openModal(d.integrated)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--body)',
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: 0,
                }}>
                ▶ Tonton Video Demo (2 menit)
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'start' }}
              className="inventory-grid">
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-head)', fontSize: 24, fontWeight: 800,
                  color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 8,
                }}>{d.integrated.name}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--amber)', fontWeight: 600, marginBottom: 14 }}>
                  {d.integrated.tagline}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {d.integrated.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--body)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--amber)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{
                    fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700, color: 'var(--navy)',
                    background: 'var(--amber-100)', padding: '6px 14px', borderRadius: 8,
                  }}>
                    {d.integrated.price}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>{d.integrated.timeline}</span>
                  <button onClick={() => openModal(d.integrated)} className="btn btn-primary btn-sm">
                    Jadwalkan Demo
                  </button>
                </div>
              </div>
              {/* Device mockup placeholder */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', flexShrink: 0 }} className="inventory-devices">
                {/* Laptop */}
                <div style={{ width: 160, flexShrink: 0 }}>
                  <div style={{ background: '#1E3A5F', borderRadius: '8px 8px 0 0', padding: '8px', paddingBottom: 6 }}>
                    <div style={{ background: '#F1F5F9', borderRadius: 4, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6 }}>
                        Web Dashboard<br/>Manajer
                      </span>
                    </div>
                  </div>
                  <div style={{ background: '#334155', height: 6, borderRadius: '0 0 4px 4px' }} />
                  <div style={{ background: '#475569', height: 3, borderRadius: 2, margin: '0 10px' }} />
                </div>
                {/* Phone */}
                <div style={{ width: 64, flexShrink: 0 }}>
                  <div style={{ background: '#1E3A5F', borderRadius: 10, padding: 5, paddingTop: 10, paddingBottom: 10 }}>
                    <div style={{ background: '#F1F5F9', borderRadius: 5, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6 }}>
                        Mobile<br/>Operator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DSSProductsIndustri });
