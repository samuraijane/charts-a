module.exports = function(app) {
  app.directive('donutChart', ['d3Service', 'britechartsService', 'dataSrv', function(d3Service, britechartsService, dataSrv) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, element, attrs) {
        let accounts;
        let colors;
        dataSrv.getAccounts()
        .then(res => {
          accounts = res.data.accounts;
        })
        .then(dataSrv.getColors)
        .then(res => {
          colors = res.data.colors;
        })
        .then(britechartsService.britecharts)
        .then(function(britecharts) {

          function createDonutChart() {
            let donutChart = britecharts.donut();
            donutChart
              .width(400)
              .height(300)
              .colorSchema([colors.orange, colors.purple, colors.blue, colors.green, colors.gold])
              .isAnimated(true)
              .highlightSliceById(3)
              .on('customMouseOver', function(accounts) {
                // legendChart.highlight(data.data.id);
              })
              .on('customMouseOut', function() {
                // legendChart.clearHighlight();
              })
              .internalRadius(70);

            d3.select('.js-donut-container').datum(accounts).call(donutChart);

          }
          createDonutChart();
        });
      }
    };
  }]);
}
