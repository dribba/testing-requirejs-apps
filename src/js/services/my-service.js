define(["jquery"], function($) {
	"use strict";
	return {
		getData: function() {
			return $.get("https://api.github.com/users/dribba/repos");
		}
	};
});