(function (angular) {

	'use strict';

	var app = angular.module('$moduleName');

	app.factory('$serviceName', [
		function () {

			var $ServiceName = function () {};

			return new $ServiceName();

		}
	]);

}(angular));