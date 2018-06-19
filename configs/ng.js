module.exports = {
  extends: '@3fs/eslint-config/configs/es5',
  globals: { 'angular': true },
  plugins: ['angular'],
  rules: {
    'consistent-this': [
      'error',
      'vm',
      'svc'
    ],
    'max-params': 'off',

    // AngularJS Plugin TODO: Clean this up
    'angular/module-getter': 2,
    'angular/module-setter': 2,
    'angular/module-name': 0,
    'angular/module-dependency-order': 2,
    'angular/no-private-call': [2, { 'allow': ['$$phase'] }],
    'angular/angularelement': 2,
    'angular/controller-as': 2,
    'angular/controller-as-route': 2,
    'angular/controller-as-vm': [2, 'vm'],
    'angular/controller-name': [2, '/[A-Z].*Ctrl$/'],
    'angular/deferred': 2,
    'angular/definedundefined': 2,
    'angular/di': 2,
    'angular/di-order': [0, true],
    'angular/di-unused': 2,
    'angular/one-dependency-per-line': 0,
    'angular/dumb-inject': 2,
    'angular/directive-name': 2,
    'angular/directive-restrict': 2,
    'angular/no-directive-replace': 0,
    'angular/component-limit': [0, 1],
    'angular/component-name': 2,
    'angular/prefer-component': 1,
    'angular/constant-name': 2,
    'angular/document-service': 2,
    'angular/empty-controller': 2,
    'angular/file-name': 2,
    'angular/filter-name': [2, '/[A-Z].*Filter/'],
    'angular/foreach': 0,
    'angular/function-type': [2, 'anonymous'],
    'angular/interval-service': 2,
    'angular/json-functions': 2,
    'angular/log': 2,
    'angular/no-angular-mock': 0,
    'angular/no-controller': 0,
    'angular/no-cookiestore': 2,
    'angular/no-jquery-angularelement': 2,
    'angular/no-service-method': 0,
    'angular/no-services': [
      2,
      [
        '$http',
        '$resource',
        'Restangular'
      ]
    ],
    'angular/on-watch': 2,
    'angular/on-destroy': 2,
    'angular/rest-service': [2, '$http'],
    'angular/no-http-callback': 2,
    'angular/service-name': [
      2,
      '/[A-Z].*Svc/',
      { 'oldBehavior': false }
    ],
    'angular/factory-name': 2,
    'angular/provider-name': 2,
    'angular/value-name': 2,
    'angular/timeout-service': 2,
    'angular/typecheck-array': 2,
    'angular/typecheck-date': 2,
    'angular/typecheck-function': 2,
    'angular/typecheck-number': 2,
    'angular/typecheck-object': 2,
    'angular/typecheck-string': 2,
    'angular/watchers-execution': [2, '$apply'],
    'angular/window-service': 2
  }
};
