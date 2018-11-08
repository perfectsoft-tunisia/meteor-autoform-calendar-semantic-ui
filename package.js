Package.describe({
  name: 'perfectsofttunisia:autoform-calendar-semantic-ui',
  version: '0.0.1',
  summary: 'Add calendar type autoform semantic-ui',
  git: 'https://github.com/perfectsoft-tunisia/meteor-autoform-calendar-semantic-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['ecmascript', 'templating'], 'client');
  
  api.use('aldeed:autoform@4.0.0 || 5.0.0 || 6.0.0', {weak: true});
  api.use('perfectsofttunisia:autoform@4.0.0 || 5.0.0 || 6.0.0', {weak: true});

  api.addFiles([
    'calendar.html',
    'calendar.js',
    'input-type-config.js'
  ], 'client');

});


Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('perfectsofttunisia:autoform-calendar-semantic-ui');
  api.mainModule('autoform-calendar-semantic-ui-tests.js');
});
