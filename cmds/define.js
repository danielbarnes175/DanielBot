const unirest = require('unirest');
const Discord = require("discord.js");

/*
 This command defines a given word.
 Usage is defined as ~define word
 It will then return the top definition for word from UrbanDictionary.
*/
module.exports.run = async (bot, message, args) => {
	if (args[0] == null) message.channel.send("Please provide a search term");
		const api = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + args.join("+");

	try {
		unirest.get(api)
.header("X-Mashape-Key", "aXEHlCvPUTmshWa6uVvVqMlFCu1wp1AWk3yjsnCCAiYXnN1KQH")
.header("Accept", "text/plain")
.end(function (r) {
			let body = r.body;
		 //console.log(api);
		
			let embed = new Discord.RichEmbed()
					.setAuthor(args.join(" ") + " definition")
					.setDescription(body.list[0].definition);

		message.channel.send({embed: embed}); 
	}); 
 } catch (e) {
 	console.log(e.stack);
 }

}

module.exports.help = {
	name: "define"
}