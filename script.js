const caliculatedValues = []

const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input-el')
const domValues = document.getElementsByClassName('value-inp')
const outputValues = document.getElementsByClassName('output-value')

convertBtn.addEventListener('click', () => {
  const inputValue = inputEl.value
  for (let domValue of domValues) {
    domValue.textContent = inputValue
  }

  calculateLength(inputValue)
  calculateVolume(inputValue)
  calculateMass(inputValue)
})

function calculateLength(value) {
  const metersToFeet = (value * 3.281).toFixed(3)
  const feetToMeters = (value / 3.281).toFixed(3)
  caliculatedValues.push(metersToFeet, feetToMeters)
  outputValues[0].textContent = metersToFeet
  outputValues[1].textContent = feetToMeters
}
function calculateVolume(value) {
  const litersToGallons = (value * 0.264).toFixed(3)
  const gallonsToLiters = (value / 0.264).toFixed(3)
  caliculatedValues.push(litersToGallons, gallonsToLiters)
  outputValues[2].textContent = litersToGallons
  outputValues[3].textContent = gallonsToLiters
}
function calculateMass(value) {
  const kilosToPounds = (value * 2.204).toFixed(3)
  const poundsToPounds = (value / 2.204).toFixed(3)
  caliculatedValues.push(kilosToPounds, poundsToPounds)
  outputValues[4].textContent = kilosToPounds
  outputValues[5].textContent = poundsToPounds
}
