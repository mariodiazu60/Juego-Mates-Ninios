$(document).ready(function() {

    //JS DEL JUEGO DE CONTAR
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
        var intentosContar;                                                                         //variable para guardar los intentos
        var aciertosContar;                                                                         //variable para guardar los aciertos 
         
        //Si las  variables no están definidas en sessionStorage las creamos e inicializamos a 0
        if(sessionStorage.getItem("intentosContar")==null)
        {
            sessionStorage.setItem("intentosContar",0);                                              //sessionStorage para guardar los intentos
            sessionStorage.setItem("aciertosContar",0);                                              //sessionStorage para guardar los aciertos
            intentosContar = 0;                                                                   
            aciertosContar = 0;                                                                                                                    
        } else
            {
                //Si existen intentos y aciertos se igualan a lo que valgan las variables del sessionStorage
                intentosContar = sessionStorage.getItem("intentosContar");
                aciertosContar = sessionStorage.getItem("aciertosContar");
            }
        //Solución al problema de deformación según ratio del canvas
        $("#imagen").attr("width",$("#imagen").width());
        $("#imagen").attr("height",$("#imagen").height());
        $("#zona_dibujo").attr("width",$("#zona_dibujo").width());
        $("#zona_dibujo").attr("height",$("#zona_dibujo").height());
        
        //Cargamos la primera imagen para empezar el juego
        cargarImagen(indiceImagen);

        $("#zona_dibujo").mouseup(function(e)
        {
            //CAPTURAMOS LOS CLICKS SOBRE EL CANVAS con un contador
            //Al primer click nos guardamos la coord inicial de la recta.
            count ++;
            if(count%2 != 0)
            {
                //Obtenemos la posicion del click sobre el canvas = posicion del click sobre la ventana - distancia del canvas al margen izquierdo - ancho del canvas
                firstClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];
                drawCircles("#e830d8", 4, firstClick);
                coordYClicks[count] = firstClick[1];
            }
                //Al segundo click nos guardamos la segunda coordenada
                else
                {
                    secondClick = [e.clientX - coordenadas.left - marginX, e.clientY - coordenadas.top - marginY];  
                    drawCircles("#ff7700", 4, secondClick);
                    coordYClicks[count] = secondClick[1];
                }
                //Una vez tenemos los dos pares de coordenadas dibujamos la linea
                drawLines(4, "green");
        })

        //Comprobamos que los clicks que tenemos en el array están en las coordenadas correctas
        $("#comprobar").click(function()
        {
            intentosContar++;
            sessionStorage.setItem("intentosContar",intentosContar);
            console.log("Intentos = " + intentosContar);
     
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
                if(coordYClicks.length<11)
                {
                    dibujoSolucionado = false; 
                } 
                    else
                    {
                        for(var i = 1; i<coordYClicks.length && dibujoSolucionado; ++i)
                        {
                            switch(i)
                            {
                                case 1: console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>330 && coordYClicks[i]<460)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 2:  console.log("Click " + i + " " + + coordYClicks[i]);
                                        if(coordYClicks[i]>140 && coordYClicks[i]<290)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 3:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>200 && coordYClicks[i]<290)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 4:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>100 && coordYClicks[i]<210)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 5:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>140 && coordYClicks[i]<290)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 6:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>60 && coordYClicks[i]<140)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 7:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>140 && coordYClicks[i]<290)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 8:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>100 && coordYClicks[i]<210)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 9:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>180 && coordYClicks[i]<290)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                                case 10:  console.log("Click " + i + " " + coordYClicks[i]);
                                        if(coordYClicks[i]>180 && coordYClicks[i]<290)
                                        {
                                            dibujoSolucionado = true;
                                        } else dibujoSolucionado = false; break;
                            }
                        }
                    }
            }   

            if(dibujoSolucionado)
            {
                aciertosContar++;
                sessionStorage.setItem("aciertosContar",aciertosContar);
                mostrarVentana("¡CORRECTO!","cuenta");
            }   
            else
            {
                ctx_zona_dibujo.clearRect(0, 0, $("#zona_dibujo").outerWidth(), $("#zona_dibujo").outerHeight());
                dibujoSolucionado = true;
                coordYClicks = [];
                firstClick = []
                secondClick = [];
                count = 0;
                mostrarVentana("VUELVE A INTENTARLO","cuenta");
            }
        })

        //Cuando le damos a anterior o siguiente actualizamos el indice de la pagina donde nos encontramos
        //limpiamos el canvas y cargamos la imagen que corresponde a cada pagina
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

        //Segun el indice cargaremos la img 1.jpg/2.jpg etc
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


    //JS DEL INFORME
    $("#tarjeteroInforme").ready(function()
    {   

    	//INFORME SOBRE LA SUMA
    	//si existen intentos y aciertos como storage, significa que se ha jugado y sacamos sus valores.
        //En caso de que no existan como storage, significa que no se ha jugado al juego aún. por tanto mostramos 0.
        if(sessionStorage.getItem("intentosSuma")!=null){
            $("#intentosSuma").html("Intentos: " + sessionStorage.getItem("intentosSuma"));
        } else{
                $("#intentosSuma").html("Intentos: " + 0);
        }

        if(sessionStorage.getItem("aciertosSuma")!=null){
            $("#aciertosSuma").html("Aciertos: " + sessionStorage.getItem("aciertosSuma"));
        } else{
                $("#aciertosSuma").html("Aciertos: " + 0);
        }
        
        if(sessionStorage.getItem("fallosSuma")!=null){
            $("#fallosSuma").html("Fallos: " + (sessionStorage.getItem("fallosSuma")));
        } else{
                $("#fallosSuma").html("Fallos: " + 0);
        }

        //INFORME SOBRE LA SUMA
        if(sessionStorage.getItem("intentosResta")!=null){
            $("#intentosResta").html("Intentos: " + sessionStorage.getItem("intentosResta"));
        } else{
                $("#intentosResta").html("Intentos: " + 0);
        }

        if(sessionStorage.getItem("aciertosResta")!=null){
            $("#aciertosResta").html("Aciertos: " + sessionStorage.getItem("aciertosResta"));
        } else{
                $("#aciertosResta").html("Aciertos: " + 0);
        }
        
        if(sessionStorage.getItem("fallosResta")!=null){
            $("#fallosResta").html("Fallos: " + (sessionStorage.getItem("fallosResta")));
        } else{
                $("#fallosResta").html("Fallos: " + 0);
        }

    	//INFORME SOBRE LA RESTA
        if(sessionStorage.getItem("intentosContar")!=null){
            $("#intentosCuenta").html("Intentos: " + sessionStorage.getItem("intentosContar"));
        } else{
                $("#intentosCuenta").html("Intentos: " + 0);
        }

        if(sessionStorage.getItem("aciertosContar")!=null){
            $("#aciertosCuenta").html("Aciertos: " + sessionStorage.getItem("aciertosContar"));
        } else{
                $("#aciertosCuenta").html("Aciertos: " + 0);
        }
        
        //Para los fallos, comprobamos que intentos o aciertos existen como storage, y si existen hacemos la resta de intentos-aciertos para sacar los fallos
        //En caso de que no existan como storage, significa que no se ha jugado al juego aún. por tanto mostramos 0.
        if(sessionStorage.getItem("intentosContar")!=null){
            $("#fallosCuenta").html("Fallos: " + (sessionStorage.getItem("intentosContar") - sessionStorage.getItem("aciertosContar")));
        } else{
                $("#fallosCuenta").html("Fallos: " + 0);
        }
    })
      
});

var res = 0;

$(document).ready(function() {
    console.log("Documento listo");

    $("#draggable").draggable({
        // opacity : 0.7, 
        helper: "clone",
        start: function (e, ui) {
            $(ui.helper).addClass("drag-helper");
            console.log(ui);
        }
    })
    
    $("#droppable").droppable({
        drop: function () {
            var cloned = $("#draggable").clone().css({
                "margin": "0 .5em 0 0"
            })
            $(this).css("background-color", "green");
            if ($(".outerwrapper").length == 0) {
                $(this).wrapInner("<div id='outerwrapper' class = 'outerwrapper'></div>");
            }
            $(".outerwrapper").append(cloned)
            $(this).css("width", "85%");
            $(this).css("height", "100%");

            if (document.getElementsByClassName("signo")[0].innerText=="+") {
                let cont1 = document.getElementById("imop1"), cont2 = document.getElementById("imop2");
                res = cont1.getElementsByTagName("img").length + cont2.getElementsByTagName("img").length;
                let cont_res = document.getElementById("outerwrapper");

                if (res==cont_res.getElementsByTagName("figure").length) {
                    console.log("SUMA CORRECTA");
                    mostrarVentana("¿CUANTAS MANZANAS HAY?","suma");
                }
            } else {
                let cont1 = document.getElementById("imop1"), cont2 = document.getElementById("imop2");
                res = cont1.getElementsByTagName("img").length - cont2.getElementsByTagName("img").length;
                let cont_res = document.getElementById("outerwrapper");

                if (res==cont_res.getElementsByTagName("figure").length) {
                    console.log("RESTA CORRECTA");
                    mostrarVentana("¿CUANTAS MANZANAS HAY?","resta");
                }
            }
        },
    })
});

    function comprobarResta() {

        if (document.getElementsByClassName("signo")[0].innerText=="-") {
            let num1 = document.getElementById("imagenes1").getElementsByTagName("img").length;
            let num2 = document.getElementById("imagenes2").getElementsByTagName("img").length;

            if (num1<=num2) {
            	let cont = num2-num1,
            	output = "<img src='assets/apple.png' class='imagen'>";

            	if (cont==0)
            		document.getElementById("imagenes1").getElementsByTagName("figure")[0].innerHTML += output;
            	else {
            		for (let i=0;i<cont;i++)
            			output += "<img src='assets/apple.png' class='imagen'>";

            		document.getElementById("imagenes1").getElementsByTagName("figure")[0].innerHTML += output;
            	}
            }
        }
    }

    function generarNumeros() {
        let ran1 = Math.floor((Math.random()*5)+1),
        ran2 = Math.floor((Math.random()*5)+1);

        return [ran1, ran2];
    }

    function colocarNumeros() {
        let numeros = generarNumeros(),
        output1 = "<figure id='imop1'>", output2 = "<figure id='imop2'>"; 

        for(let i=0;i<numeros[0];i++) {
            output1 += "<img src='assets/apple.png' class='imagen'>";
        }

        for(let i=0;i<numeros[1];i++) {
            output2 += "<img src='assets/apple.png' class='imagen'>";
        }
        
        output1 += "</figure>";
        output2 += "</figure>"
        document.getElementById("imagenes1").innerHTML = output1;
        document.getElementById("imagenes2").innerHTML = output2;

        comprobarResta();
    }

function cargarVideo() {
    sessionStorage.setItem("flagVideo","si");
}

function cargarResultados() {
    if (sessionStorage.getItem("aciertosSuma")==null) {
        sessionStorage.setItem("aciertosSuma", "0");
        sessionStorage.removeItem("aciertosSuma");
    }

    if (sessionStorage.getItem("aciertosResta")==null) {
        sessionStorage.setItem("aciertosResta", "0");
        sessionStorage.removeItem("aciertosResta");
    }

    if (sessionStorage.getItem("fallosSuma")==null) {
        sessionStorage.setItem("fallosSuma", "0");
        sessionStorage.removeItem("fallosSuma");
    }

    if (sessionStorage.getItem("fallosResta")==null) {
        sessionStorage.setItem("fallosResta", "0");
        sessionStorage.removeItem("fallosResta");
    }

    if (sessionStorage.getItem("intentosSuma")==null) {
        sessionStorage.setItem("intentosSuma", "0");
        sessionStorage.removeItem("intentosSuma");
    }

    if (sessionStorage.getItem("intentosResta")==null) {
        sessionStorage.setItem("intentosResta", "0");
        sessionStorage.removeItem("intentosResta");
    }
}

function activarVideo() {
    if (sessionStorage.getItem("flagVideo")=="si") {
        document.getElementById("myModal").style.display = "block";
    }
}

//MENSAJES MODALES
function mostrarVentana(texto_mostrar, emisor) {
    document.getElementsByTagName("video")[0].style.display = "none";
    document.getElementById("aprender").style.display = "none";
    var cuerpo = document.getElementsByTagName("BODY")[0];
    var ventana = document.getElementById('myModal');
    var ventana1 = document.getElementById('miVentana');
    var texto = document.getElementById('textoModal');
    var botones = document.getElementById("botones");
    botones.style.display = "block";
    cuerpo.style.overflow = 'hidden';
    texto.innerHTML = texto_mostrar;
    texto.style.display = "block";
    ventana1.style.left = ((document.body.clientWidth-350) / 2) +  'em';
    ventana.style.display = 'block';

    if(emisor == 'cuenta') {
    	var botonModal1 = document.getElementById('botonModal1');
    	botonModal1.style.display = "";
    	botonModal1.innerHTML = "ACEPTAR";
    	document.getElementById("miVentana").focus();

    	if (texto_mostrar == "¡CORRECTO!") {
    		var audio = new Audio('assets/Audios/Correcto.wav'); audio.play();
    	} else{
    		var audio = new Audio('assets/Audios/Vuelve-int.wav'); audio.play();
    	}

    	botonModal1.onclick = function() {
    		ventana.style.display = "none";
    	}
    }

    if(emisor == 'suma') {            
        var botonModal1 = document.getElementById('botonModal1');
        var botonModal2 = document.getElementById('botonModal2');
        var botonModal3 = document.getElementById('botonModal3');
        botonModal1.style.display = "";
        botonModal2.style.display = "";
        botonModal3.style.display = "";
        let num = Math.floor((Math.random()*3)+1);
        console.log(num);

        switch (num) {
            case 1:
                botonModal1.innerText = res;
                break;
            case 2:
                botonModal2.innerText = res;
                break;
            case 3:
                botonModal3.innerText = res;
                break;
        }

        for (let i=0;i<3;i++) {
            switch (i) {
                case 0:
                    if (botonModal1.innerText=="") {
                        let aleatorio = Math.floor((Math.random()*(res-1))+1);

                        botonModal1.innerText = aleatorio;
                    }
                    break;
                case 1:
                    if (botonModal2.innerText=="") {
                        let aleatorio = Math.floor((Math.random()*10)+(res+1));

                        botonModal2.innerText = aleatorio;
                    }
                    break;
                case 2:
                    if (botonModal3.innerText == "") {
                        let aleatorio = 0;
                        let bt1 = parseInt(botonModal1.innerText, 10);

                        if (bt1==res)
                            aleatorio = Math.floor((Math.random()*(res-1))+1);                           
                        else
                            aleatorio = Math.floor((Math.random()*10)+(res+1));

                        botonModal3.innerText = aleatorio;
                    }
                    break;
            }
        }

        document.getElementById("miVentana").focus();
        botonModal1.onclick = function() {
            if (botonModal1.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                var audio = new Audio('assets/Audios/Correcto.wav'); audio.play();
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";

                if (sessionStorage.getItem("aciertosSuma")==null)
                    sessionStorage.setItem("aciertosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("aciertosSuma");
                    oks++;
                    sessionStorage.setItem("aciertosSuma", oks);
                }

                if (sessionStorage.getItem("intentosSuma")==null)
                    sessionStorage.setItem("intentosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("intentosSuma");
                    oks++;
                    sessionStorage.setItem("intentosSuma", oks);
                }

                pulsar.onclick = function() {
                    location.reload();
                }
            } else {
                texto.innerHTML = "VUELVE A INTENTARLO";
                var audio = new Audio('assets/Audios/Vuelve-int.wav'); audio.play();

                if (sessionStorage.getItem("fallosSuma")==null)
                    sessionStorage.setItem("fallosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("fallosSuma");
                    oks++;
                    sessionStorage.setItem("fallosSuma", oks);
                }

                if (sessionStorage.getItem("intentosSuma")==null)
                    sessionStorage.setItem("intentosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("intentosSuma");
                    oks++;
                    sessionStorage.setItem("intentosSuma", oks);
                }
            }
        }

        botonModal2.onclick = function() {
            if (botonModal2.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                var audio = new Audio('assets/Audios/Correcto.wav'); audio.play();
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";

                if (sessionStorage.getItem("aciertosSuma")==null)
                    sessionStorage.setItem("aciertosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("aciertosSuma");
                    oks++;
                    sessionStorage.setItem("aciertosSuma", oks);
                }

                if (sessionStorage.getItem("intentosSuma")==null)
                    sessionStorage.setItem("intentosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("intentosSuma");
                    oks++;
                    sessionStorage.setItem("intentosSuma", oks);
                }

                pulsar.onclick = function() {
                    location.reload();
                }
            } else {
                texto.innerHTML = "VUELVE A INTENTARLO";
                var audio = new Audio('assets/Audios/Vuelve-int.wav'); audio.play();

                if (sessionStorage.getItem("fallosSuma")==null)
                    sessionStorage.setItem("fallosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("fallosSuma");
                    oks++;
                    sessionStorage.setItem("fallosSuma", oks);
                }

                if (sessionStorage.getItem("intentosSuma")==null)
                    sessionStorage.setItem("intentosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("intentosSuma");
                    oks++;
                    sessionStorage.setItem("intentosSuma", oks);
                }
            }
        }

        botonModal3.onclick = function() {
            if (botonModal3.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                var audio = new Audio('assets/Audios/Correcto.wav'); audio.play();
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";

                if (sessionStorage.getItem("aciertosSuma")==null)
                    sessionStorage.setItem("aciertosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("aciertosSuma");
                    oks++;
                    sessionStorage.setItem("aciertosSuma", oks);
                }

                if (sessionStorage.getItem("intentosSuma")==null)
                    sessionStorage.setItem("intentosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("intentosSuma");
                    oks++;
                    sessionStorage.setItem("intentosSuma", oks);
                }

                pulsar.onclick = function() {
                    location.reload();
                }
            } else {
                texto.innerHTML = "VUELVE A INTENTARLO";
                var audio = new Audio('assets/Audios/Vuelve-int.wav'); audio.play();

                if (sessionStorage.getItem("fallosSuma")==null)
                    sessionStorage.setItem("fallosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("fallosSuma");
                    oks++;
                    sessionStorage.setItem("fallosSuma", oks);
                }

                if (sessionStorage.getItem("intentosSuma")==null)
                    sessionStorage.setItem("intentosSuma", 1);
                else {
                    let oks = sessionStorage.getItem("intentosSuma");
                    oks++;
                    sessionStorage.setItem("intentosSuma", oks);
                }
            }
        }
    }

    if (emisor == 'resta') {     
        var botonModal1 = document.getElementById('botonModal1');
        var botonModal2 = document.getElementById('botonModal2');
        var botonModal3 = document.getElementById('botonModal3');

        let num = Math.floor((Math.random()*3)+1);
        console.log(num);

        switch (num) {
            case 1:
                botonModal1.innerText = res;
                break;
            case 2:
                botonModal2.innerText = res;
                break;
            case 3:
                botonModal3.innerText = res;
                break;
        }

        for (let i=0;i<3;i++) {
            switch (i) {
                case 0:
                    if (botonModal1.innerText=="") {
                        let aleatorio = 0;

                        if (res!=1)
                            aleatorio = Math.floor((Math.random()*(res-1))+1);
                        else
                            aleatorio = Math.floor((Math.random()*10)+(res+1));

                        botonModal1.innerText = aleatorio;
                    }
                    break;
                case 1:
                    if (botonModal2.innerText=="") {
                        let aleatorio = Math.floor((Math.random()*10)+(res+1));

                        botonModal2.innerText = aleatorio;
                    }
                    break;
                case 2:
                    if (botonModal3.innerText=="") {
                        let aleatorio = 0;
                        let bt1 = parseInt(botonModal1.innerText, 10);

                        if (bt1==res) {
                            if (res!=1)
                                aleatorio = Math.floor((Math.random()*(res-1))+1);
                            else
                                aleatorio = Math.floor((Math.random()*10)+(res+1));
                        } else
                            aleatorio = Math.floor((Math.random()*10)+(res+1));

                        botonModal3.innerText = aleatorio;
                    }
                    break;
            }
        }

        document.getElementById("miVentana").focus();
        botonModal1.onclick = function () {
            if (botonModal1.innerText == res) {
                texto.innerHTML = "¡CORRECTO!";
                var audio = new Audio('assets/Audios/Correcto.wav'); audio.play();
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";

                if (sessionStorage.getItem("aciertosResta")==null)
                    sessionStorage.setItem("aciertosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("aciertosResta"), 10);
                    oks++;
                    sessionStorage.setItem("aciertosResta", oks);
                }

                if (sessionStorage.getItem("intentosResta")==null)
                    sessionStorage.setItem("intentosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("intentosResta"), 10);
                    oks++;
                    sessionStorage.setItem("intentosResta", oks);
                }

                pulsar.onclick = function () {
                    location.reload();
                }
            } else {
                texto.innerHTML = "VUELVE A INTENTARLO";
                var audio = new Audio('assets/Audios/Vuelve-int.wav'); audio.play();

                if (sessionStorage.getItem("fallosResta")==null)
                    sessionStorage.setItem("fallosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("fallosResta"), 10);
                    oks++;
                    sessionStorage.setItem("fallosResta", oks);
                }

                if (sessionStorage.getItem("intentosResta")==null)
                    sessionStorage.setItem("intentosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("intentosResta"), 10);
                    oks++;
                    sessionStorage.setItem("intentosResta", oks);
                }
            }
        }

        botonModal2.onclick = function () {
            if (botonModal2.innerText == res) {
                texto.innerHTML = "¡CORRECTO!";
                var audio = new Audio('assets/Audios/Correcto.wav'); audio.play();
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";

                if (sessionStorage.getItem("aciertosResta")==null)
                    sessionStorage.setItem("aciertosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("aciertosResta"), 10);
                    oks++;
                    sessionStorage.setItem("aciertosResta", oks);
                }

                if (sessionStorage.getItem("intentosResta")==null)
                    sessionStorage.setItem("intentosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("intentosResta"), 10);
                    oks++;
                    sessionStorage.setItem("intentosResta", oks);
                }

                pulsar.onclick = function () {
                    location.reload();
                }
            } else {
                texto.innerHTML = "VUELVE A INTENTARLO";
                var audio = new Audio('assets/Audios/Vuelve-int.wav'); audio.play();

                if (sessionStorage.getItem("fallosResta")==null)
                    sessionStorage.setItem("fallosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("fallosResta"), 10);
                    oks++;
                    sessionStorage.setItem("fallosResta", oks);
                }

                if (sessionStorage.getItem("intentosResta")==null)
                    sessionStorage.setItem("intentosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("intentosResta"), 10);
                    oks++;
                    sessionStorage.setItem("intentosResta", oks);
                }
            }
        }

        botonModal3.onclick = function () {
            if (botonModal3.innerText == res) {
                texto.innerHTML = "¡CORRECTO!";
                var audio = new Audio('assets/Audios/Correcto.wav'); audio.play();
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";

                if (sessionStorage.getItem("aciertosResta")==null)
                    sessionStorage.setItem("aciertosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("aciertosResta"), 10);
                    oks++;
                    sessionStorage.setItem("aciertosResta", oks);
                }

                if (sessionStorage.getItem("intentosResta")==null)
                    sessionStorage.setItem("intentosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("intentosResta"), 10);
                    oks++;
                    sessionStorage.setItem("intentosResta", oks);
                }

                pulsar.onclick = function () {
                    location.reload();
                }
            } else {
                texto.innerHTML = "VUELVE A INTENTARLO";
                var audio = new Audio('assets/Audios/Vuelve-int.wav'); audio.play();

                if (sessionStorage.getItem("fallosResta")==null)
                    sessionStorage.setItem("fallosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("fallosResta"), 10);
                    oks++;
                    sessionStorage.setItem("fallosResta", oks);
                }

                if (sessionStorage.getItem("intentosResta")==null)
                    sessionStorage.setItem("intentosResta", "1");
                else {
                    let oks = parseInt(sessionStorage.getItem("intentosResta"), 10);
                    oks++;
                    sessionStorage.setItem("intentosResta", oks);
                }
            }
        }
    }
}

function cerrarModal() {
    sessionStorage.setItem("flagVideo","no");
    document.getElementById("myModal").style.display = "none";
}

function instruccionesSumaResta() {
    let cont1 = document.getElementById("imop1"), cont2 = document.getElementById("imop2");
    let numero1 = cont1.getElementsByTagName("img").length, numero2 = cont2.getElementsByTagName("img").length;
        
    if (document.getElementsByClassName("signo")[0].innerText=="+") {
        var audio = new Audio('assets/Audios/Suma.wav');
        let n1 = numero1.toString(); let n2 = numero2.toString();
        var audio2 = new Audio('assets/Audios/'+n1+'.wav'); audio2.autoplay = false;
        var audio3 = new Audio('assets/Audios/Mas.wav'); audio3.autoplay = false;
        var audio4 = new Audio('assets/Audios/'+n2+'.wav'); audio4.autoplay = false;
        audio.onended = function(){audio2.play();};
        audio2.onended = function(){audio3.play();};
        audio3.onended = function(){audio4.play();};
        audio.play();
    } else {
        var audio = new Audio('assets/Audios/Resta.wav');
        let n1 = numero1.toString(); let n2 = numero2.toString();
        var audio2 = new Audio('assets/Audios/'+n1+'.wav'); audio2.autoplay = false;
        var audio3 = new Audio('assets/Audios/Menos.wav'); audio3.autoplay = false;
        var audio4 = new Audio('assets/Audios/'+n2+'.wav'); audio4.autoplay = false;
        audio.onended = function(){audio2.play();};
        audio2.onended = function(){audio3.play();};
        audio3.onended = function(){audio4.play();};
        audio.play();
    }
}