const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let value = this.getAttribute("data-value");
        console.log(value);

        if (value === "C") {
            display.value = ""; 
        } else if (value === "=") {
            try {
                display.value = eval(display.value); 
            } catch {
                display.value = "Error"; 
            }
        } else {
            display.value += value; 
        }
    });
});