console.log("js sta funzionando");

//copio l'array di oggetti delle caselle in modo chè posso ciclarle
const source = [
    {
        "type": "image",
        "icon": "images/icons/ico-neve.png",
        "url": "images/gremlins.gif"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-albero.png",
        "url": "images/friends.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-fiocco.png",
        "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
    },
    {
        "type": "image",
        "icon": "images/icons/ico-stella.png",
        "url": "images/homealone.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-omino.png",
        "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-stella.png",
        "url": "images/griffin.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-pupazzo.png",
        "text": "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-caramella.png",
        "text": "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-calza.png",
        "url": "images/skeleton.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-pupazzo.png",
        "text": "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-fiocco.png",
        "text": "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643."
    },
    {
        "type": "text",
        "icon": "images/icons/ico-fiocco.png",
        "text": "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi."
    },
    {
        "type": "text",
        "icon": "images/icons/ico-calza.png",
        "text": "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-stella.png",
        "url": "images/nightmare.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-stella.png",
        "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-calza.png",
        "url": "images/grinch.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-caramella.png",
        "text": "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-omino.png",
        "text": "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-caramella.png",
        "text": "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-calza.png",
        "text": "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-caramella.png",
        "url": "images/poltrona.gif"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-caramella.png",
        "url": "images/spongebob.gif"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-neve.png",
        "url": "images/elf.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-neve.png",
        "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
    },
    {
        "type": "image",
        "icon": "images/icons/ico-caramella.png",
        "url": "images/dance.gif"
    }
];
console.log(source);

//genero i numeri in modo crescente per definire i giorni delle caselle
let dayNumber = [];
for (let i = 0; i < 25; i++) {
    console.log(i+1);
    dayNumber.push(i+1)
}
console.log(dayNumber);

// Seleziona il contenitore che ospiterà le caselle
const container = document.getElementById('boxes-container');

function generateBoxes(numberOfBoxes) {
    for (let i = 1; i <= numberOfBoxes; i++) {
        // Crea un nuovo div per ogni casella
        const box = document.createElement('div');
        box.classList.add('single-box'); // Aggiungi la classe "single-box"
        box.id = `box-${i}`; // Imposta un id univoco per ogni casella

        // Seleziona un'icona casuale dall'array source
        const randomIcon = source[Math.floor(Math.random() * source.length)];
        // Crea un'immagine e la aggiunge
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon');
        const img = document.createElement('img');
        img.src = randomIcon.icon;  // Usa il nome del file con l'estensione .png direttamente
        img.alt = `Icona giorno ${i}`;
        iconDiv.appendChild(img);
        // Crea un div per il numero del giorno
        const dayNumber = document.createElement('div');
        dayNumber.classList.add('day-number');
        const span = document.createElement('span');
        span.textContent = i; // Imposta il numero del giorno
        dayNumber.appendChild(span);
        // Aggiunge l'icona e il numero del giorno al box
        box.appendChild(iconDiv);
        // Aggiunge il numero del giorno al box
        box.appendChild(dayNumber);
        // Aggiunge il box creato al contenitore
        container.appendChild(box);
    }
}
//funzione che richiama il numero di box da generare
generateBoxes(25);