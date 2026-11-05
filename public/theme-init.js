// Applies the saved/system theme before first paint. Served as a same-origin
// file (not inline) so the CSP can forbid inline scripts entirely.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', dark);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', dark ? '#0b1220' : '#f8f9fb');
  } catch (e) {}
  root.classList.add('js');
})();
