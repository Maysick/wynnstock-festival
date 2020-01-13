var m = require("mithril")

module.exports = {
    view: function() {
        // $('body').removeClass('bg-dark');
        // $('body').addClass('bg');
        return <main role="main" class="container" >

        <div class="text-center text-white shadow">
            <img class = "center-block logo img-fluid" src="img/logo.png"></img>
          <h1>Rock on!</h1>
          <p class="lead">What started off as a peaceful week-long festival of music, food, and love quickly turned awry as E.T.C. arrived, 
          determined to turn Wynnstock into a battle of the bands. Fight to retrieve his all-powerful Doomslayer and put a stop to the madness with the power of music. </p>
          <div class="d-flex justify-content-center flex-wrap emblems">
            <div class="block mx-3">
              <img src="img/harmonize_emblem.png"></img>
              <h4>Harmonize</h4>
              <p>New mechanic</p>
            </div>
            <div class="block mx-3">
              <img src="img/composers_emblem.png"></img>
              <h4>Composers</h4>
              <p>Legendary minions</p>
            </div>
            <div class="block mx-3">
              <img src="img/songs_emblem.png"></img>
              <h4>Songs</h4>
              <p>Legendary spells</p>
            </div>
            <div class="block mx-3">
              <img src="img/instruments_emblem.png"></img>
              <h4>Instruments</h4>
              <p>New weapons</p>
            </div>
          </div>
          <hr class="my-5" style="border-top: 1px solid white;"/>
          <div class="d-flex justify-content-center flex-wrap emblems">
            <div><img class="card-item card-item-small common" src="img/cards/Air Guitar.png"></img></div>
            <div><img class="card-item card-item-small rare" src="img/cards/Red Carpet Escort.png"></img></div>
            <div><img class="card-item card-item-small legendary" src="img/cards/Metalface Dilla.png"></img></div>
            <div><img class="card-item card-item-small common" src="img/cards/Groovy Goblin.png"></img></div>
            <div><img class="card-item card-item-small legendary" style="width:210px !important;" src="img/cards/Desperation Row.png"></img></div>
          </div>
          <p class="lead my-3 mx-5">The once peaceful Elwynn Forest has become a battleground. Here, you'll find talented musicians, hardcore fans, and angered natives. Each class is a master of their own musical genre. But who will come out on top?</p>
          <hr class="my-5" style="border-top: 1px solid white;"/>
          <div class="container">
            <div class="row mx-5">
              <div class="col">
                <img class="card-item common card-float-right" src="img/cards/Sustain.png"></img>
              </div>
              <div class="col text-left my-auto">
                <h2>Harmonize</h2>
                <p>Wynnstock Festival was meant to be a celebration of music, bringing all of Azeroth together in harmony. When you have played the required cards in a turn, <strong>Harmonize</strong> cards cost 0 Mana that turn.</p>
              </div>
            </div>
          </div>
          <div class="my-4"></div>
          <div class="container">
            <div class="row mx-5">
              <div class="col text-right my-auto">
                <h2>Composers</h2>
                <p>Only one lucky band will win E.T.C's Doomslayer, so each band prepares intensely for their shows. When you complete the stated conditions, <strong>Composers</strong> become ready for stage and gain a special ability.</p>
              </div>
              <div class="col">
                <img class="card-item legendary card-float-left" src="img/cards/Metalface Dilla Ready.png"></img>
              </div>
            </div>
          </div>
          <div class="my-5"></div>
          {m("button.btn btn-primary btn-xl", {
            onclick: function() {
              m.route.set("/cards");
              window.scrollTo(0,0); 
            }
          }, "View All Cards")}
        </div>
  
      </main>
      
    }

}