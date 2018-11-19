const discord = require('discord.js');

/*
 This command kicks a user from the server.

 Usage is defined as ~kick @user or ~kick @user reason
*/	
module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have sufficient priviledges.");
	if (args.length <= 0) return message.channel.send("Please specify a user.");
	
	let user = message.mentions.members.first();
	if (!user) return message.channel.send("Please specify a user!");

	let reason = "";
	for (var i = 1; i < args.length; i++) {
		reason += (" ");
		reason += args[i];
	}

	user.kick(reason).then((member) => {
		message.channel.send(`See ya later ${user}`);
	}).catch(() => {
		message.channel.send("You can't do that!");
	});

}

module.exports.help = {
	name: "kick",
	description: "Kicks a user from the server.",
	usage: "~kick @user or ~kick @user reason"
}