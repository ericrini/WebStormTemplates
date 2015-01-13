#set($D = '$')

describe('The $directiveName', function() {

	'use strict';

	var scope, element;

	beforeEach(function () {

		module('$moduleName');

		inject(function(${D}injector) {
			var ${D}rootScope = ${D}injector.get('${D}rootScope');
			var ${D}controller = ${D}injector.get('${D}controller');

			scope = ${D}rootScope.${D}new();

			element = '';
			element = ${D}compile(element)(scope);
			scope.${D}digest();

		});

	});

	it ('will initialize', function (done) {
		expect(scope).toBeDefined();
		expect(element).toBeDefined();
		done();
	});
});
