(function () {
'use strict';

angular.module('myFirstApp',[])
.controller('LunchChecker', LunchChecker);

LunchChecker.$inject = [ '$scope' ];
function LunchChecker($scope){
	$scope.items= "";
	$scope.message= "";

	$scope.displayMessage = function () {
		$scope.message = calculateItems($scope.items);
	}


	function calculateItems(string) {
		var ls = string.split(',');
		var l = ls.length;

		for (var i = 0; i < ls.length; i++) {
			if (ls[i]=="" || ls[i]==" ") {
				l=l-1;
			}
		}
		if (l>=1 && l<=3) {
			return "Enjoy!";
		}
			else if (l>3) {
				return "Too much!";
			}
				else if (l==0) {
					return "Please enter data first";
				}
	}
}

})();

