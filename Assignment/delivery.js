function step(name) {
  return new Promise((res, rej) => {
    const ms = 1000 + Math.floor(Math.random() * 1000);
    setTimeout(() => Math.random() < 0.2 ? rej(name + ' failed') : res(name + ' done'), ms);
  });
}
async function runPipeline() {
  console.log('Start Pipeline');
  try {
    console.log('Step 1:', await step('Order taken'));
    console.log('Step 2:', await step('Food prepared'));
    console.log('Step 3:', await step('Package ready'));
    console.log('Step 4:', await step('Out for delivery'));
    console.log('Delivery completed!');
  } catch (e) {
    console.log('Pipeline failed!');
  }
}
runPipeline();
