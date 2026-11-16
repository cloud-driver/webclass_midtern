// Brew Calculator
// Runs when the user clicks the "Calculate" button
function calculateWater() {
    // 1. Get the values from the HTML elements
    var coffee = Number(document.getElementById("coffeeInput").value);
    var ratio = Number(document.getElementById("methodSelect").value);
    var result = document.getElementById("result");

    // 2. Check if the input is valid
    if (coffee <= 0) {
        result.innerHTML = "Please enter a number bigger than 0.";
        result.style.color = "red";
        return;
    }

    // 3. Calculate the water and the number of cups (1 cup = about 240 ml)
    var water = coffee * ratio;
    var cups = Math.round(water / 240);

    if (cups < 1) {
        cups = 1;
    }

    // 4. Show the answer on the page
    result.style.color = "#3e2723";
    result.innerHTML = "You need <strong>" + water + " g</strong> of water.<br>" +
                       "That makes about <strong>" + cups + "</strong> cup(s) of coffee.";
}

// Runs when the user clicks the "Reset" button
function resetCalculator() {
    document.getElementById("coffeeInput").value = "";
    document.getElementById("methodSelect").value = "16";
    document.getElementById("result").innerHTML = "";
}
