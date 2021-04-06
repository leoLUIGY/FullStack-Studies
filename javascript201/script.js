
let name = document.getElementById("name");
let height = document.getElementById("height");
let mass = document.getElementById("mass");
let hairColor = document.getElementById("hairColor");
let gender = document.getElementById("gender");


const index = Math.ceil(Math.random() * 83);


fetch(`https://swapi.dev/api/people/${index}/`)
    .then(response => response.json())
    .then(data =>{
        name.innerHTML = data.name;
        height.innerHTML = data.height;
        mass.innerHTML = data.mass;
        hairColor.innerHTML = data.hair_color;
        gender.innerHTML = data.gender;
        console.log(data);
    })

