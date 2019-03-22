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

        $("#myCanvas").mouseup(function(e)
        {
            var coordenadas = $("#myCanvas").position();
            console.log("Coordenadas Y en Canvas--> " + Math.round(e.clientY - coordenadas.top -48 ));
            
        })
   
   
});



 	  	
