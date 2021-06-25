$(document).ready(function(){
    var caja = $('#caja');
    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show(); 
       // cajashow(); //Mostrar
       // caja.fadeIn('slow'); //Fundir entrada
       // caja.slideDown('slow');
       caja.fadeTo('slow', 1);
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        //caja.hide();
        //caja.fadeOut('slow'); //Fundir salida
        //caja.slideUp('slow');
        caja.fadeTo('slow',0.2);
    });

    //Todo en uno
    $('#todoenuno').click(function(){
        //caja.toggle('fast'); //Hide y show juntos
        //caja.slideToggle('fast');
        caja.fadeToggle('fast', function(){
            console.log("Cartel ocultado");
        });
    })

    $('#animar').click(function(){
        caja.animate({
                    marginLeft: '500px', 
                    fontSize: '40px',
                    height: '110px'
                    }, 'slow')
            .animate({
                    borderRadius: '900px', 
                    marginTop: '80px'
                    }, 'slow')
            .animate({
                    borderRadius: '0px', 
                    marginLeft: '0px'
                    }, 'slow')
            .animate({
                    borderRadius: '100px', 
                    marginTop: '0px'
                    }, 'slow')
            .animate({
                marginLeft: '500px', 
                fontSize: '40px',
                height: '110px'
                    }, 'slow')
        ;
    });
});