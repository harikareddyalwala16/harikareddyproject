function request(order) {

	console.log("customer order", order);

	respose(function () {
		console.log("Delivered data" , order);
	})
}

function respose(callback) {
	setTimeout(callback , 5000);
}

request(1);
request(2);
request(3);
request(4);
request(5);