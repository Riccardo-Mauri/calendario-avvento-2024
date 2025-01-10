console.log("js sta funzionando");

//copio l'array di oggetti delle caselle in modo chè posso ciclarle
const source = [
    {
        "type": "image",
        "icon": "images/icons/ico-neve.png",
        "url": "images/gifs/gremlins.gif"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-albero.png",
        "url": "images/gifs/friends.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-fiocco.png",
        "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
    },
    {
        "type": "image",
        "icon": "images/icons/ico-stella.png",
        "url": "images/gifs/homealone.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-omino.png",
        "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-stella.png",
        "url": "images/gifs/griffin.gif"
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
        "url": "images/gifs/skeleton.gif"
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
        "url": "images/gifs/nightmare.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-stella.png",
        "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-calza.png",
        "url": "images/gifs/grinch.gif"
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
        "url": "images/gifs/poltrona.gif"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-caramella.png",
        "url": "images/gifs/spongebob.gif"
    },
    {
        "type": "image",
        "icon": "images/icons/ico-neve.png",
        "url": "images/gifs/elf.gif"
    },
    {
        "type": "text",
        "icon": "images/icons/ico-neve.png",
        "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
    },
    {
        "type": "image",
        "icon": "images/icons/ico-caramella.png",
        "url": "images/gifs/dance.gif"
    }
];
console.log(source);

//genero i numeri in modo crescente per definire i giorni delle caselle
let dayNumber = [];
for (let i = 0; i < 25; i++) {
    console.log(i + 1);
    dayNumber.push(i + 1)
}
console.log(dayNumber);

// Contenitore delle caselle
const container = document.getElementById('boxes-container');

// Carica le caselle dallo storage, o inizializza un array vuoto
let boxesState = JSON.parse(localStorage.getItem('boxesState')) || [];

// Funzione per generare le caselle
function generateBoxes(numberOfBoxes) {
    // Se non ci sono caselle salvate, generale casualmente
    if (boxesState.length === 0) {
        for (let i = 1; i <= numberOfBoxes; i++) {
            const randomContent = getRandomUniqueContent(); // Genera contenuto casuale
            boxesState.push({ id: i, content: randomContent, isOpened: false }); // Salva lo stato iniziale
        }
        // Salva lo stato nel localStorage
        localStorage.setItem('boxesState', JSON.stringify(boxesState));
    }

    // Crea le caselle dal loro stato salvato
    boxesState.forEach((boxState) => {
        const box = document.createElement('div');
        box.classList.add('single-box'); // Stile di default
        box.id = `box-${boxState.id}`;

        // Se la casella è stata aperta, applica lo stile "cliccato"
        if (boxState.isOpened) {
            box.classList.remove('single-box');
            box.classList.add('clicked-box');
        }

        // Crea l'icona
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon');
        const img = document.createElement('img');
        img.src = boxState.content.icon;
        img.alt = `Icona giorno ${boxState.id}`;
        iconDiv.appendChild(img);

        // Crea il numero del giorno
        const dayNumber = document.createElement('div');
        dayNumber.classList.add('day-number');
        const span = document.createElement('span');
        span.textContent = boxState.id;
        dayNumber.appendChild(span);

        // Aggiunge l'icona e il numero al box
        box.appendChild(iconDiv);
        box.appendChild(dayNumber);

        // Aggiungo l'evento click solo se la casella non è stata aperta
        if (!boxState.isOpened) {
            box.addEventListener('click', function handleClick() {
                openModal(boxState.content);

                // Aggiorna lo stile della casella
                box.classList.remove('single-box');
                box.classList.add('clicked-box');

                // Aggiorna lo stato della casella
                boxState.isOpened = true;
                localStorage.setItem('boxesState', JSON.stringify(boxesState));

                // Rimuove l'event listener
                box.removeEventListener('click', handleClick);
            });
        }

        // Aggiungo il box al contenitore
        container.appendChild(box);
    });
}

// Funzione per aprire la modale
function openModal(content) {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modal-body');
    modalContent.innerHTML = ''; // Pulisce la modale
    if (content.type === 'image') {
        const img = document.createElement('img');
        img.src = content.url;
        img.alt = 'Immagine casuale';
        img.style.maxWidth = '100%';
        modalContent.appendChild(img);
    } else if (content.type === 'text') {
        const text = document.createElement('p');
        text.textContent = content.text;
        modalContent.appendChild(text);
    }
    modal.style.display = 'flex';
}

// Funzione per chiudere la modale
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

document.getElementById('myModal').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeModal();
    }
});

// Funzione per selezionare un contenuto unico casuale
function getRandomUniqueContent() {
    if (source.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * source.length);
    const selectedContent = source[randomIndex];
    source.splice(randomIndex, 1);
    return selectedContent;
}
function resetLocalStorage() {
    // Cancella tutti i dati salvati in localStorage
    localStorage.clear();
    console.log('LocalStorage è stato resettato.');
    
    // Ricarica la pagina
    window.location.reload();
}

// Aggiungo un pulsante per resettare
const resetButton = document.createElement('button');
resetButton.textContent = 'Resetta il Calendario';
resetButton.style.marginTop = '20px';
resetButton.style.padding = '10px 20px';
resetButton.style.fontSize = '16px';
resetButton.style.cursor = 'pointer';
resetButton.addEventListener('click', resetLocalStorage);

// Aggiungo il pulsante al body della pagina
document.body.appendChild(resetButton);


// Genera le caselle
generateBoxes(25);


