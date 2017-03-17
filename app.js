var app = angular.module('stemfestApp', [
  'ngRoute',
  'mobile-angular-ui.gestures',
  'mobile-angular-ui.gestures'
]);

app.run(function($transform) {
  window.$transform = $transform;
});
