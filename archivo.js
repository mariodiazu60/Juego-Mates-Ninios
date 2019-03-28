$(document).ready(function() {

    $("#zona_dibujo").ready(function()
    {
         
        //Variables para el juego
        var count = 0;                                                                              //contadoor de clicks totales sobre el canvas
        var indiceImagen = 1;                                                                       //Contador para saber en que nivel del juego estamos
        var firstClick = [];                                                                        //Array para obtener el punto inicial de la recta
        var secondClick = [];                                                                       //Array para obtener el punto final de la recta
        var coordYClicks = [];                                                                      //Guardamos la pos Y de los clicks sobre el canvas para comprobar si ha sido en el sitio correcto.
        var dibujoSolucionado = true;                                                               //Si todos los puntos se han colocado bien será true, si no será false
        var ctx_zona_dibujo = document.getElementById("zona_dibujo").getContext("2d");              //Obtenemos los contextos de ambos canvas
        var ctx_imagen = document.getElementById("imagen").getContext("2d");
        var marginX = (($("#zona_dibujo").outerWidth(true)-$("#zona_dibujo").outerWidth())/2);      //outerWH(true) da el ancho del elemento + sus margenes, outerHW() sin margenes
        var marginY = (($("#zona_dibujo").outerHeight(true)-$("#zona_dibujo").outerHeight())/2);
        var coordenadas = $("#zona_dibujo").position();                                             //.position() nos devuelve la distancia hasta el borde de la página 
        var img = new Image();                                                                      //Variables para la img sobre el canvas
        //Solución al problema de deformación según ratio del canvas
        $("#imagen").attr("width",$("#imagen").width());
        $("#imagen").attr("height",$("#imagen").height());
        $("#zona_dibujo").attr("width",$("#zona_dibujo").width());
        $("#zona_dibujo").attr("height",$("#zona_dibujo").height());
        
        //Cargamos la primera imagen para empezar el juego
        cargarImagen(indiceImagen);

        $("#zona_dibujo").mouseup(function(e)
        {
            //CAPTURAMOS LOS CLICKS SOBRE EL CANVAS
            //Al primer click nos guardamos la coord inicial de la recta.
            count ++;
            if(count%2 != 0)
            {
                //Obtenemos la posicion del click sobre el canvas = posicion del click sobre la ventana - distancia del canvas al margen izquierdo - ancho del canvas
                firstClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];
                drawCircles("#e830d8", 4, firstClick);
                coordYClicks[count] = firstClick[1];
            }
                //Al segundo click nos guardamos la segunda coord
                else
                {
                    secondClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];  
                    drawCircles("#ff7700", 4, secondClick);
                    coordYClicks[count] = secondClick[1];
                }
                //Una vez tenemos los dos pares de coordenadas dibujamos la linea
                drawLines(4, "green");
        })

        $("#comprobar").click(function()
        {
            if(indiceImagen == 1)
            {
                if(coordYClicks.length<14)
                {
                    dibujoSolucionado = false; 
                } 
                    else
                    {
                        for(var i = 1; i<coordYClicks.length && dibujoSolucionado; ++i)
                        {
                            switch(i)
                            {
                                case 1:
                                        if(coordYClicks[i]>70 && coordYClicks[i]<170)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 2:
                                        if(coordYClicks[i]>75 && coordYClicks[i]<160)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 3:
                               
                                        if(coordYClicks[i]>100 && coordYClicks[i]<190)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 4:
                                        if(coordYClicks[i]>170 && coordYClicks[i]<260)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 5:
                                        if(coordYClicks[i]>230 && coordYClicks[i]<350)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 6:
                                        if(coordYClicks[i]>285 && coordYClicks[i]<430)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 7:
                                        if(coordYClicks[i]>295 && coordYClicks[i]<430)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 8:
                                        if(coordYClicks[i]>295 && coordYClicks[i]<450)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 9:
                                        if(coordYClicks[i]>265 && coordYClicks[i]<400)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 10:
                                        if(coordYClicks[i]>220 && coordYClicks[i]<310)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 11:
                                        if(coordYClicks[i]>145 && coordYClicks[i]<225)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 12:
                                        if(coordYClicks[i]>55 && coordYClicks[i]<140)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 13:
                                        if(coordYClicks[i]>55 && coordYClicks[i]<140)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                        }
                    }
                }
            }
            else{
                if(coordYClicks.length<10)
                {
                    dibujoSolucionado = false; 
                } 
                    else
                    {
                        for(var i = 1; i<coordYClicks.length && dibujoSolucionado; ++i)
                        {
                            switch(i)
                            {
                                case 1:
                                        if(coordYClicks[i]>290 && coordYClicks[i]<390)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 2:
                                        if(coordYClicks[i]>140 && coordYClicks[i]<230)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 3:
                                        if(coordYClicks[i]>140 && coordYClicks[i]<230)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 4:
                                        if(coordYClicks[i]>100 && coordYClicks[i]<180)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 5:
                                        if(coordYClicks[i]>140 && coordYClicks[i]<230)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 6:
                                        if(coordYClicks[i]>60 && coordYClicks[i]<130)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 7:
                                        if(coordYClicks[i]>140 && coordYClicks[i]<230)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 8:
                                        if(coordYClicks[i]>100 && coordYClicks[i]<180)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 9:
                                        if(coordYClicks[i]>180 && coordYClicks[i]<230)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 10:
                                        if(coordYClicks[i]>180 && coordYClicks[i]<230)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                            }
                        }
                    }
            }   

            if(dibujoSolucionado)
            {
                window.alert("SOLUCIONADO");
            }   
            else
            {
                window.alert("NO SOLUCIONADO");
                location.reload();
            }
        })

        $("#anterior").click(function()
        {
            
            if(indiceImagen == 2)
            {   
                ctx_zona_dibujo.clearRect(0, 0, $("#zona_dibujo").outerWidth(), $("#zona_dibujo").outerHeight());
                dibujoSolucionado = true;
                coordYClicks = [];
                firstClick = []
                secondClick = [];
                count = 0;
                --indiceImagen;
                cargarImagen(indiceImagen);
            }
        })

        $("#siguiente").click(function()
        {
         
            if(indiceImagen == 1)
            {
                ctx_zona_dibujo.clearRect(0, 0, $("#zona_dibujo").outerWidth(), $("#zona_dibujo").outerHeight());
                dibujoSolucionado = true;
                coordYClicks = [];
                firstClick = []
                secondClick = [];
                count = 0;
                ++indiceImagen;
                cargarImagen(indiceImagen);
            }
        })

        function cargarImagen(indiceImagen)
        {
            img.src = "assets/" + indiceImagen + ".jpg";
            //Cargamos la imagen sobre el canvas
            img.onload = function()
            {
                ctx_imagen.drawImage(img, 0, 0, $("#imagen").outerWidth(), $("#imagen").outerHeight());
            }  
        }

        function drawCircles(color, lineWidth, coord = [])
        {
            ctx_zona_dibujo.beginPath();
            ctx_zona_dibujo.fillStyle = color;
            ctx_zona_dibujo.lineWidth = lineWidth;
            ctx_zona_dibujo.strokeStyle = color;
            ctx_zona_dibujo.arc(coord[0], coord[1], 8, 0, 2 * Math.PI, false);
            ctx_zona_dibujo.fill();
            ctx_zona_dibujo.stroke(); 
            ctx_zona_dibujo.closePath();
        }

        function drawLines(lineWidth, color)
        {
            ctx_zona_dibujo.beginPath();
            ctx_zona_dibujo.lineCap = "round";
            ctx_zona_dibujo.lineJoin = "round";
            ctx_zona_dibujo.strokeStyle = color;
            ctx_zona_dibujo.lineWidth = lineWidth;
            ctx_zona_dibujo.moveTo(firstClick[0], firstClick[1]);
            ctx_zona_dibujo.lineTo (secondClick[0], secondClick[1]);
            ctx_zona_dibujo.stroke(); 
            ctx_zona_dibujo.closePath();
        }

    })
   
});



 	  	
