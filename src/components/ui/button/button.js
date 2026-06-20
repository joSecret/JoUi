((Drupal) => {
  Drupal.behaviors.btn = {
    attach(context) {
      context.querySelectorAll('.button[aria-expanded]').forEach((btn) => {
        // Check if the button already has the event listener attached
        if (btn.hasAttribute('data-btn-initialized')) {
          return;
        }

        // Mark the button as initialized
        btn.setAttribute('data-btn-initialized', 'true');

        btn.addEventListener('click', () => {
          const isExpanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', !isExpanded);
        })
      });
    },
  };
})(Drupal);
