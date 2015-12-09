var hybrid = {
	type:'h',
	initialCost:'',
	mpg:'',
	resale:'',
	totalCost:'',
	gasUsed:''
};

var normal = {
	type:'n',
	initialCost:'',
	mpg:'',
	resale:'',
	totalCost:'',
	gasUsed:''
};

var battleType;
var gasCost;
var milesDriven;

$(document).ready(function() {


	$('form').submit(function(e){
		e.preventDefault();

		battleType = $(".radio:checked").val();
		gasCost = $('#gas-cost').val();
		milesDriven = $('#num-miles').val();

		fillCar(hybrid);
		fillCar(normal);

		// console.log('battleType', battleType);
		// console.log('normal', normal);
		// console.log('hybrid', hybrid);
		// console.log('gasCost', gasCost);
		// console.log('milesDriven', milesDriven);	

		outputResults(hybrid);
		outputResults(normal);

		assignWinner(battleType);

		//Animations
		$('.red-car').animate({
			marginLeft: "35%"
		},500);

		$('.yellow-car').animate({
			marginRight: "35%"
		},500);

		$('.explosion').delay(100).fadeIn( "medium" );

		$('.popup').delay(700).animate({
			height: "toggle",
			fontSize: "toggle"
		},500);

	});

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
	});

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

	function fillCar(car) {
		
		car.initialCost = $('#' + car.type + '-initial-cost').val();
		car.mpg = $('#' + car.type + '-mpg').val();
		car.resale = $('#' + car.type + '-resale').val();

		car.totalCost = cost(car);
		car.gasUsed = fuelConsumed(car);
	}

	function cost(car) {

		var depreciation = car.initialCost - car.resale;
		var gallons = fuelConsumed(car, milesDriven);
		var costOfGas = gallons * gasCost;
		var totalCost = costOfGas + depreciation;

		return totalCost;
	}

	function fuelConsumed(car) {
		var gallons = milesDriven / car.mpg;
		return gallons;
	}

	function outputResults(car) {

		var gallonElm = $('#' + car.type + '-results span')[0];
		var costElm = $('#' + car.type + '-results span')[1];

		gallonElm.innerHTML = Math.round(car.gasUsed * 10);
		costElm.innerHTML = '$' + Math.round(car.totalCost);
	}

});
			