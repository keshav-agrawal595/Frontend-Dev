function stage(name, cb) {
  setTimeout(() => cb(null, name), 1000);
}
stage('design', (e, r) => {
  stage('build', (e, r) => {
    stage('test', (e, r) => {
      stage('deploy', (e, r) => {
        stage('celebrate', (e, r) => {
          console.log('Nested pipeline done');
        });
      });
    });
  });
});
function runStage(name) {
  return new Promise(r => setTimeout(() => r(name), 1000));
}
(async function () {
  await runStage('design');
  console.log('design');
  await runStage('build');
  console.log('build');
  await runStage('test');
  console.log('test');
  await runStage('deploy');
  console.log('deploy');
  await runStage('celebrate');
  console.log('celebrate');
  console.log('Async/await pipeline done');
})();
