function quantityUpdate(product, price, isIncrese) {
    const quantityField = document.getElementById(product + '-input-field');

    if (isIncrese) {
        quantityField.value = parseInt(quantityField.value) + 1;
    }
    else if (quantityField.value > 0) {
        quantityField.value = parseInt(quantityField.value) - 1;
    }
    // product quantity total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = quantityField.value * price;
    console.log(product, quantityField.value);

    // total calculation 
    calculateTotal();
}
function calculateTotal() {
    const phoneTotalAmount = getProductTotal('phone');
    const caseTotalAmount = getProductTotal('case');
    const subTotal = document.getElementById('sub-total');
    const taxAmount = document.getElementById('tax-amout');
    const totalPrice = document.getElementById('total-price');
    subTotal.innerText = phoneTotalAmount + caseTotalAmount;
    taxAmount.innerText = parseFloat(subTotal.innerText) / 10;
    totalPrice.innerText = parseFloat(subTotal.innerText) + parseFloat(taxAmount.innerText);
}

// get amount of phone and case  
function getProductTotal(product) {
    const productTotal = document.getElementById(product + '-total').innerText;
    const productTotalAmount = parseFloat(productTotal);
    return productTotalAmount;
}

// Plus event 
document.getElementById('case-plus-btn').addEventListener('click', function () {
    quantityUpdate('case', 59, true);
})
// Minus Event 
document.getElementById('case-minus-btn').addEventListener('click', function () {
    quantityUpdate('case', 59, false);
})
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    quantityUpdate('phone', 1219, true);
})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    quantityUpdate('phone', 1219, false);
})