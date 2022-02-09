//Set initial count
let count = 0;

//Select the span(value)
const value = document.getElementById("value");

//Select the buttons
const btns = document.querySelectorAll(".btn");

//Performing the foreach loop to get all the buttons as a node list
btns.forEach(function(buttons){
    buttons.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            //value.style.color = "red";
        }
        else if(styles.contains("reset")){
            count = 0;
            //value.style.color = "#222";
        }
        else{
            count++;
            //value.style.color = "green";
        }
        // Color changing styles
        if(count < 0){
            value.style.color = "red";
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});


