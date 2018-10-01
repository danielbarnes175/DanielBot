const unirest = require('unirest');
const Discord = require("discord.js");

/*
 This command defines a given word.
 Usage is defined as ~define word
 It will then return the top definition for word from UrbanDictionary.
*/
module.exports.run = async (bot, message, args) => {
	//Checks that the user actually provided a word to define.
	if (args[0] == null) return message.channel.send("Please provide a search term");

	//Sets the link for the api as the URL + the words to search for.
	const api = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + args.join("+");

	try {
		unirest.get(api)
		.header("X-Mashape-Key", "aXEHlCvPUTmshWa6uVvVqMlFCu1wp1AWk3yjsnCCAiYXnN1KQH")
		.header("Accept", "text/plain")
		.end(function (r) {
			//Body is the JSON file taken from the API.
			let body = r.body;

			//list[0] is the definition in the JSON file, so if it doesn't exist, there is
			//no definition.
			if (!body.list[0]) return message.channel.send("No results found.");

			//Creates a new RichEmbed containing the definition of the word.
			let embed = new Discord.RichEmbed()
					.setTitle(args.join(" "))
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