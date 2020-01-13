var m = require("mithril")
var cards = require("../constants").cards
var constants = require("../constants");
var util = require("../util");

var CardItem = require("../components/CardItem")

var CardCollection = require("../components/CardCollection")

module.exports = {
    view: function() {
        return <div><p class="lead text-center text-white mb-0 mt-1" style="font-style: italic">Click on cards to see flavor text & more info.</p>
        <div class="d-flex align-center mx-auto justify-content-center">
            {m("button.btn btn-primary mx-1", {
                onclick: function() {
                    constants.resortCards(constants.cardSort);
                    util.reloadCards();
                    m.redraw();
                }
            }, "Sort by Cost")}
            {m("button.btn btn-primary mx-1", {
                onclick: function() {
                    constants.resortCards(constants.cardSortRarity);
                    util.reloadCards();
                    m.redraw();
                }
            }, "Sort by Rarity")}
        </div>

        <CardCollection></CardCollection>
        <div class="d-flex align-center mx-auto justify-content-center my-5">
            {m("button.btn btn-primary", {
                onclick: function() {
                    window.scrollTo(0, 0);
                }
            }, "Back to Top")}
        </div>
        </div>
    },
    oncreate: function() {
        try{
            eval("lazyLoadInstance.update()");
        } catch (error) { }
    },

}