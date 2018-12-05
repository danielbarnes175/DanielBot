const fs = require("fs");


/*
 This command allows a user to join the raffle..
*/
module.exports.run = async (bot, message, args) => {
	var body = JSON.parse(fs.readFileSync('./lotto.json', 'utf8'));
	
	for (var i = 0; i < body.servers.length; i++) {
		if (body.servers[i].server == message.guild.id) {
			if (message.author.id == body.servers[i].starter) return message.channel.send("Sorry kid, you can't join your own lotto");
			for (var j = 0; j < body.servers[i].entrants.length; j++) {
				if (body.servers.entrants[i].id == message.author.id) return message.channel.send("You are already entered.");
			}
			let entrant = {"id":message.author.id, "name": message.author.username};

			body.servers[i].entrants.push(entrant);

			fs.writeFile("./lotto.json", JSON.stringify(body, null, 2), err => {
			if (err) throw err;

		});

			return message.channel.send(`${message.author} has been added to the raffle for:\n${body.item}. \nJoin with ~join`)
		}
}

return message.channel.send("There is no lotto currently running!");
	
}

module.exports.help = {
	name: "join",
	description: "Join the raffle, assuming there is one running of course.",
	usage: "~join"
}