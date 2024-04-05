# Netflix Clone
Questo progetto è un clone di Netflix che mira a replicare l'interfaccia utente della popolare piattaforma di streaming. È realizzato utilizzando HTML, Bootstrap, javascript e un tocco di CSS personalizzato
(con l'obiettivo personale di restare sotto il 5% del totale del codice, in modo da affidarmi quasi totalmente a bootstrap per lo stile della pagina).

## Tecnologie Utilizzate
- HTML
- Bootstrap 5
- JS e CSS personalizzati

## Installazione e Avvio
Per eseguire questo progetto in locale, segui questi passaggi:
1. Clona il repository: `git clone https://github.com/Luca-Gerace/EPICODE-M3W4D1.git`
2. Apri `index.html` nel tuo browser web.

## Obiettivi
- Riprodurre il mockup della pagina di Netflix il più fedelmente possibile 
`https://github.com/Luca-Gerace/EPICODE-M3W4D1/blob/main/assets/mockup-netflix-home.png` 
- Utilizzare bootstrap per il sistema di griglie e per i componenti
- Design responsive, ottimizzato per tutti i dispositivi.

## Extra
- Creazione dinamica dei contenuti presenti nei caroselli partendo dall'array `shows`
- Vengono mescolati gli oggetti dell'array `shows` per restituire contenuti differenti nei vari caroselli
- Le card con film/serie tv vengono create ciclando l'array `shows`
- A seconda del tipo di dispositivo che naviga la pagina vengono inserite X `cards` all'interno di `carousel-item > carousel-row`
- Mostrare la freccia di scorrimento indietro del carosello solo al click sulla freccia di scorrimento avanti
- Funzione per il Lazy loading dei caroselli.

---

Sentiti libero di personalizzare e migliorare questo progetto secondo le tue preferenze e requisiti. Buon coding! 🎬🍿