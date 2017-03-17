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
  $routeProvider.when('/map', {templateUrl: 'assets/templates/map.html', reloadOnSearch: false});
  $routeProvider.when('/schedule', {templateUrl: 'assets/templates/schedule.html', reloadOnSearch: false});

});

app.controller('MapController', function($scope){
  var iframe=document.getElementById("map");
 getLocation();
 var millRiverLatitude=41.053531;
 var millRiverLongitude=-73.5453331;
 function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(useLocation);
    } else {
        iframe.innerHTML = "Geolocation is not supported by this browser.";
    }
  }


  function useLocation(position){
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      var apiKey='xxxxxxxxxxxxxxxxxxxxxxx';
      currentLocation=position.coords.latitude+','+position.coords.longitude;
      targetLocation=millRiverLatitude+','+millRiverLongitude;
    
      var url="https://www.google.com/maps/embed/v1/directions?key="+apiKey+"&origin="+currentLocation+"&destination="+targetLocation;
      console.log(url);
      iframe.setAttribute('src',url);
  }

});

 