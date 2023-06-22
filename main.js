fetch('berita.Json')
.then (response => response.json())
.then(data => {
    console.log(data)
    let isiHTML = '' 
    data.forEach(element => {
        isiHTML += ;`
        <li>
        <a href = "#'>${element.title}</a>
        <small>${element.date}</small>
        </li>
        `
    })
    console.log(isiHTML)
    kegiatanContainer.innerHTML = isiHTML
})