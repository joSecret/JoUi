((Drupal) => {
  const TRANSITION_DURATION = 200;

  function closeToast(toast) {
    toast.classList.remove('is--open');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, TRANSITION_DURATION);
  }

  Drupal.behaviors.toast = {
    attach(context) {
      context.querySelectorAll('.toast').forEach((toast) => {
        if (toast.hasAttribute('data-toast-initialized')) return;
        toast.setAttribute('data-toast-initialized', 'true');

        // Dismiss button
        toast.querySelectorAll('[data-toast-dismiss]').forEach((btn) => {
          btn.addEventListener('click', () => closeToast(toast));
        });

        // Auto-dismiss
        const delay = parseInt(toast.getAttribute('data-toast-delay') || '0', 10);
        if (delay > 0) {
          setTimeout(() => closeToast(toast), delay);
        }
      });
    },
  };

  // Programmatic API
  if (!window.joui) window.joui = {};

  window.joui.toast = {
    show({ message, title, time, color, delay = 5000, position = 'top-end' } = {}) {
      const container = document.querySelector(`.toast-container-${position}`)
        || (() => {
          const el = document.createElement('div');
          el.className = `toast-container toast-container-${position}`;
          document.body.appendChild(el);
          return el;
        })();

      const toast = document.createElement('div');
      toast.className = ['toast', color && `toast-${color}`].filter(Boolean).join(' ');
      toast.setAttribute('role', 'alert');
      toast.setAttribute('aria-live', 'polite');
      toast.setAttribute('aria-atomic', 'true');
      if (delay > 0) toast.setAttribute('data-toast-delay', delay);

      if (title || time) {
        toast.innerHTML = `
          <div class="toast-header">
            ${title ? `<strong class="toast-title">${title}</strong>` : ''}
            ${time ? `<small class="toast-time">${time}</small>` : ''}
            <button type="button" class="close-button" data-toast-dismiss aria-label="Close" style="margin-inline-start:auto">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z"/></svg>
            </button>
          </div>
          <div class="toast-body">${message || ''}</div>
        `;
      } else {
        toast.innerHTML = `<div class="toast-body">${message || ''}</div>`;
      }

      container.appendChild(toast);

      // Trigger reflow then show
      void toast.offsetWidth;
      toast.classList.add('is--open');

      // Attach dismiss
      toast.querySelectorAll('[data-toast-dismiss]').forEach((btn) => {
        btn.addEventListener('click', () => closeToast(toast));
      });

      if (delay > 0) {
        setTimeout(() => closeToast(toast), delay);
      }

      return toast;
    },
  };
})(Drupal);
