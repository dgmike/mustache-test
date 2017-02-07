function App() {
  app = {
    configutations: {},
    configure: function (configurations) {
      this.configurations = configurations;
    },
    run: function (element) {
      var output = Mustache.render(this.configurations.template, this.configurations);
      element.innerHTML = output;
    }
  };
  return app;
}

window.app = window.app || new App;

