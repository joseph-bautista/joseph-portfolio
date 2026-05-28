/* ================================================================
   main.js — Joseph's Portfolio
   Handles: dark/light toggle, active nav highlighting, scroll reveal
   ================================================================ */

/* ----------------------------------------------------------------
   1. THEME TOGGLE
   Dark / Light mode — persists preference in localStorage
   ---------------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const html        = document.documentElement;

// Load saved preference, default to dark
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});


/* ----------------------------------------------------------------
   2. ACTIVE NAV LINK — highlights the section you're in
   ---------------------------------------------------------------- */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px'
});

sections.forEach(s => navObserver.observe(s));


/* ----------------------------------------------------------------
   3. SCROLL REVEAL — fade + slide up elements on scroll
   Add class="reveal" to any element in HTML to animate it in
   ---------------------------------------------------------------- */
const revealEls = document.querySelectorAll(
  '.skill-card, .project-card, .timeline-item, .hero-content, .section-heading'
);

// Stamp reveal class
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger each card by 80ms
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));


/* ----------------------------------------------------------------
   4. SMOOTH ANCHOR SCROLLING — offset for fixed header
   ---------------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 70; // matches header height
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ----------------------------------------------------------------
   5. HEADER SHADOW ON SCROLL
   ---------------------------------------------------------------- */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20
    ? '0 4px 30px rgba(0,0,0,0.3)'
    : 'none';
}, { passive: true });