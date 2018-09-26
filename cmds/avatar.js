/*
 This command gives the avatar of a user
 Usage can be ~avatar or ~avatar @user
 If a user is specified, it will return the user's avatar, otherwise it will return the avatar
 of the one using the command.
*/
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