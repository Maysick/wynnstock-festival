var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return [<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <span class="navbar-brand d-flex flex-fill mr-0"></span>
                    <div class="navbar-collapse collapse" id="navbar">
                        <ul class="navbar-nav justify-content-center d-flex flex-fill">
                            <li class="nav-item">
                                {m(m.route.Link, {href: "/", class:"nav-link"}, "Home")}
                            </li>
                            <li class="nav-item">
                                {m(m.route.Link, {href: "/cards", class:"nav-link"}, "Cards")}
                            </li>
                            <li class="nav-item">
                                {m(m.route.Link, {href: "/classes", class:"nav-link"}, "Classes")}
                            </li>
                            <li class="nav-item">
                                {m(m.route.Link, {href: "/about", class:"nav-link"}, "About")}
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex flex-fill"> </div>
                </nav>,
                <div class="container-full">
                    {vnode.children}
                </div>]
    }
}