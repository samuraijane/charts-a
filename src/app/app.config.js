module.exports = function(app) {
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'homeCtrl',
			controllerAs: 'vm',
			templateUrl: './src/app/home/home.html'
		})
		.otherwise({ redirectTo: '/' });
	$locationProvider.html5Mode(true);  //c029
}]);
}
