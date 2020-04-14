declare const templates: Record<string, any>;

/* eslint-disable no-undef */
System.import('src/App').then(module => {
  window.addEventListener('load', () => {
    const app = new module.App(
      templates,
      'https://mockapi.io/projects/5e94b4eef591cb0016d81529/product'
    );
    app.initialise();
  });
});
