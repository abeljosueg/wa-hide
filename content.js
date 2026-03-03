(() => {
  const SEL = [
    'button[aria-label="Status"]',
    'button[aria-label="Estados"]',
    'button[aria-label="Channels"]',
    'button[aria-label="Communities"]'
  ].join(",");

  const kill = () =>
    document.querySelectorAll(SEL).forEach(b => b.parentElement?.parentElement?.remove());

  kill();
  new MutationObserver(kill).observe(document.documentElement, { childList: true, subtree: true });
})();