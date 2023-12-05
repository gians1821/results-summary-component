import { data } from './data.js'

const elements = JSON.parse(data)

const $body = document.querySelector('body')
const $resultsContainer = document.querySelector('#results-container')
const $button = document.querySelector('button')

for (const element of elements) {
    const icon = element['icon']
    const category = element['category']
    const score = element['score']

    const $section = document.createElement('section')
    const $div = document.createElement('div')
    const $img = document.createElement('img')
    const $title = document.createElement('h2')
    const $span = document.createElement('span')
    const $p = document.createElement('p')

    $section.classList.add('test-element')
    $img.setAttribute('src', icon)
    $img.setAttribute('alt', `${category.toLowerCase()}-image`)
    $title.innerText = category
    $span.innerText = score

    $p.append($span, ' / 100')    
    $div.append($img, $title)
    $section.append($div, $p)
    $resultsContainer.appendChild($section)
}

$button.addEventListener('click', () => {
    const div = document.createElement('div')
    const button = document.createElement('button')
    const imgClose = document.createElement('img')
    const picture = document.createElement('picture')
    const imgWasa = document.createElement('img')
    const p = document.createElement('p')
    
    div.setAttribute('id', 'wasa-container')
    p.innerText = 'WASA 🤪'
    imgWasa.setAttribute('src', 'https://media.tenor.com/nVSmF0rmEOsAAAAC/whats-up-wazzup.gif')

    picture.append(imgWasa)
    button.append(imgClose)
    div.append(button, picture, p)
    $body.append(div)
})
