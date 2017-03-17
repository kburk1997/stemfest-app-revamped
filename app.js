var app = angular.module('stemfestApp', [
  'ngRoute',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures'
]);

app.run(function($transform) {
  window.$transform = $transform;
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'assets/templates/home.html', reloadOnSearch: false});
  $routeProvider.when('/about', {templateUrl: 'assets/templates/about.html', reloadOnSearch: false});
  $routeProvider.when('/directions-parking', {templateUrl: 'assets/templates/directions_parking.html', reloadOnSearch: false});
  $routeProvider.when('/map', {templateUrl: 'assets/templates/about.html', reloadOnSearch: false});
  $routeProvider.when('/schedule', {templateUrl: 'assets/templates/schedule.html', reloadOnSearch: false});

});
