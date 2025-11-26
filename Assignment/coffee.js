function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}
function step(name, ms, failRate = 0.2) {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random() < failRate ? rej(name + ' failed') : res(name + ' done'), ms);
  });
}
function boilWater() {
  return step('Boil water', 1000 + Math.floor(Math.random() * 1000));
}
function brewCoffee() {
  return step('Brew coffee', 1000 + Math.floor(Math.random() * 1000));
}
function pourCup() {
  return step('Pour into cup', 1000 + Math.floor(Math.random() * 1000));
}
boilWater()
  .then(r => {
    console.log(r);
    return brewCoffee();
  })
  .then(r => {
    console.log(r);
    return pourCup();
  })
  .then(r => {
    console.log(r);
    console.log('Coffee ready for the team!');
  })
  .catch(e => console.log('Coffee process failed:', e));
