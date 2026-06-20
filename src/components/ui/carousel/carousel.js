((Drupal) => {
  function initCarousel(carousel) {
    const inner = carousel.querySelector('.carousel-inner');
    if (!inner) return;

    const items = Array.from(carousel.querySelectorAll('.carousel-item'));
    const indicators = Array.from(carousel.querySelectorAll('.carousel-indicator'));

    let current = items.findIndex((el) => el.classList.contains('active'));
    if (current === -1) current = 0;

    let autoPlay = null;
    const interval = parseInt(carousel.getAttribute('data-carousel-interval') || '0', 10);

    function updateIndicators(idx) {
      indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === idx);
      });
    }

    function goTo(idx, direction) {
      if (idx === current || items.length <= 1) return;

      const entering = items[idx];
      const leaving = items[current];

      // Set up entering slide position
      entering.classList.add(direction === 'next' ? 'carousel-sliding-next' : 'carousel-sliding-prev');
      entering.style.display = 'block';

      // Trigger reflow
      void entering.offsetWidth;

      // Animate
      entering.classList.add('is--sliding');
      leaving.classList.add(direction === 'next' ? 'carousel-sliding-next-out' : 'carousel-sliding-prev-out');

      function onTransitionEnd() {
        entering.removeEventListener('transitionend', onTransitionEnd);
        entering.classList.remove('carousel-sliding-next', 'carousel-sliding-prev', 'is--sliding');
        entering.classList.add('active');
        leaving.classList.remove('active', 'carousel-sliding-next-out', 'carousel-sliding-prev-out');
        current = idx;
        updateIndicators(current);
      }

      entering.addEventListener('transitionend', onTransitionEnd, { once: true });

      // Fallback in case transition doesn't fire
      setTimeout(onTransitionEnd, 600);
    }

    function next() {
      goTo((current + 1) % items.length, 'next');
    }

    function prev() {
      goTo((current - 1 + items.length) % items.length, 'prev');
    }

    function startAutoPlay() {
      if (interval > 0) {
        autoPlay = setInterval(next, interval);
      }
    }

    function stopAutoPlay() {
      if (autoPlay) {
        clearInterval(autoPlay);
        autoPlay = null;
      }
    }

    // Controls
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); prev(); startAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); next(); startAutoPlay(); });

    // Indicators
    indicators.forEach((ind) => {
      ind.addEventListener('click', () => {
        const idx = parseInt(ind.getAttribute('data-carousel-goto') || '0', 10);
        stopAutoPlay();
        goTo(idx, idx > current ? 'next' : 'prev');
        startAutoPlay();
      });
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Keyboard
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { stopAutoPlay(); prev(); startAutoPlay(); }
      if (e.key === 'ArrowRight') { stopAutoPlay(); next(); startAutoPlay(); }
    });

    // Touch swipe
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 50) {
        stopAutoPlay();
        diff < 0 ? next() : prev();
        startAutoPlay();
      }
    }, { passive: true });

    startAutoPlay();
  }

  Drupal.behaviors.carousel = {
    attach(context) {
      context.querySelectorAll('[data-carousel]').forEach((carousel) => {
        if (carousel.hasAttribute('data-carousel-initialized')) return;
        carousel.setAttribute('data-carousel-initialized', 'true');
        initCarousel(carousel);
      });
    },
  };
})(Drupal);
