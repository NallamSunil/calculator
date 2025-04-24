const result = document.getElementById('result');

function appendToDisplay(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = '';
}

function deleteLastChar() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace × with * for multiplication
        let expression = result.value.replace(/×/g, '*');
        
        // Handle percentage
        expression = expression.replace(/%/g, '/100');
        
        // Evaluate the expression
        const answer = eval(expression);
        
        // Check if the result is a valid number
        if (isFinite(answer)) {
            // Format the result to avoid long decimal numbers
            result.value = Number(answer.toFixed(8)).toString();
        } else {
            result.value = 'Error';
        }
    } catch (error) {
        result.value = 'Error';
    }
} 