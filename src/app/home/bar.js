module.exports = function(app) {
  app.directive('barChart', ['d3Service', 'britechartsService', 'dataSrv', function(d3Service, britechartsService, dataSrv) {
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
        // .then(d3Service.d3)
        // .then(function(d3) {
        //   console.log('d3 has been loaded');
        // })
        .then(britechartsService.britecharts).then(function(britecharts) {

          function createHorizontalBarChart() {
            let barChart = new britecharts.bar(),
              margin = {
                left: 120,
                right: 20,
                top: 20,
                bottom: 30
              },
              barContainer = d3.select('.js-bar-container'),
              containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;

            barChart
              .isHorizontal(true)
              .margin(margin)
              .width(containerWidth)
              .colorSchema([colors.orange, colors.purple, colors.blue, colors.green, colors.gold])
              .valueLabel('quantity')
              .xTicks(4)
              .height(300);

            barContainer.datum(accounts).call(barChart);
          }

          createHorizontalBarChart();

        });
      }
    };
  }]);
}
