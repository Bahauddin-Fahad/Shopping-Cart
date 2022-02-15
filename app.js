function itemNumber(forInput, isIncreasing) {
  const inputField = document.getElementById(forInput);
  const inputValueText = inputField.value;
  const inputValue = parseInt(inputValueText);
  if (isIncreasing == true) {
    inputField.value = inputValue + 1;
  } else {
    inputField.value = inputValue - 1;
    if (inputField.value < 0) {
      inputField.value = 0;
    }
  }
}
function itemPrice(itemTotalPrice, perItemPrice, isIncreasing) {
  const price = document.getElementById(itemTotalPrice);
  const perPriceText = price.innerText;
  const perPrice = parseFloat(perPriceText);
  if (isIncreasing == true) {
    const totalPrice = perPrice + perItemPrice;
    price.innerText = totalPrice;
  } else {
    const totalPrice = perPrice - perItemPrice;
    if (totalPrice >= 0) {
      price.innerText = totalPrice;
    }
  }
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
// function minus(forMinusInput) {
//   const inputField = document.getElementById(forMinusInput);
//   const inputValueText = inputField.value;
//   const inputValue = parseInt(inputValueText);
//   inputField.value = inputValue - 1;
//   if (inputField.value < 0) {
//     inputField.value = 0;
//   }
// }
document.getElementById("case-plus").addEventListener("click", function () {
  itemNumber("case-input", true);
  const itemPerPrice = 59;
  itemPrice("total-case-price", itemPerPrice, true);
  //   const casePrice = document.getElementById("total-case-price");
  //   const perCasePriceText = casePrice.innerText;
  //   const perCasePrice = parseFloat(perCasePriceText);
  //   const totalCasePrice = perCasePrice + 59;
  //   casePrice.innerText = totalCasePrice;
});
document.getElementById("phone-plus").addEventListener("click", function () {
  itemNumber("phone-input", true);
  const perItemPrice = 1219;
  itemPrice("total-phone-price", perItemPrice, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  itemNumber("case-input", false);
  const itemPerPrice = 59;
  itemPrice("total-case-price", itemPerPrice, false);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  itemNumber("phone-input", false);
  const perItemPrice = 1219;
  itemPrice("total-phone-price", perItemPrice, false);
});
