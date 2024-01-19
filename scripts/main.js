'use strict'

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

const preview = document.getElementById('preview')

hsl.forEach((obj) => {
    const { input, span } = obj
    input.addEventListener('input', () => {
        span.textContent = input.value
        preview.style.backgroundColor = `hsl(${hsl[0].input.value}, ${hsl[1].input.value}%, ${hsl[2].input.value}%)`
    })
})
