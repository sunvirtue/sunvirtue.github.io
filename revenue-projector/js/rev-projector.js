let transaction = document.getElementById("monthly-transactions");
let average = document.getElementById("average-sale-amount");
let rev = document.getElementById("rev-share");
let revenue = document.getElementById("monthly-potential-revenue");

// rev.value = 0.4;

function isCalculateRevenue() {
	revenue.value = ((transaction.value * average.value * rev.value / 100) + (transaction.value * 0.1)).toFixed(0);
	if (revenue.value == "NaN") {
		revenue.value =0;
	}
	console.log(transaction, average, rev);
	console.log(revenue.value);
}
isCalculateRevenue();
