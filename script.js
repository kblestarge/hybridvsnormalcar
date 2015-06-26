var hybrid = {
	type:'h'
	initialCost:'',
	mpg:'',
	resale:''
}

var normal = {
	initialCost:'',
	mpg:'',
	resale:''
}

var gasCost;
var milesDriven;

function fight() {

	fillHybrid();
	fillNormal();

	gasCost = document.getElementById('gas-cost').value;
	milesDriven = document.getElementById('num-miles').value;
	fillCar('n');
	fillCar(hybrid);
}

function fillCar(car) {
	
	car.mpg = document.getElementById('').value;
}

function fillHybrid() {
	hybrid.initialCost = document.getElementById(car.type + '-initial-cost').value;
	hybrid.mpg = document.getElementById('h-mpg').value;
	hybrid.resale = document.getElementById('h-resale').value;
	console.log("hybrid:",hybrid);
}

function fillNormal() {
	normal.initialCost = document.getElementById('n-initial-cost').value;
	normal.mpg = document.getElementById('n-mpg').value;
	normal.resale = document.getElementById('n-resale').value;
	console.log("normal:",normal);
}