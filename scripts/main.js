'use strict'

const saveValue = (input) => localStorage.setItem(input.id, input.value)
const getValue = (input) => localStorage.getItem(input.id)
const preview = document.getElementById('preview')

const hsl = [
    {
        input: document.getElementById('h-input'),
        span: document.getElementById('h-span')
    },
    {
        input: document.getElementById('s-input'),
        span: document.getElementById('s-span')
    },
    {
        input: document.getElementById('l-input'),
        span: document.getElementById('l-span')
    }
]

const updateDOM = ({ input, span }) => {
    span.textContent = input.value
    preview.style.backgroundColor = `hsl(${hsl[0].input.value}, ${hsl[1].input.value}%, ${hsl[2].input.value}%)`
}

hsl.forEach((elements) => {
    const { input, span } = elements;
    const savedValue = parseInt(getValue(input))

    if (savedValue >= 0) {
        input.value = savedValue
        updateDOM(elements)
    }

    input.addEventListener('input', () => {
        updateDOM(elements)
        saveValue(input)
    })
})
