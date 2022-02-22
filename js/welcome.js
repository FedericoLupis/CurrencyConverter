const welcome = () =>{
    $('#app').hide()
    $('#title').hide()
    
    $('body').prepend(`<div class="container-welcome" id="welcome">
    
                        <h1> Bienvenido a Currency Converter </h1>
                        <p>Para comenzar a utilizar a la aplicacion haga click en el boton debajo</p>
                        <button class="pillButton" id="comenzar"> Comenzar </button>
    
                        </div>`)
    
    $('#comenzar').click(function(){
 
        $('#welcome').fadeOut(500)
        $('#app').fadeIn(1500)
        $('#title').fadeIn(1500)
    
      });
}
