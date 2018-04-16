var feedback = require('./feedback.js');

export default function(context) {
  var sketch = context.api();
  var selectedLayers = sketch.selectedDocument.selectedLayers;
  if(selectedLayers.length > 1) {
		selectedLayers.iterate(function(layer){
			layer.moveToBack();
		});
  } else {
    feedback.atLeastTwoLayers();
  }
}
