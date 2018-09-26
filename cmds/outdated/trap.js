const api = "https://api.computerfreaker.cf/v1/trap";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.channel.nsfw) return message.channel.send("Why are you using that command here?!");

	snekfetch.get(api).then(r => {
		let body = r.body;
		// console.log(body);

		let embed = new Discord.RichEmbed()
					.setImage(r.body.url);

		message.channel.send({embed: embed});
	});


}

module.exports.help = {
	name: "trap"
}