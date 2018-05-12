// google.charts.load('current', {packages: ['corechart', 'line']});
// google.charts.setOnLoadCallback(drawCurveTypes);

// function drawCurveTypes(){


	// $.ajax({
	// 	url: "https://api.geonet.org.nz/quake?MMI=3",
	// 	dataType: 'json',
	// 	success: function(data){
	// 		for (var i = 0; i < data.length; i++) {
	// 			if(data.type == "FeatureCollection"){
	// 				console.log(data.features[0].geometry.coordinates);

	// 		}

			//  var data = google.visualization.arrayToDataTable(); 
			//         data.addColumn('number', 'x');
   //                	data.addColumn('data.features[i].properties.magnitude', 'Magnitude');
   //                	data.addColumn('data.features[i].properties.depth', 'Depth');



				// for (var i = 0; i < data.length; i++) {
				// 	data.addRow([data[i].features[i].properties.magnitude, data[i].features[i].properties.depth]);
				// 	}

// 		},
// 	});

// }
			    
// 			    var data = google.visualization.arrayToDataTable(); 
// 			        data.addColumn('number', 'x');
//                   	data.addColumn('data.features[i].properties.magnitude', 'Magnitude');
//                   	data.addColumn('data.features[i].properties.depth', 'Depth');


// 			    	for (var i = 0; i < data.length; i++) {
// 					data.addRow([data[i].features[i].properties.magnitude, data[i].features[i].properties.depth]);
// 					}
					

// 			        var options = {
// 						hAxis: {
// 							title: 'Depth'
// 						},

// 						vAxis: {
// 							title: 'magnitude'
// 						}, 

// 						series: {
// 							1: {curveType: 'function'}
// 						}
// 					};

// 			        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
// 					chart.draw(data, options);
			
// 			},

// 			error: function(error){
// 				console.log(error);
// 				console.log('something went wrong');
// 			}
		 
// 	});
// }

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	$.ajax({
			url: "https://api.geonet.org.nz/quake?MMI=3",
			dataType: 'json',
			success: function(data){
				console.log(data);
				if(data.type == 'FeatureCollection'){
					console.log(data.features[0].properties.depth);

			        var data = google.visualization.arrayToDataTable([
			           ['Label', 'Value'],
                  		['depth', data.features[0].properties.depth],
                  		['magnitude', data.features[0].properties.magnitude]
               		 ]);

			        var options = {
			          height: 500,
			          min: 0, max: 40,
			          greenFrom: 0, greenTo: 20,
			          yellowFrom:20, yellowTo: 35,
			          redFrom: 35, redTo: 40,
			          minorTicks: 5
			          };

			        var chart = new google.visualization.Gauge(document.getElementById('chartLocation'));
					chart.draw(data, options);

				} else {
					$('#chartLocation').empty().append("<h2>Cannot find data</h2>");
				}
			},

			error: function(error){
				console.log(error);
				console.log('something went wrong');
			}
		})
}

setInterval(function() {
    drawChart();
}, 10000);
























