var m = require("mithril")
var util = require("./util")

var HomePage = require("./views/HomePage")
var CardList = require("./views/CardList")
var AboutPage = require("./views/AboutPage")
var ClassesPage = require("./views/ClassesPage")
var Layout = require("./views/Layout")

var CardModal = require("./components/CardModal")

m.route(document.body, "/", {
    "/": {
        render: function () {
            return m(Layout, m(HomePage))
        }
    },
    "/about/": {
        render: function() {
            return m(Layout, m(AboutPage))
        }
    },
    "/cards/": {
        render: function() {
            return [m(Layout, m(CardList)), m(CardModal)]
        }
    },
    "/classes": {
        render: function() {
            return [m(Layout, m(ClassesPage))]
        }
    },
    "/cards/:id/": {
        render: function(vnode) {
            if (!util.isValidID(vnode.attrs.id)) {
                m.route.set("/cards");
            } else {
                CardModal.card = util.getCard(vnode.attrs.id);
                $(document).ready(function () {
                    $('#cardModal').modal('show');
                });
                $("#cardModal").on('hidden.bs.modal', function(e) {m.route.set("/cards/")})
                return [m(Layout, m(CardList)), m(CardModal)]
            }
        }
    }
})