#set($D = '$')

describe ('The $controllerName', function () {

	'use strict';

	var mockScope, $controllerName;

	beforeEach(function (done) {
		module('$moduleName');

		inject(function (${D}injector) {
			var ${D}rootScope = ${D}injector.get('${D}rootScope');
			var ${D}controller = ${D}injector.get('${D}controller');

			mockScope = ${D}rootScope.${D}new();

			$controllerName = ${D}controller('$controllerName', {
				'${D}scope': mockScope
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