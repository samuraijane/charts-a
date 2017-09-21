angular.module('app')
.service('dataSrv', ['$http', function($http) {
  return {
    getDog: () => {  //c031
      return $http({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random'
      });
    }
  }
}]);
