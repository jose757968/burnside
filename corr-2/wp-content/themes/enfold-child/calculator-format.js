jQuery(function($){
	$('.loan-calculator #lidd_mc_submit').click(function () {

		setTimeout(function(){

			var amount = parseInt( $('#lidd_mc_total_amount').val() );
			var deposit = parseInt( $('#lidd_mc_down_payment').val() );
			var months = parseInt( $('#lidd_mc_amortization_period').val() );



			var result = $('.lidd_mc_b').html();
			var number = Number(result.replace(/[^0-9\.-]+/g,''));

			console.log(amount);
			console.log(deposit);
			console.log(months);
			console.log(number);

			var interest_result = ( (number * months) - ( amount - deposit ) ) / months;


			var large_result = $('.monthly-payments .res_amount');
			var interest = $('.monthly-payments .interest-result');

			large_result.html(result);
			interest.html('£' + Number( interest_result.toFixed(2) ));

		},250)

	})
})