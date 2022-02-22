function mostrarTeclado() { 

    if($('.history-container').css("display", "flex")){

        $('.history-container').css("display", "none")
        
            $('#historyBtn').text('mostrar historial')
            $('#deleteHistory').hide()

        if(input1.value != 0 || input2.value != 0){
            input1.value = "";
            input2.value = ""
        }
    
        $(".container").animate({height: '500px'})
        $('#keyboardBtn').text("ocultar teclado")
        $('.keyboard-container').slideToggle(500, function(){
            
            if($(this).is(":visible")){
                $('#keyboardBtn').text("ocultar teclado")
            }else{
                $(".container").animate({height: '300px'})
                $('#keyboardBtn').text('mostrar teclado')
            }
        });
        $('.keyboard-container').css("display", "grid")
    
    
    }
    
    
}


