
var clickTotal = 0;

var startX = 0;
var startY = 0;

$("#gestureArea").mousedown(function (event) {
                            startX = event.pageX;
                            startY = event.pageY;
                            document.getElementById('gestureResult').textContent = "Gesturing...";
                            });

var xMov = 0;
var yMov = 0;

$("#gestureArea").mouseup(function (event) {
                        xMov = event.pageX - startX;
                        yMov = event.pageY - startY;
                        //document.getElementById('gestureResult').textContent = Math.abs(xMov);
                          if( xMov > 0 && xMov > Math.abs(yMov)){
                              document.getElementById('gestureResult').textContent = "Right Swipe"; //Right Swipe
                              clickTotal = 0;
}else if(yMov > 0 && yMov > Math.abs(xMov)) {
     document.getElementById('gestureResult').textContent = "Down Swipe"; //Down Swipe
    clickTotal = 0;
         }else if(xMov < 0 && Math.abs(xMov) > Math.abs(yMov)){
              document.getElementById('gestureResult').textContent = "Left Swipe";
             clickTotal = 0;
    //Left swipe
}else if(yMov < 0 && Math.abs(yMov) > Math.abs(xMov)){
     document.getElementById('gestureResult').textContent = "Up Swipe";
    clickTotal = 0;
    //Up Swipe
}else if(yMov == 0 && xMov == 0){
    clickTotal += 1;
    if(clickTotal == 2){
        document.getElementById('gestureResult').textContent = "Double Click";
    }else if(clickTotal == 3){
        document.getElementById('gestureResult').textContent = "Triple Click";
    }
}
                          
                        
                            });

                            