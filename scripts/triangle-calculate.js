/**
 * oBJECTIVE: get base, height of a triangle,calculate the area by using the provided formula and then display the area .
 * step-1: get base value of the triangle
 * step-2: added an id in the base input field 
 * step-3: usegetElementById to access the input field
 * step-4: get value from the input field 
 * step-5: convert the value to a number.. use parseFloat
 * 
 */

//!by default input er text string akare thake

function calculateTriangleArea(){
    //get base
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText);
    console.log( base);

    //get height

    const triangleHeightInput = document.getElementById("triangle-height");
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText)
    console.log(height);
    //calculate area 
    const area = 0.5*base*height;

    console.log('Area of the triangle is:', area);

    //display triangle area

    const triangleAreaSpan = document.getElementById("triangle-area");
    triangleAreaSpan.innerText=area;
}

