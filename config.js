app.configure({
  version: 'master',
  project: 'Mustache Test',
  description: 'Um simples projeto HTML com mustache.js',
  environment: 'github',
  template: '<h1>{{project}}</h1><p>{{description}}</p><ul><li>env: {{environment}}</li><li>version: {{version}}</li></ul>'
});

