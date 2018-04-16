var UI = require('sketch/ui');
exports.atLeastOneLayer = function(){
	return UI.message('Select atleast one layer 🤖');
};
exports.atLeastTwoLayers = function(){
	return UI.message('Select at least two layers 🤖');
};
