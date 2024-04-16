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
clear.onclick = () => {
  result.value = '';
  price.value = '';
  weight.value = '';
}