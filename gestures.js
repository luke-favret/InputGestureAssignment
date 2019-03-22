
var isMouseDown = 0;

var startX = 0;
var startY = 0;

$("#gestureArea").mousedown(function (event) {
                            startX = event.pageX;
                            startY = event.pageY;
                            $("#gestureResult").val('startX'');
                            });

var xMov = 0;
var yMov = 0;

$("#gestureArea").mouseup(function (event) {
                        xMov = event.pageX - startX;
                        yMov = event.pageY - startY;
                          if( xMov > 0 && xMov > Abs(yMov)){
    //Right Swipe
}else if(yMov > 0 && yMov > Abs(xMov){
         //Down Swipe
         }else if(xMov < 0 && Abs(xMov) > Abs(yMov)){
    //Left swipe
}else if(yMov < 0 && Abs(yMov) > Abs(xMov)){
    //Up Swipe
}
                          
                        
                            });

                            