$(document).ready(function() {
    console.log("Documento listo");

    $("#myCanvas").ready(function()
    {
         //Solución al problema de deformación según ratio del canvas
        $("#myCanvas").attr("width",$("#myCanvas").width());
        $("#myCanvas").attr("height",$("#myCanvas").height());
        //Variables para el juego
        var count = 0;
        var firstClick = [];
        var secondClick = [];
        var ctx = document.getElementById("myCanvas").getContext("2d");

        var img = new Image();
        img.src = "assets/1.jpg";
        img.onload = function()
        {
        ctx.drawImage(img, 0, 0, $("#myCanvas").outerWidth(), $("#myCanvas").outerHeight());
        }

        $("#myCanvas").mouseup(function(e)
        {
            //CAPTURAMOS LOS CLICKS SOBRE EL CANVAS
            //outerWH(true) da el ancho del elemento + sus margenes, outerHW() sin margenes
            var marginX = (($("#myCanvas").outerWidth(true)-$("#myCanvas").outerWidth())/2);
            var marginY = (($("#myCanvas").outerHeight(true)-$("#myCanvas").outerHeight())/2);
            //.position() nos devuelve la distancia hasta el borde de la página 
            //Con Vanilla sería elementoHTML.getBoundingClientRect().top/left;
            var coordenadas = $("#myCanvas").position();  
            

            //Al primer click nos guardamos la coord inicial de la recta.
            count ++;
            if(count%2 != 0)
            {
                firstClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];
                drawCircles("#e830d8", 4, firstClick);
            }
                //Al segundo click nos guardamos la segunda coord
                else
                {
                    secondClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];   
                    drawCircles("#ff7700", 4, secondClick);
                }
                //Una vez tenemos los dos pares de coordenadas dibujamos la linea
                drawLines(4, "green");
        })

        function drawCircles(color, lineWidth, coord = [])
        {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.arc(coord[0], coord[1], 8, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.stroke(); 
            ctx.closePath();
        }
        function drawLines(lineWidth, color)
        {
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(firstClick[0], firstClick[1]);
            ctx.lineTo (secondClick[0], secondClick[1]);
            ctx.stroke(); 
            ctx.closePath();
        }
    })
   
});



 	  	
