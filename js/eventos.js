$(document).ready(function(){

    //MouseOver y MosueOut
   var caja = $("#caja");
/* 
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    });*/

    function cambiaRojo(){
        $(this).css("background","red");
    }

    function cambiaVerde(){
        $(this).css("background","green");
    }

    //Hover
    caja.hover(cambiaRojo,cambiaVerde); //cambiaRojo es mouseover y cambiaVerde es mouseout

    //Click, Doble Click
     caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","pink")
                .css("color","yellow");
    });

    //Focus y blur
    var nombre =  $("#nombre");
    var datos = $("#datos");
    
    nombre.focus(function(){
        $(this).css("border","5px solid green");
    });

    nombre.blur(function(){
        $(this).css("border","5px solid gray");
        
        datos.text($(this).val()).show(); //En text se mete el valor obtenido del input, con show se muestra la información en el elemento datos
    });

    //Mousdown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    //Mousemove
    $(document).mousemove(function(event){
        var sigueme = $("#sigueme");
        $('body').css('cursor','none');
        sigueme.css("left",event.clientX)
                .css("top",event.clientY);
    });
    
});