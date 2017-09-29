module.exports = function(app) {
  app.service('dataSrv', ['$http', function($http) {
  return {
    getAccounts: () => {
      return $http({
        method: 'GET',
        url: '/mock/accounts.json'
      });
    },
    getColors: () => {
      return $http({
        method: 'GET',
        url: '/mock/colors.json'
      });
    },
    getDog: () => {  //c031
      return $http({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random'
      });
    }
  }
}]);
}
