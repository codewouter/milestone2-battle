**DISCLAIMER: This project is for educational purposes only, no materials/files are intended for any commercial use. In this document all sources will be credited.**

# Milestone 2 - Battle
The milestone 2 project will be a webpage to showcase content I learned to develop in the second part of the Code Institute's Full stack developer bootcamp. It mainly concerns Javascript and JQuery.

Since I have been a gamer for most of my life, I intended to build a simple game in a fantasy setting. Since I am under strict time constraints I need to work fast, but I also want to create something nice and appealing. So it is a bit of a balancing act. To have it running along smoothly I will be using the MoSCoW technique to make sure I am not adding to much unnecessary content. More information on this technique can be found [here](https://en.wikipedia.org/wiki/MoSCoW_method#:~:text=The%20MoSCoW%20method%20is%20a,MoSCoW%20prioritization%20or%20MoSCoW%20analysis).

The technique worked out very well as I was able to keep focussing on the things that needed to be done instead of expanding a lot and finishing up the core concepts. A lot of elements have been implemented as a simple representation, there is an almost infinity amount of extra content that can be added until it's a full fledged big software house game, but that's not for this project. Which should showcase what I have learned, not how often I can repeat it. So I kept the concepts simple (e.g. 2 statistics for a character instead of 10)
In the end I was able to finish all 'Must haves'.  Of the 'Should haves' I was able to implement some of the features: the round number, the battle log and the reset button. Otherwise I had no time to add in anything else. As an added bonus I put in a soundtrack and a way to stop/start it, also a few sound effects. I decided to dedicate some time into it after my first mentor call who suggested it. Glad I did as it really improves the experience.
In the end it took couple of days more than I intended. This was mainly because I needed a lot more time to have it all look nice enough (should have stopped earlier, but, you know). Also, a lot of (fun) time went into making the game less glitchy. I especially like the enabling/disabling of buttons or targets to prevent someone clicking on all kinds while the attack round is running or when the game ends.
When I started this project I was hellbend on using objects because I love the paradigm, I'm glad I managed to use them as much as I have.

All in all I had a lot of fun (and some hairtearing moments, especially with css). What I am taking away from this is that I really like javascript and I have less feeling for css.


## UX
User stories:

* As a fantasy fan, I want to see a fantasy theme.
* As a rpg gamer, I want to clearly see some rpg statistics.
* As a gamer with a taste for fighting games I want to be able to use different attacks. (not implemented)
* As a gamer with a taste for fighting games I want to be able to see my attacks do damage and receive it.
* As a gamer I want to be able to create different challenges. (not implemented)
* As a user I want to be able to play this game on different devices, like a phone, tablet or PC.

Note: The two user stories that have not been implemented were concious choices due to time constraints.

This will be a simple fantasy game with some rpg/fighting mechanics. It should appeal to a gamer audience.
As mentioned in the introduction, this is the priority list for the project following the MoSCoW principle:

Must have:
* Fantasy theme
* Hero display with picture
* Enemies display with picture.
* Attack button and/or way to select which enemy to target
* Visible hit point (HP) stat and a dynamic that enemy dies when it reaches 0.
* Win or lose condition and a way to display it
* Animation of a hit or miss on the enemy/hero

Should have:
* Choice of number of enemies.
* Second 'special' attack (multiattack)
* Visible round number
* Log of last few events (attacks, misses, deaths, etc)
* Reset button to start over.
* Hit chance.

Could have:
* Selection of different enemy types
* Selection of different hero types
* Attack/defense stats 
* Hit chance depending on attack/defense
* Damage dealt as a formula of attack/defense

Will not have, but maybe in future implementation:
* Respawning enemies
* Leveling/experience system 
* Equipment and loot drops
* Too many others too mention.

The design is slightly reminisent of 'card' games like magic, hearthstone and pokemon. The hero and his/her attributes will be at the bottom, the enemies at the top. In between various buttons can be used to interact with the game. The player needs to press the attack button and choose a target, after the hero attack is done, the enemies attack. This proces keeps going until one side is dead or a reset button is clicked.

### Mockups
Wireframes can be viewed within the project structure in /mockups/ms2-mockups.pdf or by clicking [here](https://github.com/codewouter/milestone2-battle/blob/b73b8b3142fb0ac3edeb343a8431e1a1604061de/mockups/ms2-mockups.pdf)

## Features
### Existing Features
#### As a fantasy fan, I want to see a fantasy theme.
All images are part of the Lord of the Rings realm, which will cater to the needs of the fantasy gamers.

#### As an rpg gamer, I want to clearly see some rpg statistics.
Hitpoints (HP), attack value (attack) and a battlelog to see the attacks take place, fulfill the need for an rpg gamer to see some statistics. of course a lot more can be implemented but that's an extension of what is already there and serves no additional purpose in this (small) game.

#### As a gamer with a taste for fighting games I want to be able to see my attacks do damage and receive it.
To accomodate this several features are added to liven things up and make it an entertaining experience:
* When the hero or enemy is hit, the picture shakes.
* When the hero or enemy is hit, an attack sound can be heard.
* When the hero or enemy is hit, a messagebox (battlelog) shows who was hit for how much damage.
* When the hero or enemy is hit, the HP value is lowered by the attack damage.

#### As a user I want to be able to play this game on different devices, like a phone, tablet or PC.
* The game has been made responsive for phones and tablets (landscap and portrait) and wide screens like PC's/laptops.

#### Additional features not tight to user stories.
* To enhance the experience a soundtrack can be played in the background of the game.
* A button was created to start or stop the music, which is available at any moment in the game, so a user can stop the music when it gets in the way of things (parents being annoyed by 'the racket', for instance). (music can be  started at any moment too of course)
* The game can be reset when there is no attackround running, so a user can start over when the user feels like it.
* The game can be won or lost, certain attack choices can lead to victory or defeat, so the user will experience a challenge.
* When the game is won or lost, the game displays this in the battlelog and the images chance accordingly.
* The game locks up when it is won or lost, to prevent attacks happening when they should not.
* Monsters and heroes can go into negative hitpoints. The hero will not always be so gentle as to 'just' kill a monster, some overkill is allowed.
* The enemies will each do their attack, even when the hero dies at the first strike of the round. Monsters like to kill, maim and butcher.
* The game can be restarted through the reset button when the game is won or lost.
* When the game ends through defeat or victory, no actions can logically be taken except restarting and stopping/starting the music. And the device can of course be thrown through the window in frustration (not recommended)
* The game (re)starts at round one and as the game progresses it increments. The round number is displayed at the top of the screen so the user can see how many rounds it took to win (or die).
* To prevent the game from glitching or function calls can be made through button- or target presses at the wrong time, the following defensive measures are taken:
    * The targets (3 enemy pictures) are always disabled, except when the attack button is pressed and the user needs to select a target.
    * When the attack starts (attack button pressed), the 3 targets (images of enemies) are enabled so a choice of enemies can be made, at this point, the attack and reset buttons are disabled so they don't start calling unwanted functions while the attack round is running.
    * During the targetting proces, no dead enemies can be selected, the user is prompted to select another target. The game stays in the targetting proces.
    * When a valid target has been selected, the targets are disabled again so they cannot be pressed and call functions.
    * When the hero and enemyattacks are running, no buttons or targets can be pressed, except the music button.
    * When the attacks are done, but before the next round starts. The game tests for victiory or defeat. If the hero and at least one enemy remain alive, the next round is started.
    * When the hero died the game will lock up displaying the event and the game can only be reset through the reset button, and the music can still be turned off and on.
    * When the enemies are all dead the game will lock up displaying the event and the game can only be reset through the reset button, and the music can still be turned off and on.
    * When the next round starts, the 3 buttons are active once more. Targets disabled.
 
### Features Left to Implement
* As mentioned in the UX MoSCoW list, there are so many things I would love to add. Two things I really wanted to do but didn't have the time for are:
    *  Choice of enemies. As the objects are in place for this, I wanted to make the selectBox to have the option to choice no enemy or a few types of enemies. This the way the user could make different challenges. The same for the hero (choice of Aragorn or Gandalf for instance). Within the objects I would be able to make attackFunctions of different types (see next point).
    * Multiple attacks. Within the object two functions can be made e.g. attack and slice. The first being the normal attack with a choice of target, the second one a less damaging attack that hits all enemies at once.


## Technologies Used
* Html/CSS/Javascript
    * Mandatory since it's the focus of the project.

* [Bootstrap](https://getbootstrap.com/)
    * Used to make styling easier and especially to use the grid setup for general layout.

* [JQuery](https://jquery.com)
    * JQuery is used to simplify some javascripting. Especially selectors and event listeners.

* The shake effect was almost fully copied from https://jsfiddle.net/macloo/g39k3h3e/ which used an adaptable SHAKE function, from https://bradleyhamilton.com/projects/shake/index.html
    * Used to animate the picture when hit.
 
* [Googlefonts](https://fonts.google.com/) 
    * Fonts were taken from Google Fonts

* [Balsamiq](https://balsamiq.com/)
    * The mockup wireframes were made using Balsamiq.

* [css tricks Adding Stroke to Web Text](https://css-tricks.com/adding-stroke-to-web-text/)
    * Used to create a slight shadow on the HP and attack values for better readability

* Keeping the scrollbar to the bottom of the battlelog was adapted from https://stackoverflow.com/questions/40903462/how-to-keep-a-scrollbar-always-bottom

* Validators:
    * [HTML](https://validator.w3.org/)
    * [CSS](https://www.w3schools.com/w3css/w3css_validation.asp)
    * [Javascript](https://jshint.com/)

## Testing

#### **All tests have been performed using browsers Google Chrome and Microsoft Edge.**

* All responsiveness tests have been performed on the following devices:
    * Samsung A5 (landscape/portrait)
    * Samsing A7 (landscape/portrait)
    * PC (resolutions 1920x1080 and 1366x768)
    * IphoneX (landscape/portrait, very low width viewport, using chrome developer tools)
    * Ipad (landscape/portrait, using chrome developer tools)
    * General responsive testing with chrome developer tools.

* Main header
    * Desplays round number and text.
    * Increments when new round starts
    * Resets to round 1 at game reset.

* Attack button
    * Starts a round correctly.
    * When pressed disables and the target images activate
    * Stays disabled until the round finishes or the game is reset. 

* Reset button
    * Always disabled except
        * on win/lose event
        * When new round starts
        * Beginning of game
    * Correctly restarts game.
        * Names are reset 
        * All stat values are reset
        * Pictures are reset to starter image
        * Battlelog is emptied and refilled.
        * All buttons enabled
        * Targets disabled.

* Music button
    * Active at any point in the game
    * Correctly stops/starts music when pressed.

* Stats
    * Reset at gamestart, values are imported from object.
    * When relevant enemy is hit, HP decreases with value of attack. (correct for all HP boxes)

* Images
    * Enemy images are activated and are clickable after attack button have been pressed.
    * Enemy images are always disabled except when attack button is pressed.
    * Enemy images disable after a valid target has been pressed.
    * Dead enemies are not accepted as a target and a message appears in battle log.
    * Enemy images change to skull when HP is reduced to 0 or lowered
    * Hero images changes correctly on death.
    * All enemy and hero images shake on hit.

* Selectbox
    * Displays name (race) of enemy
    * Change to 'DEAD' when HP reaches 0 or lower.

* Battlelog
    * Starts text at top.
    * Scrolls down after appended text overflows and would be displayed outside (under) the box.
    * Can be scrolled upward when text is above the box all the way to the beginning.
    * Displays all text at relevant events
        * Start of game
        * Next round
        * Attack start.
        * Target Selection
        * Dead enemy selected
        * Hits and damage
        * Death of enemy.
        * win/lose event

* Sound
    * Hit sound effect play when a hit is made. Both hero's and enemy's.
    * Background soundtrack plays/stops when music button is pressed. Buttontext changes accordingly/

* Win/Lose
    * Win event is correctly called on death of all enemies, image changes and battlelog is filled correctly
    * Lose event is correctly called on 0 or negative HP of the hero, image changes and battlelog is filled correctly
    * When win or lose event is run, nothing can be pressed except the music button and reset button.

* The game can be won or lost based on choices of the player. How to do this I will not spoil here.

### Validation
* The HTML validator only returned errors on the img elements due to a missing src attribute, since they are loaded by javascript, I ignored this error.
* The CSS validator returned no errors.
* The javascript validator returns only errors about undefined variables which are either JQuery selectors, or variables used within functions. The missing semicolons are at places where an embedded function ends.

### Remaining bugs
* The button are animated through bootstrap. When they are disabled the animation still shows. Due to timeconstraints I did not debug this, also because the project is not about CSS but JS.
* In my opinion not a bug but it's debatable. Music will not autoplay. This is due to browser policies like [Chrome's](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes). Since I understand the reasoning behind it that it's annoying to have music played when a webpage is loaded, I did not try to change this and give the user the option to start (and stop) it at will.  
* Apperently some devices need some time to let the first soundeffect play before the second one plays. If the timeout/pause is too short, the following sound will not be played. This is apperent when two or three enemies attack after each other. On PC a timeout of 1200ms is sufficient, on samsung mobile phones (at least A5 and A7), 1500ms is needed at least.
* I am not entirely happy with the aligning at the brink of the mediaquery breakpoint (540px) and a portrait orientation. The enemy images get somewhat too small. This is apparent only in IPad portrait viewport. It's not terrible, but not great either. Again due to timeconstraints and the focus of the project I will leave it as is.

## Deployment
This project has been deployed through github, it is freely accessable by visiting my repository [here](https://github.com/codewouter/milestone2-battle). One can find the code there and a link to the live [website](https://codewouter.github.io/milestone2-battle/).
Deployement has been an ongoing process of lots of pushed commits to github. The final product has been deployement off the master branch.

When using gitpod, the site can also be previewed by typing 'python3 -m http.server' in the terminal window and selecting 'make public' in the popup window. Then the option 'Open Preview' should be clicked.

## Credits

### Media
aragorn.jpg:
https://www.modernmyths.nl/wp-content/uploads/2018/05/Aragorn.jpg

uruk-hai2.jpg:
https://www.pinterest.at/pin/631418810230904230/

orc.jpg:
https://www.theguardian.com/tv-and-radio/2019/dec/20/lord-of-the-rings-must-avoid-face-ism

lotrtroll2.jpg:
https://nl.pinterest.com/sulicius/

skull.jpg:
https://www.123rf.com/stock-photo/evil_skull.html?sti=mx86k4qepz9slogwwl|

aragorndeath.jpg:
https://www.quora.com/Is-Aragorn-wounded-at-any-point-throughout-Lord-of-the-Rings-or-is-he-effectively-untouchable

backgroundmusic.mp3:
https://downloads.khinsider.com/game-soundtracks/album/lord-of-the-rings-the-fellowship-of-the-ring-howard-shore/01%2520The%2520Prophecy.mp3

aragornattack.mp3 & enemyattack.mp3:
https://www.zapsplat.com/

leaf.jpg:
http://bgfons.com/download/4980

blood.jpg:
https://www.deviantart.com/mirlollipop/art/Lava-Blood-texture-327998615

wood.jpg:
https://www.texturepalace.com/wood-planks-old-premium-an-free-stock-textures/

battlelog.jpg:
https://nl.pinterest.com/pin/527273068857789333/

silver.jpg:
https://www.freepik.com/free-photos-vectors/silver

aragornwin.png:
https://lotr.fandom.com/wiki/Kings_of_Gondor

mordorlandscape.jpg:
https://nl.pinterest.com/pin/140456082107391117/

faviconswords.png:
https://favicon.io/emoji-favicons/crossed-swords/

 
### Acknowledgements

* Thanks to the slack community to keep me going.
* Thanks to my slack study buddy, supermario7
* Thanks to slack Guru, O-Bim-Wan kenobi, thanks for the time to chat! Didn't need to use your solution in the end, but it was much appreciated!
* Thanks my mentor Gerard McBride, three very powerful and valuable mentorcalls!
* Thanks to Jos Bouwman, tester extraordinaire.
* And last but most important, my family for putting up with me. My wife for taking care of so many things, and the kids for just being kids.


