var deltaTime = 1;

function makeTimer() {
  var lastMs;
  
  new Container()
    .step(() => {
      var nowMs = performance.now();
      if (lastMs) {
        var oneFrameMs = 1000 / 60;
        var diffMs = nowMs - lastMs;
        deltaTime = diffMs / oneFrameMs;
      }
      
      lastMs = nowMs;
    })
    .show();
}