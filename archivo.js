$(document).ready(function() {
    console.log("Documento listo");

    $("#draggable").draggable({
        // opacity : 0.7, 
        helper: "clone",
        //scope: 1,
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
                let res = cont1.getElementsByTagName("img").length + cont2.getElementsByTagName("img").length;
                let cont_res = document.getElementById("outerwrapper");

                if (res==cont_res.getElementsByTagName("figure").length) {
                    console.log("LISTO");
                }
            } else {
                let cont1 = document.getElementById("imop1"), cont2 = document.getElementById("imop2");
                let res = cont1.getElementsByTagName("img").length - cont2.getElementsByTagName("img").length;
                let cont_res = document.getElementsByClassName("outerwrapper");

                if (res==cont_res.getElementsByTagName("figure").length) {
                    console.log("LISTO");
                }
            }
        },
        //scope: 1
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