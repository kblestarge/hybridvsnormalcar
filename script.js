var hybrid = {
	type:'h',
	initialCost:'',
	mpg:'',
	resale:''
}

var normal = {
	type:'n',
	initialCost:'',
	mpg:'',
	resale:''
}

var gasCost;
var milesDriven;

$(document).ready(function() {


	$('button').click(function(){

		// normal.initialCost = document.getElementById(normal.type + '-initial-cost').value;
		// normal.mpg = document.getElementById(normal.type + '-mpg').value;
		// normal.resale = document.getElementById(normal.type + '-resale').value;

		// hybrid.initialCost = document.getElementById(hybrid.type + '-initial-cost').value;
		// hybrid.mpg = document.getElementById(hybrid.type + '-mpg').value;
		// hybrid.resale = document.getElementById(hybrid.type + '-resale').value;

		// gasCost = document.getElementById('gas-cost').value;
		// milesDriven = document.getElementById('num-miles').value;

		// if(gasCost == '' || milesDriven == '' || normal.initialCost == '' || normal.mpg == '' || normal.resale == '' || hybrid.initialCost == '' || hybrid.mpg == '' || hybrid.resale== '') { //check inputs
		// 	alert('Don\'t hold back, my friend. Fill up the stats!');
		// }else { //go

			fillCar(hybrid);
			fillCar(normal);	

			hybridCost = cost(hybrid, gasCost, milesDriven);
			normalCost = cost(normal, gasCost, milesDriven);

			hybridGallons = fuelConsumed(hybrid, milesDriven)
			normalGallons = fuelConsumed(normal, milesDriven)

			outputResults(hybrid, hybridCost, hybridGallons);
			outputResults(normal, normalCost, normalGallons);

			$('.red-car').animate({
				marginLeft: "35%"
			},500);

			$('.yellow-car').animate({
				marginRight: "35%"
			},500);

			$('.explosion').delay(100).fadeIn( "medium" );

			//calculate winner, prob an if
			$('#h-results').css('background-color', '#C98910');
			$('#n-results').css('background-color', '#A8A8A8');

			$('.popup').delay(700).animate({
				height: "toggle",
				fontSize: "toggle"
			},500);
		// }
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

	gallonElm.innerHTML = gallons;
	costElm.innerHTML = cost;
}