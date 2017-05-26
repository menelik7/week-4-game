$(document).ready(function(){

//Declare variables for all characters.

var obiHealth = 120;
var obiAttack = 0;
var obiCounterAttack = 10;

var skyHealth = 100;
var skyAttack = 0;
var skyCounterAttack = 5;

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
var theme = document.getElementById("load");
window.onload = function() {
    theme.play();
    $('#restart').hide();
}
$("#attack1").hide();
$("#attack2").hide();
$("#attack3").hide();  

	//Choose character and append all others to the Enemies row.

	//Obi character choice.
	$("#charOption1").on("click", function(){
		var charOption1 = obi;
		var character = $("<div>");
		character.addClass("character");
		character.attr("id", "characterOne");
		character.append(charOption1.innerHTML);
		$("#second-row").append(character);

		//Obi's Enemies
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

		//Empty all first row content.
	    $('#first-row').remove();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyOne').remove();
				$("#status").empty();
				$("#attack1").show();
				$("#attack2").hide();
				$("#attack3").hide();   

						//Compute values between character and defender, and render results in the appropriate divs.
						$("#attack1").on("click", function(){
							obiAttack +=8;
							var html = "<p>You attacked Luke Skywalker for " + obiAttack + " damages</p>" +
									   "<p>Luke Skywalker attacked you back for " + skyCounterAttack + " damages</p>";           						
									    document.querySelector("#status").innerHTML = html;
						    obiHealth -= skyCounterAttack;
						   				$("#obiHealth").html(obiHealth);
						    skyHealth -= obiAttack;
						   				$("#skyHealth").html(skyHealth);

						    		if (obiHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack1").hide();
						    			$('#restart').show();
						    		}
						    		else if ((obiHealth > 0) && (skyHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						    			$("#defenderOne").remove();
						    			$("#attack1").hide();

						    		}
						});
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderTwo");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").show();
				$("#attack3").hide();  

						//Compute values between character and defender.
						$("#attack2").on("click", function(){
							obiAttack +=8;
							var html = "<p>You attacked Darth Sidious for " + obiAttack + " damages</p>" +
									   "<p>Darth Sidious attacked you back for " + sidCounterAttack + " damages</p>";           						
									    document.querySelector("#status").innerHTML = html;
						    obiHealth -= sidCounterAttack;
						    			$("#obiHealth").html(obiHealth);
						    sidHealth -= obiAttack;
						    			$("#sidHealth").html(sidHealth);

						    		if (obiHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack2").hide();
						    			$('#restart').show();
						    		}
						    		else if ((obiHealth > 0) && (sidHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderTwo").remove();
						    			$("#attack2").hide();
						    			$("#attack2").hide();
						    		}
						});
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderThree");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").hide();
				$("#attack3").show();  

						//Compute values between character and defender.
						$("#attack3").on("click", function(){
							obiAttack +=8;//increased Obi's power for logic to work - numbers to be revised appropriately...
							var html = "<p>You attacked Darth Maul for " + obiAttack + " damages</p>" +
									   "<p>Darth Maul attacked you back for " + maulCounterAttack + " damages</p>";           						
									    document.querySelector("#status").innerHTML = html;
						    obiHealth -= maulCounterAttack;
						    			$("#obiHealth").html(obiHealth);
						    maulHealth -= obiAttack;
						    			$("#maulHealth").html(maulHealth);

						    		if (obiHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack3").hide();
						    			$('#restart').show();
						    		}
						    		else if ((obiHealth > 0) && (maulHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderThree").remove();
						    			$("#attack3").hide();
						    			$("#attack1").hide();
						    		}
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

		//Luke's Enemies
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

		//Empty all first row content.
	    $('#first-row').remove();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyOne').remove();
				$("#status").empty();
				$("#attack1").show();
				$("#attack2").hide();
				$("#attack3").hide();

							//Compute values between character and defender.
							$("#attack1").on("click", function(){
								skyAttack +=5;
								var html = "<p>You attacked Obi-Wan Kenobi for " + skyAttack + " damages</p>" +
										   "<p>Obi-Wan Kenobi attacked you back for " + obiCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    skyHealth -= obiCounterAttack;
							    			$("#skyHealth").html(skyHealth);
							    obiHealth -= skyAttack;
							    			$("#obiHealth").html(obiHealth);

							    		if (skyHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack1").hide();
						    			$('#restart').show();
						    		}
						    		else if ((skyHealth > 0) && (obiHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderOne").remove();
						    			$("#attack1").hide();
						    		}
							});
			});

			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderTwo");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").show();
				$("#attack3").hide();

							//Compute values between character and defender.
							$("#attack2").on("click", function(){
								skyAttack +=5;
								var html = "<p>You attacked Darth Sidious for " + skyAttack + " damages</p>" +
										   "<p>Darth Sidious attacked you back for " + sidCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    skyHealth -= sidCounterAttack;
							    			$("#skyHealth").html(skyHealth);
							    sidHealth -= skyAttack;
							    			$("#sidHealth").html(sidHealth);

							    		if (skyHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack2").hide();
						    			$('#restart').show();
						    		}
						    		else if ((skyHealth > 0) && (sidHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderTwo").remove();
						    			$("#attack2").hide();
						    		}
							});
			});

			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderThree");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").hide();
				$("#attack3").show();

							//Compute values between character and defender.
							$("#attack3").on("click", function(){
								skyAttack +=5;
								var html = "<p>You attacked Darth Maul for " + skyAttack + " damages</p>" +
										   "<p>Darth Maul attacked you back for " + maulCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    skyHealth -= maulCounterAttack;
							    			$("#skyHealth").html(skyHealth);
							    maulHealth -= skyAttack;
							    			$("#maulHealth").html(maulHealth);

							    		if (skyHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack3").hide();
						    			$('#restart').show();
						    		}
						    		else if ((skyHealth > 0) && (maulHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderThree").remove();
						    			$("#attack3").hide();
						    		}
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

		//Sidious' enemies.
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

		//Empty all first row content.
	    $('#first-row').remove();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyOne').remove();
				$("#status").empty();
				$("#attack1").show();
				$("#attack2").hide();
				$("#attack3").hide();

							//Compute values between character and defender.
							$("#attack1").on("click", function(){
								sidAttack +=10;
								var html = "<p>You attacked Obi-Wan Kenobi for " + sidAttack + " damages</p>" +
										   "<p>Obi-Wan Kenobi attacked you back for " + obiCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    sidHealth -= obiCounterAttack;
							    			$("#sidHealth").html(sidHealth);
							    obiHealth -= sidAttack;
							    			$("#obiHealth").html(obiHealth);

							    		if (sidHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack1").hide();
						    			$('#restart').show();
						    		}
						    		else if ((sidHealth > 0) && (obiHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderOne").remove();
						    			$("#attack1").hide();
						    		}
							});
			});

			//Append chosen enemy to the defender row.
			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderTwo");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").show();
				$("#attack3").hide();

							//Compute values between character and defender.
							$("#attack2").on("click", function(){
								sidAttack +=10;
								var html = "<p>You attacked Luke Skywalker for " + sidAttack + " damages</p>" +
										   "<p>Luke Skywalker attacked you back for " + skyCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    sidHealth -= skyCounterAttack;
							    			$("#sidHealth").html(sidHealth);
							    skyHealth -= sidAttack;
							    			$("#skyHealth").html(skyHealth);

							    		if (sidHealth <= 0){
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack2").hide();
						    			$('#restart').show();
						    		}
						    		else if ((sidHealth > 0) && (skyHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderTwo").remove();
						    			$("#attack2").hide();
						    		}
							});
			});

			//Append chosen enemy to the defender row.
			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderThree");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").hide();
				$("#attack3").show();

							//Compute values between character and defender.
							$("#attack3").on("click", function(){
								sidAttack +=10;
								var html = "<p>You attacked Darth Maul for " + sidAttack + " damages</p>" +
										   "<p>Darth Maul attacked you back for " + maulCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    sidHealth -= maulCounterAttack;
							    			$("#sidHealth").html(sidHealth);
							    maulHealth -= sidAttack;
							    			$("#maulHealth").html(maulHealth);

							    		if (sidHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack3").hide();
						    			$('#restart').show();
						    		}
						    		else if ((sidHealth > 0) && (maulHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderThree").remove();
						    			$("#attack3").hide();
						    		}
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

		//Maul's enemies.
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

		//Empty all first row content.
	    $('#first-row').remove();


	    	//Append chosen enemy to the defender row.
			$("#enemyOne").on("click", function(){
				var enemyOne = document.getElementById("enemyOne");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderOne");
				defender.append(enemyOne.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyOne').remove();
				$("#status").empty();
				$("#attack1").show();
				$("#attack2").hide();
				$("#attack3").hide();

							//Compute values between character and defender.
							$("#attack1").on("click", function(){
								maulAttack +=12;
								var html = "<p>You attacked Obi-Wan Kenobi for " + maulAttack + " damages</p>" +
										   "<p>Obi-Wan Kenobi attacked you back for " + obiCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    maulHealth -= obiCounterAttack;
							    			$("#maulHealth").html(maulHealth);
							    obiHealth -= maulAttack;
							    			$("#obiHealth").html(obiHealth);

							    		if (maulHealth <= 0){
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack1").hide();
						    			$('#restart').show();
						    		}
						    		else if ((maulHealth > 0) && (obiHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderOne").remove();
						    			$("#attack1").hide();
						    		}
							});
			});

			//Append chosen enemy to the defender row.
			$("#enemyTwo").on("click", function(){
				var enemyTwo = document.getElementById("enemyTwo");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderTwo");
				defender.append(enemyTwo.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyTwo').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").show();
				$("#attack3").hide();

							//Compute values between character and defender.
							$("#attack2").on("click", function(){
								maulAttack +=12;
								var html = "<p>You attacked Luke Skywalker for " + maulAttack + " damages</p>" +
										   "<p>Luke Skywalker attacked you back for " + skyCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    maulHealth -= skyCounterAttack;
						    				$("#maulHealth").html(maulHealth);
							    skyHealth -= maulAttack;
							    			$("#skyHealth").html(skyHealth);

							    		if (maulHealth <= 0){
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack2").hide();
						    			$('#restart').show();
						    		}
						    		else if ((maulHealth > 0) && (skyHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						                $("#defenderTwo").remove();
						    			$("#attack2").hide();
						    		}
							});
			});

			//Append chosen enemy to the defender row.
			$("#enemyThree").on("click", function(){
				var enemyThree = document.getElementById("enemyThree");
				var defender = $("<div>");
				defender.addClass("defender");
				defender.attr("id", "defenderThree");
				defender.append(enemyThree.innerHTML);
				$("#fifth-row").append(defender)
				$('#enemyThree').remove();
				$("#status").empty();
				$("#attack1").hide();
				$("#attack2").hide();
				$("#attack3").show();

							//Compute values between character and defender.
							$("#attack3").on("click", function(){
								maulAttack +=12;
								var html = "<p>You attacked Darth Sidious for " + maulAttack + " damages</p>" +
										   "<p>Darth Sidious attacked you back for " + sidCounterAttack + " damages</p>";           						
										    document.querySelector("#status").innerHTML = html;
							    maulHealth -= sidCounterAttack;
							    			$("#maulHealth").html(maulHealth);
							    sidHealth -= maulAttack;
							    			$("#sidHealth").html(sidHealth);

							    		if (maulHealth <= 0) {
						                $("#status").html("<strong>GAME OVER!!!</strong>");
						                $("#attack3").hide();
						    			$('#restart').show();
						    		}
						    		else if ((maulHealth > 0) && (sidHealth <= 0)) {
						                $("#status").html("<strong><span style='color:#fff'>You Win!  Pick your next enemy...</span></strong>");
						    			$("#defenderThree").remove();
						    			$("#attack3").hide();
						    		}
							});
			});
	});

//If functions remaining to determine winner/loser and compute the increment of power and store the value for the next fight.

});
