window.onload = (event) => {
    

    fetch('/items')
    .then(r => r.json())
    .then(r => {
        console.log(r)
        const ul = document.querySelector('ul')
        for (let i = 0; i < r.length; i++) {
            ul.appendChild(document.createTextNode(`${r[i].text}:`))				
        }
    })		
}