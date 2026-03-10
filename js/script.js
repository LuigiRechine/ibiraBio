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

const lista = document.getElementById('speciesContainer');
const input = document.getElementById('search');

let especies = [];

// Pega tudo do backend uma vez
fetch('https://projeto-biodiversidade-production.up.railway.app/species')
  .then(res => res.json())
  .then(data => {
    especies = data;
    mostrarLista(especies);
  });

function mostrarLista(dados) {
  lista.innerHTML = '';
  dados.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name; // ou outro campo que quiser mostrar
    lista.appendChild(li);
  });
}

// Filtra localmente enquanto digita
input.addEventListener('input', () => {
  const termo = input.value.toLowerCase();
  const filtradas = especies.filter(e => e.name.toLowerCase().includes(termo));
  mostrarLista(filtradas);
});