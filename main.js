const inputel = document.getElementById('inputel');
const addbtn = document.getElementById('addbtn');
const ul = document.getElementById('ul')

// //! create remove btn
function span(li) {
    let span = document.createElement('span')
    span.innerText = "×"      //\u00d7
    li.appendChild(span)
}

document.addEventListener('DOMContentLoaded', () => {
    const fetchdata = [...JSON.parse(localStorage.getItem('data'))];
    fetchdata.forEach((data) => {
        let li = document.createElement('li')
        let litxt = document.createTextNode(data.inputdata)
        li.appendChild(litxt)
        ul.appendChild(li)
        span(li)
    })

})
// & Create li element
function createelement() {
    if (inputel.value.length > 3) {
        let li = document.createElement('li')
        let litxt = document.createTextNode(inputel.value)
        li.appendChild(litxt)
        ul.appendChild(li)
        span(li)
        localStorage.setItem('data', JSON.stringify(
            [...JSON.parse(localStorage.getItem('data')
                || "[]"), { inputdata: inputel.value }
            ])
        );
    }
    else {
        alert("⚠ Enter any value and Enter more than three character")
    }

    inputel.value = ''
}

//^ Icon action


ul.addEventListener('click', (e) => {
    if (e.target.localName === 'li') {
        e.target.classList.toggle('checked')
    }
    else if (e.target.localName === 'span') {
        e.target.parentElement.remove();

        const fetchdata = [...JSON.parse(localStorage.getItem('data'))];
        fetchdata.forEach((item) => {
            var a = item.inputdata + "×"
            if (a === e.target.parentElement.innerText) {
                fetchdata.splice(fetchdata.indexOf(item), 1)
            }
        })

        localStorage.setItem('data', JSON.stringify(fetchdata))
    }
});

inputel.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        createelement();
    }
})

addbtn.addEventListener('click', (e) => {
    createelement();
})

// local storage


