
function processPayment() {
    const selectedOption = document.querySelector('input[name="paymentOption"]:checked').value;
    switch (selectedOption) {
        case 'cardPayment':
            // Perform credit/debit card payment processing
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;
            if (cardNumber && expiryDate && cvv) {
                alert("Payment processed successfully using debit/credit card!");
            } else {
                alert("Please fill in all the card details.");
            }
            break;
        case 'upiPayment':
            // Perform UPI payment processing
            alert("Payment processed successfully using UPI!");
            break;
        default:
            alert("Please select a payment option.");
    }
}

function showUPIOptions() {
    const upiOptions = document.getElementById("upiOptions");
    const upiPayment = document.getElementById("upiPayment");
    if (upiPayment.checked) {
        upiOptions.classList.add("show");
    } else {
        upiOptions.classList.remove("show");
    }
}

function closePayment() {
    // Redirect to the homepage or perform any other desired action
    window.location.href = "index.html";
}