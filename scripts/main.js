'use strict'

const color = document.getElementById('color')
const caption = document.getElementById('caption')
const inputs = document.getElementsByTagName('input')

const updateDOM = () => {
    const hsl = `hsl(${inputs[0].value}, ${inputs[1].value}%, ${inputs[2].value}%)`

    color.style.backgroundColor = hsl
    caption.textContent = hsl
}

for (let i = 0; i < inputs.length; i++) {
    const { id } = inputs[i]
    const savedValue = localStorage.getItem(id)

    if (savedValue !== null) inputs[i].value = savedValue

    inputs[i].addEventListener('input', () => {
        updateDOM()
        localStorage.setItem(id, inputs[i].value)
    })
}

updateDOM()
