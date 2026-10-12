(() => {
  const syncScale = () => {
    const scale = Math.min(1, innerWidth / 1920, innerHeight / 1120);
    document.documentElement.style.setProperty('--scale', scale);
    document.documentElement.style.setProperty('--u', `${innerWidth < 768 ? 1 : scale}px`);
  };
  syncScale();
  window.addEventListener('resize', syncScale, {passive: true});
})();
