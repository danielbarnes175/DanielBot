

const api = "https://api.nasa.gov/planetary/apod?api_key=K1WteeV9rHt7GBY36xcHQlIF4LFUSyxLDJMQ9lnE";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	snekfetch.get(api).then(r => {
		let body = r.body;
		// console.log(body);

		let embed = new Discord.RichEmbed()
					.setImage(r.body.url);

		message.channel.send({embed: embed});
	});


}

module.exports.help = {
	name: "nasapic"
}