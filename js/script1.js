async function init (){
    const response=await fetch('https://openlibrary.org/works/OL45804W/editions.json');
    

    const editions= await response.json();

    for (let i=0; i< editions.entries.length; i++){
        
        //creamos la card inicial
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        //creamos el nodo de texto con la fecha de publicacion
        const publishDate= document.createTextNode(editions.entries[i].publishDate) ;
        const cardPublishDate = document.createElement('p');
        cardPublishDate.appendChild(publishDate);
        
        //creamos el titulo del libro
        const editionsList = document.getElementById('editions-list');
        editionsList.appendChild(card);

    }

}

init();


