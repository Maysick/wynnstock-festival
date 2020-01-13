var m = require("mithril")
var constants = require("../constants")
var util = require("../util")

var ClassDivider = {
    view: function(vnode) {
        return <div class="strike class-divider">
                <span>
                    <h3 class="text-white">{util.capitalize(vnode.attrs.name)}</h3>
                </span>
        </div>
    }
}

module.exports = ClassDivider;