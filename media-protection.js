// Discourage ordinary browser saving. Public media URLs remain accessible:
// client-side restrictions cannot secure resources delivered to a browser.
(() => {
  const mediaSelector = 'img, video, picture, canvas, svg';
  const protect = root => {
    if (!(root instanceof Element)) return;
    const media = [...root.querySelectorAll(mediaSelector)];
    if (root.matches(mediaSelector)) media.unshift(root);
    media.forEach(element => {
      element.setAttribute('draggable', 'false');
      element.style.webkitTouchCallout = 'none';
      if (element instanceof HTMLVideoElement) {
        element.controlsList.add('nodownload');
      }
    });
  };
  const preventMediaSave = event => {
    if (event.target instanceof Element && event.target.closest(mediaSelector)) {
      event.preventDefault();
    }
  };
  document.addEventListener('contextmenu', preventMediaSave, { capture: true });
  document.addEventListener('dragstart', preventMediaSave, { capture: true });
  protect(document.documentElement);
  // Galleries and the personal page's canvas are inserted after page load.
  new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(protect));
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
