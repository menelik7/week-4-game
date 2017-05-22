$(document).ready(function(){

//Declare variables for all characters.
var obiHealth = 120;
var obiAttack = 8;
var obiCounterAttack = 15;

var skyHealth = 100;
var skyAttack = 6;
var skyCounterAttack = 5;

var sidHealth = 150;
var sidAttack = 10;
var sidCounterAttack = 20;

var maulHealth = 180;
var maulAttack = 13;
var maulCounterAttack = 25;

var theme = document.getElementById("load");
window.onload = function() {
    theme.play();
}

document.querySelector("#obiHealth").innerHTML = obiHealth;
document.querySelector("#skyHealth").innerHTML = skyHealth;
document.querySelector("#sidHealth").innerHTML = sidHealth;
document.querySelector("#maulHealth").innerHTML = maulHealth;

//Choose character and append all others to the Enemies row.
$('#charOptions1').on('click', function(){
    var character = $("#first");
    character.addClass("character");
    character.append(first);
    $("#second-row").append(character);

    var enemyOption1 = $("#second");
    enemyOption1.addClass("enemy");
    enemyOption1.append(second);
    $("#third-row").append(enemyOption1);

    var enemyOption2 = $("#third");
    enemyOption2.addClass("enemy");
    enemyOption2.append(third);
    $("#third-row").append(enemyOption2);

    var enemyOption4 = $("#fourth");
    enemyOption4.addClass("enemy");
    enemyOption4.append(fourth);
    $("#third-row").append(enemyOption4);

    $('#first-row').empty();

});

$('#charOptions2').on('click', function(){
    var character = $("#second");
    character.addClass("character");
    character.append(second);
    $("#second-row").append(character);

    var enemyOption1 = $("#first");
    enemyOption1.addClass("enemy");
    enemyOption1.append(first);
    $("#third-row").append(enemyOption1);

    var enemyOption2 = $("#third");
    enemyOption2.addClass("enemy");
    enemyOption2.append(third);
    $("#third-row").append(enemyOption2);

    var enemyOption4 = $("#fourth");
    enemyOption4.addClass("enemy");
    enemyOption4.append(fourth);
    $("#third-row").append(enemyOption4);

    $('#first-row').empty();

});

$('#charOptions3').on('click', function(){
    var character = $("#third");
    character.addClass("character");
    character.append(third);
    $("#second-row").append(character);

    var enemyOption1 = $("#first");
    enemyOption1.addClass("enemy");
    enemyOption1.append(first);
    $("#third-row").append(enemyOption1);

    var enemyOption2 = $("#second");
    enemyOption2.addClass("enemy");
    enemyOption2.append(second);
    $("#third-row").append(enemyOption2);

    var enemyOption4 = $("#fourth");
    enemyOption4.addClass("enemy");
    enemyOption4.append(fourth);
    $("#third-row").append(enemyOption4);

    $('#first-row').empty();

});

$('#charOptions4').on('click', function(){
    var character = $("#fourth");
    character.addClass("character");
    character.append(fourth);
    $("#second-row").append(character);

    var enemyOption1 = $("#first");
    enemyOption1.addClass("enemy");
    enemyOption1.append(first);
    $("#third-row").append(enemyOption1);

    var enemyOption2 = $("#second");
    enemyOption2.addClass("enemy");
    enemyOption2.append(second);
    $("#third-row").append(enemyOption2);

    var enemyOption4 = $("#third");
    enemyOption4.addClass("enemy");
    enemyOption4.append(third);
    $("#third-row").append(enemyOption4);

    $('#first-row').empty();

});

});
