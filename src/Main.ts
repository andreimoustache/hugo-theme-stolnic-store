declare const templates: Record<string, any>;

/* eslint-disable no-undef */
System.import('src/App').then(module => {
  window.addEventListener('load', () => {
    const app = new module.App(templates, '/index.json');
    app.initialise();
  });
});
