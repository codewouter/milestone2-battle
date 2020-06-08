var orc = {
    race:"Orc",
    maxHP: 30,
    currentHP: 30,
    attackDamage: 10
}

var hero = {
    maxHP: 50,
    currentHP: 50,
    attackDamage: 20
}

var battleLog = ["Test01", "Test02", "Test03"];


$("#enemyOne").html(orc.race);
$("#enemyOneMaxHP").html("Max HP: " + orc.maxHP);
$("#enemyOneCurrentHP").html("Current HP: " + orc.currentHP);

$("#enemyTwo").html(orc.race);
$("#enemyTwoMaxHP").html("Max HP: " + orc.maxHP);
$("#enemyTwoCurrentHP").html("Current HP: " + orc.currentHP);

$("#enemyThree").html(orc.race);
$("#enemyThreeMaxHP").html("Max HP: " + orc.maxHP);
$("#enemyThreeCurrentHP").html("Current HP: " + orc.currentHP);

function updateBattleLog(battleLog) {
    var i;
    for (i = 0; i < battleLog.length; i++) {
        $("#battleLogDiv").append(battleLog[i] + "<br>");
    }
}

updateBattleLog(battleLog);

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
    $('#enemyOneImage').click(function() {
        console.log('E1 clicked');
        attack(1);
    })
    $('#enemyTwoImage').click(function() {
        console.log('E2 clicked');
        attack(2);
    })
    $('#enemyThreeImage').click(function() {
        console.log('E3 clicked');
        attack(3);
    })
})







