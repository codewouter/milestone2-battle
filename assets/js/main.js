var orc = {
    race:"Orc",
    maxHP: 30,
    currentHP: 15,
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

