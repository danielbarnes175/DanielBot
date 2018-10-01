/*
 This command lists out all the possible colors a user may select their name to be using ~color

 Usage is defined as ~colors
*/
module.exports.run = async (bot, message, args) => {
	//Gets a list of roles that are colors able to be assigned. Roles must start with '#' to be valid.
	let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
	if (colors.size < 1) return message.channel.send("There aren't any colors :(");

	//Joins all of the colors in the array into one string with a space inbetween each color.
	//Sends this as a message. Sends a second message explaining how to use the ~color command.
	message.channel.send(colors.array().join(" "));
	message.channel.send("You can set your color with \"~color #color\"");

}

module.exports.help = {
	name: "colors"
}