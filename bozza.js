
const search = document.querySelector('#search')
const userList = document.querySelector('#user-list')
const apiData = []

getData()
async function getData() {
  const response = await fetch('https://randomuser.me/api/?results=10')
  const {results} = await response.json()

  userList.innerHTML = ''

  // console.log(results)

  results.forEach(user => {
    const div = document.createElement('div')

    apiData.push(div)

    div.innerHTML = `
    <div class="hide">
    <img class="img-fluid rounded-circle" src="${user.picture.medium}" alt="_IMMAGINE" />
    <h4 id="name">${user.name.first} ${user.name.last}</h4>
    <p id="location">${user.location.city}, ${user.location.state}</p>
    </div>
    `
    userList.appendChild(div)

  })
}

search.addEventListener('input', (event) => {
  searchData(event.target.value)})

function searchData() {

} 