"use strict";

// Car Rental Form Submission
document.getElementById("rentalForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var date = document.getElementById("rentalDate").value;
  var services = document.getElementById("services").value;
  var duration = document.getElementById("duration").value;
  alert("Car rental booked! Date: ".concat(date, ", Service: ").concat(services, ", Duration: ").concat(duration, " days."));
}); // Payment Form Logic

document.getElementById("paymentForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var method = document.getElementById("paymentMethod").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var cardExpiry = document.getElementById("cardExpiry").value;
  var cardCVV = document.getElementById("cardCVV").value;

  if (method === "creditCard") {
    alert("Payment made using Credit Card. Card Number: ".concat(cardNumber, ", Expiry: ").concat(cardExpiry, ", CVV: ").concat(cardCVV));
  } else {
    alert("Payment made using ".concat(method, ". Thank you!"));
  }
}); // Display Dynamic Payment Details

document.getElementById("paymentMethod").addEventListener("change", function () {
  var method = document.getElementById("paymentMethod").value;
  var paymentDetails = document.getElementById("paymentDetails");

  if (method === "creditCard") {
    paymentDetails.innerHTML = "\n            <div class=\"creditCardInfo\">\n                <label>Card Number:</label>\n                <input type=\"text\" id=\"cardNumber\" placeholder=\"XXXX-XXXX-XXXX-XXXX\" required>\n                <label>Card Expiry Date:</label>\n                <input type=\"text\" id=\"cardExpiry\" placeholder=\"MM/YY\" required>\n                <label>CVV:</label>\n                <input type=\"text\" id=\"cardCVV\" placeholder=\"XXX\" required>\n            </div>\n        ";
  } else {
    paymentDetails.innerHTML = "";
  }
}); // Review Form Submission

document.getElementById("reviewForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var rating = document.getElementById("rating").value;
  var review = document.getElementById("review").value;
  var reviewList = document.getElementById("reviewList");
  var newReview = document.createElement("div");
  newReview.innerHTML = "<strong>Rating: ".concat(rating, " stars</strong><p>").concat(review, "</p>");
  reviewList.appendChild(newReview);
  alert("Thank you for your review!");
});
//# sourceMappingURL=car_rental_script.dev.js.map
