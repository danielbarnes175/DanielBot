
const Discord = require("discord.js");

/*
 This command can only be used by my main account. It is used to delete all text channels in a
 specific server. It will not delete channels if the id is specified in the if statement nested
 in the for loop.

 Usage is defined as ~fix
*/
module.exports.run = async (bot, message, args) => {
	//If I am the user initiating the command
	if (message.author.id == '129000992762101761') {
	//Set the server as a specific server. This must be changed in the file to the ID of the server
	//that needs to be fixed.
	var server = bot.guilds.get('132244749837926400');
		//Loops through every text channel.
		for (var i = 0; i < server.channels.array().length; i++) {
			//Checks for text channels that will not be deleted. Text channel ID must be updated in
			//this file.
			if (server.channels.array()[i].id != '494506983387561985') {
				//Deletes the channel.
    			server.channels.array()[i].delete();
		}
	}
}

}

module.exports.help = {
	name: "fix",
	description: "Not a command to be used by anyone. Don't even try thinking about using this...",
	usage: "don't"
}