var cards = require('../settings.json').cards
var utils = require('./util')

var constants = {
    cards: cards,
    rarityValues: {BASIC: 0, COMMON: 1, RARE: 2, EPIC: 3, LEGENDARY: 4},
    sortedCards: {
        druid: null,
    },
    classes: ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"],
    categories: ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "neutral"],
    resortCards: function(sort) {
        constants.sortedCards = {};
        constants.sortedCards.druid = (cards.filter(card => card.cardClass == "DRUID" && card.collectible)).sort(sort);
        constants.sortedCards.hunter = (cards.filter(card => card.cardClass == "HUNTER" && card.collectible)).sort(sort);
        constants.sortedCards.mage = (cards.filter(card => card.cardClass == "MAGE" && card.collectible)).sort(sort);
        constants.sortedCards.paladin = (cards.filter(card => card.cardClass == "PALADIN" && card.collectible)).sort(sort);
        constants.sortedCards.priest = (cards.filter(card => card.cardClass == "PRIEST" && card.collectible)).sort(sort);
        constants.sortedCards.rogue = (cards.filter(card => card.cardClass == "ROGUE" && card.collectible)).sort(sort);
        constants.sortedCards.shaman = (cards.filter(card => card.cardClass == "SHAMAN" && card.collectible)).sort(sort);
        constants.sortedCards.warlock = (cards.filter(card => card.cardClass == "WARLOCK" && card.collectible)).sort(sort);
        constants.sortedCards.warrior = (cards.filter(card => card.cardClass == "WARRIOR" && card.collectible)).sort(sort);
        constants.sortedCards.neutral = (cards.filter(card => card.cardClass == "NEUTRAL" && card.collectible)).sort(sort);
    }
}

function cardSort(a, b) {
    if (a.cost != b.cost) return a.cost - b.cost;
    if (a.rarity != b.rarity) return constants.rarityValues[a.rarity] - constants.rarityValues[b.rarity];
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
}

function cardSortRarity(a, b) {
    if (a.rarity != b.rarity) return constants.rarityValues[a.rarity] - constants.rarityValues[b.rarity];
    if (a.cost != b.cost) return a.cost - b.cost;
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;    
}

module.exports = constants;
module.exports.cardSort = cardSort;
module.exports.cardSortRarity = cardSortRarity;

module.exports.resortCards(cardSortRarity);