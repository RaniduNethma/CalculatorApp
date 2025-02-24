const display = document.getElementById("display")

function displayCharacter(Input){
    display.value += Input;
}

function calculate(Input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

function clearDisplay(){
    display.value = "";
}

function deleteBtn(){

}