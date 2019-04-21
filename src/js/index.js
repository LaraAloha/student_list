const myApp = angular.module('myApp', ['ngAnimate']);
myApp.controller('studController', ['$scope', '$http', function($scope, $http) {
	let storage;
	$http({method: 'GET', url: 'src/js/index.json'})
		.then(function(data, status) {
			$scope.students = data.data;
			storage = Object.assign({}, $scope.students);
		});
		
		$scope.checkForms = {};
		
		$scope.buttonReturn = function () {
			storageCopy = Object.assign({}, storage);
			$scope.students = storageCopy;
		}

		$scope.buttonDelete = function () {
		
	    	const studNums = Object.keys($scope.students)
			studNums.forEach(function(studNum){
				
				if ($scope.checkForms[studNum] == true) {
					delete $scope.students[studNum];
				}
			});

			$scope.checkForms = {};
		}

		$scope.mainCheckbox = false;
	    $scope.$watch('mainCheckbox', function() {
	    	if ($scope.students === undefined) {
	    		return;
	    	}

			const studNums = Object.keys($scope.students)
			studNums.forEach(function(studNum){
	    		$scope.checkForms[studNum] = $scope.mainCheckbox;
			});
		});

}]);