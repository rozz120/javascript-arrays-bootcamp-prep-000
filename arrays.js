var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"



var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

//function addElementToBeginningOfArray(array, element){
// var array = [1];
// array.unshift(element)
// 
// 
//}

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(array, element)
 {
   var array = [];
  array.unshift(element);
  
 }
 
 
 function addElementToEndOfArray(array, element)
 {
 
 }
 
 function destructivelyAddElementToEndOfArray(array, element)
   {
     
   }