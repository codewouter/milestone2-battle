let orc = {
    race:"Orc",
    maxHP: 30,
    currentHP: 15,
    attackDamage: 10
}

let hero = {
    maxHP: 50,
    currentHP: 50,
    attackDamage: 20
}

let name = $("#enemyOne").html();
console.log(name);
$("#enemyOne").html(orc.race);
$("#enemyOneMaxHP").html("MHP: " + orc.maxHP);
$("#enemyOneCurrentHP").html("CHP: " + orc.currentHP);

