var hybrid = {
	type:'h',
	initialCost:'',
	mpg:'',
	resale:'',
	totalCost:'',
	gasUsed:''
}

var normal = {
	type:'n',
	initialCost:'',
	mpg:'',
	resale:'',
	totalCost:'',
	gasUsed:''
}

var battleType;
var gasCost;
var milesDriven;

$(document).ready(function() {


	$('button').click(function(){

		battleType = $(".battle input[type='radio']:checked").val();

		normal.initialCost = document.getElementById(normal.type + '-initial-cost').value;
		normal.mpg = document.getElementById(normal.type + '-mpg').value;
		normal.resale = document.getElementById(normal.type + '-resale').value;

		hybrid.initialCost = document.getElementById(hybrid.type + '-initial-cost').value;
		hybrid.mpg = document.getElementById(hybrid.type + '-mpg').value;
		hybrid.resale = document.getElementById(hybrid.type + '-resale').value;

		gasCost = document.getElementById('gas-cost').value;
		milesDriven = document.getElementById('num-miles').value;

		if(gasCost == '' || milesDriven == '' || normal.initialCost == '' || normal.mpg == '' || normal.resale == '' || hybrid.initialCost == '' || hybrid.mpg == '' || hybrid.resale== '' || battleType == null) { //check inputs
			alert('Don\'t hold back, my friend. Fill up the stats!');
		}else { //go

			fillCar(hybrid);
			fillCar(normal);	

			hybrid.totalCost = cost(hybrid, gasCost, milesDriven);
			normal.totalCost = cost(normal, gasCost, milesDriven);

			hybrid.gasUsed = fuelConsumed(hybrid, milesDriven)
			normal.gasUsed = fuelConsumed(normal, milesDriven)

			outputResults(hybrid, hybrid.totalCost, hybrid.gasUsed);
			outputResults(normal, normal.totalCost, normal.gasUsed);

			$('.red-car').animate({
				marginLeft: "35%"
			},500);

			$('.yellow-car').animate({
				marginRight: "35%"
			},500);

			$('.explosion').delay(100).fadeIn( "medium" );

			//Assign winner
			assignWinner(battleType);

			$('.popup').delay(700).animate({
				height: "toggle",
				fontSize: "toggle"
			},500);
		}
	})

	$('.popup').click(function(){

		$(this).animate({
			height: "toggle",
			fontSize: "toggle"
		},500);

		$('.red-car').animate({
			marginLeft: "0px"
		},500);

		$('.yellow-car').animate({
			marginRight: "0px"
		},500);

		$('.explosion').fadeOut( "medium" );
	})
})

function fillCar(car) {
	
	car.initialCost = document.getElementById(car.type + '-initial-cost').value;
	car.mpg = document.getElementById(car.type + '-mpg').value;
	car.resale = document.getElementById(car.type + '-resale').value;
}

function cost(car, gas, miles) {

	var depreciation = car.initialCost - car.resale;
	var gallons = fuelConsumed(car, miles);
	var costOfGas = gallons * gas;
	var totalCost = costOfGas + depreciation;

	return totalCost;
}

function fuelConsumed(car, miles) {
	var gallons = miles / car.mpg;
	return gallons;
}

function outputResults(car, cost, gallons) {

	var gallonElm = document.getElementById(car.type + '-results').getElementsByTagName('span')[0];
	var costElm = document.getElementById(car.type + '-results').getElementsByTagName('span')[1];

	gallonElm.innerHTML = Math.round(gallons * 10) / 10;
	costElm.innerHTML = '$' + Math.round(cost);
}
function assignWinner(battleType){

	if(battleType == 'gas'){
		if(hybrid.gasUsed <= normal.gasUsed){
			$('#h-results').css('background-color', '#C98910');//gold
			$('#h-results img').attr('src', 'img/1st.png');
			$('#n-results img').attr('src', '');
			$('.h-car-fin img').attr('src', 'img/carRed.png');
			$('.n-car-fin img').attr('src', 'img/carYellowBroken.png');
			$('#n-results').css('background-color', '#A8A8A8');//silver
		}else{
			$('#h-results').css('background-color', '#A8A8A8');//silver
			$('#n-results img').attr('src', 'img/1st.png');
			$('#h-results img').attr('src', '');
			$('.n-car-fin img').attr('src', 'img/carYellow.png');
			$('.h-car-fin img').attr('src', 'img/carRedBroken.png');
			$('#n-results').css('background-color', '#C98910');//gold
		}
	}else{ //cost
		if(hybrid.totalCost <= normal.totalCost){
			$('#h-results').css('background-color', '#C98910');//gold
			$('#h-results img').attr('src', 'img/1st.png');
			$('#n-results img').attr('src', '');
			$('.h-car-fin img').attr('src', 'img/carRed.png');
			$('.n-car-fin img').attr('src', 'img/carYellowBroken.png');
			$('#n-results').css('background-color', '#A8A8A8');//silver
		}else{
			$('#h-results').css('background-color', '#A8A8A8');//silver
			$('#n-results img').attr('src', 'img/1st.png');
			$('#h-results img').attr('src', '');
			$('.n-car-fin img').attr('src', 'img/carYellow.png');
			$('.h-car-fin img').attr('src', 'img/carRedBroken.png');
			$('#n-results').css('background-color', '#C98910');//gold
		}
	}
}
			