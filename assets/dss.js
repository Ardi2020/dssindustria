/* ============================================================
   DSS INDUSTRIA — interactions
   ============================================================ */
(function () {
  'use strict';
  const WA = 'https://wa.me/628218417551';
  const DEMO = 'https://dss-industria.streamlit.app';

  /* ---------- Nav: solid on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('solid', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );

  /* ---------- Scroll-spy ---------- */
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const sectionIds = ['solusi', 'produk', 'kemampuan', 'cara-kerja', 'harga', 'tentang'];
  const spy = () => {
    const pos = window.scrollY + 140;
    let current = '';
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= pos) current = id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };
  spy();
  window.addEventListener('scroll', spy, { passive: true });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Hero parallax blobs ---------- */
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 900) return;
    blobs.forEach((b, i) => { b.style.transform = `translateY(${y * (0.04 + i * 0.03)}px)`; });
  }, { passive: true });

  /* ---------- Agent trace auto-type ---------- */
  const traceBody = document.getElementById('traceBody');
  const TRACE = [
    { tag: 'PLANNER', cls: 'planner', txt: 'Memecah tugas: evaluasi 5 supplier' },
    { tag: 'EXECUTOR', cls: 'executor', txt: 'Hitung bobot kriteria (AHP)', tick: true },
    { tag: 'EXECUTOR', cls: 'executor', txt: 'Ranking alternatif (TOPSIS)', tick: true },
    { tag: 'VALIDATOR', cls: 'validator', txt: 'Cek konsistensi (CR 0.04<0.10)', tick: true },
    { tag: 'OUTPUT', cls: 'output', txt: 'Rekomendasi siap → laporan PDF' },
  ];
  function dots(s) {
    const target = 34;
    const pad = Math.max(2, target - s.length);
    return ' ' + '.'.repeat(pad) + ' ';
  }
  let running = false;
  async function runTrace() {
    if (running) return;
    running = true;
    traceBody.innerHTML = '';
    for (let i = 0; i < TRACE.length; i++) {
      const t = TRACE[i];
      const line = document.createElement('div');
      line.className = 'trace-line';
      const tickHTML = t.tick ? `<span class="trace-txt">${dots(t.txt)}</span><span class="trace-tick">✓</span>` : '';
      line.innerHTML = `<span class="trace-tag ${t.cls}">${t.tag}</span><span class="trace-txt">${t.txt}</span>${tickHTML}`;
      traceBody.appendChild(line);
      await wait(120);
      line.classList.add('show');
      await wait(620);
    }
    const cur = document.createElement('span');
    cur.className = 'trace-cursor';
    traceBody.appendChild(cur);
    await wait(2600);
    running = false;
    runTrace(); // loop
  }
  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    runTrace();
  } else {
    // static render
    traceBody.innerHTML = TRACE.map(t =>
      `<div class="trace-line show"><span class="trace-tag ${t.cls}">${t.tag}</span><span class="trace-txt">${t.txt}${t.tick ? dots(t.txt) + '✓' : ''}</span></div>`
    ).join('');
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Product modals ---------- */
  const DATA = {
    supplier: {
      badge: ['live', '🟢 LIVE — Coba Sekarang'],
      title: 'DSS Supplier Selection',
      q: 'Siapa supplier terbaik untuk bahan baku Anda?',
      desc: 'Evaluasi supplier multi-kriteria dengan metode AHP-TOPSIS. Setup kriteria → perbandingan berpasangan → ranking objektif → laporan PDF. Berhenti memilih supplier berdasarkan feeling.',
      metode: 'AHP (Analytic Hierarchy Process) untuk pembobotan kriteria · TOPSIS untuk ranking alternatif · cek konsistensi (CR < 0.10)',
      harga: 'Rp 8–15 juta · 1–2 minggu',
      live: true,
    },
    pricing: {
      badge: ['demo', '✅ Siap Demo'],
      title: 'DSS Pricing & Margin',
      q: 'Berapa harga jual yang masih untung?',
      desc: 'Activity-Based Costing + analisis Break-Even + sensitivitas. Banyak UMKM diam-diam rugi per SKU tanpa menyadarinya.',
      metode: 'Activity-Based Costing (ABC) · Break-Even Point (BEP) · analisis sensitivitas harga & volume',
      harga: 'Rp 8–15 juta · 1–2 minggu',
    },
    scheduling: {
      badge: ['demo', '✅ Siap Demo'],
      title: 'DSS Production Scheduling',
      q: 'Order mana dikerjakan duluan, di mesin mana?',
      desc: '4 algoritma penjadwalan (SPT/EDD/Johnson/CP-SAT) plus visualisasi Gantt. Takt time pabrik otomotif kini terjangkau untuk UMKM.',
      metode: 'SPT (Shortest Processing Time) · EDD (Earliest Due Date) · Johnson\'s Rule · CP-SAT solver · Gantt chart',
      harga: 'Rp 8–15 juta · 1–2 minggu',
    },
    distribusi: {
      badge: ['demo', '✅ Siap Demo'],
      title: 'DSS Distribusi',
      q: 'Rute kirim paling efisien untuk armada Anda?',
      desc: 'Optimasi rute 2–5 mobil (TSP/VRP) divisualisasikan di peta. Hemat BBM & jam sopir untuk keputusan harian.',
      metode: 'TSP (Travelling Salesman Problem) · VRP (Vehicle Routing Problem) · visualisasi peta interaktif',
      harga: 'Rp 8–15 juta · 1–2 minggu',
    },
    investment: {
      badge: ['demo', '✅ Siap Demo'],
      title: 'DSS Investment Decision',
      q: 'Beli mesin baru — worth it?',
      desc: 'Analisis NPV, IRR, Payback Period plus sensitivitas. Keputusan kapital ratusan juta jangan pakai insting.',
      metode: 'NPV (Net Present Value) · IRR (Internal Rate of Return) · Payback Period · analisis sensitivitas',
      harga: 'Rp 8–15 juta · 1–2 minggu',
    },
    inventory: {
      badge: ['demo', '✅ Siap Demo — Janji Temu'],
      title: 'Inventory Industria',
      q: 'Sistem stok terintegrasi: web untuk manajer, mobile untuk operator, AI baca foto barang.',
      desc: 'Foto barang otomatis terklasifikasi & tercatat. Forecast kebutuhan & rekomendasi reorder. Alert anomali stockout & dead stock sebelum terjadi.',
      metode: 'Computer vision (klasifikasi foto) · forecasting kebutuhan · deteksi anomali · sinkron real-time web + mobile (offline-capable)',
      harga: 'Rp 50–100 juta · web + mobile + AI',
    },
    scribepro: {
      badge: ['pilot', '✅ Membuka Pilot'],
      title: 'Scribe Medis Pro',
      q: 'Dokumentasi konsultasi otomatis, on-premise.',
      desc: 'Perekam khusus → transkrip → draft SOAP → dokter validasi & tanda tangan. Data tak keluar jaringan RS (opsi LLM on-prem). Dokter selalu pengambil keputusan akhir.',
      metode: 'Speech-to-text Indonesia (istilah medis lokal) · draft SOAP otomatis · human-in-the-loop · opsi LLM on-premise · audit trail penuh',
      harga: 'Target: dokumentasi 5–8 menit → di bawah 1 menit/pasien',
      teal: true,
    },
    scribelite: {
      badge: ['pilot', '✅ Membuka Pilot'],
      title: 'Scribe Medis Lite',
      q: 'Versi cloud: cukup laptop + mikrofon USB.',
      desc: 'Onboarding 2 minggu, trial 14 hari saat rilis cloud. Pendukung keputusan klinis & otomasi alur kerja — keputusan medis tetap di tangan dokter.',
      metode: 'Speech-to-text cloud · draft dokumentasi · de-identifikasi data · patuh UU PDP',
      harga: 'Trial 14 hari saat rilis cloud',
      teal: true,
    },
    jadwalai: {
      badge: ['pilot', '✅ Membuka Pilot'],
      title: 'JadwalAI',
      q: 'Agent booking janji temu via WhatsApp 24/7.',
      desc: 'Pasien chat → cari slot → konfirmasi → reminder → prediksi no-show. Mengurangi beban front-office dan slot kosong.',
      metode: 'Agent percakapan WhatsApp · manajemen slot · reminder otomatis · model prediksi no-show',
      harga: 'Target: no-show 18–32% → 8–14%',
      teal: true,
    },
  };

  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');

  function badgeHTML(b) {
    const map = { live: 'badge-live', demo: 'badge-demo', pilot: 'badge-pilot' };
    const pulse = b[0] === 'live' ? '<span class="pulse"></span>' : '';
    return `<span class="badge ${map[b[0]]}">${pulse}${b[1]}</span>`;
  }

  function openModal(key) {
    const d = DATA[key];
    if (!d) return;
    const accent = d.teal ? 'var(--teal-deep)' : 'var(--amber-deep)';
    const liveBtn = d.live
      ? `<a class="btn btn-amber" href="${DEMO}" target="_blank" rel="noopener">Buka Demo Live →</a>`
      : '';
    modal.innerHTML = `
      <div class="modal-head">
        <button class="modal-close" id="modalClose" aria-label="Tutup">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        ${badgeHTML(d.badge)}
        <h3>${d.title}</h3>
        <p class="modal-q" style="color:${accent}">${d.q}</p>
      </div>
      <div class="modal-body">
        <div class="ph ph-16x9" data-label="▶ Video Demo 2 Menit"></div>
        <p>${d.desc}</p>
        <div class="modal-section-label">Metode</div>
        <p style="font-family:var(--font-mono);font-size:13.5px;color:var(--ink-soft);line-height:1.7">${d.metode}</p>
        <p class="modal-meta" style="color:${accent}">${d.harga}</p>
        <div class="modal-cta">
          ${liveBtn}
          <a class="btn ${d.live ? 'btn-ghost' : 'btn-amber'}" href="${WA}" target="_blank" rel="noopener">Konsultasi via WhatsApp</a>
        </div>
      </div>`;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').addEventListener('click', closeModal);
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(el.getAttribute('data-modal'));
    });
  });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
})();
