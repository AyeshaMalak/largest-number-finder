function findLargestNumber() {
    // Get the input from the user
    var input = document.getElementById("numbersInput").value;
    
    // Split the input string into an array of numbers
    var numbersArray = input.split(',').map(function(item) {
        return parseFloat(item.trim());
    });

    // Validate the input to ensure all are valid numbers
    for (var i = 0; i < numbersArray.length; i++) {
        if (isNaN(numbersArray[i])) {
            displayResult('Please enter valid numbers separated by commas.', 'error');
            return;
        }
    }

    // Find the largest number
    var largestNumber = Math.max(...numbersArray);

    // Display the result
    displayResult("The largest number is: " + largestNumber, 'success');
}

function displayResult(message, resultClass) {
    var resultBox = document.getElementById("result");
    resultBox.textContent = message;
    resultBox.className = 'result-box ' + resultClass;
    resultBox.style.display = "block";
}
