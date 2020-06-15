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

## Testing

#### **All tests have been performed using browsers Google Chrome and Microsoft Edge.**

* All responsiveness tests have been performed on the following devices:
    * Samsung A5 (landscape/portrait)
    * Samsing A7 (landscape/portrait)
    * PC (resolutions 1920x1080 and 1366x768)
    * IphoneX (landscape/portrait, very low width viewport, using chrome developer tools)
    * Ipad (landscape/portrait, using chrome developer tools)
    * General responsive testing with chrome developer tools.

* Win/Lose
    * Win event is correctly called on death of all enemies, image changes and battlelog is filled correctly
    * Lose event is correctly called on 0 or negative HP of the hero, image changes and battlelog is filled correctly
    * When win or lose event is run, nothing can be pressed except the music button and reset button.

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

   

Battlelog 


In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
