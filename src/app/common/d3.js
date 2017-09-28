const angular = require('angular');
const d3Import = require('d3');

angular.module('d3', [])
  .factory('d3Service', ['$document', '$q', '$rootScope',
    function($document, $q, $rootScope) {
      let d = $q.defer();
      function onScriptLoad() {
        $rootScope.$apply(function() {
          d.resolve(window.d3);
        })
      }
      let scriptTag = $document[0].createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.min.js';
      scriptTag.onreadystatechange = function() {
        if(this.readyState == 'complete') onScriptLoad();
      }
      scriptTag.onload = onScriptLoad;
      let s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);
      return {
        d3: function() {
          return d.promise;
        }
      };
    }
  ]);
