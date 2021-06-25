$(document).ready(function(){

    //Load
    //$("#datos").load("https://reqres.in/");

    //Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element,index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
        });
    });

    $("#formulario").submit(function(e){
        e.preventDefault();
        
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
/*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
*/
        $.ajax({
            type: 'POST',
            //dataType: 'json', //No es necesario
            //contentType: 'aplcation/json', //No es necesario
            url: $(this).attr("action"), //Url a la que haremos la petición ajax
            data: usuario, //Datos u objetos que voy a enviar
            beforeSend: function(){ //Antes de que se envíe que haga una acción
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un error");
            },
            timeout: 2000 //Tiempo máximo en el que debe de ejecutarse
        });
        return false;
    });
});