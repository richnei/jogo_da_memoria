const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

let emojis = [
  "abobora",
  "arvore_natal",
  "bola_tenis",
  "bomba",
  "cabana",
  "cacto",
  "diabo_roxo",
  "diabo_vermelho",
  "fantasma",
  "fogo",
  "foguete",
  "lua",
  "mundo",
  "palhaco",
  "relogio",
  "robo",
  "rosa",
  "rosquinha",
  "semaforo",
  "sol",
];

let cards = null;

starGame();

function starGame() {
  cards = createCardsFromEmojis(emojis);
  shuffleCards(cards);
  initializeCards(cards);
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");
  cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement);
  createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(face);
  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "./assets/images/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    cardElementFace.innerHTML = "&lt/&gt";
  }
  element.appendChild(cardElementFace);
}

function shuffleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cards[randomIndex], cards[currentIndex]] = [
      cards[currentIndex],
      cards[randomIndex],
    ];
  }
}

createCardsFromEmojis(emojis);
function createCardsFromEmojis(emojis) {
  let cards = [];

  emojis.forEach((emoji) => {
    cards.push(createPairFromEmoji(emoji));
  });

  return cards.flatMap((pair) => pair);

  function createPairFromEmoji(emoji) {
    return [
      {
        id: createIdWithEmoji(emoji),
        icon: emoji,
        flipped: false,
      },
      {
        id: createIdWithEmoji(emoji),
        icon: emoji,
        flipped: false,
      },
    ];
  }

  function createIdWithEmoji(emoji) {
    return emoji + parseInt(Math.random() * 1000);
  }
}

function flipCard() {
  this.classList.add("flip");
}
