/**
 * RITU RANI - FORENSIC SCIENCE SPECIALIST & INVESTIGATOR PORTFOLIO
 * JAVASCRIPT LOGIC & INTERACTIVE LAB DEMONSTRATORS (script.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. CASE FILE DATA REPOSITORY
  // --------------------------------------------------------------------------
  const caseDatabase = {
    case1: {
      id: "CASE-VISIT 01",
      badge: "Commercial Fire",
      title: "Commercial Premise Fire Origin Assessment",
      location: "MS Shree Ganpati Moulding, Sector-15 Noida Metro, UP",
      date: "June 11, 2026",
      objective: "Conduct on-site arson and origin investigation to determine if the commercial premise fire was accidental or incendiary for insurance claim verification.",
      evidence: [
        "Uniform V-pattern and U-pattern soot deposition along the front entrance perimeter and ceiling joists",
        "Air conditioner (AC) primary power line insulation degradation and copper wire bead formation analysis",
        "Ash and structural debris sampling for volatile hydrocarbon/accelerant residue screening via Gas Chromatography-Mass Spectrometry (GC-MS)",
        "Multi-angle photographic GPS documentation mapping 4 structural corners, basement breach, and point of lowest burn",
        "Examination of breaker panel and fuse distribution boxes for tripped current indicators"
      ],
      conclusions: "Evidence validated an electrical origin originating from damaged AC wiring infrastructure. Sharp demarcation arcing beads confirmed localized electrical faulting prior to open flame ignition, ruling out intentional chemical accelerants.",
      tools: "GPS Map Camera, Optical Bead Microscopy, Hydrocarbon Sampling Kits, Voltmeter/Multimeter, Chain of Custody Documentation Logs."
    },
    case2: {
      id: "CASE-VISIT 02",
      badge: "Vehicle Arson / Fire",
      title: "Logistics Heavy Container Truck Fire Examination",
      location: "Dasna, Piplehda, Uttar Pradesh",
      date: "June 20, 2026",
      objective: "Isolate point of fire origin in heavy commercial logistics truck in transit from Mumbai to Delhi, assess cabin destruction, and restore obscured chassis identification under soot layers.",
      evidence: [
        "Intense thermal deformation localized strictly to driver and co-driver cabin compartments with heavy glass crazing",
        "Chemical restoration of etched VIN / Chassis stamping (MC2CASRFORD109620) obscured by thermal soot and oxidation",
        "Physical evidence collection and exhibit tagging (#2) following standard chain of custody protocol",
        "Cargo container bulkhead thermal barrier integrity analysis showing complete insulation of freight merchandise",
        "Driver statement corroboration regarding initial smoke emission from co-driver floorboard wiring harnesses"
      ],
      conclusions: "Origin conclusively determined at the co-driver side mechanical/wiring compartment. The goods cargo container remained thermally intact without accelerant markers, validating the Own Damage (OD) insurance claim.",
      tools: "Chemical etching & soot removal reagents, Evidence Tagging markers, Thermal damage classification calipers, Chassis restoration brushes."
    },
    case3: {
      id: "LAB EXHIBIT 03",
      badge: "Diagnostic Serology",
      title: "Dry Blood Examination & ABO Grouping Protocol",
      location: "Helix Biofast Diagnostic Laboratory",
      date: "June 2026",
      objective: "Execute presumptive catalytic screening on dried trace stains, perform ABO blood grouping via antisera agglutination microscopy, and master Dried Blood Spot (DBS) handling.",
      evidence: [
        "Kastle-Meyer reagent (reduced phenolphthalin) + 3% Hydrogen Peroxide producing an instantaneous vivid pink chromogenic endpoint",
        "Differential incubation at controlled 4–6°C with Anti-A, Anti-B, and Anti-D (Rh) monoclonal antisera",
        "High-power optical microscopic examination distinguishing agglutinated red blood cell lattices from scattered cells",
        "Dried Blood Spot (DBS) extraction and preservation protocol ensuring zero nucleic acid degradation",
        "Negative control testing against chemical oxidants to eliminate vegetable peroxidase false positives"
      ],
      conclusions: "Achieved 100% positive identification of trace blood specimens and verified precise ABO/Rh blood group classification through indisputable microscopic clumping evidence.",
      tools: "Reduced Phenolphthalin, Hydrogen Peroxide (H2O2), Anti-A / Anti-B / Anti-D Sera, Compound Optical Microscope, DBS Filter Paper."
    },
    case4: {
      id: "DIGITAL EXHIBIT 04",
      badge: "Multimedia Forensics",
      title: "CCTV DVR Timeline & Phonetic Speech Transcription",
      location: "TFWF Multimedia Forensics Laboratory",
      date: "June 2026",
      objective: "Perform frame-accurate electronic timestamp reconstruction of initial spark ignition from surveillance DVR files and transcribe interrogation audio with phonetic precision.",
      evidence: [
        "CCTV Camera 3 optical frame analysis: Initial micro-spark detected at timestamp 05:47:12 PM",
        "Camera 3 secondary ignition flare documented at 05:47:32 PM (precisely 20 seconds flame latency)",
        "SHA-256 cryptographic hash validation ensuring forensic authenticity and non-tampered chain of digital custody",
        "Phonetic verbatim transcription isolating voiced vs. voiceless speech sound articulation from witness audio recordings",
        "Cross-camera multi-perspective timestamp synchronization matching front gate and interior hallway feeds"
      ],
      conclusions: "Established an indisputable minute-by-minute timeline corroborating electrical failure prior to visible blaze eruption, synchronizing physical burn marks with surveillance records.",
      tools: "DVR/NVR Forensic Extraction Suite, SHA-256 Hash Verification algorithms, Phonetic Articulation Analysis, Audio Waveform Visualizers."
    },
    case5: {
      id: "CAD EXHIBIT 05",
      badge: "3D Crime Scene CAD",
      title: "Virtual 3D Room & Scene Spatial Reconstruction",
      location: "Forensic Computer Graphics Unit",
      date: "June 2026",
      objective: "Translate physical crime scene measurements into scaled 2D blueprints and interactive 3D spatial models using HomeByMe software for courtroom demonstratives.",
      evidence: [
        "2D floor layout diagramming with scaled spatial dimensions (10 m² main operational zone, 2.3 m² private office)",
        "Exact 3D positioning of structural barriers, furniture, entry points, and line-of-sight visual corridors",
        "Virtual camera placement reproducing eyewitness perspective angles and bullet/splatter trajectory clearance",
        "Permanent digital scene preservation before physical cleanup, demolition, or contamination could occur"
      ],
      conclusions: "Generated millimeter-accurate virtual walkthroughs allowing judges, juries, and attorneys to examine physical evidence placement in its authentic spatial context.",
      tools: "HomeByMe 3D Architecture Suite, Laser Distance Measurement Data, Scaled 2D/3D CAD Modeling Tools."
    }
  };

  // --------------------------------------------------------------------------
  // 2. MODAL CONTROLLERS (CASE DEEP DIVE)
  // --------------------------------------------------------------------------
  const caseModal = document.getElementById('caseModal');
  const modalContent = document.getElementById('modalContent');

  window.openCaseModal = function (caseKey) {
    const data = caseDatabase[caseKey];
    if (!data) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:8px;">
          <span class="section-eyebrow" style="margin-bottom:0;">${data.id} &bull; ${data.badge}</span>
          <span class="mono-badge">${data.date}</span>
        </div>
        <h3 style="font-size:1.45rem; margin-top:8px;">${data.title}</h3>
        <p style="font-size:0.875rem; color:var(--text-muted); display:flex; align-items:center; gap:6px; margin-top:4px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          ${data.location}
        </p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size:0.8125rem; color:var(--accent-primary); text-transform:uppercase; font-family:var(--font-mono); margin-bottom:6px; letter-spacing:0.06em;">Investigative Objective</h4>
        <p style="font-size:0.9375rem; color:var(--text-main); line-height:1.6;">${data.objective}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size:0.8125rem; color:var(--accent-primary); text-transform:uppercase; font-family:var(--font-mono); margin-bottom:8px; letter-spacing:0.06em;">Key Forensic Evidence &amp; Findings</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; font-size:0.875rem; color:var(--text-main);">
          ${data.evidence.map(e => `
            <li style="display:flex; align-items:flex-start; gap:10px; line-height:1.5;">
              <span style="color:var(--accent-primary); font-weight:700; flex-shrink:0;">&#10003;</span>
              <span>${e}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="background:var(--bg-subtle); border-radius:var(--radius-md); padding:16px 18px; margin-bottom:20px; border-left:3px solid var(--accent-secondary); border-top:1px solid var(--border-subtle); border-right:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle);">
        <h4 style="font-size:0.8125rem; color:var(--accent-secondary); text-transform:uppercase; font-family:var(--font-mono); margin-bottom:6px; letter-spacing:0.06em;">Forensic Conclusion</h4>
        <p style="font-size:0.875rem; color:var(--text-main); line-height:1.6;">${data.conclusions}</p>
      </div>

      <div>
        <h4 style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase; font-family:var(--font-mono); margin-bottom:4px; letter-spacing:0.06em;">Scientific Apparatus &amp; Methodologies</h4>
        <p style="font-size:0.8125rem; font-family:var(--font-mono); color:var(--text-muted);">${data.tools}</p>
      </div>
    `;

    caseModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function () {
    caseModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  };

  window.closeModalOnBackdrop = function (e) {
    if (e.target.id === 'caseModal') {
      window.closeModal();
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseModal.classList.contains('open')) {
      window.closeModal();
    }
  });

  // --------------------------------------------------------------------------
  // 3. CASEWORK FILTERING
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      caseCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 4. THEME TOGGLING (DARK / LIGHT)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;
  const sunIcon = document.getElementById('themeIconSun');
  const moonIcon = document.getElementById('themeIconMoon');

  function updateThemeIcons(theme) {
    if (theme === 'light') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }

  const savedTheme = localStorage.getItem('rr_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('rr_theme', newTheme);
    updateThemeIcons(newTheme);
  });

  // --------------------------------------------------------------------------
  // 5. MOBILE NAVIGATION TOGGLE
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // --------------------------------------------------------------------------
  // 6. TOAST NOTIFICATIONS & COPY CONTACT
  // --------------------------------------------------------------------------
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  window.showToast = function (msg) {
    clearTimeout(toastTimer);
    toastMsg.innerText = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  window.copyContactInfo = function () {
    const contactSummary = "Ritu Rani | Forensic Science Specialist & Investigator\nEmail: ritu24379@gmail.com\nPhone: +91 81682 50169\nLinkedIn: https://www.linkedin.com/in/ritu-rani-94250637a\nLocation: Naultha, Panipat, Haryana";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(contactSummary).then(() => {
        window.showToast("Ritu's contact details copied to clipboard!");
      }).catch(() => {
        window.showToast("Email: ritu24379@gmail.com | Phone: +91 81682 50169");
      });
    } else {
      window.showToast("Email: ritu24379@gmail.com | Phone: +91 81682 50169");
    }
  };

  // --------------------------------------------------------------------------
  // 7. RECRUITER FORM HANDLER & PRE-FILLED TEMPLATES
  // --------------------------------------------------------------------------
  window.applyTemplate = function (val) {
    const roleField = document.getElementById('senderRole');
    const msgField = document.getElementById('senderMessage');

    if (val === 'interview') {
      roleField.value = '15-Min Introductory Screening Call';
      msgField.value = 'Hi Ritu, We reviewed your forensic science portfolio and would like to invite you for a 15-minute introductory screening call to discuss our upcoming investigative/laboratory openings.';
    } else if (val === 'role') {
      roleField.value = 'Forensic Analyst / Junior Crime Scene Investigator';
      msgField.value = 'Dear Ritu, We currently have an opening on our forensic team that aligns strongly with your arson investigation and diagnostic serology background. We would love to review your full CV and connect.';
    } else if (val === 'dossier') {
      roleField.value = 'Casework Report Dossier Request';
      msgField.value = 'Hello Ritu, Could you please furnish the full technical dossier and evidence documentation for your industrial arson and vehicle fire examinations conducted at Tathya Forensic Wings Federation?';
    } else {
      roleField.value = '';
      msgField.value = '';
    }
  };

  window.handleRecruiterForm = function (e) {
    e.preventDefault();
    const name = document.getElementById('senderName').value.trim();
    const role = document.getElementById('senderRole').value.trim();
    const msg = document.getElementById('senderMessage').value.trim();

    if (!name || !role || !msg) {
      window.showToast("Please fill in all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(`Forensic Inquiry: ${role} - ${name}`);
    const body = encodeURIComponent(`Dear Ritu,\n\n${msg}\n\nFrom,\n${name}\nRole / Organization: ${role}`);

    window.location.href = `mailto:ritu24379@gmail.com?subject=${subject}&body=${body}`;
    window.showToast("Opening your email client to send message...");
  };

  // --------------------------------------------------------------------------
  // 8. INTERACTIVE DEMO 1: KASTLE-MEYER BLOOD TEST SIMULATOR
  // --------------------------------------------------------------------------
  const liquid = document.getElementById('tubeLiquid');
  const status = document.getElementById('kmStatus');
  const s1 = document.getElementById('kmStep1Btn');
  const s2 = document.getElementById('kmStep2Btn');
  const s3 = document.getElementById('kmStep3Btn');

  window.runKmStep = function (step) {
    if (step === 1) {
      liquid.className = 'test-tube-liquid step1';
      status.innerHTML = '<strong>Step 1:</strong> Suspected dried blood sample added. Color: Pale brownish hemoglobin extract.';
      s1.disabled = true;
      s2.disabled = false;
    } else if (step === 2) {
      liquid.className = 'test-tube-liquid step2';
      status.innerHTML = '<strong>Step 2:</strong> Kastle-Meyer reduced phenolphthalin reagent added. Solution remains clear/straw. No false positive prior to oxidant.';
      s2.disabled = true;
      s3.disabled = false;
    } else if (step === 3) {
      liquid.className = 'test-tube-liquid step3';
      status.innerHTML = '<strong style="color:var(--accent-primary);">POSITIVE TEST CONFIRMED!</strong> Immediate vivid pink reaction! Hemoglobin catalyzed H₂O₂ oxidation of phenolphthalin to pink phenolphthalein.';
      s3.disabled = true;
    }
  };

  window.resetKmSim = function () {
    liquid.className = 'test-tube-liquid';
    status.innerText = 'Tube empty. Click Step 1 to add the suspected dried blood specimen.';
    s1.disabled = false;
    s2.disabled = true;
    s3.disabled = true;
  };

  // --------------------------------------------------------------------------
  // 9. INTERACTIVE DEMO 2: HENRY 10-DIGIT CLASSIFICATION CALCULATOR
  // --------------------------------------------------------------------------
  const fingerDefs = [
    { name: "R. Thumb", val: 16, isEven: false },
    { name: "R. Index", val: 16, isEven: true },
    { name: "R. Middle", val: 8, isEven: false },
    { name: "R. Ring", val: 8, isEven: true },
    { name: "R. Little", val: 4, isEven: false },
    { name: "L. Thumb", val: 4, isEven: true },
    { name: "L. Index", val: 2, isEven: false },
    { name: "L. Middle", val: 2, isEven: true },
    { name: "L. Ring", val: 1, isEven: false },
    { name: "L. Little", val: 1, isEven: true }
  ];

  // Default state: Right Index whorl active
  const whorlState = [false, true, false, false, false, false, false, false, false, false];

  function calculateHenry() {
    let evenSum = 0;
    let oddSum = 0;

    fingerDefs.forEach((f, idx) => {
      if (whorlState[idx]) {
        if (f.isEven) {
          evenSum += f.val;
        } else {
          oddSum += f.val;
        }
      }
    });

    const numerator = evenSum + 1;
    const denominator = oddSum + 1;
    document.getElementById('henryResult').innerText = `${numerator} / ${denominator}`;
  }

  function renderHenryGrid() {
    const grid = document.getElementById('henryGrid');
    if (!grid) return;
    grid.innerHTML = '';

    fingerDefs.forEach((f, idx) => {
      const div = document.createElement('div');
      div.className = 'finger-toggle' + (whorlState[idx] ? ' active' : '');
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-pressed', whorlState[idx] ? 'true' : 'false');
      div.onclick = () => toggleFinger(idx);
      div.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFinger(idx);
        }
      };

      div.innerHTML = `
        <div class="finger-name">${f.name}</div>
        <div class="finger-val">${whorlState[idx] ? 'WHORL (' + f.val + ')' : 'Loop/Arch'}</div>
      `;
      grid.appendChild(div);
    });

    calculateHenry();
  }

  function toggleFinger(idx) {
    whorlState[idx] = !whorlState[idx];
    renderHenryGrid();
  }

  renderHenryGrid();

  // --------------------------------------------------------------------------
  // 10. ACTIVE NAVBAR SCROLLSPY
  // --------------------------------------------------------------------------
  const navSections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    navSections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
