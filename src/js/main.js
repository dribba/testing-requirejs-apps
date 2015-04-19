"use strict";

requirejs.config({
    baseUrl: "./js",
    paths: {
    	"jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min"
    }
});

require(["jquery", "my-module"], function($, module) {
	module.myFunction(function(result) {
		console.dir(result);
		$("body").html(result.join("<br/>"));
	});
});