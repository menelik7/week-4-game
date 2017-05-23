$(document).ready(function(){

//Declare variables for all characters.

var obiHealth = 120;
var obiAttack = 0;
var obiCounterAttack = 15;

var skyHealth = 100;
var skyAttack = 0;
var skyCounterAttack = 10;//gave Luke more power than the instructions based on the percentage points.

var sidHealth = 150;
var sidAttack = 0;
var sidCounterAttack = 20;

var maulHealth = 180;
var maulAttack = 0;
var maulCounterAttack = 25;

//Character variables
var obi = document.getElementById("first");
var sky = document.getElementById("second");
var sidious = document.getElementById("third");
var maul = document.getElementById("fourth");

document.querySelector("#obiHealth").innerHTML = obiHealth;
document.querySelector("#skyHealth").innerHTML = skyHealth;
document.querySelector("#sidHealth").innerHTML = sidHealth;
document.querySelector("#maulHealth").innerHTML = maulHealth;

//Theme song and initial display.
var restart = document.getElementById("restart");
window.onload = function() {
	$('#restart').hide();
}

var theme = document.getElementById("load");
window.onload = function() {
    theme.play();
}

	//Choose character and append all others to the Enemies row.
	//Obi character choice.
	$("#charOption1").on("click", function(){
		var charOption1 = obi;
		var character = $("<div>");
		character.addClass("character");
		character.attr("id", "characterOne");
		character.append(charOption1.innerHTML);
		$("#second-row").append(character);

		var charOption2 = sky;
		var enemyOption1 = $("<div>");
		enemyOption1.addClass("enemy");
		enemyOption1.attr("id", "enemyOne");
		enemyOption1.append(charOption2.innerHTML);
		$("#third-row").append(enemyOption1);

		var charOption3 = sidious;
		var enemyOption2 = $("<div>");
		enemyOption2.addClass("enemy");
		enemyOption2.attr("id", "enemyTwo");
		enemyOption2.append(charOption3.innerHTML);
		$("#third-row").append(enemyOption2);

		var charOption4 = maul;
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
				$('#enemyOne').empty();
				$('#enemyOne').hide();

						$("#attack").on("click", function(){
							obiAttack +=8;
							var html = "<p>You attacked Luke Skywalker for " + obiAttack + " damages</p>" +
									   "<p>Luke Skywalker attacked you back for " + skyCounterAttack + " damages</p>";           						
									    document.querySelector("#status").innerHTML = html;
						    obiHealth -= skyCounterAttack;
						    var html =  document.querySelector("#obiHealth").innerHTML = obiHealth;
						    skyHealth -= obiAttack;
						    var html  = document.querySelector("#skyHealth").innerHTML = skyHealth;

						});
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').empty();
				$('#enemyTwo').hide();

						$("#attack").on("click", function(){
									obiAttack +=8;
									var html = "<p>You attacked Darth Sidious for " + obiAttack + " damages</p>" +
											   "<p>Darth Sidious attacked you back for " + sidCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    obiHealth -= sidCounterAttack;
								    var html =  document.querySelector("#obiHealth").innerHTML = obiHealth;
								    sidHealth -= obiAttack;
								    var html  = document.querySelector("#sidHealth").innerHTML = sidHealth;

								});
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').empty();
				$('#enemyThree').hide();

						$("#attack").on("click", function(){
									obiAttack +=8;
									var html = "<p>You attacked Darth Maul for " + obiAttack + " damages</p>" +
											   "<p>Darth Maul attacked you back for " + maulCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    obiHealth -= maulCounterAttack;
								    var html =  document.querySelector("#obiHealth").innerHTML = obiHealth;
								    maulHealth -= obiAttack;
								    var html  = document.querySelector("#maulHealth").innerHTML = maulHealth;

								});
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
				$('#enemyOne').empty();   
				$('#enemyOne').hide();

							$("#attack").on("click", function(){
									skyAttack +=5;
									var html = "<p>You attacked Obi-Wan Kenobi for " + skyAttack + " damages</p>" +
											   "<p>Obi-Wan Kenobi attacked you back for " + obiCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    skyHealth -= obiCounterAttack;
								    var html =  document.querySelector("#skyHealth").innerHTML = skyHealth;
								    obiHealth -= skyAttack;
								    var html  = document.querySelector("#obiHealth").innerHTML = obiHealth;

							});
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').empty();
				$('#enemyTwo').hide();

							$("#attack").on("click", function(){
									skyAttack +=5;
									var html = "<p>You attacked Darth Sidious for " + skyAttack + " damages</p>" +
											   "<p>Darth Sidious attacked you back for " + sidCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    skyHealth -= sidCounterAttack;
								    var html =  document.querySelector("#skyHealth").innerHTML = skyHealth;
								    sidHealth -= skyAttack;
								    var html  = document.querySelector("#sidHealth").innerHTML = sidHealth;

							});
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').empty();
				$('#enemyThree').hide();

							$("#attack").on("click", function(){
									skyAttack +=5;
									var html = "<p>You attacked Darth Maul for " + skyAttack + " damages</p>" +
											   "<p>Darth Maul attacked you back for " + maulCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    skyHealth -= maulCounterAttack;
								    var html =  document.querySelector("#skyHealth").innerHTML = skyHealth;
								    maulHealth -= skyAttack;
								    var html  = document.querySelector("#maulHealth").innerHTML = maulHealth;

							});
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
				$('#enemyOne').empty();   
				$('#enemyOne').hide();

							$("#attack").on("click", function(){
									sidAttack +=8;
									var html = "<p>You attacked Obi-Wan Kenobi for " + sidAttack + " damages</p>" +
											   "<p>Obi-Wan Kenobi attacked you back for " + obiCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    sidHealth -= obiCounterAttack;
								    var html =  document.querySelector("#sidHealth").innerHTML = sidHealth;
								    obiHealth -= sidAttack;
								    var html  = document.querySelector("#obiHealth").innerHTML = obiHealth;

							});
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').empty();
				$('#enemyTwo').hide();

							$("#attack").on("click", function(){
									sidAttack +=8;
									var html = "<p>You attacked Luke Skywalker for " + sidAttack + " damages</p>" +
											   "<p>Luke Skywalker attacked you back for " + skyCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    sidHealth -= skyCounterAttack;
								    var html =  document.querySelector("#sidHealth").innerHTML = sidHealth;
								    skyHealth -= sidAttack;
								    var html  = document.querySelector("#skyHealth").innerHTML = skyHealth;

							});
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').empty();
				$('#enemyThree').hide();

							$("#attack").on("click", function(){
									sidAttack +=8;
									var html = "<p>You attacked Darth Maul for " + sidAttack + " damages</p>" +
											   "<p>Darth Maul attacked you back for " + maulCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    sidHealth -= maulCounterAttack;
								    var html =  document.querySelector("#sidHealth").innerHTML = sidHealth;
								    maulHealth -= sidAttack;
								    var html  = document.querySelector("#maulHealth").innerHTML = maulHealth;

							});
			});
	});


	//Maul character choice.
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
				$('#enemyOne').empty();   
				$('#enemyOne').hide();

							$("#attack").on("click", function(){
									maulAttack +=10;
									var html = "<p>You attacked Obi-Wan Kenobi for " + maulAttack + " damages</p>" +
											   "<p>Obi-Wan Kenobi attacked you back for " + obiCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    maulHealth -= obiCounterAttack;
								    var html =  document.querySelector("#maulHealth").innerHTML = maulHealth;
								    obiHealth -= maulAttack;
								    var html  = document.querySelector("#obiHealth").innerHTML = obiHealth;

							});
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').empty(); 
				$('#enemyTwo').hide();

							$("#attack").on("click", function(){
									maulAttack +=10;
									var html = "<p>You attacked Luke Skywalker for " + maulAttack + " damages</p>" +
											   "<p>Luke Skywalker attacked you back for " + skyCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    maulHealth -= skyCounterAttack;
								    var html =  document.querySelector("#maulHealth").innerHTML = maulHealth;
								    skyHealth -= maulAttack;
								    var html  = document.querySelector("#skyHealth").innerHTML = skyHealth;

							});
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').empty(); 
				$('#enemyThree').hide();

							$("#attack").on("click", function(){
									maulAttack +=10;
									var html = "<p>You attacked Darth Sidious for " + maulAttack + " damages</p>" +
											   "<p>Darth Sidious attacked you back for " + sidCounterAttack + " damages</p>";           						
											    document.querySelector("#status").innerHTML = html;
								    maulHealth -= sidCounterAttack;
								    var html =  document.querySelector("#maulHealth").innerHTML = maulHealth;
								    sidHealth -= maulAttack;
								    var html  = document.querySelector("#sidHealth").innerHTML = sidHealth;

							});
			});
	});




});
