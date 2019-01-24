const fs = require("fs");
const Discord = require("discord.js");


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

			if (!anyWinner) {
				let embed = new Discord.RichEmbed()
					.setTitle("Nobody won!")
					.setDescription("There were no entries, so there were no winners!")
					.setColor("FFFF00")
				return message.channel.send(embed);
			} 

			let embed = new Discord.RichEmbed()
				.setTitle("Winner!")
				.setDescription(`The lotto is over, the winner is <@${winner}>.\nThis user has won a brand new ${prize}`)
				.setColor("FFFF00");

			return message.channel.send(embed);

		}
	}

	let embed = new Discord.RichEmbed()
			.setTitle("There's no lotto currently running!")
			.setDescription(`There's no lotto running! If you want to draw one so bad, start your own!`)
			.addField("How to start", "Start a lotto with ~lotto item")
			.setColor("FFFF00");

	return message.channel.send(embed);
	return message.channel.send("There's no lotto running! If you want to draw one so bad, start your own!");

}

module.exports.help = {
	name: "draw",
	description: "Picks a winner in the currently running lotto, assuming you are the one who started the lotto.",
	usage: "~draw"
}