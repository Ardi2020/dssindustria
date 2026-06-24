// DSS Industria — All content & product data
// DSS_DATA.id = Bahasa Indonesia | DSS_DATA.en = English
// Swap window.DSS = window.DSS_DATA[lang] to switch language

window.DSS_DATA = {

  /* ──────────────────────────────────────────────
     BAHASA INDONESIA
  ────────────────────────────────────────────── */
  id: {
    nav: {
      links: [
        { id: 'industri',   label: 'Industri' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'kemampuan',  label: 'Kemampuan' },
        { id: 'cara-kerja', label: 'Cara Kerja' },
      ],
      waUrl: 'https://wa.me/628218417551',
      companyUrl: 'https://digdayasolusi.co.id',
    },

    hero: {
      eyebrow: 'PRODUK SIAP PAKAI · INDUSTRI & HEALTHCARE',
      h1: 'AI Agent & Aplikasi yang Bisa Anda Coba Hari Ini.',
      sub: 'DSS Industria — lini produk dari PT Digdaya Solusi Sistem. Sembilan aplikasi AI untuk industri manufaktur dan healthcare: dari pemilihan supplier, penjadwalan produksi, sampai dokumentasi medis. Tersedia sebagai SaaS berlangganan atau implementasi kustom.',
      ctaPrimary:   { label: 'Coba Demo Live Gratis',   url: 'https://dss-industria.streamlit.app' },
      ctaSecondary: { label: 'Jadwalkan Demo 30 Menit', url: 'https://wa.me/628218417551' },
      trustStrip: '9 aplikasi selesai dibangun · 1 LIVE bisa dicoba sekarang · 2 vertical: Industri & Healthcare · Setiap langkah agent bisa diaudit',
      traceLines: [
        { role: 'PLANNER',   text: 'Memecah tugas: evaluasi 5 supplier',      color: '#60A5FA' },
        { role: 'EXECUTOR',  text: 'Hitung bobot kriteria (AHP) ........ ✓',  color: '#FBBF24' },
        { role: 'EXECUTOR',  text: 'Ranking alternatif (TOPSIS) ........ ✓',  color: '#FBBF24' },
        { role: 'VALIDATOR', text: 'Cek konsistensi (CR 0.04<0.10) ..... ✓', color: '#2DD4BF' },
        { role: 'OUTPUT',    text: 'Rekomendasi siap → laporan PDF',           color: '#4ADE80' },
      ],
    },

    pendekatan: {
      label: 'KENAPA PRODUK KAMI BEDA',
      h2: 'Bukan Chatbot. Sistem Multi-Agent yang Bisa Diaudit.',
      cards: [
        { role: 'Planner',   icon: '◆', color: '#2563EB', desc: 'Memecah tugas jadi langkah yang bisa dieksekusi.' },
        { role: 'Executor',  icon: '⚙', color: '#F59E0B', desc: 'Menjalankan perhitungan & aksi: AHP/TOPSIS, NPV/IRR, optimasi rute, OCR, vision.' },
        { role: 'Validator', icon: '✓', color: '#14B8A6', desc: 'Memeriksa hasil sebelum sampai ke Anda. Gagal cek = diulang.' },
      ],
      footer: 'Metode teruji (AHP, TOPSIS, NPV, IRR, VRP, CP-SAT) jadi tools · observability penuh · eval ≥10 test case per agent.',
    },

    industri: {
      label: 'VERTICAL 01 — INDUSTRI & MANUFAKTUR',
      h2: 'Rantai Keputusan Pabrik Anda, Dari Hulu ke Hilir',
      intro: 'Lima tool keputusan + satu sistem inventory terintegrasi. Sudah selesai dibangun — coba yang LIVE, atau minta demo & tonton videonya.',

      flagship: {
        id: 'supplier-selection',
        badge: '🟢 LIVE — Coba Sekarang',
        badgeType: 'live',
        name: 'DSS Supplier Selection',
        tagline: 'Siapa supplier terbaik untuk bahan baku Anda?',
        description: 'Evaluasi supplier multi-kriteria (AHP-TOPSIS): setup kriteria → perbandingan berpasangan → ranking objektif → laporan PDF. Berhenti memilih supplier berdasarkan ​feeling.',
        method: 'Analytic Hierarchy Process (AHP) untuk pembobotan kriteria + TOPSIS untuk ranking alternatif. Output: laporan PDF otomatis, konsistensi rasio < 0.10.',
        timeline: '1–2 minggu',
        liveUrl: 'https://dss-industria.streamlit.app',
        waUrl: 'https://wa.me/628218417551',
      },

      tools: [
        {
          id: 'pricing-margin', seq: '01',
          name: 'DSS Pricing & Margin',
          tagline: 'Berapa harga jual yang masih untung?',
          description: 'Activity-Based Costing + Break-Even + sensitivitas. Banyak UMKM diam-diam rugi per SKU.',
          method: 'Activity-Based Costing (ABC) untuk alokasi biaya per SKU, Break-Even Analysis, Sensitivity Analysis untuk simulasi margin di berbagai harga jual.',
          timeline: '1–2 minggu', waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'production-scheduling', seq: '02',
          name: 'DSS Production Scheduling',
          tagline: 'Order mana dikerjakan duluan, di mesin mana?',
          description: '4 algoritma (SPT/EDD/Johnson/CP-SAT) + Gantt. Takt time pabrik otomotif untuk UMKM.',
          method: 'Shortest Processing Time (SPT), Earliest Due Date (EDD), Johnson\'s Algorithm, CP-SAT Solver dari Google OR-Tools. Output: Gantt chart interaktif per mesin.',
          timeline: '1–2 minggu', waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'distribusi', seq: '03',
          name: 'DSS Distribusi',
          tagline: 'Rute kirim paling efisien untuk armada Anda?',
          description: 'Optimasi rute 2–5 mobil (TSP/VRP) di peta. Hemat BBM & jam sopir.',
          method: 'Travelling Salesman Problem (TSP) untuk satu kendaraan, Vehicle Routing Problem (VRP) untuk armada 2–5 unit. Visualisasi rute interaktif di peta.',
          timeline: '1–2 minggu', waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'investment', seq: '04',
          name: 'DSS Investment Decision',
          tagline: 'Beli mesin baru — worth it?',
          description: 'NPV, IRR, Payback + sensitivitas. Keputusan kapital ratusan juta jangan pakai insting.',
          method: 'Net Present Value (NPV), Internal Rate of Return (IRR), Payback Period, Sensitivity Analysis untuk variasi asumsi (harga bahan baku, utilisasi, inflasi).',
          timeline: '1–2 minggu', waUrl: 'https://wa.me/628218417551',
        },
      ],

      integrated: {
        id: 'inventory-industria',
        badge: '✅ Siap Demo — Janji Temu',
        badgeType: 'demo',
        name: 'Inventory Industria',
        tagline: 'Stok terintegrasi: web untuk manajer, mobile untuk operator, AI baca foto barang.',
        description: 'Sistem inventory end-to-end dengan web dashboard untuk manajer, aplikasi mobile untuk operator gudang, dan AI vision untuk input barang otomatis via foto. Sinkron real-time.',
        features: [
          'Foto barang → otomatis terklasifikasi & tercatat',
          'Forecast kebutuhan & rekomendasi reorder',
          'Alert anomali: stockout & dead stock sebelum terjadi',
        ],
        method: 'Computer Vision untuk klasifikasi & pencatatan barang via foto, Time-series Forecasting untuk demand planning, Anomaly Detection untuk stockout/dead stock.',
        timeline: 'web + mobile + AI',
        waUrl: 'https://wa.me/628218417551',
      },
    },

    healthcare: {
      label: 'VERTICAL 02 — HEALTHCARE',
      h2: 'Kembalikan Waktu Dokter ke Pasien, Bukan ke Ketikan',
      intro: 'AI agent untuk RS & klinik — human-in-the-loop ketat & patuh UU Pelindungan Data Pribadi.',
      pilotCta: 'Jadi RS/klinik pilot pertama — harga pilot & pendampingan intensif',
      waUrl: 'https://wa.me/628218417551',
      privacy: 'De-identifikasi data pasien sebelum pemrosesan AI · opsi LLM on-premise · audit trail penuh · patuh UU PDP. Semua solusi kami pendukung keputusan klinis & otomasi alur kerja — keputusan medis selalu di tangan dokter.',
      products: [
        {
          id: 'scribe-pro',
          badge: '✅ Membuka Pilot', badgeType: 'pilot',
          name: 'Scribe Medis Pro',
          tagline: 'Dokumentasi konsultasi otomatis, on-premise.',
          description: 'Perekam khusus → transkrip → draft SOAP → dokter validasi & tanda tangan. Data tak keluar jaringan RS (opsi LLM on-prem).',
          chip: 'Target: dokumentasi 5–8 menit → di bawah 1 menit/pasien',
          method: 'Speech-to-Text lokal (dioptimasi untuk istilah medis Indonesia) → LLM on-premise → SOAP formatting → dokter review & tanda tangan digital. Data tidak meninggalkan jaringan RS.',
          waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'scribe-lite',
          badge: '✅ Membuka Pilot', badgeType: 'pilot',
          name: 'Scribe Medis Lite',
          tagline: 'Versi cloud: cukup laptop + mikrofon USB.',
          description: 'Onboarding 2 minggu, trial 14 hari saat rilis cloud.',
          method: 'Speech-to-Text cloud → LLM → SOAP draft → review dokter. De-identifikasi data pasien sebelum dikirim ke cloud. Cocok untuk klinik & praktik mandiri.',
          waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'jadwal-ai',
          badge: '✅ Membuka Pilot', badgeType: 'pilot',
          name: 'JadwalAI',
          tagline: 'Agent booking janji temu via WhatsApp 24/7.',
          description: 'Pasien chat → cari slot → konfirmasi → reminder → prediksi no-show.',
          chip: 'Target: no-show 18–32% → 8–14%',
          method: 'LangGraph multi-agent + WhatsApp Business API + sinkronisasi kalender dokter real-time + ML model prediksi no-show. Human-in-the-loop untuk kasus edge.',
          waUrl: 'https://wa.me/628218417551',
          fullWidth: true,
        },
      ],
    },

    capabilities: [
      { icon: 'ORK', title: 'Orkestrasi Multi-Agent',       detail: 'LangGraph',                                     color: '#2563EB' },
      { icon: 'DSN', title: 'Mesin Keputusan Teruji',       detail: 'AHP/TOPSIS, NPV/IRR, VRP, CP-SAT, ABC/BEP',    color: '#F59E0B' },
      { icon: 'APP', title: 'Aplikasi Web & Mobile',        detail: 'Sinkron real-time, offline-capable',             color: '#8B5CF6' },
      { icon: 'VIS', title: 'Vision & OCR',                 detail: 'Klasifikasi & pencatatan barang via foto',       color: '#14B8A6' },
      { icon: 'STT', title: 'Speech-to-Text Indonesia',     detail: 'Istilah medis lokal teroptimasi',                color: '#EC4899' },
      { icon: 'FCT', title: 'Forecasting & Deteksi Anomali',detail: 'Prediksi kebutuhan & alert dini',               color: '#F97316' },
      { icon: 'PRI', title: 'Privacy-First Engineering',    detail: 'On-prem LLM, patuh UU PDP',                     color: '#22C55E' },
      { icon: 'OBS', title: 'Observability & Eval',         detail: 'Watch agent think — setiap langkah bisa diaudit',color: '#64748B' },
    ],

    howItWorks: [
      { step: '01', title: 'Coba / Lihat Demo',      desc: 'Coba yang LIVE, atau jadwalkan demo 30 menit. Gratis.' },
      { step: '02', title: 'Sesuaikan ke Data Anda', desc: 'Kami konfigurasi dengan data & alur kerja nyata Anda.' },
      { step: '03', title: 'Pasang & Latih Tim',     desc: 'Implementasi 1–2 minggu (tool) atau 6–16 minggu (terintegrasi).' },
      { step: '04', title: 'Pakai & Dampingi',       desc: 'Evaluasi terukur, support berkelanjutan.' },
    ],

    deliveryModel: {
      label: 'MODEL AKSES PRODUK',
      h2: 'SaaS Berlangganan atau Implementasi Custom — Anda Pilih',
      sub: 'Kami membangun produk SaaS yang bisa langsung dipakai, sekaligus mengerjakan implementasi kustom yang terintegrasi ke sistem Anda.',
      cards: [
        {
          icon: '☁', color: '#2563EB',
          type: 'SaaS / Berlangganan',
          desc: 'Tool productized tersedia via berlangganan bulanan atau tahunan. Tidak ada biaya implementasi awal yang besar. Mulai dalam hitungan hari.',
          tags: ['Supplier Selection', 'Pricing & Margin', 'Production Scheduling', 'Distribusi', 'Investment Decision'],
        },
        {
          icon: '⚙', color: '#F59E0B',
          type: 'Implementasi Custom',
          desc: 'Kami integrasikan ke dalam sistem, data, dan alur kerja Anda yang sudah berjalan. Termasuk pelatihan tim dan pendampingan after-launch.',
          tags: ['Semua produk', 'Inventory Industria', 'Solusi Healthcare'],
        },
        {
          icon: '◈', color: '#14B8A6',
          type: 'Konsultasi Strategis',
          desc: 'Audit kesiapan AI, cetak biru transformasi digital, seleksi vendor teknologi. Ideal sebelum investasi besar.',
          tags: ['AI Readiness Audit', 'Digital Blueprint', 'Seleksi Vendor'],
        },
      ],
      cta: 'Harga menyesuaikan scope. Diskusi & blueprint awal semua paket: gratis.',
      waUrl: 'https://wa.me/628218417551',
      waCta: 'Diskusi Model yang Tepat',
    },

    footer: {
      industri: [
        'DSS Supplier Selection', 'DSS Pricing & Margin',
        'DSS Production Scheduling', 'DSS Distribusi',
        'DSS Investment Decision', 'Inventory Industria',
      ],
      healthcare: ['Scribe Medis Pro', 'Scribe Medis Lite', 'JadwalAI'],
      contact: {
        wa: '+62 821-8417-551',
        waUrl: 'https://wa.me/628218417551',
        email: 'kontak@digdayasolusi.co.id',
        location: 'Jakarta, Indonesia',
        hours: 'Senin–Jumat 08.00–17.00\nSabtu 09.00–13.00 WIB',
      },
      legal: '© 2026 PT Digdaya Solusi Sistem · Brand: DSS Industria · Solusi healthcare kami adalah pendukung keputusan klinis, bukan alat diagnosis dan bukan pengganti tenaga medis.',
      companyUrl: 'https://digdayasolusi.co.id',
    },

    ui: {
      nav: { cta: 'Konsultasi via WhatsApp', by: 'oleh PT Digdaya Solusi Sistem' },
      caps: { label: 'KEMAMPUAN TEKNIS', h2: 'Di Balik Setiap Produk' },
      howItWorks: {
        label: 'CARA MULAI', h2: 'Dari Demo ke Sistem Berjalan',
        customNote: 'Butuh solusi kustom di luar produk ini? → ',
        customLink: 'Lihat layanan PT Digdaya Solusi Sistem (digdayasolusi.co.id)',
      },
      footer: { industri: 'Produk Industri', healthcare: 'Produk Healthcare', contact: 'Kontak', brand: 'Lini produk dari PT Digdaya Solusi Sistem' },
      cta: {
        h2line1: 'Mulai dari Satu Friction', h2line2: 'yang Paling Mahal.',
        p: 'Ceritakan satu masalah operasional yang paling menggerus waktu atau margin Anda. Kami jawab dengan rencana konkret — bukan jargon.',
        wa: 'Konsultasi via WhatsApp', demo: 'Coba Demo Live',
      },
      about: {
        label: 'TENTANG', h2: 'Dibangun oleh PT Digdaya Solusi Sistem',
        p: 'DSS Industria adalah lini produk dari PT Digdaya Solusi Sistem, perusahaan teknologi berbasis di Jakarta yang melayani klien di seluruh Indonesia. Setiap produk di sini dirancang oleh praktisi yang menggabungkan kedalaman lapangan industri & healthcare dengan eksekusi teknis end-to-end.',
        company: 'Profil Perusahaan Lengkap → digdayasolusi.co.id',
      },
      modal: {
        desc: 'Deskripsi', method: 'Metode', features: 'Fitur Utama',
        timeline: 'TIMELINE',
        liveBtn: 'Buka Demo Live →', waBtn: 'Jadwalkan Demo via WhatsApp',
        video: '▶ Video Demo 2 Menit', videoSoon: 'Video akan tersedia saat rilis',
      },
      cards: {
        demoLabel: 'Lihat Detail & Syarat Pilot', detail: 'Lihat Detail',
        hubungi: 'Hubungi via WhatsApp', tonton: '▶ Tonton Video Demo (2 menit)',
        jadwalkan: 'Jadwalkan Demo', videoDemo: '▶ Video Demo',
        siapDemo: '✅ Siap Demo', bukaDemo: 'Buka Demo Live →',
        hulu: 'HULU', hilir: 'HILIR',
      },
    },
  },

  /* ──────────────────────────────────────────────
     ENGLISH
  ────────────────────────────────────────────── */
  en: {
    nav: {
      links: [
        { id: 'industri',   label: 'Industry' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'kemampuan',  label: 'Capabilities' },
        { id: 'cara-kerja', label: 'How It Works' },
      ],
      waUrl: 'https://wa.me/628218417551',
      companyUrl: 'https://digdayasolusi.co.id',
    },

    hero: {
      eyebrow: 'READY-TO-USE PRODUCTS · INDUSTRY & HEALTHCARE',
      h1: 'AI Agents & Apps You Can Try Today.',
      sub: 'DSS Industria — product line from PT Digdaya Solusi Sistem. Nine AI apps for manufacturing and healthcare: supplier selection, production scheduling, to medical documentation. Available as SaaS subscription or custom implementation.',
      ctaPrimary:   { label: 'Try Free Live Demo',     url: 'https://dss-industria.streamlit.app' },
      ctaSecondary: { label: 'Schedule 30-Min Demo',   url: 'https://wa.me/628218417551' },
      trustStrip: '9 apps built · 1 LIVE to try now · 2 verticals: Industry & Healthcare · Every agent step is fully auditable',
      traceLines: [
        { role: 'PLANNER',   text: 'Breaking down: evaluate 5 suppliers',       color: '#60A5FA' },
        { role: 'EXECUTOR',  text: 'Calculating criteria weights (AHP) ... ✓',   color: '#FBBF24' },
        { role: 'EXECUTOR',  text: 'Ranking alternatives (TOPSIS) ....... ✓',   color: '#FBBF24' },
        { role: 'VALIDATOR', text: 'Checking consistency (CR 0.04<0.10) .. ✓',  color: '#2DD4BF' },
        { role: 'OUTPUT',    text: 'Recommendation ready → PDF report',          color: '#4ADE80' },
      ],
    },

    pendekatan: {
      label: 'WHY OUR PRODUCTS ARE DIFFERENT',
      h2: 'Not a Chatbot. A Multi-Agent System You Can Audit.',
      cards: [
        { role: 'Planner',   icon: '◆', color: '#2563EB', desc: 'Breaks the task into executable steps.' },
        { role: 'Executor',  icon: '⚙', color: '#F59E0B', desc: 'Runs calculations & actions: AHP/TOPSIS, NPV/IRR, route optimization, OCR, vision.' },
        { role: 'Validator', icon: '✓', color: '#14B8A6', desc: 'Checks results before they reach you. Fails check = retried.' },
      ],
      footer: 'Proven methods (AHP, TOPSIS, NPV, IRR, VRP, CP-SAT) as tools · full observability · eval ≥10 test cases per agent.',
    },

    industri: {
      label: 'VERTICAL 01 — INDUSTRY & MANUFACTURING',
      h2: 'Your Factory Decision Chain, From Source to Delivery',
      intro: 'Five decision tools + one integrated inventory system. All built — try the LIVE one, or request a demo & watch the video.',

      flagship: {
        id: 'supplier-selection',
        badge: '🟢 LIVE — Try Now',
        badgeType: 'live',
        name: 'DSS Supplier Selection',
        tagline: 'Which supplier is best for your raw materials?',
        description: 'Multi-criteria supplier evaluation (AHP-TOPSIS): set criteria → pairwise comparison → objective ranking → PDF report. Stop choosing suppliers based on gut feeling.',
        method: 'Analytic Hierarchy Process (AHP) for criteria weighting + TOPSIS for ranking alternatives. Output: automated PDF report, consistency ratio < 0.10.',
        timeline: '1–2 weeks',
        liveUrl: 'https://dss-industria.streamlit.app',
        waUrl: 'https://wa.me/628218417551',
      },

      tools: [
        {
          id: 'pricing-margin', seq: '01',
          name: 'DSS Pricing & Margin',
          tagline: 'What selling price still keeps you profitable?',
          description: 'Activity-Based Costing + Break-Even + sensitivity. Many SMEs unknowingly lose money per SKU.',
          method: 'Activity-Based Costing (ABC) for per-SKU cost allocation, Break-Even Analysis, Sensitivity Analysis for margin simulation across selling prices.',
          timeline: '1–2 weeks', waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'production-scheduling', seq: '02',
          name: 'DSS Production Scheduling',
          tagline: 'Which order goes first, on which machine?',
          description: '4 algorithms (SPT/EDD/Johnson/CP-SAT) + Gantt chart. Automotive factory takt time — for SMEs.',
          method: 'Shortest Processing Time (SPT), Earliest Due Date (EDD), Johnson\'s Algorithm, CP-SAT Solver from Google OR-Tools. Output: interactive Gantt chart per machine.',
          timeline: '1–2 weeks', waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'distribusi', seq: '03',
          name: 'DSS Distribution',
          tagline: 'The most efficient delivery route for your fleet?',
          description: 'Route optimization for 2–5 vehicles (TSP/VRP) on a map. Save fuel & driver hours.',
          method: 'Travelling Salesman Problem (TSP) for single vehicle, Vehicle Routing Problem (VRP) for 2–5 vehicle fleet. Interactive route visualization on map.',
          timeline: '1–2 weeks', waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'investment', seq: '04',
          name: 'DSS Investment Decision',
          tagline: 'Buy a new machine — worth it?',
          description: 'NPV, IRR, Payback + sensitivity. Capital decisions should not rely on instinct.',
          method: 'Net Present Value (NPV), Internal Rate of Return (IRR), Payback Period, Sensitivity Analysis for assumption variations (raw material prices, utilization, inflation).',
          timeline: '1–2 weeks', waUrl: 'https://wa.me/628218417551',
        },
      ],

      integrated: {
        id: 'inventory-industria',
        badge: '✅ Ready for Demo — Schedule a Meeting',
        badgeType: 'demo',
        name: 'Inventory Industria',
        tagline: 'Integrated stock: web for managers, mobile for operators, AI reads item photos.',
        description: 'End-to-end inventory system with web dashboard for managers, mobile app for warehouse operators, and AI vision for automatic item entry via photo. Real-time sync.',
        features: [
          'Item photo → auto-classified & recorded',
          'Demand forecasting & reorder recommendations',
          'Anomaly alerts: stockout & dead stock before they happen',
        ],
        method: 'Computer Vision for item classification & recording via photo, Time-series Forecasting for demand planning, Anomaly Detection for stockout/dead stock.',
        timeline: 'web + mobile + AI',
        waUrl: 'https://wa.me/628218417551',
      },
    },

    healthcare: {
      label: 'VERTICAL 02 — HEALTHCARE',
      h2: 'Give Doctors Their Time Back — From Typing to Patients',
      intro: 'AI agents for hospitals & clinics — strict human-in-the-loop & compliant with Personal Data Protection Law.',
      pilotCta: 'Be the first pilot hospital/clinic — pilot pricing & intensive support',
      waUrl: 'https://wa.me/628218417551',
      privacy: 'Patient data de-identification before AI processing · on-premise LLM option · full audit trail · PDP Law compliant. All our solutions are clinical decision support & workflow automation — medical decisions always remain with the doctor.',
      products: [
        {
          id: 'scribe-pro',
          badge: '✅ Opening Pilot', badgeType: 'pilot',
          name: 'Medical Scribe Pro',
          tagline: 'Automated consultation documentation, on-premise.',
          description: 'Dedicated recorder → transcript → SOAP draft → doctor validates & signs. Data never leaves hospital network (on-prem LLM option).',
          chip: 'Target: 5–8 min documentation → under 1 min/patient',
          method: 'Local Speech-to-Text (optimized for Indonesian medical terminology) → on-premise LLM → SOAP formatting → doctor review & digital signature. Data does not leave hospital network.',
          waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'scribe-lite',
          badge: '✅ Opening Pilot', badgeType: 'pilot',
          name: 'Medical Scribe Lite',
          tagline: 'Cloud version: just a laptop + USB microphone.',
          description: '2-week onboarding, 14-day trial at cloud launch.',
          method: 'Cloud Speech-to-Text → LLM → SOAP draft → doctor review. Patient data de-identified before cloud transmission. Ideal for clinics & private practice.',
          waUrl: 'https://wa.me/628218417551',
        },
        {
          id: 'jadwal-ai',
          badge: '✅ Opening Pilot', badgeType: 'pilot',
          name: 'JadwalAI',
          tagline: 'Appointment booking agent via WhatsApp 24/7.',
          description: 'Patient chats → finds slot → confirms → reminder → no-show prediction.',
          chip: 'Target: no-show 18–32% → 8–14%',
          method: 'LangGraph multi-agent + WhatsApp Business API + real-time doctor calendar sync + no-show prediction ML model. Human-in-the-loop for edge cases.',
          waUrl: 'https://wa.me/628218417551',
          fullWidth: true,
        },
      ],
    },

    capabilities: [
      { icon: 'ORK', title: 'Multi-Agent Orchestration',    detail: 'LangGraph',                                   color: '#2563EB' },
      { icon: 'DSN', title: 'Proven Decision Engines',      detail: 'AHP/TOPSIS, NPV/IRR, VRP, CP-SAT, ABC/BEP',  color: '#F59E0B' },
      { icon: 'APP', title: 'Web & Mobile Apps',            detail: 'Real-time sync, offline-capable',             color: '#8B5CF6' },
      { icon: 'VIS', title: 'Vision & OCR',                 detail: 'Item classification & recording via photo',   color: '#14B8A6' },
      { icon: 'STT', title: 'Indonesian Speech-to-Text',    detail: 'Optimized for local medical terminology',     color: '#EC4899' },
      { icon: 'FCT', title: 'Forecasting & Anomaly Detection',detail: 'Demand prediction & early alerts',         color: '#F97316' },
      { icon: 'PRI', title: 'Privacy-First Engineering',    detail: 'On-prem LLM, PDP Law compliant',             color: '#22C55E' },
      { icon: 'OBS', title: 'Observability & Eval',         detail: 'Watch agent think — every step is auditable',color: '#64748B' },
    ],

    howItWorks: [
      { step: '01', title: 'Try / See Demo',       desc: 'Try the LIVE app, or schedule a 30-min demo. Free.' },
      { step: '02', title: 'Adapt to Your Data',   desc: 'We configure it with your real data & workflows.' },
      { step: '03', title: 'Deploy & Train Team',  desc: 'Implementation 1–2 weeks (tool) or 6–16 weeks (integrated).' },
      { step: '04', title: 'Use & Get Supported',  desc: 'Measurable evaluation, ongoing support.' },
    ],

    deliveryModel: {
      label: 'PRODUCT ACCESS MODEL',
      h2: 'SaaS Subscription or Custom Implementation — Your Choice',
      sub: 'We build SaaS products you can use immediately, and also deliver custom implementations integrated into your existing systems.',
      cards: [
        {
          icon: '☁', color: '#2563EB',
          type: 'SaaS / Subscription',
          desc: 'Productized tools available as monthly or annual subscriptions. No large upfront integration cost. Start within days.',
          tags: ['Supplier Selection', 'Pricing & Margin', 'Production Scheduling', 'Distribution', 'Investment Decision'],
        },
        {
          icon: '⚙', color: '#F59E0B',
          type: 'Custom Implementation',
          desc: 'We integrate into your existing systems, data, and workflows. Includes team training and after-launch support.',
          tags: ['All products', 'Inventory Industria', 'Healthcare Solutions'],
        },
        {
          icon: '◈', color: '#14B8A6',
          type: 'Strategic Consulting',
          desc: 'AI readiness audit, digital transformation blueprint, technology vendor selection. Ideal before major investments.',
          tags: ['AI Readiness Audit', 'Digital Blueprint', 'Vendor Selection'],
        },
      ],
      cta: 'Pricing adapts to scope. Initial discussion & blueprint for all packages: free.',
      waUrl: 'https://wa.me/628218417551',
      waCta: 'Discuss the Right Model',
    },

    footer: {
      industri: [
        'DSS Supplier Selection', 'DSS Pricing & Margin',
        'DSS Production Scheduling', 'DSS Distribution',
        'DSS Investment Decision', 'Inventory Industria',
      ],
      healthcare: ['Medical Scribe Pro', 'Medical Scribe Lite', 'JadwalAI'],
      contact: {
        wa: '+62 821-8417-551',
        waUrl: 'https://wa.me/628218417551',
        email: 'kontak@digdayasolusi.co.id',
        location: 'Jakarta, Indonesia',
        hours: 'Mon–Fri 08:00–17:00\nSat 09:00–13:00 WIB',
      },
      legal: '© 2026 PT Digdaya Solusi Sistem · Brand: DSS Industria · Our healthcare solutions are clinical decision support tools, not diagnostic instruments and not a substitute for medical professionals.',
      companyUrl: 'https://digdayasolusi.co.id',
    },

    ui: {
      nav: { cta: 'WhatsApp Consultation', by: 'by PT Digdaya Solusi Sistem' },
      caps: { label: 'TECHNICAL CAPABILITIES', h2: 'Behind Every Product' },
      howItWorks: {
        label: 'HOW TO START', h2: 'From Demo to Live System',
        customNote: 'Need a custom solution beyond these products? → ',
        customLink: 'Visit PT Digdaya Solusi Sistem services (digdayasolusi.co.id)',
      },
      footer: { industri: 'Industry Products', healthcare: 'Healthcare Products', contact: 'Contact', brand: 'Product line from PT Digdaya Solusi Sistem' },
      cta: {
        h2line1: 'Start With Your', h2line2: 'Costliest Friction.',
        p: 'Tell us about one operational problem that drains the most time or margin. We respond with a concrete plan — not jargon.',
        wa: 'WhatsApp Consultation', demo: 'Try Live Demo',
      },
      about: {
        label: 'ABOUT', h2: 'Built by PT Digdaya Solusi Sistem',
        p: 'DSS Industria is the product line of PT Digdaya Solusi Sistem, a Jakarta-based technology company serving clients across Indonesia. Every product here is designed by practitioners combining deep industry & healthcare field knowledge with end-to-end technical execution.',
        company: 'Full Company Profile → digdayasolusi.co.id',
      },
      modal: {
        desc: 'Description', method: 'Method', features: 'Key Features',
        timeline: 'TIMELINE',
        liveBtn: 'Open Live Demo →', waBtn: 'Schedule Demo via WhatsApp',
        video: '▶ 2-Minute Demo Video', videoSoon: 'Video coming at launch',
      },
      cards: {
        demoLabel: 'View Details & Pilot Terms', detail: 'View Details',
        hubungi: 'Contact via WhatsApp', tonton: '▶ Watch Demo Video (2 min)',
        jadwalkan: 'Schedule Demo', videoDemo: '▶ Demo Video',
        siapDemo: '✅ Ready to Demo', bukaDemo: 'Open Live Demo →',
        hulu: 'UPSTREAM', hilir: 'DOWNSTREAM',
      },
    },
  },
};

window.DSS = window.DSS_DATA.id;
