'use strict';
$(function(){
  var speakerName = nodecg.Replicant('speaker-name');
  
  var speakerText = $('#speaker')

  speakerName.on('change',function(newvalue,oldvalue){
    speakerText.prop('innerText',newvalue);
  });
});
