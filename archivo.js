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

            if (document.getElementById("operacion").innerText=="¡SUMA!") {
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

    if (sessionStorage.getItem("flagVideo")=="no") {
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
            var audio = new Audio('assets/Audios/Suma.wav');
            let n1 = numero1.toString(); let n2 = numero2.toString();
            var audio2 = new Audio('assets/Audios/'+n1+'.wav'); audio2.autoplay = false;
            var audio3 = new Audio('assets/Audios/Mas.wav'); audio3.autoplay = false;
            var audio4 = new Audio('assets/Audios/'+n2+'.wav'); audio4.autoplay = false;
            audio.onended = function(){audio2.play();};
            audio2.onended = function(){audio3.play();};
            audio3.onended = function(){audio4.play();};
            audio.play();
        }
    }
}