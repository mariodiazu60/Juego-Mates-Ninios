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

        return false;
    }

function cargarVideo() {
    sessionStorage.setItem("flagVideo","si");
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
                        let aleatorio = Math.floor((Math.random()*10)+1);

                        if (aleatorio==res)
                            aleatorio = aleatorio++;

                        botonModal1.innerText = aleatorio;
                    }
                    break;
                case 1:
                    if (botonModal2.innerText=="") {
                        let aleatorio = Math.floor((Math.random()*10)+1);

                        if (aleatorio==res)
                            aleatorio = aleatorio++;

                        botonModal2.innerText = aleatorio;
                    }
                    break;
                case 2:
                    if (botonModal3.innerText=="") {
                        let aleatorio = Math.floor((Math.random()*10)+1);

                        if (aleatorio==res)
                            aleatorio = aleatorio++;

                        botonModal3.innerText = aleatorio;
                    }
                    break;
            }
        }

        document.getElementById("miVentana").focus();
        botonModal1.onclick = function() {
            if (botonModal1.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";
                pulsar.onclick = function() {
                    location.reload();
                }
            } else
                texto.innerHTML = "VUELVE A INTENTARLO";
        }

        botonModal2.onclick = function() {
            if (botonModal2.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";
                pulsar.onclick = function() {
                    location.reload();
                }
            } else
                texto.innerHTML = "VUELVE A INTENTARLO";
        }

        botonModal3.onclick = function() {
            if (botonModal3.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = "block"; pulsar.innerText = "SIGUIENTE";
                pulsar.onclick = function() {
                    location.reload();
                }
            } else
                texto.innerHTML = "VUELVE A INTENTARLO";
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
                        let aleatorio = Math.floor((Math.random()*10)+1);

                        if (aleatorio==res)
                            aleatorio = aleatorio++;

                        botonModal1.innerText = aleatorio;
                    }
                    break;
                case 1:
                    if (botonModal2.innerText=="") {
                        let aleatorio = Math.floor((Math.random()*10)+1);

                        if (aleatorio==res)
                            aleatorio = aleatorio++;

                        botonModal2.innerText = aleatorio;
                    }
                    break;
                case 2:
                    if (botonModal3.innerText=="") {
                        let aleatorio = Math.floor((Math.random()*10)+1);

                        if (aleatorio==res)
                            aleatorio = aleatorio++;

                        botonModal3.innerText = aleatorio;
                    }
                    break;
            }
        }

        document.getElementById("miVentana").focus();
        botonModal1.onclick = function() {
            if (botonModal1.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = ""; pulsar.innerText = "SIGUIENTE";
                pulsar.onclick = function() {
                    location.reload();
                }
            } else
                texto.innerHTML = "VUELVE A INTENTARLO";
        }

        botonModal2.onclick = function() {
            if (botonModal2.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = ""; pulsar.innerText = "SIGUIENTE";
                pulsar.onclick = function() {
                    location.reload();
                }
            } else
                texto.innerHTML = "VUELVE A INTENTARLO";
        }

        botonModal3.onclick = function() {
            if (botonModal3.innerText==res) {
                texto.innerHTML = "¡CORRECTO!";
                document.getElementById("botones").style.display = "none";
                let pulsar = document.getElementById("pulsar");
                pulsar.style.display = ""; pulsar.innerText = "SIGUIENTE";
                pulsar.onclick = function() {
                    location.reload();
                }
            } else
                texto.innerHTML = "VUELVE A INTENTARLO";
        }
    }
}

function cerrarModal() {
    sessionStorage.setItem("flagVideo","no");
    document.getElementById("myModal").style.display = "none"; 
}