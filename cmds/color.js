/*
 This command logs in the console that the person running the bot is a moron.
 There will be no noticeable output for regular users using the command.

 Usage is defined as ~moron
*/
module.exports.run = async (bot, message, args) => {
	let colors = message.guild.roles.filter(role => role.name.startsWith("#"));

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