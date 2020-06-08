var readToSelectTarget = false;

var enemyOne = {
    race:"Orc",
    maxHP: 20,
    currentHP: 20,
    attackDamage: 5,
    alive: true,
    enemyImage: "./assets/images/orc.jpg"
}

var enemyTwo = {
    race:"Troll",
    maxHP: 40,
    currentHP: 40,
    attackDamage: 15,
    alive: true,
    enemyImage: "./assets/images/lotrtroll.jpg"
}

var enemyThree = {
    race:"Uruk-Hai",
    maxHP: 30,
    currentHP: 30,
    attackDamage: 10,
    alive: true,
    enemyImage: "./assets/images/urukhai.jpg"
}

var hero = {
    maxHP: 50,
    currentHP: 50,
    attackDamage: 20,
    heroImage: "./assets/images/aragorn.jpg"
}


$("#enemyOne").html(enemyOne.race);
$("#enemyOneMaxHP").html("Max HP: " + enemyOne.maxHP);
$("#enemyOneCurrentHP").html("Current HP: " + enemyOne.currentHP);
$("#enemyOneImage").attr("src", enemyOne.enemyImage);

$("#enemyTwo").html(enemyTwo.race);
$("#enemyTwoMaxHP").html("Max HP: " + enemyTwo.maxHP);
$("#enemyTwoCurrentHP").html("Current HP: " + enemyTwo.currentHP);
$("#enemyTwoImage").attr("src", enemyTwo.enemyImage);

$("#enemyThree").html(enemyThree.race);
$("#enemyThreeMaxHP").html("Max HP: " + enemyThree.maxHP);
$("#enemyThreeCurrentHP").html("Current HP: " + enemyThree.currentHP);
$("#enemyThreeImage").attr("src", enemyThree.enemyImage);


$("#heroImage").attr("src", hero.heroImage);
$("#heroMaxHP").html("Max HP: " + hero.maxHP);
$("#heroCurrentHP").html("Current HP: " + hero.currentHP);


// Shake effect from https://jsfiddle.net/macloo/g39k3h3e/
// adaptable SHAKE function, from 
// https://bradleyhamilton.com/projects/shake/index.html 
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 6;
  console.log('shake!');

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

// *** attack parser ***
// Shakes relevant target and calculates damage
function heroAttack (target) {
    if (target == 1) {
        shake($('#enemyOneImage'));
        enemyOne.currentHP -= 10;
        $("#enemyOneCurrentHP").html("Current HP: " + enemyOne.currentHP);
    } else if (target == 2) {
        shake($('#enemyTwoImage'));
        enemyTwo.currentHP -= 10;
        $("#enemyTwoCurrentHP").html("Current HP: " + enemyTwo.currentHP);
    } else {
        shake($('#enemyThreeImage'));
        enemyThree.currentHP -= 10;
        $("#enemyThreeCurrentHP").html("Current HP: " + enemyThree.currentHP);
    }
}

function enemyAttack () {
    if (enemyOne.alive) {
        shake($('heroImage'));
        hero.currentHP -= enemyOne.attackDamage;
        $("#battleLogDiv").append(enemyOne.race + " hits you for " + enemyOne.attackDamage!);        
    }
    if (enemyTwo.alive) {
        shake($('heroImage'));
        hero.currentHP -= enemyTwo.attackDamage;
        $("#battleLogDiv").append(enemyTwo.race + " hits you for " + enemyTwo.attackDamage!);        
    }
    if (enemyThree.alive) {
        shake($('heroImage'));
        hero.currentHP -= enemyThree.attackDamage;
        $("#battleLogDiv").append(enemyThree.race + " hits you for " + enemyThree.attackDamage!);        
    }
}

// attack button needs to be chosen/triggered first, placeholderto allow future alternate attacks
$("#attackButton").click(function() {
    console.log('attack clicked');
    readToSelectTarget = true;
    $("#battleLogDiv").append("Select target to attack!<br>");
})

// *** target selection ***
// After attackbutton has been clicked, a target must be selected. Three options
$('#enemyOneImage').click(function() {
    if (readToSelectTarget) {
        heroAttack(1);
        readToSelectTarget=false;
    } else
        $("#battleLogDiv").append("Select attack type!<br>");
})

$('#enemyTwoImage').click(function() {
    if (readToSelectTarget) {
        heroAttack(2);
        readToSelectTarget=false;
    } else
        $("#battleLogDiv").append("Select attack type!<br>");
})

$('#enemyThreeImage').click(function() {
    if (readToSelectTarget) {
        heroAttack(3);
        readToSelectTarget=false;
    } else
        $("#battleLogDiv").append("Select attack type!<br>");
})






