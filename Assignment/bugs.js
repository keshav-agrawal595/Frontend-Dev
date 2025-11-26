function getBugs() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random() < 0.25 ? rej('API error') : res(['UI glitch', 'API timeout', 'Login failure']), 1000);
  });
}
getBugs()
  .then(b => console.table(b))
  .catch(e => console.log('Failed to fetch bugs:', e));
