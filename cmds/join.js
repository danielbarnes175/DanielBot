const fs = require("fs");


/*
 This command allows a user to join the raffle..
*/
module.exports.run = async (bot, message, args) => {
	var body = JSON.parse(fs.readFileSync('./lotto.json', 'utf8'));
	
	if (!body.hasStarted) return message.channel.send("There is no lotto currently running!");
	//if (message.author.id == body.starter) return message.channel.send("Sorry kid, you can't join your own lotto");
	
	for (var i = 0; i < body.entrants.length; i++) {
		if (message.author.id == body.entrants[i].id) return message.channel.send("You are already entered.");
	}

	let entrant = {"id":message.author.id, "name": message.author.username};
	
	body.entrants.push(entrant);

	fs.writeFile("./lotto.json", JSON.stringify(body, null, 2), err => {
			if (err) throw err;

		});

	return message.channel.send(`${message.author} has been added to the raffle for${body.item}.`)
}

module.exports.help = {
	name: "join",
	description: "Join the raffle, assuming there is one running of course.",
	usage: "~join"
}