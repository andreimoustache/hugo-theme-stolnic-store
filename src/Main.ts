declare const templates: Record<string, any>;

/* eslint-disable no-undef */
System.import('src/App').then(module => {
  window.addEventListener('load', () => {
    const app = new module.App(
      templates,
      '/index.json',
      'https://5e94b4eef591cb0016d81528.mockapi.io'
    );
    app.initialise();
  });
});
