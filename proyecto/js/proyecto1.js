//www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
async function fetchAndDisplayPlayers() {
    const url = 'https://www.balldontlie.io/api/v1/players';

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Verifica si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${data.error}`);
      }

      // Limpia el contenido actual de la lista de jugadores
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';

      // Itera sobre la lista de jugadores y crea tarjetas para cada uno
      data.data.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
          <h3>${player.first_name} ${player.last_name}</h3>
          <p>Posición: ${player.position}</p>
          <p>Equipo: ${player.team.full_name}</p>
        `;
        playerListContainer.appendChild(playerCard);
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  // Llama a la función al cargar la página
  fetchAndDisplayPlayers();
/*const url = 'https://www.balldontlie.io/api/v1/players';

fetch (url)
    .then(response => response.json())
    .then(data =>{
        const playerListContainer = document.getElementById('player-list');
        playerListContainer.innerHTML = '';
        data.data.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card');
            playerCard.innerHTML = `
              <h3>${player.first_name} ${player.last_name}</h3>
              <p>Posición: ${player.position}</p>
              <p>Equipo: ${player.team.full_name}</p>
            `;
            playerListContainer.appendChild(playerCard);
          });
        


    })
    
    
    
    
    .then(data => console.log(data))
       
    .catch(error => console.log(error))

const mostrarinfo = (data) => {
    console.log(data)
    let body=''
    for (let i=0; i<data.length; i++){
        body +=`
        <div class= "cardbox">
            <div class="card">
                <h2 id="nombreplayer">${data[i].firstname}  ${data[i].lastname}</h2>
                <p id="info"> ${data[i].position} + ${data[i].team}
                <button onclick="nasInfo">+ info</button>
            </div>        
    
        </div>
        `
    }
    document.getElementById('productos').innerHTML=body
} */
