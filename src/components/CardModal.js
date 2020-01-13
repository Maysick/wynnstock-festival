var m = require("mithril")
var util = require("../util")
var constants = require("../constants")

var CardAudioButton = require("../components/CardAudioButton")
var CardItem = require("../components/CardItem")
var CardThumb = require("../components/CardThumb")

// name
// class rarity
// effect

//  artist (embed source)

// flavor text
// [play] [attack] [death]

var CardModal = {
    card: constants.cards[0],
    view: function () {
        var hasSource = this.card.hasOwnProperty("artSource");
        var source = hasSource ? this.card.artSource : "";
        var rarity = this.card.hasOwnProperty("rarity") ? this.card.rarity : "";
        var tokens = this.card.hasOwnProperty("tokens") ? this.card.tokens : [];
        return <div class="modal fade" id="cardModal" tabindex="-1"  role="dialog">
                <div class="modal-dialog modal-dialog-centered modal-lg" style="max-width:800px" role="document">
                    <div class="fill-modal h-100 m-auto d-flex justify-content-center" style="max-width:100%; align-items: start">
                        <button type="button" class="close close-modal text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <img class="d-block card-image-modal" style="max-width:50%" src={util.getFilePath(this.card.id)}/>
                        <div class="d-flex card-text-modal flex-column align-items-start" style="max-width: 100%;">
                            <h3 class="d-inline text-white">
                                <div class="d-inline" style="text-decoration:underline;">{this.card.name}</div>
                                <small class="text-light" style="white-space: nowrap; font-size: 20px;">
                                    {' ' + util.capitalize(this.card.cardClass) + ' ' + util.capitalize(rarity)}
                                </small>
                            </h3>
                            <p class="d-inline text-white" style="font-size:20px;">
                                {m.trust(util.formatCardText(this.card.text))}
                            </p>
                            <p class="d-inline text-white">
                                <br/>
                                Artist: {hasSource ? m("a.artist-link", {href: source}, this.card.artist) : this.card.artist}
                            </p>
                            <p class="d-inline font-italic text-light">
                                <br/>
                                {this.card.flavor}
                            </p>
                            <div class="d-inline">
                                <CardAudioButton type="Play" id={this.card.id}></CardAudioButton>
                                <CardAudioButton type="Attack" id={this.card.id}></CardAudioButton>
                                <CardAudioButton type="Death" id={this.card.id}></CardAudioButton>
                            </div>
                            <p class="d-inline text-white">
                                {tokens.length > 0 ? "Tokens:" : ""}
                            </p>
                            <div class="d-flex flex-wrap justify-content-flex-start" style="max-width:100%">
                            {tokens.map(function(elem) {
                                return <div class="modal-token">{m(CardThumb, {style: "max-width:200px", id: elem, name:util.getCard(elem)})}</div>;
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

module.exports = CardModal