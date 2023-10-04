let totalPrice = 0;
let discount = 0;
let grandTotal = 0;

const couponButton = document.getElementById('coupon-button');
couponButton.disabled = true;

const makePurchaseButton = document.getElementById('purchase-button');
makePurchaseButton.disabled = true;


// Reuseable functions
function displayValue(idName, value) {
    const tag = document.getElementById(idName);
    tag.innerText = value;
}

function addSelectedItemsEntry(itemsType, itemPrice) {
    const selectedItems = document.getElementById('select-item');
    const count = selectedItems.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('font-bold');
    p.classList.add('text-xl');
    p.innerHTML = `${count + 1}. ${itemsType}`;
    selectedItems.appendChild(p);

    totalPrice += parseFloat(itemPrice);
    updateTotalPrice();
}

function updateTotalPrice() {
    displayValue('total-price', totalPrice.toFixed(2));
    if (totalPrice >= 200) {
        couponButton.disabled = false;
    }
    else {
        couponButton.disabled = true;
    }

    if (totalPrice > 0) {
        makePurchaseButton.disabled = false;
    } else {
        makePurchaseButton.disabled = true;
    }

    if (discount > 0) {
        updateDiscount();
    }
    updateGrandTotal();
}

function couponCode() {
    const couponCodeInput = document.getElementById('coupon-code-input');
    const promoCode = couponCodeInput.value;
    couponCodeInput.value = '';
    if (totalPrice >= 200 && promoCode === 'SELL200') {
        updateDiscount();
    }
    else {
        alert('Please enter a valid coupon code for 20% discount');
    }
}

function updateDiscount() {
    discount = 20 * totalPrice / 100;
    displayValue('discount', discount.toFixed(2));
}

function updateGrandTotal() {
    grandTotal = totalPrice - discount;
    displayValue('total', grandTotal.toFixed(2));
}

function resetValues() {
    totalPrice = 0;
    discount = 0;
    grandTotal = 0;
}



// Event Listener start
const goHomeButton = document.getElementById('go-home-button').addEventListener('click', function () {
    resetValues();
    displayValue('total-price', totalPrice.toFixed(2));
    displayValue('discount', discount.toFixed(2));
    displayValue('total', grandTotal.toFixed(2));
    displayValue('select-item', '');

    couponButton.disabled = true;
    makePurchaseButton.disabled = true;
});

const couponCodeApply = document.getElementById('coupon-button').addEventListener('click', function () {
    couponCode();
    updateGrandTotal();
});

const kitchenAccessories = document.getElementById('k-accessories').addEventListener('click', function () {
    addSelectedItemsEntry('K. Accessories', '39.00');
});

const cuttingBoardKitchenware = document.getElementById('cutting-board').addEventListener('click', function () {
    addSelectedItemsEntry('Cutting Board', '25.00');
});

const homeCookerKitchenware = document.getElementById('home-cooker').addEventListener('click', function () {
    addSelectedItemsEntry('Home Cooker', '49.00');
});

const sportCapSportswear = document.getElementById('sport-cap').addEventListener('click', function () {
    addSelectedItemsEntry('Sports Back Cap', '49.00');
});

const fullJerseySportswear = document.getElementById('jersey-set').addEventListener('click', function () {
    addSelectedItemsEntry('Full Jersey Set', '69.00');
});

const sportsCatesSportswear = document.getElementById('sports-cates').addEventListener('click', function () {
    addSelectedItemsEntry('Sports cates', '159.00');
});

const singleRelaxChairFurniture = document.getElementById('relax-chair').addEventListener('click', function () {
    addSelectedItemsEntry('Single Relax Chair', '185.00');
});

const childrenPlayFurniture = document.getElementById('children-play').addEventListener('click', function () {
    addSelectedItemsEntry('Children play', '299.00');
});

const flexibleSofaFurniture = document.getElementById('flexible-sofa').addEventListener('click', function () {
    addSelectedItemsEntry('Flexible Sofa', '399.00');
});