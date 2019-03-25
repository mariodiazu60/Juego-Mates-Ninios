$(document).ready(function() {
    console.log("Documento listo");

    $("#myCanvas").ready(function()
    {
        //Solución al problema de deformación según ratio del canvas
        $("#myCanvas").attr("width",$("#myCanvas").width());
        $("#myCanvas").attr("height",$("#myCanvas").height());

        //Variables para el juego
        var contador = 0;
        var firstClick = [];
        var secondClick = [];
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var img = new Image();
        img.src = "1.jpg";
        ctx.drawImage(img, 34, 12);

    
        $("#myCanvas").mouseup(function(e)
        {
            //CAPTURAMOS LOS CLICKS SOBRE EL CANVAS
            //outerWH(true) da el ancho del elemento + sus margenes, outerHW() sin margenes
            var marginX = (($("#myCanvas").outerWidth(true)-$("#myCanvas").outerWidth())/2);
            var marginY = (($("#myCanvas").outerHeight(true)-$("#myCanvas").outerHeight())/2);
            //.position() nos devuelve la distancia hasta el borde de la página 
            //Con Vanilla sería elementoHTML.getBoundingClientRect().top/left;
            var coordenadas = $("#myCanvas").position();  

            contador ++;
            if(contador%2 != 0)
            {
                firstClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.lineWidth = 8;
                ctx.arc(firstClick[0], firstClick[1], 11, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.stroke();
                ctx.closePath(); 
            }
                else
                {
                    secondClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];
                 
                    ctx.beginPath();
                    ctx.fillStyle = "green";
                    ctx.lineWidth = 8;
                    ctx.arc(secondClick[0], secondClick[1], 11, 0, 2 * Math.PI, false);
                    ctx.fill();
                    ctx.stroke(); 

                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.lineWidth = 10;
                    ctx.moveTo(firstClick[0], firstClick[1]);
                    ctx.lineTo (secondClick[0], secondClick[1]);
                    ctx.stroke(); 
                    ctx.closePath();
                    console.log("Coordenadas seg click = " + secondClick[0] + " - " + secondClick[1]);
                }
        })
    })
   
});



 	  	
