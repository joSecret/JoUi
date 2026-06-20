((Drupal) => {
  // Close open popovers when clicking outside
  document.addEventListener('click', (e) => {
    document.querySelectorAll('details.popover[open]').forEach((popover) => {
      if (!popover.contains(e.target)) {
        popover.removeAttribute('open');
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('details.popover[open]').forEach((popover) => {
        popover.removeAttribute('open');
      });
    }
  });

  Drupal.behaviors.popover = {
    attach() {
      // Behavior is handled by native <details> toggle + document click listener above.
      // No double-attach guard needed for document-level listeners.
    },
  };
})(Drupal);
