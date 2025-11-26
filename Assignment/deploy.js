function serverA() {
  return new Promise((res, rej) => setTimeout(() => Math.random() < 0.2 ? rej('A failed') : res('Server A'), 2000));
}
function serverB() {
  return new Promise((res, rej) => setTimeout(() => Math.random() < 0.2 ? rej('B failed') : res('Server B'), 3000));
}
Promise.all([serverA(), serverB()])
  .then(() => console.log('Deployment completed for all servers'))
  .catch(e => console.log('Deployment error:', e));
Promise.race([serverA(), serverB()])
  .then(f => console.log('Fastest response:', f))
  .catch(e => console.log('Fastest error:', e));
