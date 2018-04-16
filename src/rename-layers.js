var UI = require('sketch/ui');
var feedback = require('./feedback.js')

export default function(context) {
  var sketch = context.api();
  var selectedLayers = sketch.selectedDocument.selectedLayers;
  if(selectedLayers.length > 0) {
    var userInput = UI.getStringFromUser('New name of the selected layer(s)', '');
		selectedLayers.iterate(function(layer){
      if(userInput !== 'null') {
        layer.name = userInput;
      }
		});
  } else {
    feedback.atLeastOneLayer();
  }
}
