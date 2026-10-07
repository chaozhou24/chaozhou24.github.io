/* Keep the existing navigation and anchor plugin aligned with the sticky header. */
(function () {
  if (!window.jQuery) return;
  window.jQuery(function ($) {
    var masthead = document.querySelector('.masthead');
    if ($.fn.smoothScroll) {
      $('a').smoothScroll('options', {
        beforeScroll: function (options) {
          options.offset = -(masthead ? masthead.offsetHeight + 24 : 24);
          options.speed = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 400;
        }
      });
    }
    var button = document.querySelector('#site-nav button');
    var menu = document.querySelector('#site-nav .hidden-links');
    if (!button || !menu) return;
    button.addEventListener('click', function () {
      button.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
    });
    document.querySelector('#site-nav').addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        button.classList.remove('close');
        button.setAttribute('aria-expanded', 'false');
        button.focus();
      }
    });
  });
})();
