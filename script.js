// body design

const container = document.querySelector(".container");
const section = document.querySelector
(".section");
const slide = document.getElementById("slide");

let clickSlide = true;

slide.onclick = () => {
  if (clickSlide) {
    slide.innerHTML = "ওজন হিসাব"
    container.style.display = "none";
    section.style.display = "flex"
    clickSlide = false;
    section.classList.add("slide1");
  } else {
    slide.innerHTML = "শতকরা লাভ"
    container.style.display = "flex";
    section.style.display = "none"
    clickSlide = true;
    container.classList.add("slide2");
  }
}

// weight price start

const weight = document.getElementById("weight");
const price = document.getElementById("price");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

weight.onkeyup = () => {
  result.value = (price.value * weight.value) / 1000
}
price.onkeyup = () => {
  result.value = (price.value * weight.value) / 1000
}
result.onkeyup = () => {
  weight.value = (result.value * 1000) / price.value
}

clear.onclick = () => {
  result.value = '';
  price.value = '';
  weight.value = '';
}

// weight price end
// profit start

const percent = document.getElementById("percentage");
const netPrice = document.getElementById("net-price");
const profitResult = document.getElementById("profit-result");
const clrAll = document.getElementById("clrBtn");

percent.onkeyup = () => {
  profitResult.value = ((percent.value * netPrice.value) / 100) + parseFloat(netPrice.value);
}
netPrice.onkeyup = () => {
  profitResult.value = (percent.value * netPrice.value) / 100;
}
profitResult.onkeyup = () => {
  percent.value = (100 * profitResult.value) / netPrice.value
}
clrAll.onclick = () => {
  percent.value = ''
  netPrice.value = ''
  profitResult.value = ''
}

// profit end