// Define UI
const buttons = document.getElementsByTagName("button");
const bestPrice = document.getElementById("best-price");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const shippingCharge = document.getElementById("delivery-charge");
const couponCode = document.getElementById("promo-code");
const sumPrice = document.getElementsByClassName("total-price");

// Apply Promo Code to get 20% discount
function executeCoupon() {
    for (totalPrice of sumPrice) {
        if (totalPrice.innerText < 0) {
            totalPrice.innerText = 0;
        };
        //implement 20% discount calc
        const previousTotal = parseFloat(totalPrice.innerText);
        const discount = (previousTotal * 20) / 100;
        totalPrice.innerText = previousTotal - discount;
        couponCode.value = "";
    };
};

// Total Price Calculation
function calculateTotalPrice() {
    const total = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(shippingCharge.innerText);

    for (totalPrice of sumPrice) {
        totalPrice.innerText = total;
    };
};

// Button Clicking
for (button of buttons) {
    button.addEventListener("click", function (event) {
        const clickedButton = event.target.innerText;

        // Memory Addons
        if (clickedButton == "8GB unified memory") {
            memoryCost.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == "16GB unified memory") {
            memoryCost.innerText = 180;
            calculateTotalPrice();
        }

        // Storage Addons
        else if (clickedButton == "256GB SSD storage") {
            storageCost.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == "512GB SSD storage") {
            storageCost.innerText = 100;
            calculateTotalPrice();
        }

        else if (clickedButton == "1TB SSD storage") {
            storageCost.innerText = 180;
            calculateTotalPrice();
        }

        // Delivery Charge
        else if (clickedButton == "Friday, Aug 25 FREE Prime Delivery") {
            shippingCharge.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == "Friday, Aug 21 Delivery charge $20") {
            shippingCharge.innerText = 20;
            calculateTotalPrice();
        }

        // Promo Code "stevekaku"
        else {
            if (couponCode.value == "stevekaku") {
                executeCoupon();
            };
        };
    });
};