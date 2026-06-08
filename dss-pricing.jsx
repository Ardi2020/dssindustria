// DSS Industria — Pricing + About sections
function DSSPricing() {
  const rows = window.DSS.pricing;
  return (
    <section id="harga" style={{ background: 'var(--bg-gray)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>INVESTASI</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 3vw, 38px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 14,
          }}>Transparan per Tingkat Kompleksitas</h2>
          <p style={{ fontSize: 15, color: 'var(--body)', maxWidth: 540, margin: '0 auto' }}>
            Produk siap pakai punya harga tetap; solusi terintegrasi & kustom mengikuti scope. Diskusi & blueprint awal gratis.
          </p>
        </div>

        {/* Desktop table */}
        <div className="reveal pricing-table-wrap">
          <div style={{
            background: 'white', borderRadius: 20, overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-card)',
          }}>
            {/* Table header */}
            <div style={{
              display: 'grid', gridTemplateColumns: '48px 1fr 2fr 1.2fr 1fr',
              background: 'var(--navy)', padding: '14px 24px', gap: 16,
            }} className="pricing-row">
              {['Tier','Tipe','Untuk apa','Harga','Timeline'].map(h => (
                <div key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em' }}>
                  {h}
                </div>
              ))}
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '48px 1fr 2fr 1.2fr 1fr',
                padding: '18px 24px', gap: 16, alignItems: 'center',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
                background: row.highlight ? 'linear-gradient(90deg, #FFFBF3 0%, white 100%)' : 'white',
                borderLeft: row.highlight ? '3px solid var(--amber)' : '3px solid transparent',
                transition: 'background 0.2s',
              }} className="pricing-row">
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: row.highlight ? 'var(--amber)' : 'var(--bg-gray)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
                  color: row.highlight ? 'white' : 'var(--muted)',
                }}>
                  {row.tier}
                </div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>
                  {row.type}
                  {row.highlight && (
                    <span style={{
                      display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10,
                      color: 'var(--amber)', fontWeight: 500, marginTop: 2, letterSpacing: '0.04em',
                    }}>HEALTHCARE</span>
                  )}
                </div>
                <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.5 }}>{row.useFor}</div>
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700,
                  color: row.highlight ? 'var(--amber-dark)' : 'var(--navy)',
                  whiteSpace: 'pre-line',
                }}>{row.price}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>{row.timeline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="pricing-cards-mobile" style={{ display: 'none' }}>
          {rows.map((row, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 14, padding: '20px',
              border: '1px solid var(--border)',
              borderLeft: row.highlight ? '3px solid var(--amber)' : '3px solid transparent',
              boxShadow: 'var(--shadow-card)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: row.highlight ? 'var(--amber)' : 'var(--bg-gray)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
                  color: row.highlight ? 'white' : 'var(--muted)',
                  flexShrink: 0,
                }}>
                  {row.tier}
                </div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 700, color: 'var(--navy)' }}>{row.type}</div>
              </div>
              <p style={{ fontSize: 13, color: 'var(--body)', marginBottom: 12 }}>{row.useFor}</p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', marginBottom: 2 }}>HARGA</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, color: row.highlight ? 'var(--amber-dark)' : 'var(--navy)', whiteSpace: 'pre-line' }}>{row.price}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', marginBottom: 2 }}>TIMELINE</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--navy)' }}>{row.timeline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="reveal" style={{
          marginTop: 24, display: 'flex', flexDirection: 'column', gap: 6,
          padding: '16px 20px', background: 'white', borderRadius: 10,
          border: '1px solid var(--border)',
        }}>
          {[
            'Harga final mengikuti scope; diskusi & blueprint awal gratis.',
            'Solusi healthcare umumnya Tier 3–4 (regulasi & privasi).',
          ].map((note, i) => (
            <p key={i} style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{ color: 'var(--amber)', flexShrink: 0 }}>*</span>
              {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function DSSAbout() {
  return (
    <section id="tentang" style={{ background: 'white', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }} className="reveal">
          <div className="section-label" style={{ marginBottom: 12 }}>TENTANG</div>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontSize: 'clamp(22px, 2.5vw, 32px)',
            fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 18,
          }}>Dibangun oleh PT Digdaya Solusi Sistem</h2>
          <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.8, marginBottom: 28 }}>
            DSS Industria adalah lini produk dari <strong>PT Digdaya Solusi Sistem</strong>, perusahaan teknologi berbasis di Jakarta yang melayani klien di seluruh Indonesia. Setiap produk di sini dirancang oleh praktisi yang menggabungkan kedalaman lapangan industri & healthcare dengan eksekusi teknis end-to-end.
          </p>
          <a href="https://digdayasolusi.co.id" target="_blank" rel="noopener" className="btn btn-outline">
            Profil Perusahaan Lengkap → digdayasolusi.co.id
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DSSPricing, DSSAbout });
