function App() {
  app = {
    configutations: {},
    configure: function (configurations) {
      this.configurations = configurations;
    }
  };
  return app;
}

window.app = window.app || new App;

