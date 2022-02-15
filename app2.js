function itemNumber(product, perItemPrice, isIncreasing) {
  const inputField = document.getElementById(product + "-input");
  let inputValue = inputField.value;
  inputValue = parseInt(inputValue);
  if (isIncreasing == true) {
    inputValue = inputValue + 1;
  } else {
    inputValue = inputValue - 1;
    if (inputValue < 0) {
      inputValue = 0;
    }
  }
  inputField.value = inputValue;
  //   update total //
  const totalPrice = document.getElementById("total-" + product + "-price");
  totalPrice.innerText = inputValue * perItemPrice;
  //   calculate Total //
  calculateTotal();
}
function getInputValue(product) {
  const input = document.getElementById(product + "-input");
  const inputValue = parseFloat(input.value);
  return inputValue;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-total").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}

// Increament of product //
document.getElementById("case-plus").addEventListener("click", function () {
  const perItemPrice = 59;
  itemNumber("case", perItemPrice, true);
});
document.getElementById("phone-plus").addEventListener("click", function () {
  const perItemPrice = 1219;
  itemNumber("phone", perItemPrice, true);
});

// decrement of product //
document.getElementById("case-minus").addEventListener("click", function () {
  const perItemPrice = 59;
  itemNumber("case", perItemPrice, false);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  const perItemPrice = 1219;
  itemNumber("phone", perItemPrice, false);
});
