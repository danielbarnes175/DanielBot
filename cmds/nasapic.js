

const api = "https://api.nasa.gov/planetary/apod?api_key=K1WteeV9rHt7GBY36xcHQlIF4LFUSyxLDJMQ9lnE";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");
/*
 This command will grab the image of the day from Nasa's api and return it
 in a RichEmbed.

 Usage is defined as ~nasapic
*/
module.exports.run = async (bot, message, args) => {

	//Creates a RichEmbed using the image given from the url, the only element, of the api.
	snekfetch.get(api).then(r => {
		let body = r.body;

		let embed = new Discord.RichEmbed()
					.setImage(r.body.hdurl)
					.setDescription(r.body.explanation)
					.setColor("#c4daff")
					.setTitle("An awesome picture from NASA!");

		message.channel.send({embed: embed});
	});


}

module.exports.help = {
	name: "nasapic"
}