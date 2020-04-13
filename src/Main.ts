System.import('src/App').then(module => {
  window.addEventListener('load', () => {
    const app = new module.App();
    app.initialise();
  });
});
