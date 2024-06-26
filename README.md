# Netflix Clone
Questo progetto è un clone di Netflix che mira a replicare l'interfaccia utente della popolare piattaforma di streaming. È realizzato utilizzando HTML, Bootstrap, JavaScript e un tocco di CSS personalizzato
(con l'obiettivo personale di restare intorno al 5% del totale del codice, in modo da affidarmi quasi totalmente a Bootstrap per lo stile della pagina).

## Tecnologie Utilizzate 💻
- HTML
- Bootstrap 5 🎨
- JS e CSS personalizzati

## Installazione e Avvio 🚀
Per eseguire questo progetto in locale, segui questi passaggi:
1. Clona il repository: `git clone https://github.com/Luca-Gerace/EPICODE-M3W4D1.git`
2. Apri `index.html` nel tuo browser web 🌐
3. Per una **corretta visualizzazione della pagina su diversi dispositivi** occorre necessariamente **ricaricare la pagina** dopo la selezione del dispositivo dal web inspector in modo da far **rigirare il codice javascript** ⚙️

## Obiettivi 🎯
- Riprodurre il seguente mockup della pagina di Netflix il più fedelmente possibile
    👉 [Mockup Netflix Home](https://github.com/Luca-Gerace/EPICODE-M3W4D1/blob/main/assets/mockup-netflix-home.png) 👈
- Utilizzare Bootstrap per il sistema di griglie e per i componenti 📐
- Design responsive, ottimizzato per tutti i dispositivi 📱💻

## Extra ✨
- Creazione dinamica delle `cards` presenti nei caroselli partendo dall'array `shows` 🏗️
- Mescolare gli oggetti dell'array `shows` per restituire contenuti differenti nei vari caroselli 🎲
- Inserire un numero variabile di `cards` all'interno di `carousel-item > carousel-row` a seconda del dispositivo in uso 🃏
- Mostrare la freccia di scorrimento indietro del carosello solo al click sulla freccia di scorrimento avanti 🔙
- Creazione della funzione di Lazy loading dei caroselli utilizzando un event listener sullo scroll 🔄