// DSS Industria — Hero Section with typing animation
const { useState, useEffect, useRef } = React;

function AgentTrace() {
  const lines = window.DSS.hero.traceLines;
  const [shown, setShown] = useState(0);      // complete lines shown
  const [chars, setChars] = useState(0);       // chars of current line
  const [phase, setPhase] = useState('typing'); // typing | pause | fade
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    let timer;
    if (phase === 'fade') {
      setFaded(true);
      timer = setTimeout(() => {
        setShown(0); setChars(0); setFaded(false); setPhase('typing');
      }, 700);
      return () => clearTimeout(timer);
    }
    if (phase === 'pause') {
      timer = setTimeout(() => setPhase('fade'), 2800);
      return () => clearTimeout(timer);
    }
    // typing
    const cur = lines[shown];
    if (!cur) { setPhase('pause'); return; }
    if (chars < cur.text.length) {
      timer = setTimeout(() => setChars(c => c + 1), 22);
    } else {
      timer = setTimeout(() => { setShown(s => s + 1); setChars(0); }, 160);
    }
    return () => clearTimeout(timer);
  }, [phase, shown, chars]);

  return (
    <div style={{
      background: '#0A1628',
      border: '1px solid rgba(245,158,11,0.25)',
      borderRadius: 14, overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(245,158,11,0.08)',
      opacity: faded ? 0 : 1,
      transition: 'opacity 0.5s ease',
    }}>
      {/* Terminal header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(0,0,0,0.25)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#FF5F56','#FFBD2E','#27C93F'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#64748B', marginLeft: 6 }}>
          DSS Agent — Supplier Evaluation
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#27C93F', animation: 'wa-pulse 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#27C93F' }}>running</span>
        </div>
      </div>
      {/* Lines */}
      <div style={{ padding: '18px 20px', minHeight: 148, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {lines.map((line, i) => {
          const isComplete = i < shown;
          const isCurrent = i === shown && phase === 'typing';
          const isVisible = isComplete || isCurrent;
          if (!isVisible) return null;
          const displayText = isComplete ? line.text : line.text.slice(0, chars);
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 0, fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.5 }}>
              <span style={{ color: line.color, minWidth: 74, flexShrink: 0, fontWeight: 600, fontSize: 11 }}>{line.role}</span>
              <span style={{ color: '#94A3B8', flex: 1 }}>
                {displayText}
                {isCurrent && <span className="cursor-blink" style={{ color: line.color }}>▌</span>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DSSHero() {
  const d = window.DSS.hero;
  return (
    <section style={{ position: 'relative', paddingTop: 132, paddingBottom: 96, overflow: 'hidden', background: 'white' }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 700, height: 600,
        background: 'radial-gradient(ellipse at 80% 30%, rgba(245,158,11,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 80, left: 0,
        width: 600, height: 500,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
          className="hero-grid">
          {/* Left: copy */}
          <div className="reveal">
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
              color: 'var(--amber)', letterSpacing: '0.12em',
              marginBottom: 20,
            }}>
              {d.eyebrow}
            </div>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800, color: 'var(--navy)', lineHeight: 1.12,
              letterSpacing: '-0.025em', marginBottom: 20,
              textWrap: 'balance',
            }}>
              {d.h1}
            </h1>
            <p style={{
              fontSize: 'clamp(15px, 1.2vw, 17px)', color: 'var(--body)', lineHeight: 1.7,
              marginBottom: 32, maxWidth: 520,
            }}>
              {d.sub}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href={d.ctaPrimary.url} target="_blank" rel="noopener" className="btn btn-primary">
                {d.ctaPrimary.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href={d.ctaSecondary.url} target="_blank" rel="noopener" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {d.ctaSecondary.label}
              </a>
            </div>
            {/* Trust strip */}
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--muted)', letterSpacing: '0.04em',
              lineHeight: 1.8,
              borderTop: '1px solid var(--border)', paddingTop: 20,
            }}>
              {d.trustStrip.split(' · ').map((item, i, arr) => (
                <span key={i}>
                  <span style={{ color: i === 0 ? 'var(--navy)' : 'var(--body)' }}>{item}</span>
                  {i < arr.length - 1 && <span style={{ color: 'var(--border)', margin: '0 8px' }}>·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Right: agent trace */}
          <div className="reveal reveal-delay-2">
            <AgentTrace />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DSSHero });
