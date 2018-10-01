/*
 This command gives the avatar of a user
 Usage can be ~avatar or ~avatar @user
 If a user is specified, it will return the user's avatar, otherwise it will return the avatar
 of the one using the command.
*/
module.exports.run = async (bot, message, args) => {
	//Lets the user know the avatar is being generated because this may take a few seconds.
	let msg = await message.channel.send("Generating avatar...");

	//Sets who the avatar is being generated from. Checks first if there is a user, otherwise
	//it gets the avatar of the person using the command.
	let who = message.mentions.users.first() || message.author;

	//Sends the image as a file in discord.
	message.channel.send({files: [
		{
			attachment: who.displayAvatarURL,
			name: "avatar.png"
		}
	]})

	//Deletes the "Generating avatar..." message.
	msg.delete();
}

module.exports.help = {
	name: "avatar"
}