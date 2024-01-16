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
    }
    else {
        alert("⚠ Enter any value and Enter more than three character")
    }
    inputel.value = ''
}

addbtn.addEventListener('click', createelement)

ul.addEventListener('click', (e) => {
    if (e.target.localName === 'li') {
        e.target.classList.toggle('checked')
    }
    else if (e.target.localName === 'span') {
        e.target.parentElement.remove();
    }
});

localStorage