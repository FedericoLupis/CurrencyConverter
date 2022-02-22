

function mostrarHistorial() { 
    
    if($('.keyboard-container').css("display", "grid")){

        $('.keyboard-container').css("display", "none")
        $('#keyboardBtn').text('mostrar teclado')


        $(".container").animate({height: '540px'})
        $('.history-container').slideToggle(500, function(){
    
            if($(this).is(":visible")){
                $('#historyBtn').text("ocultar historial")
                $('#deleteHistory').show()
            }else{
                $(".container").animate({height: '300px'})
                $('#historyBtn').text('mostrar historial')
                $('#deleteHistory').hide()
                
            }
        });
        $('.history-container').css("display", "flex")

    }



    

}