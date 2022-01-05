let game = {
  emojis: [
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
  ],

  cards: null,

  createCardsFromEmojis: function () {
    this.cards = [];

    this.emojis.forEach((emoji) => {
      this.cards.push(this.createPairFromEmoji(emoji));
    });

    this.cards = this.cards.flatMap((pair) => pair);
    this.shuffleCards();
    return this.cards;
  },

  createPairFromEmoji: function (emoji) {
    return [
      {
        id: this.createIdWithEmoji(emoji),
        icon: emoji,
        flipped: false,
      },
      {
        id: this.createIdWithEmoji(emoji),
        icon: emoji,
        flipped: false,
      },
    ];
  },

  createIdWithEmoji: function (emoji) {
    return emoji + parseInt(Math.random() * 1000);
  },

  shuffleCards: function (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[randomIndex], this.cards[currentIndex]] = [
        this.cards[currentIndex],
        this.cards[randomIndex],
      ];
    }
  },
};
