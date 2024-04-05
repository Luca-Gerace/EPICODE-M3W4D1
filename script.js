/* ---------------- NETFLIX CLONE SHOWS API - ARRAY SHOWS ---------------- */
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
]


/* ------------- FUNZIONE PER MESCOLARE ELEMENTI DI UN ARRAY ------------- */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


/* -------------------- CREAZIONE CONTENUTI CAROSELLI -------------------- */

// Inizializzo la variabile che definisce il numero massimo di card per singolo carousel item
let maxCardsPerItem;

// Imposto un numero massimo di card in base al dispositivo (basato sulle mediaquery di bootstrap)
if (window.innerWidth <= 576) {
    // mobile
    maxCardsPerItem = 2;
} else if (window.innerWidth <= 768) {
    // tablet
    maxCardsPerItem = 5;
} else {
    // desktop
    maxCardsPerItem = 7;
}

// Puntatore ai caroselli presenti in pagina
const carousels = document.querySelectorAll(".carousel-inner");

// Card controllers - html statico (costruito fuori dall ciclo per non appesantire il codice)
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
        <i class="bi bi-chevron-down"></i>
        </button>                             
    </div>
`

// Ciclo sui tutti i caroselli presenti in pagina
carousels.forEach(carousel => {

    // Parte la funzione che mescola l'array shows
    shuffleArray(shows);

    // Creo un carousel item
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item", "active");

    // Creo un carousel row
    let carouselRow = document.createElement("div");
    carouselRow.classList.add("row", "flex-nowrap");

    // Aggiungo il carousel row al carousel item
    carouselItem.appendChild(carouselRow);

    // Inizializzo il contatore del numero di card prima di ciclare l'array shows
    let cardCount = 0;

    // Ciclo l'array shows per creare i contenuti delle card da inserire dentro i caroselli
    for (let i = 0; i < shows.length; i++) {

        // Check sul numero di card - se raggiunge il limite di card esegue il blocco 
        if (cardCount >= maxCardsPerItem) {

            // Aggiungo il carousel item (con il massimo delle card) al carousel
            carousel.appendChild(carouselItem);

            // Creo un nuovo carousel item vuoto per la prossima iterazione
            carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");

            // Creo un nuovo carousel row vuoto per la prossima iterazione
            carouselRow = document.createElement("div");
            carouselRow.classList.add("row", "flex-nowrap");
            carouselItem.appendChild(carouselRow);

            // Resetto il contatore di card per la prossima iterazione
            cardCount = 0;
        }

        // Creo la card
        let card = document.createElement("div");

        // Aggiungo le classi bootstrap alla card
        card.classList.add("card", "position-relative", "z-1", "bg-transparent", "border-0", "px-0", "px-sm-1", "col-6", "col-md-3", "col-lg-2");
    
        // Aggiungo i contenuti alla card
        card.innerHTML = `
            <img loading="lazy" src="${shows[i].immagine}" alt="${shows[i].titolo}" />
            <div class="card-inner-content d-none position-absolute rounded-2">
                <img class="rounded-top img-fluid" loading="lazy" src="${shows[i].immagine}" alt="${shows[i].titolo}" />
                ${cardControllers}
                <div class="text-white p-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <h4 class="show-title fw-bold m-0">${shows[i].titolo}</h4>
                        <span class="show-detail fst-italic">${shows[i].anno}</span>
                    </div>
                    <div class="show-detail">
                        <p class="m-0 py-2">${shows[i].trama}</p>
                        <span class="text-capitalize fw-bold">${shows[i].genere}</span>
                    </div>
                </div>
            </div>
        `;
    
        // Includo la card nel carousel row
        carouselRow.appendChild(card);

        // Incremento il contatore di card
        cardCount++;
    }

    // Aggiungo il carousel item al carousel
    carousel.appendChild(carouselItem);
});


/* -------------- MOSTRA FRECCIA SX DOPO CLICK SU FRECCIA DX ------------- */

// Punto tutte le frecce a dx
const rightArrows = document.getElementsByClassName("carousel-control-next");

// Ciclo su tutte le freccie a dx 
for (let i = 0; i < rightArrows.length; i++) {
    rightArrows[i].addEventListener('click', function(){
        // Punto la freccia a sx
        const prevArrow = rightArrows[i].previousElementSibling;
        // Rimuovo classe bootstrap display none
        prevArrow.classList.remove('d-none');
    })
}


/* -------------- FUNZIONE LAZY LOAD CAROSELLI ------------- */
function carouselLazyLoading() {

    // Puntatore ai caroselli con opacity 0
    const hiddenCarousels = document.querySelectorAll(".carousel-inner.opacity-0");

    // Posizione dello scroll
    const scrollPosition = window.scrollY;

    // Ciclo su tutti i caroselli
    hiddenCarousels.forEach((carousel, i) => {

        // Prendo la posizione sulla pagina del singolo carosello
        const rect = carousel.getBoundingClientRect();

        // Calcolo posizione elemento - altezza viewport
        const elementPosition = rect.top - window.innerHeight;

        /* 
        Se lo scroll raggiunge la posizione di trigger
        e l'animazione sul singolo carousel non è stata ancora fatta 
        eseguo il codice del blocco
        */
        if (scrollPosition >= elementPosition && carousel.classList.contains("opacity-0")) {

            setTimeout(function() {
                // rimuovo classe bootstrap per opacity
                carousel.classList.remove("opacity-0");
                // aggiungo classe per animazione fadeIn
                carousel.classList.add("fade-in");
            }, 250); // Imposto un timeout per rendere l'animazione visibile

            setTimeout(function() {
                carousel.classList.remove("fade-in");

                // Controllo se tutte le animazioni sono state completate
                if (i === hiddenCarousels.length) {
                    // Rimuovo l'event listener dello scroll
                    window.removeEventListener('scroll', carouselLazyLoading);
                }
            }, 1000);
        }
    });
}

// Event listener sullo scroll parte la funzione
window.addEventListener('scroll', carouselLazyLoading);