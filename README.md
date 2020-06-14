*DISCLAIMER*: This project is for educational purposes only, no materials/files are intended for any commercial use. In this document all sources will be credited.

# Milestone 2 - Battle

The milestone 2 project will be a webpage to showcase content I learned to develop in the second part of the Code Institute's Full stack developer bootcamp. It mainly concerns Javascript and JQuery.

Since I have been a gamer for most of my life, I intended to build a simple game in a fantasy setting. Since I am under strict time constraints I need to work fast, but I also want to create something nice and appealing. So it is a bit of a balancing act. To have it running along smoothly I will be using the MoSCoW technique to make sure I am not adding to much unnecessary content. More information on this technique can be found [here](https://en.wikipedia.org/wiki/MoSCoW_method#:~:text=The%20MoSCoW%20method%20is%20a,MoSCoW%20prioritization%20or%20MoSCoW%20analysis).

The technique worked out very well as I was able to keep focussing on the things that needed to be done instead of expanding a lot and finishing up the core concepts. 
In the end I was able to finish all 'Must haves'.  Of the 'Should haves' I was able to implement some of the features: the round number, the battle log and the reset button. Otherwise I had no time to add in anything else. As an added bonus I put in a soundtrack and a way to stop/start it, also a few sound effects. I decided to dedicate some time into it after my first mentor call who suggested it. Glas I did as it really improves the experience.
In the end it took couple of days more than I intended. This was mainly because I needed a lot more time to have it all look nice enough (should have stopped earlier, but, you know). Also, a lot of (fun) time went into making the game less glitchy. I espcially like the enabling/disabling of buttons or targets to prevent someone clicking on all kinds while the attack round is running or when the game ends.
When I started this project I was hellbend on using objects because I love the paradigm, I'm glad I managed to use them as much as I have.

All in all I had a lot of fun (and some hairtearing moments, especially with css). What I am taking away from this is that I really like javascript and I have less feeling for css.


## UX
 
User stories:

As a fantasy fan, I want to see a fantasy theme.
As a rpg gamer, I want to clearly see some rpg statistics.
As a gamer with a taste for fighting games I want to be able to use different attacks. (not implemented)
As a gamer with a taste for fighting games I want to be able to see my attacks do damage and receive it.
As a gamer I want to be able to create different challenges. (not implemented)
As a user I want to be able to play this game on different devices, like a phone, tablet or PC.

Note: The two user stories that have not been implemented were concious choices due to time constraints. I felt they did not add a lot more to showcase significant extra skill.

This will be a simple fantasy game with some rpg/fighting mechanics. It should appeal to a certain gamer audience.
As mentioned in the introduction, this is the priority list for the project following MoSCoW:
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
Wireframes can be viewed within the project structure in /mockups/ms2-mockups.pdf. 
!! Make alternative link through github as an url

## Features

As a fantasy fan, I want to see a fantasy theme.
As a rpg gamer, I want to clearly see some rpg statistics.
As a gamer with a taste for fighting games I want to be able to use different attacks. (not implemented)
As a gamer with a taste for fighting games I want to be able to see my attacks do damage and receive it.
As a gamer I want to be able to create different challenges. (not implemented)
As a user I want to be able to play this game on different devices, like a phone, tablet or PC.
 
### Existing Features
As a fantasy fan, I want to see a fantasy theme.
As a rpg gamer, I want to clearly see some rpg statistics.
As a gamer with a taste for fighting games I want to be able to use different attacks. (not implemented)
As a gamer with a taste for fighting games I want to be able to see my attacks do damage and receive it.
As a gamer I want to be able to create different challenges. (not implemented)
As a user I want to be able to play this game on different devices, like a phone, tablet or PC.


- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

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
