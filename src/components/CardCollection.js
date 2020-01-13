var m = require("mithril")
var constants = require("../constants")

var CardResults = require("../components/CardResults")

var CardCollection = {
    default: true,
    view: function() {
        return <div class="container-fluid d-flex flex-column">
            {constants.categories.map(elem => m(CardResults, {cards: constants.sortedCards[elem], name: elem}))}
            
        </div>
    }
}

module.exports = CardCollection;