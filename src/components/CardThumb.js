var m = require("mithril")
var util = require("../util");

var CardItem = (function (){

    function view(vnode) {
        var filename = util.getFilePath(vnode.attrs.id);
        var card = util.getCard(vnode.attrs.id);
        var rarity = card.hasOwnProperty("rarity") ? card.rarity : "common";

        return m('img.card-item-thumb img-fluid' + rarity.toLowerCase() + '[data-toggle=modal][data-target=#cardModal][src=' + filename + ']', {
            style: vnode.attrs.style,
            onclick: function() {
                m.route.set("/cards/" + vnode.attrs.id)
            }
        })
    }

    return {view: view}
})

module.exports = CardItem;