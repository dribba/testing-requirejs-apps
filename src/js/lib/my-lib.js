define([], function() {
	"use strict";

	return {
		map: function(fun, arr) {
			var len = arr.length,
				newArr = [];

			for(var i = 0; i < len; i++){
				if(arr[i]) newArr.push(fun(arr[i]));
			}

			return newArr;
		}
	};
});