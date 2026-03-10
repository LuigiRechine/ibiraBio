const form = document.getElementById("speciesForm")

form.addEventListener("submit", async function(e){

e.preventDefault()

const species = {

nome: document.getElementById("nome").value,
nomeCientifico: document.getElementById("nomeCientifico").value,
tipo: document.getElementById("tipo").value,
porte: document.getElementById("porte").value,
imageUrl: document.getElementById("imagem").value

}

await fetch("https://projeto-biodiversidade-production.up.railway.app/species",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(species)

})

alert("Espécie cadastrada!")

form.reset()

})