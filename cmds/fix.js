
const Discord = require("discord.js");

/*
 This command can only be used by my main account. It is used to delete all text channels in a
 specific server. It will not delete channels if the id is specified in the if statement nested
 in the for loop.

 Usage is defined as ~fix
*/
module.exports.run = async (bot, message, args) => {
	if (message.author.id == '129000992762101761') {
	var server = bot.guilds.get('132244749837926400');
		for (var i = 0; i < server.channels.array().length; i++) {
			if (server.channels.array()[i].id != '494506983387561985') {
    			server.channels.array()[i].delete();
		}
	}
}

}

module.exports.help = {
	name: "fix"
}