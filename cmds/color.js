/*
 This command sets a user's name as a specific color assuming the role for that color
 is already created in the server. Role must start with '#' to be a valid role.

 Usage is defined as ~color #blue
 This sets the user's color as blue.
 ~color #red would set the user's color as red.
*/
module.exports.run = async (bot, message, args) => {
	let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
	if (!args[0]) return message.channel.send("Please choose a color");

	args[0] = args[0].charAt(0) + args[0].charAt(1).toUpperCase() + args[0].slice(2);

	let role = message.guild.roles.find(r => r.name === args[0]);
	if (!role) return message.channel.send("Please choose a valid color.");

	let colored = message.member;
	if(colored.roles.has(role.id)) return message.channel.send("You're already that color!");
	colored.removeRoles(colors);

	await colored.addRole(role.id);
	message.channel.send("You are now that color.");
}

module.exports.help = {
	name: "color"
}