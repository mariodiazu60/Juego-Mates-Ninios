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
        var coordYClicks = []; //Aquí nos guardamos la coord Y de todos los clicks sobre el canvas para comprobar si ha sido correcto.
        var dibujoSolucionado = true; //Si todos los puntos se han colocado bien será true, si no será false
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
                console.log("Click número" + count + " = [" + firstClick[0] + " , " + firstClick[1]+ "]");
                drawCircles("#e830d8", 4, firstClick);
                coordYClicks[count] = firstClick[1];
            }
                //Al segundo click nos guardamos la segunda coord
                else
                {
                    secondClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];   
                    console.log("Click número" + count + " = [" + secondClick[0] + " , " + secondClick[1]+ "]");
                    drawCircles("#ff7700", 4, secondClick);
                    coordYClicks[count] = secondClick[1];
                }
                //Una vez tenemos los dos pares de coordenadas dibujamos la linea
                drawLines(4, "green");
        })

        $("#comprobar").click(function()
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
                                    if(coordYClicks[i]>70 && coordYClicks[i]<90)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 2:
                                    if(coordYClicks[i]>60 && coordYClicks[i]<80)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 3:
                                    if(coordYClicks[i]>90 && coordYClicks[i]<110)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 4:
                                    if(coordYClicks[i]>150 && coordYClicks[i]<174)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 5:
                                    if(coordYClicks[i]>220 && coordYClicks[i]<243)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 6:
                                    if(coordYClicks[i]>275 && coordYClicks[i]<295)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 7:
                                    if(coordYClicks[i]>275 && coordYClicks[i]<295)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 8:
                                    if(coordYClicks[i]>285 && coordYClicks[i]<305)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 9:
                                    if(coordYClicks[i]>255 && coordYClicks[i]<275)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 10:
                                    if(coordYClicks[i]>200 && coordYClicks[i]<220)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 11:
                                    if(coordYClicks[i]>125 && coordYClicks[i]<145)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 12:
                                    if(coordYClicks[i]>40 && coordYClicks[i]<60)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                            case 13:
                                    if(coordYClicks[i]>40 && coordYClicks[i]<60)
                                    {
                                        dibujoSolucionado = true;
                                    } else dibujoSolucionado = false; break;
                        }
                    }
                }   
            if(dibujoSolucionado)
            {
                window.alert("SOLUCIONADO");
            }   
            else{
                window.alert("NO SOLUCIONADO");
                location.reload();
            }
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



 	  	
