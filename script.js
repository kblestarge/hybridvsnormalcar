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

		fillCar(hybrid);
		fillCar(normal);	

		gasCost = document.getElementById('gas-cost').value;
		milesDriven = document.getElementById('num-miles').value;

		hybridCost = cost(hybrid, gasCost, milesDriven);
		normalCost = cost(normal, gasCost, milesDriven);

		hybridGallons = fuelConsumed(hybrid, milesDriven)
		normalGallons = fuelConsumed(normal, milesDriven)

		outputResults(hybrid, hybridCost, hybridGallons);
		outputResults(normal, normalCost, normalGallons);

		$('.popup').animate({
			height: "toggle",
			fontSize: "toggle"
		},500);
	})

	$('.popup').click(function(){

		$(this).animate({
			height: "toggle",
			fontSize: "toggle"
		},500);
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