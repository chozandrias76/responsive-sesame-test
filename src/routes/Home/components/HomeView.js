import React from 'react'
import './HomeView.scss'
import Slideshow from './SlideshowLayout/Slideshow'
import BodyText from './BodyText/BodyText'
import ParallaxPhoto from './ParallaxPhoto/ParallaxPhoto'
import Spotlight from './Spotlight/Spotlight'

export const HomeView = () => (
  <div>
    <Slideshow />
    <BodyText />
    <ParallaxPhoto id='parallax-01' />
    <Spotlight props={spot01} />
    <Spotlight props={spot02} />
    <Spotlight props={spot03} />
    <Spotlight props={spot04} />
    <Spotlight props={spot05} />
    <ParallaxPhoto id='parallax-02' />
  </div>
)

const spot01 = {
  backgroundColor: 'lightgoldenrodyellow',
  id: 'mallow',
  title: 'Mallow',
  imgUrl:`url(http://i.imgur.com/lY5lweN.gif)`,
  textContent: `Mallow was born to the royal family in Nimbus Land, King and Queen Nimbus. 
  However, while still an infant, Mallow was lost. 
  He was eventually discovered near Tadpole Pond, by the sage Frogfucius. 
  Frogfucius removed the basket from the waters, discovering a little ball of puff inside. 
  On the cloud child's belt, the name "Mallow" was inscribed.`,
  textLeft:'true'
}

const spot02 = {
  backgroundColor: 'darkred',
  id: 'mario',
  title: 'Mario',
  imgUrl:`url(http://i.imgur.com/Nb8HF4y.gif)`,
  textContent: `Mario appears as the main protagonist in Super Mario RPG: Legend of the Seven Stars.
   Mario first arrives to confront Bowser who has again captured Princess Peach (which by now is a recurring event). 
   Mario battles Bowser atop a Kinklink and rescues Peach. 
   Then a huge sword, Exor, strikes the castle from atop and knocks them all to various spots in the Mushroom Kingdom. 
   Mario falls through the Pipe on top of his house and lands on his bed.`,
  textLeft:'false'
}

const spot03 = {
  backgroundColor: 'green',
  id: 'boser',
  title: 'Bowser',
  imgUrl:`url(http://i.imgur.com/sJMzoEP.gif)`,
  textContent: `Bowser, sometimes known as King Koopa, is a major character and the main antagonist of Nintendo's Mario franchise. 
  He is the leader and most powerful of the Koopas, an evil-driven race of turtle-like creatures, and has been the archenemy of Mario ever since his debut in Super Mario Bros.`,
  textLeft:'true'
}

const spot04 = {
  backgroundColor: 'lightblue',
  id: 'geno',
  title: 'Geno',
  imgUrl:`url(http://i.imgur.com/0lLuKzx.png)`,
  textContent: `Geno acts as a sage-like figure to Mario and his allies. 
  Consequently, Geno offers the heroes advice about matters the others may not understand. 
  For instance, after Mario and his allies liberate Bowser's Keep, Bowser decides to quit the team and return to the castle. 
  However, Geno points out that until Smithy and his factory are destroyed, Bowser's Keep is still at risk. 
  Thus Bowser decides to continue the fight.`,
  textLeft:'false'
}

const spot05 = {
  backgroundColor: 'pink',
  id: 'princess-toadstool',
  title: 'Princess Toadstool',
  imgUrl:`url(http://i.imgur.com/pGpUFTv.png)`,
  textContent: `Princess Peach is a main character in the Mario franchise, and the princess of Mushroom Kingdom. 
  Peach first appeared in Super Mario Bros. and was created by Shigeru Miyamoto to be the damsel-in-distress throughout most Mario games. 
  She resides in her castle along with many Toads, who act as her loyal servants. 
  Her kingdom is often attacked by the Koopa Troop, a group led by Bowser. 
  She is the love interest of Mario.`,
  textLeft:'true'
}

export default HomeView
