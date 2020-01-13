var constants = require("./constants");
var cards = constants.cards;

module.exports = {
    generateFilename: function(id) {
        var cardName = this.getCard(id).name;
        return cardName.replace(/[<>:"\\/|?*.]/g, "");
    },
    getFilePath: function (id) {
        return './img/cards/' + this.generateFilename(id) + '.png';
    },
    getAudio: function(id, type) {
        return './audio/' + this.generateFilename(id) + ' ' + type + '.mp3';
    },
    cardHasAudio: function (id, type) {
        var card = this.getCard(id);
        try {
            return card.hasOwnProperty("sounds") && card.sounds.includes(type);
        } catch(error) { 
            return false;
        }
    },
    isValidID: function(id) {
        return typeof cards.find(function (elem) {
            return elem.id == id;
        }) !== 'undefined';
    },
    getCard: function(id) {
        return cards.find(function (elem) {
            return elem.id == id;
        });
    },
    capitalize: function(string) {
        return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
    },
    formatCardText: function(string) {
        if (!string) return "";
        var ret = string;
        //remove some hearthstone formatting directives
        ret = ret.replace("\\n", "");
        ret = ret.replace("[x]", "");
        ret = ret.replace("$", "");
        ret = ret.replace("#", "");
        return ret;
    },
    reloadCards: function() {
        $(".card-item").removeProp("src");
        $(".card-item").attr("data-was-processed", false);
        eval("lazyLoadInstance.update()");
    }
}