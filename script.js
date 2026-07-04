/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//grabbing the elements from the DOM
let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
//adding event listener to the button
convertBtn.addEventListener("click", function(){
    let inputValue = inputEl.value;
    let meterToFeet = (inputValue * 3.281).toFixed(3);
    let feetToMeter = (inputValue / 3.281).toFixed(3);
    let literToGallon = (inputValue * 0.264).toFixed(3);
    let gallonToLiter = (inputValue / 0.264).toFixed(3);
    let kilogramToPound = (inputValue * 2.204).toFixed(3);
    let poundToKilogram = (inputValue / 2.204).toFixed(3);

    lengthEl.textContent = `${inputValue} meters = ${meterToFeet} feet | ${inputValue}  feet = ${feetToMeter} meters`;
    volumeEl.textContent = `${inputValue} liters = ${literToGallon} gallons | ${inputValue} gallons = ${gallonToLiter} liters`;
    massEl.textContent = `${inputValue} kilograms = ${kilogramToPound} pounds | ${inputValue} pounds = ${poundToKilogram} kilograms`;
});
