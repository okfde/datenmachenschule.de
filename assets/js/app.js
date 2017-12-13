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
	$scope.test = 'hallo knut';
	$scope.test2 = ['hallo', 'hallo', 'knut'];
	$scope.data = {};

	$scope.category = "Wasser";

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
			}
		}
	};

	$scope.select_category = function(cat) {
		$scope.category = cat;
		$scope.update_data();
	}

	$scope.update_data = function() {
		$scope.bardata = $scope.data.map(function(elem) {
			var curr = _.filter(elem.categories, {'name': $scope.category})[0].types[0];
			var bardata = {};
			bardata.series = [curr.values.map(function(item) { return item.value })];
			bardata.labels = curr.values.map(function(item) { return item.year });
			elem.bardata = bardata;
			return elem;
		});
	}

});

app.controller('SchoolCtrl', function ($scope, dataService) {
	$scope.schools = [];
	$scope.barData = [];

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
			height: '300px'
		}
	};

	dataService.get(function(err, data) {
		$scope.schools = data;
	})

	$scope.update_school = function(school) {
		console.log(school);
		$scope.barData = school.categories.map(function(category) {
			return {
				series: [category.types[0].values.map(function(item) { return item.value})],
				labels: category.types[0].values.map(function(item) { return item.year})
			}
		})
	}
});