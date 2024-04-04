// Netflix fake api
let shows = [
    {
      "titolo": "Unorthodox",
      "anno": 2020,
      "genere": "drama",
      "trama": "Una giovane donna fuggita da una comunità ebraica ultra-ortodossa a Brooklyn si rifugia a Berlino, cercando libertà e indipendenza.",
      "immagine": "assets/movies/1.png"
    },
    {
      "titolo": "After Life",
      "anno": 2019,
      "genere": "comedy",
      "trama": "Dopo la morte della moglie, un giornalista cinico inizia a fare e dire esattamente ciò che vuole, spesso in modo offensivo e imprevedibile.",
      "immagine": "assets/movies/2.png"
    },
    {
      "titolo": "Vis a Vis",
      "anno": 2015,
      "genere": "drama",
      "trama": "Una giovane donna viene ingiustamente condannata e imprigionata in un carcere di massima sicurezza, dove deve imparare a sopravvivere.",
      "immagine": "assets/movies/3.png"
    },
    {
      "titolo": "The Place",
      "anno": 2020,
      "genere": "drama",
      "trama": "In un ristorante remoto nel nord Italia, un misterioso uomo offre di esaudire i desideri dei clienti, ma tutto ha un prezzo.",
      "immagine": "assets/movies/4.png"
    },
    {
      "titolo": "Summer Time",
      "anno": 2020,
      "genere": "comedy",
      "trama": "In una località balneare della Costa Azzurra, le vite di giovani innamorati, musicisti e artisti si intrecciano durante un'estate indimenticabile.",
      "immagine": "assets/movies/5.png"
    },
    {
      "titolo": "I Delitti di Valhalla",
      "anno": 2019,
      "genere": "drama",
      "trama": "Un detective deve affrontare i misteri oscuri e intricati di una comunità isolata e apparentemente idilliaca nell'Islanda rurale.",
      "immagine": "assets/movies/6.png"
    },
    {
      "titolo": "L'Altra Grace",
      "anno": 2021,
      "genere": "drama",
      "trama": "La storia di una giovane cameriera irlandese accusata ingiustamente di omicidio nella New York del 1896, basata su una storia vera.",
      "immagine": "assets/movies/7.png"
    },
    {
      "titolo": "Virgin River",
      "anno": 2019,
      "genere": "drama",
      "trama": "Una donna infermiera decide di trasferirsi in una piccola cittadina montana in California, sperando di iniziare da capo.",
      "immagine": "assets/movies/8.png"
    },
    {
      "titolo": "The English Game",
      "anno": 2020,
      "genere": "drama",
      "trama": "Una serie che esplora gli inizi del calcio moderno nel 19° secolo, seguendo le storie di giocatori e società calcistiche rivali.",
      "immagine": "assets/movies/9.png"
    },
    {
      "titolo": "Il Metodo Kominsky",
      "anno": 2018,
      "genere": "comedy",
      "trama": "Un attore in pensione e il suo agente affrontano le sfide dell'invecchiamento, delle relazioni e del lavoro a Hollywood.",
      "immagine": "assets/movies/10.png"
    },
    {
      "titolo": "Patto d'Amore",
      "anno": 2020,
      "genere": "comedy",
      "trama": "Due sconosciuti si incontrano e firmano un contratto per simulare una relazione romantica, portando a scoperte e cambiamenti inaspettati.",
      "immagine": "assets/movies/11.png"
    },
    {
      "titolo": "La Casa de las Flores",
      "anno": 2018,
      "genere": "comedy",
      "trama": "Una famiglia messicana di fioristi e produttori di fiori affronta segreti oscuri, tradimenti e scandali nella loro lussuosa casa.",
      "immagine": "assets/movies/12.png"
    },
    {
      "titolo": "Collateral Beauty",
      "anno": 2016,
      "genere": "drama",
      "trama": "Un uomo in lutto per la morte della figlia riceve visite inaspettate dall'amore, dal tempo e dalla morte, portando a una profonda riflessione sulla vita.",
      "immagine": "assets/movies/13.png"
    },
    {
      "titolo": "Self Made - La Vita di Madam C. J. Walker",
      "anno": 2020,
      "genere": "drama",
      "trama": "La vera storia di Sarah Breedlove, una delle prime donne afroamericane ad affermarsi come imprenditrice di successo nel settore dei prodotti per capelli.",
      "immagine": "assets/movies/14.png"
    },
    {
      "titolo": "Freud",
      "anno": 2020,
      "genere": "drama",
      "trama": "Una versione immaginaria e thriller della vita del giovane Sigmund Freud, mentre si trova coinvolto in una serie di omicidi misteriosi a Vienna.",
      "immagine": "assets/movies/15.png"
    },
    {
      "titolo": "Grace and Frankie",
      "anno": 2015,
      "genere": "comedy",
      "trama": "Due donne anziane, una perfettina e l'altra eccentrica, devono imparare a vivere insieme quando i loro mariti le lasciano per stare insieme.",
      "immagine": "assets/movies/16.png"
    },
    {
      "titolo": "Lasciati Andare",
      "anno": 2020,
      "genere": "comedy",
      "trama": "Un terapista scorbutico e chiuso si trova coinvolto in avventure improbabili e relazioni inaspettate dopo un incidente.",
      "immagine": "assets/movies/17.png"
    },
    {
      "titolo": "Dogman",
      "anno": 2022,
      "genere": "drama",
      "trama": "Un uomo gentile ma fragile finisce per essere coinvolto in affari criminali per proteggere la sua famiglia, portando a conseguenze tragiche.",
      "immagine": "assets/movies/18.png"
    }
];
  
// Funzione che mescola l'array shows 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Card Builder
const carousels = document.querySelectorAll(".carousel-inner .row");

// Card controllers - html statico
const cardControllers = `
    <div class="d-flex align-items-center justify-content-between pt-3 px-3">
        <div class="d-flex align-items-center">
            <button type="button" class="btn btn-outline-light btn-sm rounded-5">
                <i class="bi-play"></i>
            </button>
            <button type="button" class="btn btn-outline-light btn-sm rounded-5 mx-2">
                <i class="bi-plus"></i>
            </button>
            <button type="button" class="btn btn-outline-light btn-sm rounded-5">
                <i class="bi-hand-thumbs-up"></i>
            </button> 
        </div>
        <button type="button" class="btn btn-outline-light btn-sm rounded-5">
            <i class="bi-arrow-bar-down"></i>
        </button>                             
    </div>
`
// Ciclo sui caroselli presenti in pagina
carousels.forEach(carousel => {

    // Parte la funzione che mescola l'array shows
    shuffleArray(shows);
    
    // Ciclo sull'array shows
    for (let i = 0; i < shows.length; i++) {

        // Creo la card
        let card = document.createElement("div");
    
        // Aggiungo le classi bootstrap alla card
        card.classList.add("card", "bg-transparent", "col-6", "col-md-3", "col-lg-2", "px-lg-1", "border-0");
    
        // Aggiungo i contenuti alla card
        card.innerHTML = `
            <img src="${shows[i].immagine}" alt="${shows[i].titolo}" />
            <div class="card-inner-content d-none rounded-bottom-2">
                <img class="rounded-top-2" src="${shows[i].immagine}" alt="${shows[i].titolo}" />
                ${cardControllers}
                <div class="p-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <h4 class="fs-6 fw-bold m-0">${shows[i].titolo}</h4>
                        <span class="year fst-italic">${shows[i].anno}</span>
                    </div>
                    <p class="m-0 py-2">${shows[i].trama}</p>
                    <span class="genres text-capitalize text-small">${shows[i].genere}</span>
                </div>
            </div>
        `;
    
        // Includo la card nel carousel 
        carousel.appendChild(card);
    };  
});