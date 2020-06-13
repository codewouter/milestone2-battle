var round;
var readyToSelectTarget = false;
var battleLogDiv = document.querySelector('#battleLogDiv');
var musicPlaying = false;

var enemyOne;
var enemyTwo;
var enemyThree;
var hero;

var aragornHitSound = new Audio('./assets/sound/aragornattack.mp3');
var enemyHitSound = new Audio('./assets/sound/enemyattack.mp3');
var backgroundMusic = new Audio('./assets/sound/backgroundmusic.mp3');

initialiseGame();

function initialiseGame() {
    // ********** Buttons **********
    // attack button needs to be chosen/triggered first, placeholderto allow future alternate attacks
    // When the game restarts all buttons need to be turned off to prevent double click events.
    $("#musicButton").off("click");
    $("#resetButton").off("click");
    $("#attackButton").off("click");

    $("#musicButton").on("click", toggleMusic);
    $("#resetButton").on("click", initialiseGame);
    $("#attackButton").on("click", heroSelectTarget);
    round = 1;
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
        enemyImage: "./assets/images/lotrtroll.jpg"
    }
    
    enemyThree = {
        race:"Uruk-Hai",
        HP: 40,
        attack: 30,
        alive: true,
        enemyImage: "./assets/images/urukhai.jpg"
    }
    
    hero = {
        HP: 150,
        attack: 25,
        heroImage: "./assets/images/aragorn.jpg",
        heroImageWin: "./assets/images/aragornwin.png",
        heroImageLose: "./assets/images/aragorndeath.jpg"
    }

    $("#mainHeader").html("Round "+round);
    $("#enemyOne").html(enemyOne.race);
    $("#enemyOneAttack").html("Attack<br>" + enemyOne.attack);
    $("#enemyOneHP").html("HP<br>" + enemyOne.HP);
    $("#enemyOneImage").attr("src", enemyOne.enemyImage);

    $("#enemyTwo").html(enemyTwo.race);
    $("#enemyTwoAttack").html("Attack<br>" + enemyTwo.attack);
    $("#enemyTwoHP").html("HP<br>" + enemyTwo.HP);
    $("#enemyTwoImage").attr("src", enemyTwo.enemyImage);

    $("#enemyThree").html(enemyThree.race);
    $("#enemyThreeAttack").html("Attack<br>" + enemyThree.attack);
    $("#enemyThreeHP").html("HP<br>" + enemyThree.HP);
    $("#enemyThreeImage").attr("src", enemyThree.enemyImage);

    $("#heroImage").attr("src", hero.heroImage);
    $("#heroAttack").html("Attack<br>" + hero.attack);
    $("#heroHP").html("HP<br>" + hero.HP);

    $("#battleLogDiv").html("Let the battle begin!<br>");
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

 function gameWon() {
    $("#battleLogDiv").html("You have won!<br>Press the reset button to play again.<br>");
    $("#heroImage").attr("src", hero.heroImageWin);
    $("#attackButton").off("click");
    $("#resetButton").on("click", initialiseGame);
}

function gameLost() {
    $("#battleLogDiv").html("You have died!<br>Press the reset button to play again.<br>");
    $("#heroImage").attr("src", hero.heroImageLose);
    $("#attackButton").off("click");
    $("#resetButton").on("click", initialiseGame);

}
 

// function to determine if enemy has died. If hp is 0 or lower, it was killed. Replacing the image and putting out a message to the battlelog
// if the enemy was already dead (in case it was not initialized), nothing happens.
function checkDeathEnemy(enemy) {
    if (enemy.alive) {
        if (enemy.HP <= 0) {
            enemy.alive = false;
            $("#battleLogDiv").append("You killed " + enemy.race + "!<br>")
            battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
            if (enemy == enemyOne) {
                $("#enemyOneImage").attr("src", "./assets/images/skull.jpg");
                $("#enemyOne").html("DEAD");                
            }
            if (enemy == enemyTwo) {
                $("#enemyTwoImage").attr("src", "./assets/images/skull.jpg");
                $("#enemyTwo").html("DEAD");   
            }
            if (enemy == enemyThree) {
                $("#enemyThreeImage").attr("src", "./assets/images/skull.jpg");
                $("#enemyThree").html("DEAD");   
            }
        }
    }
}

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

function checkLose() {
    if (hero.HP <= 0) {
        gameLost();
    } 
}

// *** attack parser ***
// Shakes relevant target and calculates damage, outputs a line to Battlelog
function heroAttack (target) {
    if (target === enemyOne) {
        shake($('#enemyOneImage'));
        aragornHitSound.play();
        enemyOne.HP -= hero.attack;
        $("#enemyOneHP").html("HP" + enemyOne.HP);
        $("#battleLogDiv").append("You hit " + enemyOne.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyOne);
    } else if (target === enemyTwo) {
        shake($('#enemyTwoImage'));
        aragornHitSound.play();
        enemyTwo.HP -= hero.attack;
        $("#enemyTwoHP").html("HP" + enemyTwo.HP);
        $("#battleLogDiv").append("You hit " + enemyTwo.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyTwo);
    } else {
        shake($('#enemyThreeImage'));
        aragornHitSound.play();
        enemyThree.HP -= hero.attack;
        $("#enemyThreeHP").html("HP" + enemyThree.HP);
        $("#battleLogDiv").append("You hit " + enemyThree.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyThree);
    }
    setTimeout(enemyAttacking, 1500); // after hero attack is done, the enemies attack
}

function enemyAttack (enemy, callback) {

    if (enemy.alive) {
        shake($('#heroImage'))
        enemyHitSound.play();
        hero.HP -= enemy.attack;
        $("#battleLogDiv").append(enemy.race + " hits you for " + enemy.attack+ "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;       
        $("#heroHP").html("HP: " + hero.HP);
        setTimeout(function() { callback(); }, 1500)
    } else {
        callback();
    }
}

//Function with the callbacks in the enemyAttack function is adapted from https://stackoverflow.com/questions/5187968/how-should-i-call-3-functions-in-order-to-execute-them-one-after-the-other
// Timouts I got from https://stackoverflow.com/questions/22690781/javascript-callback-timeout 
function enemyAttacking () {
    enemyAttack(enemyOne, function() {
        enemyAttack(enemyTwo, function() {
            enemyAttack(enemyThree, function() {
                checkWin();
                checkLose();
            })
        })
    })
}



// *** target selection ***
// After attackbutton has been clicked, a target must be selected. If the attackbutton has not been clicked yet,
//  a message is asking the player to in the battlelog.
// After that a check is made if the enemy is still alive, if it's dead, a message will appear in the battlelog
function heroSelectTarget() {
    $("#resetButton").off("click");
    $("#attackButton").off("click");
    $("#battleLogDiv").append("Select target to attack!<br>");
    battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
    enableTargetting();
}

function enableTargetting() {
    $('#enemyOneImage').on("click", function() { enemyTargetted(enemyOne) });
    $('#enemyTwoImage').on("click", function() { enemyTargetted(enemyTwo) });
    $('#enemyThreeImage').on("click", function() { enemyTargetted(enemyThree) });
}

function disableTargetting() {
    $('#enemyOneImage').off("click");
    $('#enemyTwoImage').off("click");
    $('#enemyThreeImage').off("click");
}

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
