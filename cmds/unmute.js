const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have sufficient priviledges.");

		let toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
		if (!toMute) return message.channel.send("You must specify a user to unmute.");
		if (toMute.id === message.author.id) return message.channel.send("You cannot unmute yourself, you god damn fool.");
		if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You do not have sufficient priviledges to mute this member,");


		let role = message.guild.roles.find(r => r.name === "Muted");


		if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted");

		await toMute.removeRole(role);
		message.channel.send(`I have unmuted this user`)

		delete bot.mutes[toMute.id];

			fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
				if (err) throw err;
				console.log(`I have unmuted ${toMute.user.tag}.`);
		});
}

module.exports.help = {
	name: "unmute"
}