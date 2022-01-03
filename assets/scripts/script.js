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

createCardsFromEmojis(emojis);
function createCardsFromEmojis(emojis) {
  let cards = [];

  for (let emoji of emojis) {
    cards.push(createPairFromEmoji(emoji));
  }

  return cards.flatmap(pair => pair);
}

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
