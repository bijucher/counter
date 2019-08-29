
//self invoking function to help with scope
(function () {

    // got the decrement element out of the DOM and stored it 
    // in a variable
    let decrementButton = document.getElementById("decrement");
    let incrementButton = document.getElementById("increment")
    let counter = document.getElementById("counter");

    decrementButton = document.querySelector("#decrement");
    decrementButton.addEventListener("click", function () {
        // alert("that tickled")
        let newCounterValue = parseInt(counter.innerHTML) - 1;
        counter.innerHTML = newCounterValue
        if (newCounterValue <10){
            counter.style.color="black"
        }
        //get the current value of the counter

    })
    incrementButton.addEventListener("click", function () {

        //calculate the new value for the counter
        let newCounterValue = parseInt(counter.innerHTML) + 1;
        //if the counter goes above 10, change the text color to red
        counter.innerHTML = newCounterValue
        if (newCounterValue >= 10) {
            counter.style.color = "red";
        }
        //calculate the new value for the counter
        //if the counter dropsbelow 10,change the text color to black
        ;
        



    }) 

})()