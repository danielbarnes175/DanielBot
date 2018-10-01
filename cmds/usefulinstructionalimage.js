const unirest = require('unirest');
const api = 'https://hargrimm-wikihow-v1.p.mashape.com/images?count=2';
const Discord = require("discord.js");

/*
 This command returns an out of context WikiHow image.

 The command currently does not work because the API used does not return a valid url.

 Usage is defined as ~usefulinstructionalimage
*/
module.exports.run = async (bot, message, args) => {
	try {
		//Sets all the information need to make a request to the API.
		unirest.get(api)
	.header("X-Mashape-Key", "aXEHlCvPUTmshWa6uVvVqMlFCu1wp1AWk3yjsnCCAiYXnN1KQH")
	.header("Accept", "application/json")
	.end(function (r) {

		let image = r.body[0];			
		let embed = new Discord.RichEmbed()
				.setImage(image);

		//Sends an embed with the image taken from the link given by the api.
		//The link from the api doesn't lead to a valid site, however, so the embed will
		//be blank.
		message.channel.send({embed: embed});
		if (!image) return message.channel.send("Oh btw this command is broken because the link it generates is broken. Silly APIs...") 
	}); 
 } catch (e) {
 	console.log(e.stack);
 }

}

module.exports.help = {
	name: "usefulinstructionalimage"
}