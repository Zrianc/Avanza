// ===== SHARED NAV & FOOTER =====

function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'o-nama.html', label: 'O nama' },
    { href: 'usluge.html', label: 'Usluge' },
    { href: 'klijenti.html', label: 'Klijenti' },
  ];
  document.getElementById('nav-placeholder').innerHTML = `
    <nav id="main-nav">
      <a href="index.html" class="nav-logo">avanza</a>
      <ul class="nav-links">
        ${pages.map(p => `<li><a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a></li>`).join('')}
        <li><a href="kontakt.html" class="nav-cta">Kontakt</a></li>
      </ul>
    </nav>
  `;
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.style.background = window.scrollY > 40 ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.9)';
  });
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">avanza</a>
          <p>Moderna i dinamična digitalna marketinška agencija posvećena rastu i napretku, bazirana u Zagrebu.</p>
        </div>
        <div class="footer-col">
          <h4>Linkovi</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="o-nama.html">O nama</a></li>
            <li><a href="usluge.html">Usluge</a></li>
            <li><a href="klijenti.html">Klijenti</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Usluge</h4>
          <ul>
            <li><a href="usluge.html">Marketing</a></li>
            <li><a href="usluge.html">Kreativa</a></li>
            <li><a href="usluge.html">Strategija</a></li>
            <li><a href="usluge.html">Growth</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Kontakt</h4>
          <ul>
            <li><a href="mailto:ana@avanza.hr">ana@avanza.hr</a></li>
            <li><a href="tel:+385989114147">+385 98 911 4147</a></li>
            <li><span style="color:var(--grey);font-size:.875rem;">Pon–Pet, 09–17h</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>©2026 Avanza. All Rights Reserved.</p>
        <div class="social-links">
          <a href="https://www.facebook.com/profile.php?id=61582886081194" target="_blank">Facebook</a>
          <a href="http://linkedin.com/company/avanza-agency" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/avanza.hr/" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@avanza.hr" target="_blank">TikTok</a>
        </div>
      </div>
    </footer>
  `;
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function renderMarquee() {
  const items = ['Strategija', 'Marketing', 'Kreativa', 'Growth', 'Brend', 'Digitalni rast', 'Sadržaj', 'Analitika'];
  const doubled = [...items, ...items];
  return `<div class="marquee-wrap"><div class="marquee-track">${doubled.map(i => `<span class="marquee-item">${i}</span>`).join('')}</div></div>`;
}
