function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  console.log("base value", base);
  const height = getInputValueById("parallelogram-height");
  console.log("Height value", height);

  const area = base * height;

  console.log("Area of the parallelogram is:", area);

  setInnerTextById("parallelogram-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
