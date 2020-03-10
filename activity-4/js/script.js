//Welcome

var user = "Jaime",
    salutation = 'Hi, ',
    greeting = salutation + user + "! Here's what you need to know about salt lamps.",
    greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Product Price

var price = 30,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById("price"),
    studentPriceEl = document.getElementById("student-price");

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);