var m = require("mithril")

var ClassDivider = require("../components/ClassDivider")

module.exports = {
    view: function() {
        return <main role="main" class="container" >

        <div class="text-center text-white shadow">
          <h1 class="mt-3">Classes</h1>
          <p class="lead">Each class at Wynnstock features its own musical genre, composer, and hit song.</p>
          <ClassDivider name="Druid"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Jimi Entrix.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Jimi Entrix Ready.png"></img></div>
          </div>
          <p class="lead">The Jimi Entrix Experients is a 3-piece psychedelic outfit hailing from Elwynn itself.
          Their musical prowess and layered soundscapes are sure to impress E.T.C, but most importantly, they are here to have fun.</p>
          <ClassDivider name="Hunter"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Rob Nalyd.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Rob Nalyd Ready.png"></img></div>
          </div>
          <p class="lead">Though no one knows his origin, everyone on this side of Azeroth has heard of Rob Nalyd. His charming ballads have an unusual ability to attract critters of all kinds.
          Nalyd and a group of vagabond followers arrived by river, so be sure to see them while you can.</p>
          <ClassDivider name="Mage"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/DJ Ark4n3.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/DJ Ark4n3 Ready.png"></img></div>
          </div>
          <p class="lead">Due to their pyrotechnical prowess, Mages are behind-the-scenes at Wynnstock in charge of special effects. DJ Ark4n3's electronic DJ set and visual performance is sure to knock you off your feet.
          Seriously: her epic countdowns and bass drops are percieved to be earthquakes by many!</p>
          <ClassDivider name="Paladin"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Cantor Cyrella.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Cantor Cyrella Ready.png"></img></div>
          </div>
          <p class="lead">It's no surprise that Paladins adhere to strict classical musical conventions at Wynnstock. Goldshire locals have assembled their choir and send local legend Cyrella to lead it all.
          </p>  
          <ClassDivider name="Priest"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Freak Zappa.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Freak Zappa Ready.png"></img></div>
          </div>
          <p class="lead">Some call it music, some call it noise. Whatever it is, Freak Zappa's shows are so experimental, some say they have the power to raise the dead. By bending the properties of sound itself, Priests turn music into a force to be reckoned with.</p> 
          <ClassDivider name="Rogue"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Metalface Dilla.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Metalface Dilla Ready.png"></img></div>
          </div>
          <p class="lead">Rogues expertise in combos makes them naturally skilled rappers. They fuse rhyme and rhythm with musical samples to create a unique blend of hip hop. Metalface Dilla is their lead rapper, and he's deadset on winning over E.T.C. with his genius bars.</p> 
          <ClassDivider name="Shaman"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Nat'Khol.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Nat'Khol Ready.png"></img></div>
          </div>
          <p class="lead">Apparently, Elementals take a natural liking to jazz and funk music. Nat'Khol has mastered the genre in order to sway Elementals of all shapes and sizes, including Giants.</p> 
          <ClassDivider name="Warlock"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Bassist Balnazzar.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Bassist Balnazzar Ready.png"></img></div>
          </div>
          <p class="lead">The Burning Legion sees Wynnstock as an opportunity to wreak havoc upon Azeroth. Perhaps not so subtley, Demons have appeared en masse in Elwynn, determined to win the Doomslayer. Balnazzar leads a band of high-octane punk and emo musicians to beat out the others.</p> 
          <ClassDivider name="Warrior"></ClassDivider>
          <div class="d-flex justify-content-center align-center composer">
            <div><img src="img/cards/Skash the Soloist.png"></img></div>
            <div class="my-auto"><img src="img/arrow.png"></img></div>
            <div><img src="img/cards/Skash the Soloist Ready.png"></img></div>
          </div>
          <p class="lead">Of course, Warriors are the masters of Heavy Metal. Skash's hardcore fans will crowdsurf, mosh, and thrash to prove they are the most dedicated band at Wynnstock. Just don't get hurt!</p> 
        </div>  
      </main>
      
    }

}