var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"



var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arrayName, elementName){
 var arrayName = new Array();
 var arrayName =[...arrayName, elementName]
}

function destructivelyAddElementToBeginningOfArray(arrayName, elementName)
 {
   var arrayName = new Array();
  arrayName.unshift(elementName);
  return arrayName;
 }