(() => {
  const scene = document.querySelector('.hero-scene');
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reveal = () => {
    clearTimeout(window.heroIntroFallback);
    root.classList.remove('hero-intro-pending');
  };
  if (!scene || reducedMotion.matches || !scene.animate) {
    reveal();
    return;
  }

  // Dawood's published Framer appear settings. Rotation is relative to each
  // artwork's baked-in orientation, preserving this portfolio's resting pose.
  const settings = {
    pc:         { y: -982, rotate: 30,   delay: .4, duration: 1.6 },
    headphones: { y: -813, rotate: -197, delay: .3, duration: 1.6 },
    notebook:   { y: -1025,rotate: -148, delay: .2, duration: 1.7 },
    pencil:     { y: -982, rotate: 104,  delay: .1, duration: 1.5 },
    mouse:      { y: -982, rotate: 149,  delay: .3, duration: 2 },
    figma:      { y: -813, rotate: -172, delay: .7, duration: 1.8, absoluteRotation: true },
    blender:    { y: -813, rotate: -172, delay: .7, duration: 1.8, absoluteRotation: true },
    ps:         { y: -813, rotate: -172, delay: .6, duration: 1.9, absoluteRotation: true },
    ae:         { y: -813, rotate: -172, delay: .7, duration: 1.9, absoluteRotation: true },
    ai:         { y: -813, rotate: -172, delay: .7, duration: 1.9, absoluteRotation: true }
  };
  const objects = [...scene.querySelectorAll('.scene-object')];
  const backdrop = scene.querySelector('.scene-bg');
  let observer;
  let animations = [];
  let played = false;
  let waitingForHashJump = Boolean(location.hash && location.hash !== '#top');

  // The same critically damped, duration-resolved spring used by Framer when
  // bounce = 0: solve exp(-w*T) * (1 + w*T) = .001 with 12 Newton steps.
  // Sampling at 100Hz keeps Web Animations independent of hover transforms.
  const springFrames = ({ y, rotate = 0, opacity = 1, duration }, distanceScale) => {
    let frequency = 5 / duration;
    for (let i = 1; i < 12; i++) {
      const decay = Math.exp(-frequency * duration);
      const residual = decay * (frequency * duration + 1) - .001;
      const derivative = -frequency * duration * duration * decay;
      frequency -= residual / derivative;
    }
    const count = Math.ceil(duration * 100);
    return Array.from({ length: count + 1 }, (_, i) => {
      const time = duration * i / count;
      const remaining = i === count ? 0 : Math.exp(-frequency * time) * (1 + frequency * time);
      return {
        offset: i / count,
        translate: `0 ${y * distanceScale * remaining}px`,
        rotate: `${rotate * remaining}deg`,
        opacity: 1 - (1 - opacity) * remaining
      };
    });
  };

  const finish = () => {
    animations.forEach(animation => animation.cancel());
    animations = [];
    scene.classList.remove('is-entering');
    scene.dataset.introState = 'complete';
    reveal();
  };
  const play = async () => {
    if (played) return;
    played = true;
    observer?.disconnect();
    // Decode all eleven layers before starting so no late-loading item pops in.
    await Promise.race([
      Promise.all([backdrop, ...objects].filter(Boolean).map(img => img.decode().catch(() => {}))),
      new Promise(resolve => setTimeout(resolve, 2500))
    ]);
    if (reducedMotion.matches) { finish(); return; }
    scene.classList.add('is-entering');
    scene.dataset.introState = 'playing';
    // Desktop is already scaled by .stage. Mobile uses responsive coordinates.
    const distanceScale = innerWidth < 768 ? innerWidth / 1920 : 1;
    const startTime = document.timeline.currentTime;
    const animateLayer = (element, config) => {
      if (!element) return;
      const animation = element.animate(springFrames(config, distanceScale), {
        duration: config.duration * 1000,
        delay: config.delay * 1000,
        easing: 'linear',
        fill: 'both'
      });
      animation.id = `hero-drop-${element.dataset.object || (element === scene ? 'scene' : 'backdrop')}`;
      animation.startTime = startTime;
      animations.push(animation);
    };
    // The reference animates both the desk container and each separate object.
    animateLayer(scene, { y: -982, delay: .2, duration: 1.4 });
    animateLayer(backdrop, { y: -982, opacity: .001, delay: .3, duration: 1.2 });
    objects.forEach(item => {
      const config = settings[item.dataset.object];
      if (!config) return;
      const baseRotation = Number.parseFloat(getComputedStyle(item).getPropertyValue('--base-rotate')) || 0;
      animateLayer(item, { ...config, rotate: config.rotate - (config.absoluteRotation ? baseRotation : 0) });
    });
    reveal();
    await Promise.allSettled(animations.map(animation => animation.finished));
    finish();
  };

  // A direct #works entry plays the intro once when the desk first becomes
  // visible, rather than spending the animation while the banner is offscreen.
  scene.dataset.introState = 'waiting';
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) waitingForHashJump = false;
      if (entry.isIntersecting && !waitingForHashJump) play();
    });
  }, { threshold: .1 });
  const observeScene = () => {
    // Allow the browser to complete its initial hash jump before testing
    // visibility, otherwise #works briefly reports the desk as onscreen.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (!played) observer.observe(scene);
    }));
    // A browser can restore the top position despite a non-top hash. Do not
    // leave the intro waiting indefinitely when that initial jump is skipped.
    if (waitingForHashJump) setTimeout(() => {
      waitingForHashJump = false;
      if (!played) { observer.disconnect(); observer.observe(scene); }
    }, 700);
  };
  if (location.hash && location.hash !== '#top' && document.readyState !== 'complete') {
    window.addEventListener('load', observeScene, { once: true });
  } else {
    observeScene();
  }
  window.addEventListener('hashchange', () => {
    if (location.hash === '#top' || !location.hash) {
      waitingForHashJump = false;
      if (!played) { observer.disconnect(); observer.observe(scene); }
    }
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) { played = true; observer.disconnect(); finish(); }
  });
  window.addEventListener('pagehide', finish);
})();
