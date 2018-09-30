/*
 This command logs in the console that the person running the bot is a moron.
 There will be no noticeable output for regular users using the command.

 Usage is defined as ~moron
*/
module.exports.run = async (bot, message, args) => {
	let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
	if (colors.size < 1) return message.channel.send("There aren't any colors :(");

	message.channel.send(colors.array().join(" "));

}

module.exports.help = {
	name: "colors"
}