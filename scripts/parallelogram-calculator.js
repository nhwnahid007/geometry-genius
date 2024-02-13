function calculateParallelogramArea() {
  //base input
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBaseInput.value;
  const base = parseFloat(parallelogramBaseText);

  //height input
  const parallelogramHeightInput = document.getElementById("parallelogram-height");
  const parallelogramHeightText=parallelogramHeightInput.value;
  height=parseFloat(parallelogramHeightText);

  //calculation

  const area= base * height;

  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText=area;


 
}
