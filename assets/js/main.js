var round;
var readyToSelectTarget = false;
var battleLogDiv = document.querySelector('#battleLogDiv');
var musicPlaying = false;
var gameStopped = false;

var enemyOne;
var enemyTwo;
var enemyThree;
var hero;

var aragornHitSound = new Audio('./assets/sound/aragornattack.mp3');
var enemyHitSound = new Audio('./assets/sound/enemyattack.mp3');
var backgroundMusic = new Audio('./assets/sound/backgroundmusic.mp3');

// Builds the game at start.
initialiseGame();

// the function initialiseGame(); builds the game. It is called in the beginning of the script and also called whenever the 'Reset' button is clicked 
function initialiseGame() {
    // ********** Buttons **********
    // attack button needs to be chosen/triggered first, placeholderto allow future alternate attacks
    // The music toggle button can be pressed at any time.
    // The reset button calls intialiseGame() to rebuild te game.
    // When the game restarts all buttons need to be turned off to prevent double click events.
    $("#musicButton").off("click");
    $("#resetButton").off("click");
    $("#attackButton").off("click");

    // At the start of the game these three buttons are listening, waiting for a on click event. Reset of course resets the game, music will toggle the music on and off. The attackButton is the trigger for the game to run. It calls heroSelectTarget where the attackprocedure is continuing.
    $("#musicButton").on("click", toggleMusic);
    $("#resetButton").on("click", initialiseGame);
    $("#attackButton").on("click", heroSelectTarget);
    // round starts at 1
    round = 1;
    // There are 3 enemy objects which can in a feature build contain various enemies based of a choice system for the player. 
    // In this build they are simply filled with an orc, troll and uruk-hai.
    // The hero object works the same and can later be used to have a choice of hero to play with.
    enemyOne = {
        race:"Orc",
        HP: 20,
        attack: 5,
        alive: true,
        enemyImage: "./assets/images/orc.jpg"
    }

    enemyTwo = {
        race:"Troll",
        HP: 50,
        attack: 20,
        alive: true,
        enemyImage: "./assets/images/lotrtroll2.jpg"
    }
    
    enemyThree = {
        race:"Uruk-Hai",
        HP: 40,
        attack: 30,
        alive: true,
        enemyImage: "./assets/images/urukhai2.jpg"
    }
    
    hero = {
        HP: 150,
        attack: 25,
        heroImage: "./assets/images/aragorn.jpg",
        heroImageWin: "./assets/images/aragornwin.png",
        heroImageLose: "./assets/images/aragorndeath.jpg"
    }

    // Filling the values in all the placeholders. The html divs are filled with data from the relevant objects or other variables.
    $("#mainHeader").html("Round "+round);
    
    $("#selectBoxOne").html(enemyOne.race);
    $("#enemyOneAttack").html("Attack<br>" + enemyOne.attack);
    $("#enemyOneHP").html("HP<br>" + enemyOne.HP + "<br");
    $("#enemyOneImage").attr("src", enemyOne.enemyImage);

    $("#selectBoxTwo").html(enemyTwo.race);
    $("#enemyTwoAttack").html("Attack<br>" + enemyTwo.attack);
    $("#enemyTwoHP").html("HP<br>" + enemyTwo.HP);
    $("#enemyTwoImage").attr("src", enemyTwo.enemyImage);

    $("#selectBoxThree").html(enemyThree.race);
    $("#enemyThreeAttack").html("Attack<br>" + enemyThree.attack);
    $("#enemyThreeHP").html("HP<br>" + enemyThree.HP);
    $("#enemyThreeImage").attr("src", enemyThree.enemyImage);

    $("#heroImage").attr("src", hero.heroImage);
    $("#heroAttack").html("Attack<br>" + hero.attack);
    $("#heroHP").html("HP<br>" + hero.HP);
    // starting text in the battleLog div
    $("#battleLogDiv").html("Let the battle begin!<br>Press attack to start<br>");
}

// Shake effect from https://jsfiddle.net/macloo/g39k3h3e/
// adaptable SHAKE function, from 
// https://bradleyhamilton.com/projects/shake/index.html 
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 4;
  for (var i = 0; i < (times + 1); i++) {
    $(thing).animate({
      left:
        (i % 2 == 0 ? distance : distance * -1)
    }, interval);
  }
  $(thing).animate({
    left: 0,
    top: 0
  }, interval);
}

// This function governs the turning on and off of the background music track, when the musicButton is clicked.
function toggleMusic() {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicPlaying = false;
        $("#musicButton").html('Music: off');
    } else {
        backgroundMusic.play();
        musicPlaying = true;
        $("#musicButton").html('Music: on');
    }
}

// When the conditions are met, the function gameWon is called. It displays relevant text in the battlelog, changes the picture of aragorn to king aragorn
// It also disables the attackButton so no more attacks can be made and enables the reset button so the game can be restarted.
// This effectively locks the game. The music can still be turned on and off. The only way to coninue is to hit the reset button.
function gameWon() {
    $("#battleLogDiv").html("You have won!<br>Press the reset button to play again.<br>");
    $("#heroImage").attr("src", hero.heroImageWin);
    $("#attackButton").off("click");
    $("#resetButton").on("click", initialiseGame);
    gameStopped = true;
}

// When the conditions are met, the function gameLost is called. It displays relevant text in the battlelog, changes the picture of aragorn to dead aragorn
// It also disables the attackButton so no more attacks can be made and enables the reset button so the game can be restarted. 
// This effectively locks the game. The music can still be turned on and off. The only way to coninue is to hit the reset button.
function gameLost() {
    $("#battleLogDiv").html("You have died!<br>Press the reset button to play again.<br>");
    $("#heroImage").attr("src", hero.heroImageLose);
    $("#attackButton").off("click");
    $("#resetButton").on("click", initialiseGame);
    gameStopped = true;
}
 

// function to determine if enemy has died. If hp is 0 or lower, it was killed. Replacing the image and putting out a message to the battlelog
// Also changes the name in the selectBox to DEAD.
// if the enemy was already dead (in case it was not initialized), nothing happens.
// This function is called from within heroAttack() so it is only used when enemies take damage.
// 
function checkDeathEnemy(enemy) {
    if (enemy.alive) {
        if (enemy.HP <= 0) {
            enemy.alive = false;
            $("#battleLogDiv").append("You killed " + enemy.race + "!<br>")
            battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
            if (enemy == enemyOne) {
                $("#enemyOneImage").attr("src", "./assets/images/skull.jpg");
                $("#selectBoxOne").html("DEAD");                
            }
            if (enemy == enemyTwo) {
                $("#enemyTwoImage").attr("src", "./assets/images/skull.jpg");
                $("#selectBoxTwo").html("DEAD");   
            }
            if (enemy == enemyThree) {
                $("#enemyThreeImage").attr("src", "./assets/images/skull.jpg");
                $("#selectBoxThree").html("DEAD");   
            }
        }
    }
}

//checkWin() tests if there is at least one enemy alive. If so, the roundnumber is incremented and displayed in the mainheader. 
// The reset/attack button are enabled so a new round can be played.
// If all enemies are dead, the game is won and gameWon() is called.
function checkWin() {
    if ((enemyOne.alive) || (enemyTwo.alive) || (enemyThree.alive)) {
        round++;
        $("#mainHeader").html("Round "+round); 
        $("#resetButton").on("click", initialiseGame);
        $("#attackButton").on("click", heroSelectTarget);        
    } else {
        gameWon();
    }
}

//checkLos() tests if the hero has died (0 or less hp). If true, gameLost() is called.
function checkLose() {
    if (hero.HP <= 0) {
        gameLost();
    } 
}


// herAttack is called after the target is determined. The target is passed as a parameter (the enemy object variable targetted). Shakes relevant target, plays the attacksound of aragorn and calculates damage, outputs a line to Battlelog. Lastly checkDeathEnemy is called to check if the relevant enemy has died and is handled further in that function. After the heroAttack has been processed, it's the enemy's turn through a call to EnemyAttacking() with a timeout of 1500 ms, this way, the event can be read and experienced without going to fast to the counterattack. The 1500 ms is the minimal value for the attacksounds to play (especially on mobile, the following sound can be played to fast and will not be played).
function heroAttack (target) {
    if (target === enemyOne) {
        shake($('#enemyOneImage'));
        aragornHitSound.play();
        enemyOne.HP -= hero.attack;
        $("#enemyOneHP").html("HP<br>" + enemyOne.HP);
        $("#battleLogDiv").append("You hit " + enemyOne.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyOne);
    } else if (target === enemyTwo) {
        shake($('#enemyTwoImage'));
        aragornHitSound.play();
        enemyTwo.HP -= hero.attack;
        $("#enemyTwoHP").html("HP<br>" + enemyTwo.HP);
        $("#battleLogDiv").append("You hit " + enemyTwo.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyTwo);
    } else {
        shake($('#enemyThreeImage'));
        aragornHitSound.play();
        enemyThree.HP -= hero.attack;
        $("#enemyThreeHP").html("HP<br>" + enemyThree.HP);
        $("#battleLogDiv").append("You hit " + enemyThree.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyThree);
    }
    setTimeout(enemyAttacking, 1500); // after hero attack is done, the enemies attack
}

// this function has a callback to make sure all enemies attack in order and the messages, sounds and effects have time to play before the next enemy attacks. The callback is therefore activated with a timeout of 1500ms. This functions tests first if the enemy called is alive, if not nothing happens. If it is alive the functions will shake the hero simulating a hit, play the attacksound. Adjust hero's hp (with the attackvalue of the enemy). The battlelog receive relevant messages and the displayed HP value is adjusted.
function enemyAttack (enemy, callback) {
    if (enemy.alive) {
        shake($('#heroImage'))
        enemyHitSound.play();
        hero.HP -= enemy.attack;
        $("#battleLogDiv").append(enemy.race + " hits you for " + enemy.attack+ "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;       
        $("#heroHP").html("HP<br>" + hero.HP);
        setTimeout(function() { callback(); }, 1500)
    } else {
        callback();
    }
}

//Function with the callbacks in the enemyAttack function is adapted from https://stackoverflow.com/questions/5187968/how-should-i-call-3-functions-in-order-to-execute-them-one-after-the-other
// Timouts (in the called functions) I adjusted from https://stackoverflow.com/questions/22690781/javascript-callback-timeout 
// EnemyAttacking will let every enemy attack through a call to enemyattack, passing the relevant enemy as a parameter. After all enemyies have attacked, CheckWin() and checkLose() are called to see if the game reached it's endstate (all enemies dead or the hero dead). If not the next round can start and the battlelog reflects this, the variable is used to make sure the next round message is not displayed after the game is lost or won. 
function enemyAttacking () {
    enemyAttack(enemyOne, function() {
        enemyAttack(enemyTwo, function() {
            enemyAttack(enemyThree, function() {
                checkWin();
                checkLose();
                if (gameStopped == false) {
                    $("#battleLogDiv").append("Next round!<br>Press attack to start<br>");
                    battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight; 
                }
            })
        })
    })
}



// This function is called when the attack button is pressed. It disable the reset and attackbutton so the proces can't be interrupted. The battlelog will prompt the player to choose a target after which the target listener are activated so the player can choose a target.
function heroSelectTarget() {
    $("#resetButton").off("click");
    $("#attackButton").off("click");
    $("#battleLogDiv").append("Select target to attack!<br>");
    battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
    enableTargetting();
}

// This function will let the images of the enemies way to be clicked and let the hero attack the clicked enemy. (called from heroSelectTarget())
function enableTargetting() {
    $('#enemyOneImage').on("click", function() { enemyTargetted(enemyOne) });
    $('#enemyTwoImage').on("click", function() { enemyTargetted(enemyTwo) });
    $('#enemyThreeImage').on("click", function() { enemyTargetted(enemyThree) });
}

// This helper function can be called to disable the event listener on the images (so they can't be clicked when not appropriate)
function disableTargetting() {
    $('#enemyOneImage').off("click");
    $('#enemyTwoImage').off("click");
    $('#enemyThreeImage').off("click");
}

// This functions gets the targetImage clicked as an argument. It checks if the chosen enemy is alive. If not it will prompt the player to choose a different target, keeping the targets enabled. If the chose enemy is alive it will disable the targets again and call the heroAttack function with the clicked target as a parameter.
function enemyTargetted(chosenEnemy) {
    target = chosenEnemy;
    if (target.alive) {
        disableTargetting();
        heroAttack(target);
    } else {
        $("#battleLogDiv").append("Enemy already dead!<br>Select different target<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
    }
}
