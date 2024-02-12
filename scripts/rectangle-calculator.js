function calculateRectangleArea() {
  //get width
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  console.log(width);

  //get length

  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  console.log(length);

  const area = width * length;
  console.log(area);
}
