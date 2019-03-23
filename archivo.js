$(document).ready(function() {
    console.log("Documento listo");

        $("#myCanvas").attr("width",$("#myCanvas").width());
        $("#myCanvas").attr("height",$("#myCanvas").height());
        $("#myCanvas").mouseup(function(e)
        {
           
            //outerxxxxx(true) nos da el ancho del elemento + sus margenes, outerxxxxx([false]) sin margenes
            //Dividimos el resultado entre dos para eliminar uno de los dos margenes del resultado
            var marginX = (($("#myCanvas").outerWidth(true)-$("#myCanvas").outerWidth())/2);
            var marginY = (($("#myCanvas").outerHeight(true)-$("#myCanvas").outerHeight())/2);
            var coordenadas = $("#myCanvas").position();   //Con Vanilla sería elementoHTML.getBoundingClientRect().top/left;
            var coordClickCanvas = [e.clientX - coordenadas.left - marginX,e.clientY - coordenadas.top - marginY]
            console.log(coordClickCanvas[0] + " - " + coordClickCanvas[1]);

            
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "white"; // Color rojo
            ctx.beginPath(); // Inicia trazo
            ctx.arc(coordClickCanvas[0], coordClickCanvas[1], 10, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
            ctx.fill(); // Termina trazo
            
        })
   
});



 	  	
