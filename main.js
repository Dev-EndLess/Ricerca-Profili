// https://randomuser.me/

const search = document.querySelector('#search')
const userList = document.querySelector('#user-list')
const apiData = []

getData()
async function getData() {
  const response = await fetch('https://randomuser.me/api/?results=50') //richiedo 50 user
  const data = await response.json() // attendo la risposta e la metto nella variabile data
  
  userList.innerHTML = ''
  
  data.results.forEach(user => {
    const div = document.createElement('div') // creo un div vuoto

    // Popoliamo il div vuoto con html e i dati ricevuti dall' API
    div.innerHTML = ` 
    <div class="container border border-info bg-dark mt-3 class="hide">
    <img class="container img-fluid mt-5 rounded-circle "
    src="${user.picture.large}"
    alt="${user.name.first}"
    />
    <h4 class="border border-dark m-2 mt-4 text-center text-light">
    ${user.name.first} ${user.name.last}
    </h4>
    <p class="mt-4 text-center text-info" id="location"> Location: <br>
    ${user.location.city}, ${user.location.country}
    </p>
    </div>
    `
    apiData.push(div) // metto i div con gli user in un array
    userList.appendChild(div)
  })
}

search.addEventListener('input', (event) => { // The event occurs when an element gets user input
  searchData(event.target.value)
})

function searchData(text) {
  apiData.forEach(user => {
    // se il testo inserito combacia con l'user
    if(user.innerText.toLowerCase().match(text.toLowerCase())) {
      // viene rimossa la classe hide
      user.classList.remove('hide')
    // altrimenti per gli altri user la classe hide e' attiva
    } else {
      user.classList.add('hide')
    }
  })
}


