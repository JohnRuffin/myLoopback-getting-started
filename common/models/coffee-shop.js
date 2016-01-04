module.exports = function(CoffeeShop) {
	CoffeeShop.status = function(cb){
		const currentDate = new Date();
		const currentHour = currentDate.getHours();
		const OPEN_HOUR = 6;
		const CLOSE_HOUR = 20;

		console.log(`Current hour is ${currentHour}` );
		

		var response = (currentHour > OPEN_HOUR 
			&& currentHour < CLOSE_HOUR ? 'We are open' : 'Nope, closed ');

		cb(null, response);
	};
	CoffeeShop.remoteMethod('status',
		{
		http: {path: '/status', verb: 'get'},
		returns: {arg: 'status', type: 'string'}
		}
	);

};
