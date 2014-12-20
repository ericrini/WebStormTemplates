describe('The $serviceName', function () {

	'use strict';

	var $serviceName;

	beforeEach(function () {

		module('$moduleName');

		inject(function (\$injector) {
			$serviceName = \$injector.get('$serviceName');
		});

	});

	it ('will initialize', function (done) {
		expect($serviceName).toBeDefined();
		done();
	});

});