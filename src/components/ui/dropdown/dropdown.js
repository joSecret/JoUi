((Drupal) => {
  function closeDropdown(dropdown) {
    dropdown.classList.remove('is--open');
    const toggle = dropdown.querySelector('[data-dropdown-toggle]');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function openDropdown(dropdown) {
    // Close all other open dropdowns first
    document.querySelectorAll('.dropdown.is--open').forEach((other) => {
      if (other !== dropdown) closeDropdown(other);
    });
    dropdown.classList.add('is--open');
    const toggle = dropdown.querySelector('[data-dropdown-toggle]');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function getFocusableItems(menu) {
    return Array.from(
      menu.querySelectorAll('.dropdown-item:not(.disabled):not([aria-disabled="true"])'),
    );
  }

  // Close all dropdowns on outside click
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown.is--open').forEach((dropdown) => {
      if (!dropdown.contains(e.target)) closeDropdown(dropdown);
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown.is--open').forEach(closeDropdown);
    }
  });

  Drupal.behaviors.dropdown = {
    attach(context) {
      context.querySelectorAll('[data-dropdown-toggle]').forEach((toggle) => {
        if (toggle.hasAttribute('data-dropdown-initialized')) return;
        toggle.setAttribute('data-dropdown-initialized', 'true');

        const dropdown = toggle.closest('.dropdown');
        if (!dropdown) return;

        // Toggle on click
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          if (dropdown.classList.contains('is--open')) {
            closeDropdown(dropdown);
          } else {
            openDropdown(dropdown);
          }
        });

        // Keyboard navigation within menu
        const menu = dropdown.querySelector('.dropdown-menu');
        if (!menu) return;

        toggle.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            openDropdown(dropdown);
            const items = getFocusableItems(menu);
            if (items.length) items[0].focus();
          }
        });

        menu.addEventListener('keydown', (e) => {
          const items = getFocusableItems(menu);
          const current = document.activeElement;
          const idx = items.indexOf(current);

          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = items[idx + 1] || items[0];
            next.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = items[idx - 1] || items[items.length - 1];
            prev.focus();
          } else if (e.key === 'Escape') {
            closeDropdown(dropdown);
            toggle.focus();
          } else if (e.key === 'Tab') {
            closeDropdown(dropdown);
          }
        });
      });
    },
  };
})(Drupal);
