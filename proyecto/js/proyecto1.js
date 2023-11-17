//const url = 'https://www.balldontlie.io/api/v1/players'; => no tiene imagen de los jugadores 

/*async function fetchAndDisplayPlayers() {
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

//              otro modo

/*



const url = 'https://www.balldontlie.io/api/v1/players';

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

*/
// URL de la API de jugadores
  const apiUrl = 'https://www.balldontlie.io/api/v1/players';

  // Elemento contenedor de la grilla
  const gridContainer = document.getElementById('player-list');

  // Realizar la solicitud usando fetch
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // En este punto, 'data' contiene la información de la API en formato JSON
      const players = data.data;

      // Recorrer el array de jugadores y renderizar las tarjetas
      players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'card';

        // Puedes personalizar qué información mostrar en cada tarjeta
        card.innerHTML = `
          <h2>${player.first_name} ${player.last_name}</h2>
          <p>Posición: ${player.position}</p>
          <p>Equipo: ${player.team.full_name}</p>
          <!-- Agrega más campos según tus necesidades -->
        `;

        // Agregar la tarjeta al contenedor de la grilla
        gridContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });




