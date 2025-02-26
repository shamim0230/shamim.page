// Console message
console.log("Welcome to My GitHub Page!");

// Alert when clicking the button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            alert("Thanks for visiting my GitHub profile! 😊");
        });
    }
});

// Theme Toggle Button
const themeToggle = document.createElement("button");
themeToggle.innerText = "🌙 Dark Mode";
themeToggle.classList.add("theme-toggle");
document.body.appendChild(themeToggle);

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        themeToggle.innerText = "🌙 Dark Mode";
    }
});

// Dynamic Typing Text Effect
const dynamicText = document.querySelector(".dynamic-text");
const textArray = ["Python Developer", "Open Source Enthusiast", "Tech Blogger"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        dynamicText.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

setTimeout(typeEffect, 500);
