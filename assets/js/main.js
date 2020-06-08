var readToSelectTarget = false;

var enemyOne = {
    race:"Orc",
    maxHP: 20,
    currentHP: 20,
    attackDamage: 5,
    enemyImage: "/assets/images/orc.jpg"
}

var enemyTwo = {
    race:"Troll",
    maxHP: 40,
    currentHP: 40,
    attackDamage: 15,
    enemyImage: "/assets/images/lotrtroll.jpg"
}

var enemyThree = {
    race:"Uruk-Hai",
    maxHP: 30,
    currentHP: 30,
    attackDamage: 10,
    enemyImage: "/assets/images/urukhai.jpg"
}

var hero = {
    maxHP: 50,
    currentHP: 50,
    attackDamage: 20,
    heroImage: "/assets/images/aragorn"
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

function attack (target) {
    if (target == 1) {
        shake($('#enemyOneImage'));
        console.log('attack 1');
    } else if (target == 2) {
        shake($('#enemyTwoImage'));
        console.log('attack 2');
    } else {
        shake($('#enemyThreeImage'));
        console.log('attack 3');
    }
    // orc.currentHP -= 10;
    // $("#enemyOneCurrentHP").html("Current HP: " + orc.currentHP);
}

$("#attackButton").click(function() {
    console.log('attack clicked');
    readToSelectTarget = true;
    $("#battleLogDiv").append("Select target to attack!<br>");
})

$('#enemyOneImage').click(function() {
    console.log('target E1 clicked');
    if (readToSelectTarget) {
        attack(1);
        readToSelectTarget=false;
    } else
        $("#battleLogDiv").append("Select attack type!<br>");
})

$('#enemyTwoImage').click(function() {
    console.log('target E2 clicked');
    if (readToSelectTarget) {
        attack(2);
        readToSelectTarget=false;
    } else
        $("#battleLogDiv").append("Select attack type!<br>");
})

$('#enemyThreeImage').click(function() {
    console.log('target E3 clicked');
    if (readToSelectTarget) {
        attack(3);
        readToSelectTarget=false;
    } else
        $("#battleLogDiv").append("Select attack type!<br>");
})






