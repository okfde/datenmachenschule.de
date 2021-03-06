var app = angular.module('App', [
	angularChartist,
	'ui.select', 'ngSanitize'
]);

app.factory('dataService', function($http) {
	var data = undefined;
	return {
		get: function(cb) {
			if (!data) {
				$http({
					url: '/assets/js/data/data.json',
					method: "GET"
				})
					.then(function(response) {
						data = response.data;
						cb(null, response.data);
					})
			} else {
				return data
			}
		}
	}
});

app.controller('MainCtrl', function ($scope, dataService) {
	$scope.data = {};

	$scope.category = "Wasser";
	$scope.relation = "absolute";

	dataService.get(function(err, data) {
		$scope.data = data;
		$scope.update_data();
	});

	$scope.chart = {
		barData: {
			series: [
				[12, 9, 7]
			],
			labels: ["2013", "2014", "2015"]
		},
		type: "Bar",
		options: {
			fullWidth: true,
			chartPadding: {
				right: 40
			},
			horizontalBars: true,
			axisX: {
				showLabel: false,
				showGrid: false
			},
			axisY: {
				showGrid: false
			},
			plugins: [
				Chartist.plugins.ctBarLabels({
					position: {
						x: function (data) {
							return data.x2 + 30
						}
					},
					labelOffset: {
						y: 7
					},
					labelInterpolationFnc: function (text) {
						if ($scope.category == "Wasser")
							return text + ' m³';
						else
							return text + ' mWh'
					}
				})
			]
		},
		events: {
			draw: function (data) {
				console.log('draw');
				if (data.type === 'bar') {
					console.log(data)
					if (data.seriesIndex == 0) {
						data.element.animate({
							x2: {
								begin: 0,
								dur: 500,
								from: data.chartRect.x2,
								to: data.x2
							}
						}, false);
					}

					if (data.seriesIndex == 1) {
						data.element.animate({
							y2: {
								begin: 500,
								dur: 500,
								from: data.y1,
								to: data.y2
							}
						}, false);
					}
				}
			},
			data: function(data) {
				// console.log('created');
			}
		}
	};

	$scope.select_category = function(cat) {
		$scope.category = cat;
		$scope.update_data();
	}

	$scope.select_relation = function(relation) {
		console.log("select relation");
		$scope.relation = relation;
		$scope.update_data();
	};

	$scope.update_data = function() {
		$scope.bardata = $scope.data.map(function(elem) {
			var curr = _.filter(elem.categories, {'name': $scope.category})[0].types[0];
			var bardata = {};
			bardata.series = [curr.values.map(function(item) { return $scope.relation == "ground" ? (item.value / elem.size).toFixed(2) : item.value })];
			bardata.labels = curr.values.map(function(item) { return item.year });



			elem.bardata = bardata;
			console.log(elem);
			return elem;
		});

		console.log($scope.relation);
	}

});

app.controller('SchoolCtrl', function ($scope, dataService) {
	$scope.schools = [];
	$scope.barData = [];
	$scope.no_school = true;

	$scope.chart = {
		type: "Bar",
		options: {
			fullWidth: true,
			chartPadding: {
				right: 40
			},
			horizontalBars: false,
			axisX: {
				showLabel: true,
				showGrid: false
			},
			axisY: {
				showGrid: false,
				showLabel: false
			},
			width: '230px',
			height: '300px',
			plugins: [
				Chartist.plugins.ctBarLabels({
					position: {
						y: function (data) {
							return data.y1 - 10
						}
					}
				})
			]
		}
	};

	dataService.get(function(err, data) {
		$scope.schools = data;
	});

	$scope.update_school = function(school) {
		$scope.no_school = false;
		$scope.barData = school.categories.map(function(category) {
			return {
				series: [category.types[0].values.map(function(item) { return item.value})],
				labels: category.types[0].values.map(function(item) { return item.year})
			}
		});
		$scope.current_school = school;
	}
});