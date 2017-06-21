window.app = window.app || {};

(function(app) {
  "use strict";

  var REG_EX = /(\S+)/g;

  function wordCount(film) {
    return film.opening_crawl.match(REG_EX).length;
  }

  function createChart(chartId, rawData) {
    var ctx = document.getElementById(chartId).getContext("2d");
    return new window.Chart(ctx, {
      type: "bar",
      data: {
        labels: rawData.map(function(film) {
          return film.title;
        }),
        datasets: [{
          label: "Opening Scrawl Lengths",
          data: rawData.map(wordCount),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            },
            scaleLabel: {
              display: true,
              labelString: "Scrawl Length"
            }
          }]
        }
      }
    });
  }

  return app.createChart = createChart;
}(window.app));
