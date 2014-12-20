describe ('The $controllerName', function () {

	'use strict';

	var mockScope, $controllerName;

	beforeEach(function (done) {
		module('$moduleName');

		inject(function (\$injector, $rootScope, $controller) {

			mockScope = \$rootScope.\$new();

			$controllerName = $controller('$controllerName', {
				'\$scope': mockScope
			})
			.then(function(){
				done();
			});

		});
	});

	it ('will initialize', function (done) {
		expect($controllerName).toBeDefined();
		done();
	});

});