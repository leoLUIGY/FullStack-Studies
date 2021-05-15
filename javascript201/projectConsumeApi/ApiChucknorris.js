const div = document.querySelector('div')
// https://onepiececover.com/api/chapters

for (let i = 0; i< 20; i++){
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data=>{
        div.innerHTML += `<div id="card">
                            <h1>${data.created_at}</h1>
                            <h2>${data.value}</h2>
                            <img src=${data.icon_url} >
                            </div>`
        });
       
    }
