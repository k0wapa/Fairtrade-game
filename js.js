

	$("#water").click(function(){
    $(this).prop('disabled', true).addClass("checked");
});
	$("#pesti").click(function(){
    $(this).prop('disabled', true).addClass("checked");
});
	$("#felti").click(function(){
    $(this).prop('disabled', true).addClass("checked");
});

// HIRE MODAL
var hiremodal = document.getElementById('hireModal');
var hirebtn = document.getElementById("hire");
hirebtn.onclick = function() {
	hiremodal.style.display = "block";
}
var hirespan = document.getElementsByClassName("hireclose")[0];
hirespan.onclick = function() {hiremodal.style.display = "none";}

var hireintrotextline = document.getElementsByClassName("hireintrotext")[0];
var workersline = document.getElementsByClassName("workers")[0];
$("#hireop1").click(function() {
	$("#hireop1").prop('disabled', true).addClass("checked");
	hireintrotextline.style.display = "none";
	workersline.style.display = "block";
});

$("#hireop2").click(function() {
	$("#hireop2").prop('disabled', true).addClass("checked");
	pesticrop.style.display = "none";
	felticrop.style.display = "none";
	cropsready.style.display = "none";
});

// INTRO MODAL
var intromodal = document.getElementById('introModal');
function firstmodal() {
	hideButtons();
	intromodal.style.display = "block";
	crazy1.play();
}
var introspan = document.getElementsByClassName("introclose")[0];
introspan.onclick = function() {intromodal.style.display = "none"; showButtons();}

// WATER MODAL
var watermodal = document.getElementById('waterModal');
var waterbtn = document.getElementById("water");
waterbtn.onclick = function() {
	watermodal.style.display = "block";
	crazy1.play();
}
var waterspan = document.getElementsByClassName("waterclose")[0];
waterspan.onclick = function() {watermodal.style.display = "none";}
// END OF WATER MODAL

//WATER FUNCTIONS
$("#watop1").click(function() {
	$("#watop1").prop('disabled', true).addClass("checked");
	hideButtons();
	watermodal.style.display = "none";
		checkWaterButton();
		showButtons();
	// $(".blacksheep").animate({left: '250px'}, 1000, function() {
	// });
});

$("#watop2").click(function() {
	$("#watop2").prop('disabled', true).addClass("checked");
	hideButtons();
	watermodal.style.display = "none";
		changecrop();
		checkWaterButton();
		showButtons();
	// $(".blacksheep").animate({top: '250px'}, 1000, function() {
	// });
});

// $("#watop3").click(function() {
// 	$("#watop3").prop('disabled', true).addClass("checked");
// 	hideButtons();
// 	watermodal.style.display = "none";
// 	$(".blacksheep").animate({left: '350px'}, 1000, function() {
// 		checkWaterButton();
// 		showButtons();
// 	});
// });

function checkWaterButton() {
	if (!$('#watop1').prop("disabled")){ watermodal.style.display = "block"; }
	if (!$('#watop2').prop("disabled")){ watermodal.style.display = "block"; }
	// if (!$('#watop3').prop("disabled")){ watermodal.style.display = "block"; }
}

//END OF WATER FUNCTIONS

// PESTICIDES MODAL
var pestimodal = document.getElementById('pestiModal');
var pestibtn = document.getElementById("pesti");
pestibtn.onclick = function() {
	pestimodal.style.display = "block";
	crazy2.play();
}
var pestispan = document.getElementsByClassName("pesticlose")[0];
pestispan.onclick = function() {pestimodal.style.display = "none";}
// END OF PESTICIDES MODAL

//PESTICIDES FUNCTIONS
$("#pestiop1").click(function() {
	$("#pestiop1").prop('disabled', true).addClass("checked");
	hideButtons();
	pestimodal.style.display = "none";
		checkPestiButton();
		showButtons();
	// $(".farmer").animate({left: '250px'}, 1000, function() {
	// });
});

$("#pestiop2").click(function() {
	$("#pestiop2").prop('disabled', true).addClass("checked");
	hideButtons();
	pestimodal.style.display = "none";
		checkPestiButton();
		showButtons();
	// $(".farmer").animate({top: '250px'}, 1000, function() {
	// });
});

$("#pestiop3").click(function() {
	$("#pestiop3").prop('disabled', true).addClass("checked");
	hideButtons();
	pestimodal.style.display = "none";
		checkPestiButton();
		showButtons();
		pesticrop.style.display = "block";
		unhated();
	// $(".farmer").animate({left: '350px'}, 1000, function() {
	// });
});


var pesticrop = document.getElementsByClassName("croppesti")[0];

function checkPestiButton() {
	if (!$('#pestiop1').prop("disabled")){ pestimodal.style.display = "block"; }
	if (!$('#pestiop2').prop("disabled")){ pestimodal.style.display = "block"; }
	if (!$('#pestiop3').prop("disabled")){ pestimodal.style.display = "block"; }
}

//END OF PESTICIDES FUNCTIONS

// FELTIRIZE MODAL
var feltimodal = document.getElementById('feltiModal');
var feltibtn = document.getElementById("felti");
feltibtn.onclick = function() {
	feltimodal.style.display = "block";
	crazy3.play();
}
var feltispan = document.getElementsByClassName("felticlose")[0];
feltispan.onclick = function() {feltimodal.style.display = "none";}
// END OF FILTIRIZE MODAL

//FELTIRIZE FUNCTIONS
$("#feltiop1").click(function() {
	$(this).prop('disabled', true).addClass("checked");
	hideButtons();
	feltimodal.style.display = "none";
		checkFeltiButton();
		showButtons();
	// $(".dog").animate({left: '250px'}, 1000, function() {
	// });
});
$("#feltiop2").click(function() {
	$(this).prop('disabled', true).addClass("checked");
	hideButtons();
	feltimodal.style.display = "none";
		checkFeltiButton();
		showButtons();
		felticrop.style.display = "block";
	// $(".milk").animate({top: '250px'}, 1000, function() {
	// });
});

// $("#feltiop3").click(function() {
// 	$(this).prop('disabled', true).addClass("checked");
// 	hideButtons();
// 	feltimodal.style.display = "none";
// 	$(".hay").animate({left: '350px'}, 1000, function() {
// 		checkFeltiButton();
// 		showButtons();
// 	});
// });

var felticrop = document.getElementsByClassName("cropfelti")[0];

function checkFeltiButton() {
	if (!$('#feltiop1').prop("disabled")){ feltimodal.style.display = "block"; }
	if (!$('#feltiop2').prop("disabled")){ feltimodal.style.display = "block"; }
	// if (!$('#feltiop3').prop("disabled")){ feltimodal.style.display = "block"; }
}
//END OF PESTICIDES FUNCTIONS

function checkMainButtons() {
	if ($('#water').hasClass('checked')){ waterbtn.style.display = "none";};
	if ($('#pesti').hasClass('checked')){ pestibtn.style.display = "none";};
	if ($('#felti').hasClass('checked')){ feltibtn.style.display = "none";};
}

function changecrop() {
$(".crop").attr('src', 'img/cropwatered.png');
}

function unhated() {
$(".dialogfarmer").attr('src', 'img/farmer_unhated.png');
}

function hideButtons() {
waterbtn.style.display = "none";
pestibtn.style.display = "none";
feltibtn.style.display = "none";

}

function showButtons() {
waterbtn.style.display = "inline-block";
pestibtn.style.display = "inline-block";
feltibtn.style.display = "inline-block";
checkMainButtons();
checkoptbuttons();
}

var hirebtn = document.getElementById("hire");
var cropsready = document.getElementsByClassName("cropsready")[0];

function checkoptbuttons() {
	if (!$("#watop1, #watop2, #pestiop1, #pestiop2, #pestiop3, #feltiop1, #feltiop2").not(".checked").length) 
		$(function(){

		document.getElementsByClassName('clock')[0].style.display = 'block';
  setTimeout( function(){ 
    document.getElementsByClassName('clock')[0].style.display = 'none';
    document.getElementsByClassName('cropready')[0].style.display = 'block';
   $(".cropready").animate({
   							marginLeft: '30%',
   							marginTop: '0%',
   							opacity: '0'}, 3000, function() {
		hirebtn.style.display = "block";
		cropsready.style.display = "block";
	});

  }  , 5000 );

});
}




// SOUND PART

var crazy1 = new Audio('sounds/Crazydavelong1.mp3');
var crazy2 = new Audio('sounds/Crazydavelong3.mp3');
var crazy3 = new Audio('sounds/Crazydavescream.mp3');

hideButtons();
setTimeout( function(){ 
    firstmodal();
    showButtons();
  }  , 1000 );
