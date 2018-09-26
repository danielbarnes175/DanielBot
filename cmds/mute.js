const fs = require("fs");

module.exports.run = async (bot, message, args) => {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have sufficient priviledges.");

		let toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
		if (!toMute) return message.channel.sendMessage("You must specify a user to mute.");

		if (toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
		if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You do not have sufficient priviledges to mute this member.");

		let role = message.guild.roles.find(r => r.name === "Muted");
		if (!role) {
			try{
				role = await message.guild.createRole({
					name: "Muted",
					color: "#000000",
					permissions: []
				});

				message.guild.channels.forEach(async (channel, id) => {
					await channel.overwritePermissions(role, {
						SEND_MESSAGES: false,
						ADD_REACTIONS: false
					});
				});
			} catch(e) {
				console.log(e.stack);
			}
		}

		if(toMute.roles.has(role.id)) return message.channel.sendMessage("This user is already muted.");

		await toMute.addRole(role);
		
		bot.mutes[toMute.id] = {
			guild: message.guild.id,
			time: Date.now() + parseInt(args[1]) * 1000
		}

		fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
			if (err) throw err;
			message.channel.send("I have sealed their mouth");

		});

		// await toMute.addRole(role);
		// message.channel.send("I have sealed their mouth.");
		
}

module.exports.help = {
	name: "mute"
}