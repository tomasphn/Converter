/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputValue = document.getElementById("input")
const lengthConv = document.getElementById("length-conv")
const volumeConv = document.getElementById("volume-conv")
const massConv = document.getElementById("mass-conv")
const calcBtn = document.getElementById("calc")

function renderConversion(input) {
    let feet = input * 3.281
    let meters = input / 3.281
    lengthConv.innerHTML = `<p>${input} meters = ${feet.toFixed(3)} feet | ${input} feet = ${meters.toFixed(3)} meters</p>`

    let liters = input * 0.264
    let gallons = input / 0.264
    volumeConv.innerHTML = `<p>${input} liters = ${gallons.toFixed(3)} gallons | ${input} gallons = ${liters.toFixed(3)} liters</p>`

    let kilogram = input * 2.204
    let pound = input / 2.204
    massConv.innerHTML = `<p>${input} kilos = ${pound.toFixed(3)} pounds | ${input} pounds = ${kilogram.toFixed(3)} kilos</p>`
}

renderConversion(20)

calcBtn.addEventListener("click", function() {
    if (inputValue.value) {
        renderConversion(inputValue.value)
    } else {
        renderConversion(20)
    }
        
})