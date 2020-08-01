var canvas, context;

canvas = document.getElementById('myCanvas');
context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "blue";

context.addEventListener("mousedown",function(e){ down(e) }, false) // 마우스가 눌러질 때
context.addEventListener("mouseup",function(e){ up(e) }, false) // 눌러진 마우스가 놓여질 때
context.addEventListener("mousemove",function(e){ move(e) }, false) // 마우스를 움직이는 동안 
context.addEventListener("mouseout",function(e){ out(e) }, false) // 마우스가 캔버스 영역을 벗어나는 경우