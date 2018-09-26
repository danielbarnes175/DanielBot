const unirest = require('unirest');
const api = 'https://hargrimm-wikihow-v1.p.mashape.com/images?count=2';
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	try {
		unirest.get(api)
	.header("X-Mashape-Key", "aXEHlCvPUTmshWa6uVvVqMlFCu1wp1AWk3yjsnCCAiYXnN1KQH")
	.header("Accept", "application/json")
	.end(function (r) {

		let image = r.body[0];			
		//console.log(body);
		
		let embed = new Discord.RichEmbed()
				.setImage(image);

		message.channel.send({embed: embed});
		message.channel.send("Oh btw this command is broken because the link it generates is broken. Silly APIs...") 
	}); 
 } catch (e) {
 	console.log(e.stack);
 }

}

module.exports.help = {
	name: "usefulinstructionalimage"
}