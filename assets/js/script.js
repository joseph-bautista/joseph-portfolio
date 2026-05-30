/* ================================================================
   script.js — Joseph Bautista Portfolio
   ================================================================ */

/* ----------------------------------------------------------------
   1. THEME TOGGLE
   ---------------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const html        = document.documentElement;

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});


/* ----------------------------------------------------------------
   2. ACTIVE NAV LINK
   ---------------------------------------------------------------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));


/* ----------------------------------------------------------------
   3. SCROLL REVEAL
   ---------------------------------------------------------------- */
const revealEls = document.querySelectorAll(
  '.skill-card, .project-card, .timeline-item, .hero-content, .section-heading, .off-card, .edu-card, .code-comment-block, .off-intro'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));


/* ----------------------------------------------------------------
   4. SMOOTH ANCHOR SCROLLING
   ---------------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 70;
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
    ? '0 4px 40px rgba(0,0,0,0.4)'
    : 'none';
}, { passive: true });
