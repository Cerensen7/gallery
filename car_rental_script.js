// Car Rental Form Submission
document
  .getElementById("rentalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const date = document.getElementById("rentalDate").value;
    const services = document.getElementById("services").value;
    const duration = document.getElementById("duration").value;

    alert(
      `Car rental booked! Date: ${date}, Service: ${services}, Duration: ${duration} days.`
    );
  });

// Payment Form Logic
document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const method = document.getElementById("paymentMethod").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const cardExpiry = document.getElementById("cardExpiry").value;
    const cardCVV = document.getElementById("cardCVV").value;

    if (method === "creditCard") {
      alert(
        `Payment made using Credit Card. Card Number: ${cardNumber}, Expiry: ${cardExpiry}, CVV: ${cardCVV}`
      );
    } else {
      alert(`Payment made using ${method}. Thank you!`);
    }
  });

// Display Dynamic Payment Details
document
  .getElementById("paymentMethod")
  .addEventListener("change", function () {
    const method = document.getElementById("paymentMethod").value;
    const paymentDetails = document.getElementById("paymentDetails");

    if (method === "creditCard") {
      paymentDetails.innerHTML = `
            <div class="creditCardInfo">
                <label>Card Number:</label>
                <input type="text" id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" required>
                <label>Card Expiry Date:</label>
                <input type="text" id="cardExpiry" placeholder="MM/YY" required>
                <label>CVV:</label>
                <input type="text" id="cardCVV" placeholder="XXX" required>
            </div>
        `;
    } else {
      paymentDetails.innerHTML = "";
    }
  });

// Review Form Submission
document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    const reviewList = document.getElementById("reviewList");
    const newReview = document.createElement("div");
    newReview.innerHTML = `<strong>Rating: ${rating} stars</strong><p>${review}</p>`;
    reviewList.appendChild(newReview);

    alert("Thank you for your review!");
  });
