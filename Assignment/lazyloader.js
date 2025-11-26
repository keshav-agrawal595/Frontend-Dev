function loadProfile() {
  return new Promise((r, rej) => setTimeout(() => Math.random() < 0.2 ? rej('Profile failed') : r('Profile Loaded'), 2000));
}
function loadPosts() {
  return new Promise((r, rej) => setTimeout(() => Math.random() < 0.2 ? rej('Posts failed') : r('Posts Loaded'), 1500));
}
function loadMessages() {
  return new Promise((r, rej) => setTimeout(() => Math.random() < 0.2 ? rej('Messages failed') : r('Messages Loaded'), 1000));
}
const start = Date.now();
Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]).then(results => {
  results.forEach((res, i) => console.log('Module', i + 1, res.status, res.reason ? res.reason : res.value));
  console.log('Total time (ms):', Date.now() - start);
});
