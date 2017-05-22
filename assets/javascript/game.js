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

var restart = document.getElementById("restart");
window.onload = function() {
	$('#restart').hide();
}

	//Choose character and append all others to the Enemies row.
	//Obi character choice.
	$("#charOption1").on("click", function(){
		var charOption1 = document.getElementById("first");
		var character = $("<div>");
		character.addClass("character");
		character.attr("id", "characterOne");
		character.append(charOption1.innerHTML);
		$("#second-row").append(character);

		var charOption2 = document.getElementById("second");
		var enemyOption1 = $("<div>");
		enemyOption1.addClass("enemy");
		enemyOption1.attr("id", "enemyOne");
		enemyOption1.append(charOption2.innerHTML);
		$("#third-row").append(enemyOption1);

		var charOption3 = document.getElementById("third");
		var enemyOption2 = $("<div>");
		enemyOption2.addClass("enemy");
		enemyOption2.attr("id", "enemyTwo");
		enemyOption2.append(charOption3.innerHTML);
		$("#third-row").append(enemyOption2);

		var charOption4 = document.getElementById("fourth");
		var enemyOption3 = $("<div>");
		enemyOption3.addClass("enemy");
		enemyOption3.attr("id", "enemyThree");
		enemyOption3.append(charOption4.innerHTML);
		$("#third-row").append(enemyOption3);

	    $('#first-row').empty();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)   
				$('#enemyOne').hide();
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').hide();
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').hide();
			});
	});


	//Luke character choice.
	$("#charOption2").on("click", function(){
		var charOption2 = document.getElementById("second");
		var character = $("<div>");
		character.addClass("character");
		character.attr("id", "characterOne");
		character.append(charOption2.innerHTML);
		$("#second-row").append(character);

		var charOption1 = document.getElementById("first");
		var enemyOption1 = $("<div>");
		enemyOption1.addClass("enemy");
		enemyOption1.attr("id", "enemyOne");
		enemyOption1.append(charOption1.innerHTML);
		$("#third-row").append(enemyOption1);

		var charOption3 = document.getElementById("third");
		var enemyOption2 = $("<div>");
		enemyOption2.addClass("enemy");
		enemyOption2.attr("id", "enemyTwo");
		enemyOption2.append(charOption3.innerHTML);
		$("#third-row").append(enemyOption2);

		var charOption4 = document.getElementById("fourth");
		var enemyOption3 = $("<div>");
		enemyOption3.addClass("enemy");
		enemyOption3.attr("id", "enemyThree");
		enemyOption3.append(charOption4.innerHTML);
		$("#third-row").append(enemyOption3);

	    $('#first-row').empty();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)   
				$('#enemyOne').hide();
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').hide();
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').hide();
			});
	});


	//Sidious character choice.
	$("#charOption3").on("click", function(){
		var charOption3 = document.getElementById("third");
		var character = $("<div>");
		character.addClass("character");
		character.attr("id", "characterOne");
		character.append(charOption3.innerHTML);
		$("#second-row").append(character);

		var charOption1 = document.getElementById("first");
		var enemyOption1 = $("<div>");
		enemyOption1.addClass("enemy");
		enemyOption1.attr("id", "enemyOne");
		enemyOption1.append(charOption1.innerHTML);
		$("#third-row").append(enemyOption1);

		var charOption2 = document.getElementById("second");
		var enemyOption2 = $("<div>");
		enemyOption2.addClass("enemy");
		enemyOption2.attr("id", "enemyTwo");
		enemyOption2.append(charOption2.innerHTML);
		$("#third-row").append(enemyOption2);

		var charOption4 = document.getElementById("fourth");
		var enemyOption3 = $("<div>");
		enemyOption3.addClass("enemy");
		enemyOption3.attr("id", "enemyThree");
		enemyOption3.append(charOption4.innerHTML);
		$("#third-row").append(enemyOption3);

	    $('#first-row').empty();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)   
				$('#enemyOne').hide();
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').hide();
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').hide();
			});
	});


	//Sidious character choice.
	$("#charOption4").on("click", function(){
		var charOption4 = document.getElementById("fourth");
		var character = $("<div>");
		character.addClass("character");
		character.attr("id", "characterOne");
		character.append(charOption4.innerHTML);
		$("#second-row").append(character);

		var charOption1 = document.getElementById("first");
		var enemyOption1 = $("<div>");
		enemyOption1.addClass("enemy");
		enemyOption1.attr("id", "enemyOne");
		enemyOption1.append(charOption1.innerHTML);
		$("#third-row").append(enemyOption1);

		var charOption2 = document.getElementById("second");
		var enemyOption2 = $("<div>");
		enemyOption2.addClass("enemy");
		enemyOption2.attr("id", "enemyTwo");
		enemyOption2.append(charOption2.innerHTML);
		$("#third-row").append(enemyOption2);

		var charOption3 = document.getElementById("third");
		var enemyOption3 = $("<div>");
		enemyOption3.addClass("enemy");
		enemyOption3.attr("id", "enemyThree");
		enemyOption3.append(charOption3.innerHTML);
		$("#third-row").append(enemyOption3);

	    $('#first-row').empty();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)   
				$('#enemyOne').hide();
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').hide();
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').hide();
			});
	});




});
