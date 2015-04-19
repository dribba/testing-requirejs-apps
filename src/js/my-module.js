define(["lib/my-lib", "services/my-service"], function(myLib, myService) {
	"use strict";

	return {
		myFunction: function(cb) {
			myService.getData().done(function(data) {
				cb(myLib.map(function(elem) {
					return "Feel the awesomness: " + elem.name;
				}, data));
			});
		}
	};
});