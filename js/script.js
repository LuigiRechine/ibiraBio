const container = document.getElementById("speciesContainer")
const searchInput = document.getElementById("search")

let speciesList = [] // global, pra manter a lista original

async function loadSpecies() {
    const response = await fetch("https://projeto-biodiversidade-production.up.railway.app/species")
    speciesList = await response.json() // salva globalmente

    mostrarSpecies(speciesList)
}

function mostrarSpecies(list) {
    container.innerHTML = "" // limpa container

    list.forEach(species => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${species.imageUrl}" class="card-image" alt="foto da espécie">
            </div>
            <h3>${species.nome}</h3>
            <p><i>${species.nomeCientifico}</i></p>
            <p>Tipo: ${species.tipo}</p>
            <p>Porte: ${species.porte}</p>
        `
        container.appendChild(card)
    })
}

// filtra enquanto digita
searchInput.addEventListener("input", () => {
    const termo = searchInput.value.toLowerCase()
    const filtradas = speciesList.filter(s => 
        s.nome.toLowerCase().includes(termo) || 
        s.nomeCientifico.toLowerCase().includes(termo) ||
        s.tipo.toLowerCase().includes(termo)
    )
    mostrarSpecies(filtradas)
})

loadSpecies()

