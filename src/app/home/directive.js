module.exports = function(app) {
  app.directive('blogBarChart', ['d3Service', 'britechartsService', function(d3Service, britechartsService) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {
        }).then(britechartsService.britecharts).then(function(britecharts) {

          let colors = {
            blue: '#5fa6e1',
            gold: '#e7b12e',
            green: '#3ba144',
            orange: '#fa8232',
            purple: '#421f79'
          }

          const data = [{
              name: 'Line of Credit',
              id: 1,
              quantity: 7,
              value: 2300
            },
            {
              name: 'Checking',
              id: 2,
              quantity: 15,
              value: 6900
            },
            {
              name: 'CD',
              id: 3,
              quantity: 10,
              value: 300
            },
            {
              name: 'Loans',
              id: 4,
              quantity: 5,
              value: 22000
            },
            {
              name: 'Savings',
              id: 5,
              quantity: 8,
              value: 300
            }
          ];

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

            barContainer.datum(data).call(barChart);
          }

          function createDonutChart() {
            let donutChart = britecharts.donut();
            // let legendChart = getLegendChart(data);

            donutChart
              .width(400)
              .height(300)
              .colorSchema([colors.orange, colors.purple, colors.blue, colors.green, colors.gold])
              .isAnimated(true)
              .highlightSliceById(3)
              .on('customMouseOver', function(data) {
                // legendChart.highlight(data.data.id);
              })
              .on('customMouseOut', function() {
                // legendChart.clearHighlight();
              })
              .internalRadius(70);

            d3.select('.js-donut-container').datum(data).call(donutChart);

          }

          createHorizontalBarChart();
          createDonutChart();

        });
      }
    };
  }]);
}
