

const api = "https://api.nasa.gov/planetary/apod?api_key=K1WteeV9rHt7GBY36xcHQlIF4LFUSyxLDJMQ9lnE";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");
/*
 This command will grab the image/video of the day from Nasa's api and return it
 in a RichEmbed.

 Usage is defined as ~nasa
*/
module.exports.run = async (bot, message, args) => {

	//Creates a RichEmbed using the image given from the url of the api.
	snekfetch.get(api).then(r => {
		let body = r.body;
		let url = (r.body.hdurl || r.body.url);

		let embed = new Discord.RichEmbed()
					.setImage(url)
					.setDescription(r.body.explanation)
					.setColor("#c4daff")
					.setTitle("An awesome picture from NASA!")
					.addField("Link: ", `${url}`);

		message.channel.send({embed: embed});
	});


}

module.exports.help = {
	name: "nasa",
	description: "Returns the nasa image/picture of the day.",
	usage: "~nasa"
}