angular.module('app')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'homeCtrl',
			controllerAs: 'vm',
			templateUrl: './src/app/home/home.html'
		})
		.otherwise({ redirectTo: '/dog' });
	$locationProvider.html5Mode(true);  //c029
}]);
