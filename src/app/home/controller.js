angular.module('app')
.controller('homeCtrl', ['dataSrv', function(dataSrv) {  //c030
  var vm = this;

  dataSrv.getDog()
  .then(res => {
    vm.dog = res.data.message;
  });
}]);
