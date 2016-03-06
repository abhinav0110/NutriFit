$(document).ready(function(){
  createGraph();
});

createGraph = function(){
  new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { Time: 'Mar 5', val2: 14, val3: 5, calories: 2324, value: 20 },
      { Time: 'Mar 6', val2: 4, val3: 15, calories: 2004, value: 10 },
      { Time: 'Mar 7', val2: 2, val3: 4, calories: 1940, value: 5 },
      { Time: 'Mar 8', val2: 12, val3: 6, calories: 2509, value: 5 },
      { Time: 'Mar 9', val2: 5, val3: 7, calories: 2323, value: 20 }
    ],
          parseTime: false,
    // The name of the data record attribute that contains x-values.
    xkey: 'Time',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value', 'val2', 'val3'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Protein', 'Lipids', 'Carbohydrates']
  });
}

/*
data = [
  {
    hour: XX
    day: XX
    month: XX
    year: XXXX
    Calories: XXXX
    Protein: XXXX
    Fat: XXXX
    Carbohydrates: XXXX
    Sugar: XXXX
  }
]
*/

var dataset_graph = [
  { Time: 'Mar 5', val2: 14, val3: 5, calories: 2324, value: 20 },
  { Time: 'Mar 6', val2: 4, val3: 15, calories: 2004, value: 10 },
  { Time: 'Mar 7', val2: 2, val3: 4, calories: 1940, value: 5 },
  { Time: 'Mar 8', val2: 12, val3: 6, calories: 2509, value: 5 },
  { Time: 'Mar 9', val2: 5, val3: 7, calories: 2323, value: 20 }
];

updateGraph = function(time, prot, fat, carb) {
  dataset.push({
    Time: time,
    val2: prot,
    val3: fat,
    calories: 0,
    value: carb
  });
  new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: dataset_graph,
    // The name of the data record attribute that contains x-values.
    xkey: 'time',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });
}