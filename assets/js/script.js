/* ================================================================
   script.js — Joseph Bautista Portfolio
   ================================================================ */

(function () {
  'use strict';

  var html = document.documentElement;

  /* 1. THEME TOGGLE (initial theme is set inline in <head>) */
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#0b1220' : '#f8f9fb');
    });
  }

  /* 2. MOBILE MENU */
  var menuToggle = document.getElementById('menuToggle');
  var mainNav    = document.getElementById('mainNav');

  function setMenu(open) {
    mainNav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      setMenu(!mainNav.classList.contains('open'));
    });
    mainNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* 3. ACTIVE NAV LINK */
  var navLinks = document.querySelectorAll('.nav-link');
  if ('IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { navObserver.observe(s); });
  }

  /* 4. SCROLL REVEAL */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* 5. FOOTER YEAR */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
