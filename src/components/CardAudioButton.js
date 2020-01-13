var m = require("mithril")

var util = require("../util")

var CardAudioButton = {
    view: function (vnode) {
        var hasAudio = util.cardHasAudio(vnode.attrs.id, vnode.attrs.type);
        return m("button.btn btn-secondary btn-sm btn-audio m-1", {
                type: "button",
                style: {
                    display: hasAudio ? "inline-block" : "none",
                },
                onclick: function() {
                    if (hasAudio) {
                        var audio = new Audio(util.getAudio(vnode.attrs.id, vnode.attrs.type));
                        audio.play();
                    }
                }
            }, 
            [vnode.attrs.type, <i class="material-icons" style="font-size:18px">volume_up</i>] 
        );
    }
}

module.exports = CardAudioButton;