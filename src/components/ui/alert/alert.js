/**
 * @file
 * Alert dismiss behavior.
 *
 * Watches clicks on [data-alert-dismiss] inside .alert.alert-dismissible
 * and removes the parent .alert element.
 * Guards with data-alert-initialized to avoid double-binding.
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.jouiAlert = {
    attach(context) {
      const triggers = context.querySelectorAll
        ? context.querySelectorAll('[data-alert-dismiss]:not([data-alert-initialized])')
        : [];

      triggers.forEach(function (trigger) {
        trigger.setAttribute('data-alert-initialized', 'true');

        trigger.addEventListener('click', function () {
          const alert = trigger.closest('.alert');
          if (alert) {
            alert.remove();
          }
        });
      });
    },
  };
})(typeof Drupal !== 'undefined' ? Drupal : { behaviors: {} });
