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

function fight() {

	fillCar(hybrid);
	console.log("hybrid:",hybrid);

	fillCar(normal);
	console.log("normal:",normal);

	gasCost = document.getElementById('gas-cost').value;
	milesDriven = document.getElementById('num-miles').value;

	hybridCost = cost(hybrid, gasCost, milesDriven);
	console.log("hybridCost:",hybridCost);

	normalCost = cost(normal, gasCost, milesDriven);
	console.log("normalCost:",normalCost);

	hybridGallons = fuelConsumed(hybrid, milesDriven)
	console.log("hybridGallons:",hybridGallons);

	normalGallons = fuelConsumed(normal, milesDriven)
	console.log("normalGallons:",normalGallons);

	outputResults(hybrid, hybridCost, hybridGallons);
	outputResults(normal, normalCost, normalGallons);
}

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

	var gallonElm = document.getElementById(car.type + '-results').getElementsByTagName('p')[1];
	var costElm = document.getElementById(car.type + '-results').getElementsByTagName('p')[2];

	gallonElm.innerHTML = gallons;
	costElm.innerHTML = cost;
}