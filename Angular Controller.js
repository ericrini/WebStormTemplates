#set($D = '$')

(function (angular) {

	'use strict';

	var app = angular.module('$moduleName');

	app.controller('${controllerName}Controller', [
		'${D}scope', '${D}controller',
		function (${D}scope, ${D}controller) {

			${D}scope.name = '$controllerName';

			${D}controller('viewController', ${D}scope);

		}
	]);

}(angular));