/* ═══════════════════════════════════════════════════
   DATOS — Servicios
   ═══════════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="5" stroke="#00d4ff" stroke-width="1.5"/>
      <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="#00d4ff" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M5.5 5.5l2.8 2.8M19.7 19.7l2.8 2.8M22.5 5.5l-2.8 2.8M8.3 19.7l-2.8 2.8" stroke="#00d4ff" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    title: "Monitoreo Remoto 24/7",
    description: "Supervisión continua de todos tus dispositivos IoT con alertas en tiempo real. Detectamos anomalías antes de que se conviertan en fallas críticas.",
    tag: "CORE"
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="6" width="22" height="16" rx="2" stroke="#00e5a0" stroke-width="1.5"/>
      <path d="M8 14l3 3 6-6" stroke="#00e5a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 2v4M14 22v4" stroke="#00e5a0" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    title: "Mantenimiento Predictivo",
    description: "Análisis de patrones de comportamiento para anticipar mantenimientos. Reducimos tiempos de inactividad y prolongamos la vida útil de tus equipos.",
    tag: "AI"
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 20l6-6 4 4 5-8 5 4" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="2" y="2" width="24" height="24" rx="2" stroke="#f59e0b" stroke-width="1.5"/>
    </svg>`,
    title: "Dashboard en Tiempo Real",
    description: "Panel centralizado con métricas, históricos y reportes de todos tus activos. Visualización clara de KPIs operativos desde cualquier dispositivo.",
    tag: "LIVE"
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4z" stroke="#00d4ff" stroke-width="1.5"/>
      <path d="M4 14h20M14 4a15.23 15.23 0 0 0 0 20M14 4a15.23 15.23 0 0 1 0 20" stroke="#00d4ff" stroke-width="1.5"/>
    </svg>`,
    title: "Gestión de Inventario IoT",
    description: "Administración centralizada de sensores, gateways y actuadores. Actualizaciones de firmware OTA, configuración remota y control de inventario.",
    tag: "FLEET"
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3l2.5 5 5.5.8-4 3.9.94 5.5L14 15.5l-4.94 2.7.94-5.5L6 8.8l5.5-.8L14 3z" stroke="#00e5a0" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M6 22h16" stroke="#00e5a0" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M9 25h10" stroke="#00e5a0" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    title: "Alertas Inteligentes",
    description: "Sistema de notificaciones multicanal por SMS, email y Telegram. Escalamiento automático por severidad y rutas de atención configurables.",
    tag: "SMART"
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="#f59e0b" stroke-width="1.5"/>
      <rect x="15" y="3" width="10" height="10" rx="1.5" stroke="#f59e0b" stroke-width="1.5"/>
      <rect x="3" y="15" width="10" height="10" rx="1.5" stroke="#f59e0b" stroke-width="1.5"/>
      <path d="M15 20h4M20 15v4" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="22" cy="22" r="3" stroke="#f59e0b" stroke-width="1.5"/>
    </svg>`,
    title: "Integración y Conectividad",
    description: "Compatible con protocolos MQTT, Modbus, OPC-UA y REST APIs. Integración con plataformas cloud: AWS IoT, Azure IoT Hub y Google Cloud IoT.",
    tag: "CONNECT"
  }
];

/* ═══════════════════════════════════════════════════
   DATOS — Dispositivos
   ═══════════════════════════════════════════════════ */
const DEVICES = [
  { id: "GW-001",  name: "Gateway Principal",   location: "Planta Norte",  status: "online",  uptime: "99.97%", last: "hace 2s" },
  { id: "SNS-014", name: "Sensor Temperatura",  location: "Sala Calderas", status: "online",  uptime: "99.81%", last: "hace 5s" },
  { id: "SNS-028", name: "Sensor Presión",      location: "Línea B",       status: "warn",    uptime: "97.40%", last: "hace 12s" },
  { id: "ACT-007", name: "Actuador Válvula",    location: "Depósito A",    status: "online",  uptime: "99.99%", last: "hace 1s" },
  { id: "GW-002",  name: "Gateway Backup",      location: "Planta Sur",    status: "offline", uptime: "—",      last: "hace 4min" }
];

/* ═══════════════════════════════════════════════════
   HELPER — Color por status
   ═══════════════════════════════════════════════════ */
function statusColor(status) {
  if (status === "online") return "#00e5a0";
  if (status === "warn") return "#f59e0b";
  if (status === "offline") return "#ef4444";
  return "#6b7fa0";
}

/* ═══════════════════════════════════════════════════
   RENDER — Servicios
   ═══════════════════════════════════════════════════ */
(function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map((s) => `
    <div class="service-card">
      <div class="service-head">
        <div class="service-icon">${s.icon}</div>
        <span class="service-tag">${s.tag}</span>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
    </div>
  `).join('');
})();

/* ═══════════════════════════════════════════════════
   RENDER — Tabla del dashboard
   ═══════════════════════════════════════════════════ */
(function renderDashboard() {
  const tbody = document.getElementById('dashTbody');
  if (!tbody) return;

  tbody.innerHTML = DEVICES.map((d) => {
    const color = statusColor(d.status);
    return `
      <tr>
        <td><span class="status-dot status-${d.status}"></span></td>
        <td class="mono-cell" style="color: #6b7fa0">${d.id}</td>
        <td style="color: #e8edf5; font-weight: 500">${d.name}</td>
        <td style="color: #6b7fa0; font-size: 12px">${d.location}</td>
        <td class="mono-cell" style="color: ${color}">${d.uptime}</td>
        <td class="mono-cell" style="color: #6b7fa0">${d.last}</td>
      </tr>
    `;
  }).join('');
})();

/* ═══════════════════════════════════════════════════
   LIVE CLOCK — Actualización cada segundo
   ═══════════════════════════════════════════════════ */
(function initLiveClock() {
  const clocks = [document.getElementById('liveClock'), document.getElementById('liveClockDash')];

  function update() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} UTC-3`;
    clocks.forEach((c) => { if (c) c.textContent = timeStr; });
  }

  update();
  setInterval(update, 1000);
})();

/* ═══════════════════════════════════════════════════
   NAV — Menú móvil
   ═══════════════════════════════════════════════════ */
(function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
  });

  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
    })
  );
})();

/* ═══════════════════════════════════════════════════
   SMOOTH SCROLL
   ═══════════════════════════════════════════════════ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const nav = document.getElementById('nav');
      const offset = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ═══════════════════════════════════════════════════
   FORMULARIO DE CONTACTO
   ═══════════════════════════════════════════════════ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.hidden = true;
    success.hidden = false;
  });
})();

/* ═══════════════════════════════════════════════════
   REVEAL — Fade-in al hacer scroll
   ═══════════════════════════════════════════════════ */
(function initReveal() {
  const elements = document.querySelectorAll('.mv-card, .service-card, .step-card, .dashboard');
  if (!elements.length || !('IntersectionObserver' in window)) return;

  elements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
})();