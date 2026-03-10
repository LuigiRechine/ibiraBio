const container = document.getElementById("speciesContainer")

async function loadSpecies(){

    const response = await fetch("https://projeto-biodiversidade-production.up.railway.app/species")
    const speciesList = await response.json()

    container.innerHTML = ""

    speciesList.forEach(species => {

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

loadSpecies()

