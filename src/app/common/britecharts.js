const angular = require('angular');

angular.module('britecharts', [])
  .factory('britechartsService', ['$document', '$q', '$rootScope',
    function($document, $q, $rootScope) {
      let d = $q.defer();
      function onScriptLoad() {
        $rootScope.$apply(function() {
          d.resolve(window.britecharts);
        })
      }
      let scriptTag = $document[0].createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = '/node_modules/britecharts/dist/bundled/britecharts.min.js';
      scriptTag.onreadystatechange = function() {
        if(this.readyState == 'complete') onScriptLoad();
      }
      scriptTag.onload = onScriptLoad;
      let s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);
      return {
        britecharts: function() {
          return d.promise;
        }
      };
    }
  ]);
