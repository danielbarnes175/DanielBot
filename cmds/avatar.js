module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Generating avatar...");
	let who = message.mentions.users.first() || message.author;

	message.channel.send({files: [
		{
			attachment: who.displayAvatarURL,
			name: "avatar.png"
		}
	]})

	msg.delete();
}

module.exports.help = {
	name: "avatar"
}