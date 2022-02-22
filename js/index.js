$(document).ready(function(){

//Llamo a la bienvenida con la funcion welcome del archivo welcome.js 
welcome();

//creo array para luego guardar y obtener info de LocalStorage
let history = [];


//Declaro URL de la APi
const URLGET = "http://data.fixer.io/api/latest?access_key=7b38333dd9228f6e401654a1d6ddc479"

//Obtengo los datos para completar crear los option de cada select y asignarle su valor para convertir en los input 
$.get(URLGET, function (json) {

    const data = json;
  
    renderCurrencies(data.rates);

    // Tomo todos los input y select de HTML
    $(".currency-form").on("input", updateValue);
           
});

//Creo los option
function renderCurrencies(rates) {
    // Contenedor para generar el HTML
    let htmlContent = "";

    // Tomo el objeto rates, lo itero y completo con las keys los select
    for (const key in rates) {
        htmlContent += `<option value="${rates[key]}">${key}</option>`
    }

    $("select").html(htmlContent);
}

//Funcion conversora
function updateValue(e) {

    // Hago la operacion para calcular de una moneda otra con el valor de los rates
    const convert = (i, j) => {
        
        const inputs = $("input");
        const selects = $("select");
        const result = inputs[i].value * selects[i].value / selects[j].value;
        inputs[j].value = result.toFixed(2);
        ////Guardo en localstorage la conversion
        history.push(new Historial ($("#input1").val(), $("#input2").val()))
        localStorage.setItem("Historial", JSON.stringify(history)) 

    }

    const target = $(e.target);
    // Depende cual es el que cambio, selecciona uno u otro
    if (target.hasClass("first")) convert(0, 1);
    else convert(1, 0);



}




//Boton de flechas para invertir los select
let arrowsBtn = document.getElementsByClassName("arrows")[0];

arrowsBtn.onclick = () =>{
    let selectTemp = select1.value;
    select1.value = select2.value;
    select2.value = selectTemp;
}


//////Pido la info de LocalStorage y la guardo en un array
const storedHistory = JSON.parse(localStorage.getItem('Historial'));


//Muestro y oculto el teclado
//Cuando se abre el teclado se vacian los input
$('#keyboardBtn').click(mostrarTeclado);

//Creo boton Borrar Historial y lo oculto
$('.container').append(`<button class="pillButton" id="deleteHistory">Borrar hisotrial</button>`)
$('#deleteHistory').hide()
//AGREGO FUNCIONALIDAD BORRAR HISTORIAL
$('#deleteHistory').click(function(){
    localStorage.clear();
  });
  

//Muestro y oculto tabla historial
$('#historyBtn').click(mostrarHistorial);


//Creo Historial
create_History()


function create_History() {

    var historyContainer = $(".history-container");
    var ul = document.createElement("ul");

    for( const item of storedHistory){

        var li = document.createElement("li");  
        liText = document.createTextNode(`${item.input1}  ↔ ${item.input2}`)
        li.append(liText);
        ul.appendChild(li)
    }

            
    historyContainer.append(ul);
}


});



