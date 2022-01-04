const FRONT = "card_front";
const BACK = "card_back";

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
  console.log(cards);
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

  for (let emoji of emojis) {
    cards.push(createPairFromEmoji(emoji));
  }

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
