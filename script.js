// ================================================
// JavaScript Fundamentals Assignment
// Panaversity Learning Platform – Cohort 2025
// Submitted: November 2025
// ================================================

// PART 1: Variables, Conditionals & Logic
function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age) || age < 0) {
    result.textContent = "Please enter a valid age!";
    result.style.color = "red";
  } else if (age < 13) {
    result.textContent = "You're a kid! Keep learning!";
    result.style.color = "blue";
  } else if (age < 18) {
    result.textContent = "You're a teenager! Enjoy your youth!";
    result.style.color = "purple";
  } else if (age < 60) {
    result.textContent = "Welcome, adult! Time to code!";
    result.style.color = "green";
  } else {
    result.textContent = "Golden years! Wisdom + JavaScript = Power!";
    result.style.color = "gold";
  }
}

// PART 2: Custom Reusable Functions
function greetUser() {
  const name = prompt("What is your name?") || "Friend";
  const greeting = `Asalaam Alaikum, ${name}! Welcome to JavaScript Mastery!`;
  document.getElementById("functionResult").textContent = greeting;
  document.getElementById("functionResult").style.color = "#4f46e5";
}

function calculateTax(amount = 1000) {
  const taxRate = 0.16; // Kenya VAT
  const tax = amount * taxRate;
  const total = amount + tax;
  document.getElementById("functionResult").innerHTML = `
    Amount: KES ${amount}<br>
    Tax (16%): KES ${tax.toFixed(2)}<br>
    <strong>Total: KES ${total.toFixed(2)}</strong>
  `;
}

// PART 3: Loops – Power of Repetition
function countdown() {
  const output = document.getElementById("loopOutput");
  output.innerHTML = "";
  for (let i = 10; i >= 0; i--) {
    setTimeout(() => {
      output.innerHTML += `<h3>${i === 0 ? "BOOM! Launch!" : i}</h3>`;
    }, (10 - i) * 500);
  }
}

function generateTable() {
  const output = document.getElementById("loopOutput");
  output.innerHTML = "<h3>Multiplication Table of 5</h3><ul>";
  let i = 1;
  while (i <= 12) {
    output.innerHTML += `<li>5 × ${i} = ${5 * i}</li>`;
    i++;
  }
  output.innerHTML += "</ul>";
}

// PART 4: DOM Manipulation Mastery
let clickCount = 0;

// 1. Toggle Dark Mode
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  document.getElementById("toggleBtn").textContent = isDark ? "Light Mode" : "Dark Mode";
});

// 2. Add New List Item
document.getElementById("addBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1} (Added Dynamically)`;
  list.appendChild(newItem);
});

// 3. Remove Last Item + Click Counter
document.getElementById("removeBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
  clickCount++;
  document.getElementById("clickCounter").textContent = `Clicks: ${clickCount}`;
});

console.log("JavaScript Fundamentals Assignment Loaded Successfully!");
