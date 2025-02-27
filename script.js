const display = document.getElementById("display")

const displayCharacter = (Input) => display.value += Input;

function calculate(Input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

const clearDisplay = () => display.value = "";

const deleteBtn = () => display.value = display.value.slice(0, -1);

document.addEventListener("keydown", function(event){
    const key = event.key;
    const display = document.getElementById("display");
    const button = document.querySelector(`button[data-key="${key}"]`);

    if(!isNaN(key) || "+-*/.".includes(key)){
        display.value += key;
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace" || key === "Delete"){
        deleteBtn();
    }
    
    if(key === "Escape"){
        clearDisplay();
    }

    if(button){
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 150);
    }
});