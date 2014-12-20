describe('The $directiveName', function() {

	'use strict';

	var scope, element;

	beforeEach(function () {

		module('$moduleName');

		inject(function(\$injector, \$rootScope, \$compile) {

			scope = \$rootScope.\$new();

			element = '';
			element = \$compile(element)(scope);
			scope.\$digest();

		});

	});

	it ('will initialize', function (done) {
		expect(scope).toBeDefined();
		expect(element).toBeDefined();
		done();
	});
});
