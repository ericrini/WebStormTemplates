#set($D = '$')

describe('The $serviceName', function () {

	'use strict';

	var $serviceName;

	beforeEach(function () {

		module('$moduleName');

		inject(function (${D}injector) {
			$serviceName = ${D}injector.get('$serviceName');
		});

	});

	it ('will initialize', function (done) {
		expect($serviceName).toBeDefined();
		done();
	});

});