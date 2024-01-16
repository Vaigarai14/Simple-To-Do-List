const inputel = document.getElementById('inputel');
const addbtn = document.getElementById('addbtn');
const ul = document.getElementById('ul')

console.log(addbtn);

function createelement() {
    if (inputel.value.length > 3) {
        let li = document.createElement('li')
        let litxt = document.createTextNode(inputel.value)
        li.appendChild(litxt)
        ul.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        data()
    }
    else {
        alert("⚠ Enter any value and Enter more than three character")
        data()
    }
    inputel.value = ''
}

inputel.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        createelement()
    }
})

addbtn.addEventListener('click', createelement)

ul.addEventListener('click', (e) => {
    if (e.target.localName === 'li') {
        e.target.classList.toggle('checked')
    }
    else if (e.target.localName === 'span') {
        e.target.parentElement.remove();
    }
}, false);

function data() {
    localStorage.setItem('data', ul.innerHTML)
}

function showtask() {
    ul.innerHTML = localStorage.getItem('data');
}

showtask()