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

$("#enemyOne").html(orc.race);
$("#enemyOneMaxHP").html("Max HP: " + orc.maxHP);
$("#enemyOneCurrentHP").html("Current HP: " + orc.currentHP);

$("#enemyTwo").html(orc.race);
$("#enemyTwoMaxHP").html("Max HP: " + orc.maxHP);
$("#enemyTwoCurrentHP").html("Current HP: " + orc.currentHP);

$("#enemyThree").html(orc.race);
$("#enemyThreeMaxHP").html("Max HP: " + orc.maxHP);
$("#enemyThreeCurrentHP").html("Current HP: " + orc.currentHP);

// adaptable SHAKE function, from 
// https://bradleyhamilton.com/projects/shake/index.html 
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 6;

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

function attack () {
    shake($('#enemyOneImage'));
    orc.currentHP -= 10;
    console.log('attack!');
    $("#enemyOneCurrentHP").html("Current HP: " + orc.currentHP);
}

$("#attackButton").click(function() {
    attack();
})







