(function (angular) {

	'use strict';

	var app = angular.module('$moduleName');

	app.controller('${controllerName}Controller', [
		'\$scope', '\$controller',
		function (\$scope, \$controller) {

			\$scope.name = '$controllerName';

			\$controller('viewController', \$scope);

		}
	]);

}(angular));