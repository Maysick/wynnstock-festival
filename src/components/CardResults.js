var m = require("mithril")
var constants = require("../constants")

var CardItem = require("../components/CardItem")
var ClassDivider = require('../components/ClassDivider')

var CardResults = {
    view: function(vnode) {
        return [m(ClassDivider, {name: vnode.attrs.name}), 
            <div class="d-flex justify-content-center flex-wrap card-display">
                {vnode.attrs.cards.map(function(elem) {
                    return m(CardItem, {id: elem.id, name:elem.name});
                })}
        </div>]
    }
}

module.exports = CardResults;