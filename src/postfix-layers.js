var UI = require('sketch/ui');
var feedback = require('./feedback.js');

export default function(context) {
  var sketch = context.api();
  var selectedLayers = sketch.selectedDocument.selectedLayers;
  if(selectedLayers.length > 0) {
    var postfix = UI.getStringFromUser('What would you like to postfix the layer(s) with?','');
    selectedLayers.iterate(function(layer){
      if(postfix !== 'null') {
        layer.name = layer.name + postfix;
      }
    });
  } else {
    feedback.atLeastOneLayer();
  }
}
