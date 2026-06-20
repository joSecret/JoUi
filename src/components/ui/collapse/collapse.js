((Drupal) => {
  Drupal.behaviors.collapse = {
    attach(context) {
      // Initialize triggers
      context.querySelectorAll('[data-collapse-target]').forEach((trigger) => {
        if (trigger.hasAttribute('data-collapse-initialized')) return;
        trigger.setAttribute('data-collapse-initialized', 'true');

        const targetId = trigger.getAttribute('data-collapse-target');
        const target = document.getElementById(targetId);
        if (!target) return;

        // Sync aria-expanded with current open state
        const isOpen = target.classList.contains('is--open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        trigger.addEventListener('click', () => {
          const opened = target.classList.toggle('is--open');
          trigger.setAttribute('aria-expanded', opened ? 'true' : 'false');
        });
      });

      // Also sync aria-expanded for any triggers pointing to already-open targets
      // that were not yet initialized (e.g. server-rendered open state)
      context.querySelectorAll('.collapse.is--open').forEach((target) => {
        if (!target.id) return;
        document
          .querySelectorAll(`[data-collapse-target="${target.id}"]`)
          .forEach((trigger) => {
            trigger.setAttribute('aria-expanded', 'true');
          });
      });
    },
  };
})(Drupal);
