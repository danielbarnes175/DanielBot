const unirest = require('unirest');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

		const api = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1';

	try {
		unirest.post(api)
.header("X-Mashape-Key", "aXEHlCvPUTmshWa6uVvVqMlFCu1wp1AWk3yjsnCCAiYXnN1KQH")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.end(function (r) {

		let body = r.body;
		message.channel.send(body[0].quote); 

	}); 
 } catch (e) {
 	console.log(e.stack);
 }

}

module.exports.help = {
	name: "quote"
}