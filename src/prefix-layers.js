var UI = require('sketch/ui');
var feedback = require('./feedback.js');

export default function(context) {
  var sketch = context.api();
  var selectedLayers = sketch.selectedDocument.selectedLayers;
  if(selectedLayers.length > 0) {
    var prefix = UI.getStringFromUser('What would you like to prefix the layer(s) with?','');
    selectedLayers.iterate(function(layer){
      if(prefix !== 'null') {
        layer.name = prefix + layer.name;
      }
    });
  } else {
    feedback.atLeastOneLayer();
  }
}
