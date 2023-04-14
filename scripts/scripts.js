/****************** YOUR NAME: Harijot Singh

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
var modelName = "XYZ";
var duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    // Get the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
    // Calculate the new total cost based on the model name and duration
    let total = 0;
    if (modelName === "XYZ") {
      total = duration * 100;
    } else if (modelName === "CPRG") {
      total = duration * 213;
    }  
    // Update the calculated-cost element's innerHTML
    costLabel.innerHTML = total.toFixed(2);
  }



/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

let modelButton = document.getElementById("model-button");

// Create a function to change the model name
function changeModel() {
    // get model label to change it later
    var model = document.getElementById("model-text");
    if (modelName === "XYZ") {
        // Change model name
        modelName = "CPRG";
        // Change the innerHTML of the model-text span element
        model.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        // Change the model name to "XYZ"
        modelName = "XYZ";
        // Change the innerHTML of the model-text span element
        model.innerHTML = "Model XYZ";
    } else{
        modelName = "XYZ";
    }
    // Recalculate the total cost
    recalculate();
}

// Add an event listener to the modelButton element to run the changeModel function when clicked
modelButton.addEventListener("click", changeModel);





/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

// Get the Change Duration pseudo-button element
let durationButton = document.getElementById("duration-button");

// Create a function to change the duration
function changeDuration() {
  // Get the duration-text span element
  let durationText = document.getElementById("duration-text");

  // Prompt the user for a new duration
  let newDuration = prompt("Enter a new duration in hours:");
  // Convert the input to a number and update the duration variable
  duration = Number(newDuration);
  // Change the innerHTML of the duration-text span element to the new duration
  durationText.innerHTML = duration + " hours";
  // Recalculate the total cost
  recalculate();
}

// Add an event listener to the durationButton element to run the changeDuration function when clicked
durationButton.addEventListener("click", changeDuration);
