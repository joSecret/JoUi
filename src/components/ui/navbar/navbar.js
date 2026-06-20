((Drupal) => {
  Drupal.behaviors.navbar = {
    attach(context) {
      context.querySelectorAll('[data-navbar-toggle]').forEach((toggle) => {
        if (toggle.hasAttribute('data-navbar-initialized')) return;
        toggle.setAttribute('data-navbar-initialized', 'true');

        const navbar = toggle.closest('.navbar');
        if (!navbar) return;

        const collapse = navbar.querySelector('.navbar-collapse');
        if (!collapse) return;

        toggle.addEventListener('click', () => {
          const isOpen = collapse.classList.contains('is--open');
          collapse.classList.toggle('is--open');
          toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        });
      });
    },
  };
})(Drupal);
