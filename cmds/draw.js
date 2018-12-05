const fs = require("fs");


/*
 This command picks a winner of the current raffle started with ~raffle
*/
module.exports.run = async (bot, message, args) => {
	var body = JSON.parse(fs.readFileSync('./lotto.json', 'utf8'));

	for (var i = 0; i < body.servers.length; i++) {
		
		if (body.servers[i].server == message.guild.id) {
			if (body.servers[i].starter != message.author.id) return message.channel.send("You didn't start this lotto!");
		

			console.log(`${message.author.username} just ran a raffle for ${body.servers[i].entrants.length} people.`);
			let entrants = body.servers[i].entrants;
			let winnerNumber = Math.floor(Math.random() * body.servers[i].entrants.length);
			let winner = "";
			let prize = body.servers[i].item;
			var anyWinner = true;
			if (!entrants[winnerNumber]) anyWinner = false;
			else {
				winner = entrants[winnerNumber].id;
			}

			body.servers.splice(i, 1);


			fs.writeFile("./lotto.json", JSON.stringify(body, null, 2), err => {
					if (err) throw err;

				});

			if (!anyWinner) return message.channel.send("Ah geez, looks like nobody won...");
			return message.channel.send(`The lotto is over, the winner is <@${winner}>.\nThis user has won a brand new${prize}`)

		}
	}

	return message.channel.send("There's no lotto running! If you want to draw one so bad, start your own!");

}

module.exports.help = {
	name: "draw",
	description: "Picks a winner in the currently running lotto, assuming you are the one who started the lotto.",
	usage: "~draw"
}