/*
 This command lists out all the possible colors a user may select their name to be using ~color

 Usage is defined as ~colors
*/
module.exports.run = async (bot, message, args) => {
	let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
	if (colors.size < 1) return message.channel.send("There aren't any colors :(");

	message.channel.send(colors.array().join(" "));

}

module.exports.help = {
	name: "colors"
}