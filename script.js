function Add() {
    const num1 = document.getElementById('num_1').value;
    const num2 = document.getElementById('num_2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a valid number');
    } else {
        const result = parseFloat(num1) + parseFloat(num2);
        document.getElementById('result').innerHTML = result;
    }
}

function Subtract() {
    const num1 = document.getElementById('num_1').value;
    const num2 = document.getElementById('num_2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a valid number');
    } else {
        const result = parseFloat(num1) - parseFloat(num2);
        document.getElementById('result').innerHTML = result;
    }
}

function Multiply() {
    const num1 = document.getElementById('num_1').value;
    const num2 = document.getElementById('num_2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a valid number');
    }
    else {
        const result = parseFloat(num1) * parseFloat(num2);
        document.getElementById('result').innerHTML = result;
    }
}

function Divide() {
    const num1 = document.getElementById('num_1').value;
    const num2 = document.getElementById('num_2').value;

    try {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Please enter a valid number');
        }
        const result = parseFloat(num1) / parseFloat(num2);
        document.getElementById('result').innerHTML = result;
    } catch (error) {
        alert(error.message);
    }
    finally {
        console.log('Operation completed');
    }
}

function Remainder() {
    const num1 = document.getElementById('num_1').value;
    const num2 = document.getElementById('num_2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a valid number');
    } else {
        const result = parseFloat(num1) % parseFloat(num2);
        document.getElementById('result').innerHTML = result;
    }
}

function Exponention() {
    const num1 = document.getElementById('num_1').value;
    const num2 = document.getElementById('num_2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a valid number');
    } else {
        const result = Math.pow(parseFloat(num1), parseFloat(num2));
        document.getElementById('result').innerHTML = result;
    }
}

function SquareRoot() {
    const num1 = document.getElementById('num_1').value;

    if (isNaN(num1)) {
        alert('Please enter a valid number');
    } else {
        const result = Math.sqrt(parseFloat(num1));
        document.getElementById('result').innerHTML = result;
    }
}

function Factorial() {
    const num1 = document.getElementById('num_1').value;

    if (isNaN(num1)) {
        alert('Please enter a valid number');
    } else {
        let result = 1;
        for (let i = 1; i <= parseFloat(num1); i++) {
            result *= i;
        }
        document.getElementById('result').innerHTML = result;
    }
}

function Clear() {
    document.getElementById('num_1').value = '';
    document.getElementById('num_2').value = '';
    document.getElementById('result').innerHTML = '';
}