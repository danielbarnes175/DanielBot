const fs = require("fs");


/*
 This command picks a winner of the current raffle started with ~raffle
*/
module.exports.run = async (bot, message, args) => {
	var body = JSON.parse(fs.readFileSync('./lotto.json', 'utf8'));

	if (!body.hasStarted) return message.channel.send("There is no lotto running!");
	if (message.author.id != body.starter) return message.channel.send("You didn't start this lotto!");
	
	console.log(`${message.author.username} just ran a raffle for ${body.entrants.length} people.`);
	let entrants = body.entrants;
	let winnerNumber = Math.floor(Math.random() * body.entrants.length);
	let anyWinner = true;
	let winner = "";
	let prize = body.item;
	if (!entrants[winnerNumber]) anyWinner = false;
	else {
		winner = entrants[winnerNumber].id;
	}

	body.hasStarted = false;
	body.item = "";
	body.starter = "";
	body.entrants = [];


	fs.writeFile("./lotto.json", JSON.stringify(body, null, 2), err => {
			if (err) throw err;

		});

	if (!anyWinner) return message.channel.send("Ah geez, looks like nobody won...");
	return message.channel.send(`The lotto is over, the winner is <@${winner}>.\nThis user has won a brand new${prize}`)
}

module.exports.help = {
	name: "draw",
	description: "Picks a winner in the currently running lotto, assuming you are the one who started the lotto.",
	usage: "~draw"
}