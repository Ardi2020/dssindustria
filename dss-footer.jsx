// DSS Industria — CTA Final + Footer
function DSSCtaFinal() {
  const wa = window.DSS.nav.waUrl;
  const u  = window.DSS.ui.cta;
  return (
    <section style={{
      background: 'linear-gradient(135deg, #FFFBF0 0%, #FFF7E6 50%, #FFFBF3 100%)',
      borderTop: '1px solid var(--amber-200)',
      padding: '96px 0',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }} className="reveal">
        <div style={{ width: 40, height: 3, background: 'var(--amber)', borderRadius: 2, margin: '0 auto 28px' }} />
        <h2 style={{
          fontFamily: 'var(--font-head)', fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.025em',
          lineHeight: 1.15, marginBottom: 16, textWrap: 'balance',
        }}>
          {u.h2line1}<br />{u.h2line2}
        </h2>
        <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 36px' }}>
          {u.p}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={wa} target="_blank" rel="noopener" className="btn btn-primary"
            style={{ fontSize: 16, padding: '15px 28px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {u.wa}
          </a>
          <a href="https://dss-industria.streamlit.app" target="_blank" rel="noopener"
            className="btn btn-outline" style={{ fontSize: 16, padding: '15px 28px' }}>
            {u.demo}
          </a>
        </div>
      </div>
    </section>
  );
}

function DSSFooter() {
  const f = window.DSS.footer;
  const u = window.DSS.ui.footer;
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.7)', padding: '64px 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.8fr 1.1fr', gap: 48, marginBottom: 56 }}
          className="footer-grid">
          {/* Col 1: brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 800, color: '#1C1200' }}>DI</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 700, color: 'white' }}>DSS Industria</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{u.brand}</div>
              </div>
            </div>
            <a href={f.companyUrl} target="_blank" rel="noopener"
              style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--amber)', textDecoration: 'none' }}>
              digdayasolusi.co.id →
            </a>
          </div>

          {/* Col 2: Industri */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--amber)', marginBottom: 16, textTransform: 'uppercase' }}>
              {u.industri}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {f.industri.map((name, i) => (
                <li key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>{name}</li>
              ))}
            </ul>
          </div>

          {/* Col 3: Healthcare */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--teal)', marginBottom: 16, textTransform: 'uppercase' }}>
              {u.healthcare}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {f.healthcare.map((name, i) => (
                <li key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>{name}</li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 16, textTransform: 'uppercase' }}>
              {u.contact}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={f.contact.waUrl} target="_blank" rel="noopener"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, color: '#4ADE80' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {f.contact.wa}
              </a>
              <a href={`mailto:${f.contact.email}`}
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                {f.contact.email}
              </a>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{f.contact.location}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                {f.contact.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>{f.legal}</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { DSSCtaFinal, DSSFooter });
