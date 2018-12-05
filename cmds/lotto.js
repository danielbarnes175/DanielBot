const fs = require("fs");


/*
 This command starts a raffle for the server. Anyone can join with ~join

 When the person raffling wants to select a winner, they can type in ~draw.
*/
module.exports.run = async (bot, message, args) => {
	var body = JSON.parse(fs.readFileSync('./lotto.json', 'utf8'));
	var server = message.guild.id;

	for (var i = 0; i < body.servers.length; i++) {
		if (body.servers[i].server == server) return message.channel.send("There is already a lotto running!");
	}

	let lottoStarter = message.author.id;
	let item = "";

	for (var i = 0; i < args.length; i++) {
		if (i != args.length-1) {
			item += args[i] + " ";
		}
		else {
			item += args[i];
		}
	}

	let newServer = {
		"server": server,
		"item": item,
		"starter": lottoStarter,
		"entrants": []
	}

	body.servers.push(newServer);

	fs.writeFile("./lotto.json", JSON.stringify(body, null, 2), err => {
			if (err) throw err;

		});
	
	return message.channel.send(`Lotto started for:\n${item}. \nJoin with ~join`);
}

module.exports.help = {
	name: "lotto",
	description: "Raffle something with this command! users can join with ~join and you can pick a person with ~draw",
	usage: "~lotto the thing you are raffling"
}