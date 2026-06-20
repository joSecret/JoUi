((Drupal) => {
  function openOffcanvas(offcanvas, trigger) {
    offcanvas.classList.add('is--open');
    document.body.style.overflow = 'hidden';
    offcanvas._trigger = trigger || null;

    const focusable = offcanvas.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length) focusable[0].focus();
  }

  function closeOffcanvas(offcanvas) {
    offcanvas.classList.remove('is--open');
    document.body.style.overflow = '';

    if (offcanvas._trigger) {
      offcanvas._trigger.focus();
      offcanvas._trigger = null;
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.offcanvas.is--open').forEach(closeOffcanvas);
    }
  });

  Drupal.behaviors.offcanvas = {
    attach(context) {
      context.querySelectorAll('[data-offcanvas-target]').forEach((trigger) => {
        if (trigger.hasAttribute('data-offcanvas-initialized')) return;
        trigger.setAttribute('data-offcanvas-initialized', 'true');

        trigger.addEventListener('click', () => {
          const id = trigger.getAttribute('data-offcanvas-target');
          const offcanvas = document.getElementById(id);
          if (offcanvas) openOffcanvas(offcanvas, trigger);
        });
      });

      context.querySelectorAll('.offcanvas').forEach((offcanvas) => {
        if (offcanvas.hasAttribute('data-offcanvas-initialized')) return;
        offcanvas.setAttribute('data-offcanvas-initialized', 'true');

        offcanvas.querySelectorAll('[data-offcanvas-dismiss]').forEach((btn) => {
          btn.addEventListener('click', () => closeOffcanvas(offcanvas));
        });

        const backdrop = offcanvas.querySelector('[data-offcanvas-backdrop]');
        if (backdrop) {
          backdrop.addEventListener('click', () => closeOffcanvas(offcanvas));
        }
      });
    },
  };
})(Drupal);
