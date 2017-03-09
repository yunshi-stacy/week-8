var loadChart = function(){
  var issueDate = ['issueDate'],
      monthTotal = ['Total Number'];
  var fromDate = $('#from').val(),
      toDate = $('#to').val();//initial state of data

  var datum = _.filter(data, function(datum){
    var date = datum.issueDate;
    return (fromDate <= date === true) && (date <= toDate === true);
  });//filter by the input

  _.each(datum, function(datum){
    issueDate.push(datum.issueDate);
    monthTotal.push(datum.monthTotal);
  });//process data
console.log();
  var chart = c3.generate({
    bindto:'#chart',
    size: {
      height: 420
    },
    data: {
      x: 'issueDate',
      xFormat: '%Y-%m',
      columns: [
       issueDate,
       monthTotal,
      ],
      type: 'area'
    },
    area: {
      zerobased: true
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m',
          centered: true,
          outer: true
        }
      },
      y: {
        tick: {
          values: [0, 200, 400, 600]
        }
      } // x
    }, // axis
    subchart: {
      show: true
    } //subchart
  }); // chart
};

$(function(){
  loadChart();

  // add eventlistener
  $('#rangeform').on('change', function() {
    loadChart();
  });

});//when document is ready, draw the chart
