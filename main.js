// Mobile navigation toggle. The site works without JavaScript: the nav is simply always visible.
(function () {
  document.documentElement.classList.add('js');
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('site-nav');
  if (!toggle || !list) return;

  function setOpen(open) {
    list.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
