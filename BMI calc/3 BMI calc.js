document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("homeLink");
    homeLink.classList.add("active");
});


function clearInputs() {
    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';
    document.getElementById("result").innerText = "Result: ";
    document.getElementById("category").innerText = "Category: ";
}

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    height = height / 100; // Convert height from cm to meters
    let bmi = weight / (height * height);
    document.getElementById("result").innerText = "Result: " + bmi.toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = "Obesity";
    } else {
        category = "Extremely Obese";
    }

    document.getElementById("category").innerText = "Category: " + category;
}



function scrollToDiv() {
    document.querySelector("Calculator").scrollIntoView({
        behavior: "smooth"
    });
}