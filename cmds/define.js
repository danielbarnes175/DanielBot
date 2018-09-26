const unirest = require('unirest');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (args[0] == null) message.channel.send("Please provide a search term");

		const api = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + args[0];

	try {
		unirest.get(api)
.header("X-Mashape-Key", "aXEHlCvPUTmshWa6uVvVqMlFCu1wp1AWk3yjsnCCAiYXnN1KQH")
.header("Accept", "text/plain")
.end(function (r) {
			let body = r.body;
		 //console.log(api);
		
			let embed = new Discord.RichEmbed()
					.setAuthor(args[0] + " definition")
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