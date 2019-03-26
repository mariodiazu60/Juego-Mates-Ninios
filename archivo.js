$(document).ready(function() {
    console.log("Documento listo");
    
    function sumar(num1, num2) {
    	let res = num1 + num2;

    	return res;
    }

    function restar(num1, num2) {
    	let res = num1 - num2;

    	return res;
    }

    function generarNumeros() {
    	let ran1 = Math.floor((Math.random()*9)+1),
    	ran2 = Math.floor((Math.random()*9)+1);

    	return [ran1, ran2];
    }

    function colocarNumeros() {
    	let numeros = generarNumeros(),
        output = "<figure>";

        for(let i=0;i<numeros.length;i++) {
            output
        }
    	
        output = "</figure>";

    	return false;
    }

    $("#draggable").draggable({
        // opacity : 0.7, 
        helper: "clone",
        scope: 1,
        start: function (e, ui) {
            $(ui.helper).addClass("drag-helper");
            console.log(ui);
        }
    })
    
    $("#droppable").droppable({
        drop: function () {
            var cloned = $("#draggable").clone().css({
                "margin": "0"
            })
            $(this).css("background-color", "green");
            if ($(".outerwrapper").length == 0) {
                $(this).wrapInner("<div class = 'outerwrapper'></div>");
            }
            $(".outerwrapper").append(cloned)
            $(this).css("height", "100%");
        },
        scope: 1
    })
});