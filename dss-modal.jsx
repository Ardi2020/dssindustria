// DSS Industria — Product Detail Modal
const { useEffect } = React;

function VideoPlaceholder() {
  return (
    <div style={{
      position: 'relative', width: '100%', paddingTop: '56.25%',
      background: 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)',
      borderRadius: 12, overflow: 'hidden', marginBottom: 24,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'rgba(245,158,11,0.15)', border: '2px solid rgba(245,158,11,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#F59E0B">
            <path d="M8 5.14v14l11-7-11-7z"/>
          </svg>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#94A3B8', letterSpacing: '0.05em' }}>
          ▶ Video Demo 2 Menit
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#475569' }}>
          Video akan tersedia saat rilis
        </p>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!product) return null;

  const badgeClass = product.badgeType === 'live' ? 'badge-live'
    : product.badgeType === 'pilot' ? 'badge-pilot'
    : 'badge-demo';

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(15,27,45,0.55)', backdropFilter: 'blur(6px)',
        zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: 'white', borderRadius: 20,
        width: '100%', maxWidth: 640, maxHeight: '90vh',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        boxShadow: '0 32px 80px rgba(15,27,45,0.2)',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px 16px',
          borderBottom: '1px solid var(--border)',
        }}>
          <span className={`badge ${badgeClass}`}>{product.badge}</span>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--muted)', padding: 4, borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: 'auto', padding: '24px', flex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>
            {product.name}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--body)', marginBottom: 20, lineHeight: 1.6 }}>
            {product.tagline}
          </p>

          <VideoPlaceholder />

          {/* Deskripsi */}
          <div style={{ marginBottom: 20 }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--amber)', textTransform: 'uppercase', marginBottom: 8 }}>
              Deskripsi
            </h4>
            <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{product.description}</p>
          </div>

          {/* Method */}
          {product.method && (
            <div style={{ marginBottom: 20, padding: '14px 16px', background: 'var(--bg-gray)', borderRadius: 10 }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--amber)', textTransform: 'uppercase', marginBottom: 8 }}>
                Metode
              </h4>
              <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{product.method}</p>
            </div>
          )}

          {/* Features */}
          {product.features && (
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--amber)', textTransform: 'uppercase', marginBottom: 10 }}>
                Fitur Utama
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {product.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--body)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--teal)', marginTop: 1, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Chip */}
          {product.chip && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'var(--amber-100)', color: '#92400E',
              border: '1px solid var(--amber-200)',
              borderRadius: 100, padding: '6px 14px',
              fontFamily: 'var(--font-mono)', fontSize: 12,
              marginBottom: 20,
            }}>
              ◎ {product.chip}
            </div>
          )}

          {/* Price */}
          {(product.price || product.timeline) && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '14px 16px', background: '#FFFBF3',
              border: '1px solid var(--amber-200)', borderRadius: 10,
              marginBottom: 4,
            }}>
              {product.price && (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 2 }}>INVESTASI</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>{product.price}</div>
                </div>
              )}
              {product.price && product.timeline && <div style={{ width: 1, height: 32, background: 'var(--amber-200)' }} />}
              {product.timeline && (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 2 }}>TIMELINE</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>{product.timeline}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid var(--border)',
          display: 'flex', gap: 10, flexWrap: 'wrap',
        }}>
          {product.liveUrl && (
            <a href={product.liveUrl} target="_blank" rel="noopener" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', minWidth: 160 }}>
              Buka Demo Live →
            </a>
          )}
          <a
            href={product.waUrl || 'https://wa.me/628218417551'}
            target="_blank" rel="noopener"
            className={`btn ${product.liveUrl ? 'btn-outline' : 'btn-primary'}`}
            style={{ flex: 1, justifyContent: 'center', minWidth: 160 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Jadwalkan Demo via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProductModal });
