$(document).ready(function() {
    console.log("Documento listo");
    
    //CON JQUERY
    $("#btn-1").click(function()
    {
        //Position devuelve la distancia a los bordes, 
        //con la dist al borde superior e izq obtenemos las coord X e Y
        var coordenadas = $("#btn-1").position();
        console.log("X ---> " + coordenadas.top + " Y ----> " + coordenadas.left);
    }); 
    
    /* CON VANILLA
    function PosicionPuntos(elm)
    {
        var elemento = document.getElementById(elm.id);
        var posicion = elemento.getBoundingClientRect();
        console.log(posicion.top, posicion.left);
    }
    */

        $("#myCanvas").attr("width",$("#myCanvas").width());
        $("#myCanvas").attr("height",$("#myCanvas").height());
        $("#myCanvas").hover(function(e)
        {
            var pointSize = 3; // Cambia el tamaño del punto
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#ff2626"; // Color rojo

                ctx.beginPath(); // Iniciar trazo
                ctx.arc(150,75,50,0,(Math.PI*2),true);
                ctx.fill(); // Terminar trazo
        })

        $("#myCanvas").mouseup(function(e)
        {
           
            //outerxxxxx(true) nos da el ancho del elemento + sus margenes, outerxxxxx([false]) sin margenes
            //Dividimos el resultado entre dos para eliminar uno de los dos margenes del resultado
            var marginX = (($("#myCanvas").outerWidth(true)-$("#myCanvas").outerWidth())/2);
            var marginY = (($("#myCanvas").outerHeight(true)-$("#myCanvas").outerHeight())/2);
            var coordenadas = $("#myCanvas").position();
            var coordClickCanvas = [e.clientX - coordenadas.left - marginX,e.clientY - coordenadas.top - marginY]
            console.log(coordClickCanvas[0] + " - " + coordClickCanvas[1]);

            var pointSize = 3; // Cambia el tamaño del punto
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "white"; // Color rojo
            ctx.beginPath(); // Iniciar trazo
            ctx.arc(coordClickCanvas[0], coordClickCanvas[1], pointSize, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
            ctx.fill(); // Terminar trazo
            
        })
   
   
});



 	  	
