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
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function(event){
    const key = event.key;
    const display = document.getElementById("display");
    const button = document.querySelector(`button[data-key="${key}"]`);

    if(!isNaN(key) || "+-*/.".includes(key)){
        display.value += key;
    }

    if(key === "Enter"){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "error";
        }
    }

    else if(key === "Backspace" || key === "Delete"){
        display.value = display.value.slice(0, -1);
    }
    
    else if(key === "Escape"){
        display.value = "";
    }

    if(button){
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 150);
    }
});