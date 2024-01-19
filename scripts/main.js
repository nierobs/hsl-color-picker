'use strict'

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

const storage = {
    inputValue(key) {
        return document.getElementById(key).value
    },
    get(key) {
        return localStorage.getItem(key)
    },
    set(key) {
        return localStorage.setItem(key, this.inputValue(key))
    },
}

const updateColor = (span, value) => {
        span.textContent = value
        preview.style.backgroundColor = `hsl(${hsl[0].input.value}, ${hsl[1].input.value}%, ${hsl[2].input.value}%)`
}

hsl.forEach((obj) => {
    const { input, span } = obj

    input.addEventListener('input', () => {
        updateColor(span, input.value)

        // Save color data in the browser session
        storage.set(input.id)
    })
})

// Read color data in the browser session and update DOM on page load
window.addEventListener('load', () => {
    hsl.forEach((obj) => {
        const { input, span } = obj
        const value = storage.get(input.id)

        input.value = value
        updateColor(span, value)
    })
})
