const productos =[
        {
            "tipoVehiculo": "automovil",
            "marca": "Volkswagen",
            "modelo": "Golf",
            "año": 2023,
            "tipo": "sedan 4 puertas",
            "url": "./src/golf.jpg"      
        },
        {
            "tipoVehiculo": "automovil",
            "marca": "Volkswagen",
            "modelo": "Tiguan",
            "año": 2023,
            "tipo": "sedan 5 puertas",
            "url": "./src/tiguan.jpeg"    
        },
        {
            "tipoVehiculo": "automovil",
            "marca": "Chevrolet",
            "modelo": "Cruze",
            "año": 2023,
            "tipo": "sedan 5 puertas",
            "url": "./src/cruze.jpg"    
        },
        {
            "tipoVehiculo": "automovil",
            "marca": "Ford",
            "modelo": "Ranger",
            "año": 2023,
            "tipo": "pick-up 4x4",
            "url": "./src/ranger.avif"    
        },
        {
            "tipoVehiculo": "automovil",
            "marca": "Fiat",
            "modelo": "Punto",
            "año": 2023,
            "tipo": "sedan 4 puertas",
            "url": "./src/punto.jpg"    
        },
        {
            "tipoVehiculo": "automovil",
            "marca": "Fiat",
            "modelo": "Pulse",
            "año": 2023,
            "tipo": "sedan 5 puertas",
            "url": "./src/pulse.jpg"    
        },
        {
            "tipoVehiculo": "motovehiculo",
            "marca": "Bajaj",
            "modelo": "NS 200",
            "año": 2023,
            "tipo": "motovehiculo",
            "url": "./src/bajaj.jpg"
        },
        {
            "tipoVehiculo": "motovehiculo",
            "marca": "Bajaj",
            "modelo": "Dominar 400",
            "año": 2023,
            "tipo": "motovehiculo",
            "url": "./src/dominar.jpg"    
            
        },
        {
            "tipoVehiculo": "motovehiculo",
            "marca": "Benelli",
            "modelo": "Leoncino 500cc",
            "año": 2023,
            "tipo": "motovehiculo",
            "url": "./src/leoncino.webp"    

        },
        {
            "tipoVehiculo": "motovehiculo",
            "marca": "Honda",
            "modelo": "CB190",
            "año": 2023,
            "tipo": "motovehiculo",
            "url": "./src/cb190.jpg"    
            
        }
]



const productosHTML = document.getElementById("productos")

for (const producto of productos){
    productosHTML.innerHTML += `
        <div class= "cardbox">
            <div class="card">
                <h2 id="marca">${producto.marca}</h2>
                <p id="texto_p">${producto.modelo} + ${producto.año}
                <img src=${producto.url} id="foto">
                <button onclick="nasInfo">+ info</button>
            </div>        
        
        </div>
    
    
    
    `




}