//We take some variables
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
{imgSrc: "./images/Pikachu.svg", name: "Pikachu"},
{imgSrc: "./images/Bulbasaur.svg", name: "Bulbasaur"},
{imgSrc: "./images/Eevee.svg", name: "Eevee"},
{imgSrc: "./images/Snorlax.svg", name: "Snorlax"},
{imgSrc: "./images/Charmander.svg", name: "Charmander"},
{imgSrc: "./images/Squirtle.svg", name: "Squirtle"},
{imgSrc: "./images/Mew.svg", name: "Mew"},
{imgSrc: "./images/Abra.svg", name: "Abra"},
{imgSrc: "./images/Pikachu.svg", name: "Pikachu"},
{imgSrc: "./images/Bulbasaur.svg", name: "Bulbasaur"},
{imgSrc: "./images/Eevee.svg", name: "Eevee"},
{imgSrc: "./images/Snorlax.svg", name: "Snorlax"},
{imgSrc: "./images/Charmander.svg", name: "Charmander"},
{imgSrc: "./images/Squirtle.svg", name: "Squirtle"},
{imgSrc: "./images/Mew.svg", name: "Mew"},
{imgSrc: "./images/Abra.svg", name: "Abra"},

];


//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    //Generate HTML
    
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //Attach cards info
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        //Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });

};
//Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    console.log(flippedCards);
    //Logic
    if(flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')
            ) {
            console.log('match');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })
        } else {
            console.log('wrong');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);

            });
            playerLives --;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart();
            }
        }
    }
};
//Restart
const restart = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cardData = document.querySelectorAll('.card');
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
    });
};

cardGenerator();