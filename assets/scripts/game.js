let game = {
  lockMode: false,
  firstCard: null,
  secondCard: null,

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

  setCard: function (id) {
    let card = this.cards.filter((card) => card.id === id)[0];

    if (card.flipped || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped = true;
      this.lockMode = true;
      return true;
    }
  },

  checkMatch: function () {
    if (!this.firstCard || !this.secondCard) {
      return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  unflipCards() {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
  },

  checkGameOver() {
    return this.cards.filter((card) => !card.flipped).length == 0;
  },

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
