app.configure({
  version: 'master',
  project: 'Mustache Test',
  description: 'Um simples projeto HTML com mustache.js',
  environment: 'github',
  template: '<h1>{{project}}</h1><p>{{description}}</p><ul><li><strong>environment</strong>: {{environment}}</li><li><strong>version</strong>: {{version}}</li></ul>'
});

