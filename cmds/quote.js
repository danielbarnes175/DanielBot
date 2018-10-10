const unirest = require('unirest');
const Discord = require("discord.js");

/*
 This command returns a random movie quote from the API used.

 Usage is defined as ~quote
*/
module.exports.run = async (bot, message, args) => {

const api = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1';

	try {
		//Sets all of the parameters needed to make a request to the API.
		unirest.post(api)
		.header("X-Mashape-Key", "aXEHlCvPUTmshWa6uVvVqMlFCu1wp1AWk3yjsnCCAiYXnN1KQH")
		.header("Content-Type", "application/x-www-form-urlencoded")
		.header("Accept", "application/json")
		.end(function (r) {

		//Sends the first quote given from the api.
		let body = r.body;
		message.channel.send(body[0].quote); 

	}); 
 } catch (e) {
 	console.log(e.stack);
 }

}

module.exports.help = {
	name: "quote",
	description: "Returns a random movie quote.",
	usage: "~quote"
}