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
    enemyOne = {
        race:"Orc",
        HP: 20,
        attack: 5,
        alive: true,
        enemyImage: "./assets/images/orc.jpg"
    }

    enemyTwo = {
        race:"Troll",
        HP: 40,
        attack: 15,
        alive: true,
        enemyImage: "./assets/images/lotrtroll.jpg"
    }
    
    enemyThree = {
        race:"Uruk-Hai",
        HP: 30,
        attack: 10,
        alive: true,
        enemyImage: "./assets/images/urukhai.jpg"
    }
    
    hero = {
        HP: 250,
        attack: 20,
        heroImage: "./assets/images/aragorn.jpg"
    }

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

    $("#battleLogDiv").html("");
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
// *** attack parser ***
// Shakes relevant target and calculates damage, outputs a line to Battlelog
function heroAttack (target) {
    if (target == 1) {
        shake($('#enemyOneImage'));
        aragornHitSound.play();
        enemyOne.HP -= hero.attack;
        $("#enemyOneHP").html("HP: " + enemyOne.HP);
        $("#battleLogDiv").append("You hit " + enemyOne.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyOne);
    } else if (target == 2) {
        shake($('#enemyTwoImage'));
        aragornHitSound.play();
        enemyTwo.HP -= hero.attack;
        $("#enemyTwoHP").html("HP: " + enemyTwo.HP);
        $("#battleLogDiv").append("You hit " + enemyTwo.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyTwo);
    } else {
        shake($('#enemyThreeImage'));
        aragornHitSound.play();
        enemyThree.HP -= hero.attack;
        $("#enemyThreeHP").html("HP: " + enemyThree.HP);
        $("#battleLogDiv").append("You hit " + enemyThree.race + " for " + hero.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        checkDeathEnemy(enemyThree);
    }
    setTimeout(enemyAttack, 1200); // after hero attack is done, the enemies attack
}

function enemyOneAttack (x, callback) {
    if (enemyOne.alive) {
        shake($('#heroImage'))
        enemyHitSound.play();
        hero.HP -= enemyOne.attack;
        $("#battleLogDiv").append(enemyOne.race + " hits you for " + enemyOne.attack+ "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;       
        $("#heroHP").html("HP: " + hero.HP);
        setTimeout(function() { callback(); }, 1200)
    } else {
        callback();
    }
}

function enemyTwoAttack (x, callback) {
    if (enemyTwo.alive) {
        shake($('#heroImage'))
        enemyHitSound.play();
        hero.HP -= enemyTwo.attack;
        $("#battleLogDiv").append(enemyTwo.race + " hits you for " + enemyTwo.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;    
        $("#heroHP").html("HP: " + hero.HP);
        setTimeout(function() { callback(); }, 1200)
    } else {
        callback();
    }
}

function enemyThreeAttack (x, callback) {
    if (enemyThree.alive) {
        shake($('#heroImage'))
        enemyHitSound.play();
        hero.HP -= enemyThree.attack;
        $("#battleLogDiv").append(enemyThree.race + " hits you for " + enemyThree.attack + "!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;      
        $("#heroHP").html("HP: " + hero.HP);
        callback();
    } else {
        callback();
    }
    
}

//Function with the callbacks in the enemyOneAttack(and two and three) is adapted from https://stackoverflow.com/questions/5187968/how-should-i-call-3-functions-in-order-to-execute-them-one-after-the-other
// Timouts I got from https://stackoverflow.com/questions/22690781/javascript-callback-timeout 
function enemyAttack () {
    enemyOneAttack(null, function() {
        enemyTwoAttack(null, function() {
            enemyThreeAttack(null, function() {
            })
        })
    })
}

// attack button needs to be chosen/triggered first, placeholderto allow future alternate attacks
$("#attackButton").click(function() {
    console.log('attack clicked');
    readyToSelectTarget = true;
    $("#battleLogDiv").append("Select target to attack!<br>");
    battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
})

$("#musicButton").click(function () {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicPlaying = false;
        $("#musicButton").html('Music off');
    } else {
        backgroundMusic.play();
        musicPlaying = true;
        $("#musicButton").html('Music on');
    }
})

// *** target selection ***
// After attackbutton has been clicked, a target must be selected. If the attackbutton has not been clicked yet,
//  a message is asking the player to in the battlelog.
// After that a check is made if the enemy is still alive, if it's dead, a message will appear in the battlelog
$('#enemyOneImage').click(function() {
    if (readyToSelectTarget) {
        if (enemyOne.alive) {
            heroAttack(1);
            readyToSelectTarget=false;

        } else {
            $("#battleLogDiv").append("Enemy already dead!<br>");
            battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        }
    } else { 
        $("#battleLogDiv").append("Select attack type!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
    }
})

$('#enemyTwoImage').click(function() {
    if (readyToSelectTarget) {
        if (enemyTwo.alive) {
            heroAttack(2);
            readyToSelectTarget=false;
        } else {
            $("#battleLogDiv").append("Enemy already dead!<br>");
            battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        }
    } else { 
        $("#battleLogDiv").append("Select attack type!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
    }
})

$('#enemyThreeImage').click(function() {
    if (readyToSelectTarget) {
        if (enemyThree.alive) {
            heroAttack(3);
            readyToSelectTarget=false;
        } else {
            $("#battleLogDiv").append("Enemy already dead!<br>");
            battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
        }
    } else { 
        $("#battleLogDiv").append("Select attack type!<br>");
        battleLogDiv.scrollTop = battleLogDiv.scrollHeight - battleLogDiv.clientHeight;
    }
})
