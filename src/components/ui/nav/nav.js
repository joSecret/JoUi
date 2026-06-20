/**
 * @file
 * Nav tabs behavior — activates tab panels on click.
 *
 * Listens for clicks on [data-tab-target] inside .nav elements.
 * Activates the corresponding .tab-pane[id] and updates aria-selected.
 *
 * Guards against double-attach with data-nav-initialized.
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.jouiNav = {
    attach(context) {
      const navs = context.querySelectorAll
        ? context.querySelectorAll('.nav[role="tablist"]:not([data-nav-initialized])')
        : [];

      Array.prototype.forEach.call(navs, function (nav) {
        nav.setAttribute('data-nav-initialized', 'true');

        nav.addEventListener('click', function (e) {
          const trigger = e.target.closest('[data-tab-target]');
          if (!trigger) return;

          const targetId = trigger.getAttribute('data-tab-target');
          const tabContent = nav.closest('[data-tab-content]') || nav.parentElement;

          // Deactivate all tabs in this nav
          const allTabs = nav.querySelectorAll('[data-tab-target]');
          Array.prototype.forEach.call(allTabs, function (tab) {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
          });

          // Activate clicked tab
          trigger.classList.add('active');
          trigger.setAttribute('aria-selected', 'true');

          // Deactivate all panels
          const allPanes = tabContent.querySelectorAll('.tab-pane');
          Array.prototype.forEach.call(allPanes, function (pane) {
            pane.classList.remove('active');
          });

          // Activate target panel
          const targetPane = tabContent.querySelector('#' + targetId);
          if (targetPane) {
            targetPane.classList.add('active');
          }
        });
      });
    },
  };
})(Drupal);
