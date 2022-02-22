function insert(num){
    input1.value = input1.value + num

    $(".currency-form").on("input", updateValue);
}

function reset(){
    input1.value = "";
    input2.value = ""
}