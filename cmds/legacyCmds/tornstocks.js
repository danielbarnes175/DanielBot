const snekfetch = require("snekfetch");

/*
 
*/
module.exports.run = async (bot, message, args) => {
	let api = "https://api.torn.com/torn/?selections=stocks&key=0g0pkIyAIOJN1XX6";
    //let api = "https://api.torn.com/torn/?selections=stocks&key=/*insert api key here*/";
    var stocksWithNoShares = [];
    setTimeout(checkNoneLeft(),60000);
    //setTimeout(checkStocks(stocksWithNoShares),1000);

    function checkNoneLeft() {
        stocksWithNoShares = [];
        let body = "";
    	snekfetch.get(api).then(r => {
			body = r.body;
			console.log(body);
    		for (var i = 0; i <= 31; i++) {
    			if (body[i].available_shares == 0) {
    				stocksWithNoShares.push(i);
    				console.log(stocksWithNoShares);
    			}
    		}
        	message.channel.send(`${body}`);
		});

    }

	function checkStocks(stocksWithNoShares) {
		var stocks = [];
		var newStocks = false;
        let body = "";
		snekfetch.get(api).then(r => {

			body = r.body;
			for (var i = 0; i < stocksWithNoShares.length; i++) {
				if (body[stocksWithNoShares[i]].available_shares != 0) {
					stocks.push(stocksWithNoShares[i]);
					newStocks = true;
				}
			}

			if (stocks.length == 0) {
				newStocks = false;
			}


			if (newStocks) {
				message.channel.send(`There are new stocks available for ${stocks}`);
			}

			});

	}
}

module.exports.help = {
	name: "tornstocks",
	description: "Runs a script that alerts when stocks are available.",
	usage: "~tornstocks"
}