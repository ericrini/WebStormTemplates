#set($D = '$')

describe('The $directiveName', function() {

	'use strict';

	var scope, element;

	beforeEach(function (done) {

		module('$moduleName');

		inject(function(${D}injector) {
			var ${D}rootScope = ${D}injector.get('${D}rootScope');
			var ${D}compile = ${D}injector.get('${D}compile');

			scope = ${D}rootScope.${D}new();

			element = '';
			element = ${D}compile(element)(scope);
			scope.${D}digest();

			_.defer(function () {
				done();
			});
		});

	});

	it ('will initialize', function (done) {
		expect(scope).toBeDefined();
		expect(element).toBeDefined();
		done();
	});
});