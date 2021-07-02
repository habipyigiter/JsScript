<!doctype html>
<html>
<head>
  <style>
    
    #my-canvas { border: 1px solid white; }
    
  </style>
</head>
<body>
  
  <canvas id="my-canvas" width="664" height="344"></canvas>
  <script>
  
    var buffer = [128 * 64 / 8];
    
    var shift=1;
 var pixel=0;


    var canvas = document.querySelector('#my-canvas');
    var context = canvas.getContext('2d');

    function drawPixel(x, y, color) {
      	// to decrease smoothing for numbers with decimal part
		var roundedX = Math.round(x)*3;
        var roundedY = Math.round(y)*3;
  
        context.beginPath();
        context.fillStyle = color || '#000';
        
      	context.fillRect(roundedX, roundedY, 1, 1);
      		context.fillRect(roundedX+1, roundedY, 1, 1);
      			context.fillRect(roundedX+2, roundedY, 1, 1);
      			
      				context.fillRect(roundedX, roundedY+1, 1, 1);
      					context.fillRect(roundedX+1, roundedY+1, 1, 1);
      						context.fillRect(roundedX+2, roundedY+1, 1, 1);
      						
      							context.fillRect(roundedX, roundedY+2, 1, 1);
      								context.fillRect(roundedX+1, roundedY+2, 1, 1);
      									context.fillRect(roundedX+2, roundedY+2, 1, 1);
        context.fill();
    }
    
    var colors = ['red', 'blue', 'orange', 'yellow', 'brown', 'green'];
    
    
        for (var i=0;i<=128;i++) {
      
      for (var ii=0;ii<=64;ii++) {
        
          drawPixel(i, ii, "#6E65F1");
          
      }
      
    }
    
    drawPixel(0,0,"#D5D7DB");
      drawPixel(0,1,"#D5D7DB");
        drawPixel(0,2,"#D5D7DB");
         drawPixel(1,2,"#D5D7DB");
          drawPixel(2,2,"#D5D7DB");
          drawPixel(0,3,"#D5D7DB");
            drawPixel(0,4,"#D5D7DB");
            
            
    drawPixel(3,0,"#D5D7DB");
      drawPixel(3,1,"#D5D7DB");
        drawPixel(3,2,"#D5D7DB");
          drawPixel(3,3,"#D5D7DB");
            drawPixel(3,4,"#D5D7DB");
    



    



  </script>
</body>
</html>