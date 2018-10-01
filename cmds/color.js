/*
 This command sets a user's name as a specific color assuming the role for that color
 is already created in the server. Role must start with '#' to be a valid role.

 Usage is defined as ~color #blue
 This sets the user's color as blue.
 ~color #red would set the user's color as red.
*/
module.exports.run = async (bot, message, args) => {
	//Gets a list of all possible color roles in the channel. To be a possible color role,
	//the role must start with '#'
	let colors = message.guild.roles.filter(role => role.name.startsWith("#"));

	//If the user just types ~color
	if (!args[0]) return message.channel.send("Please choose a color");

	//makes the color they selected not be case sensitive for the first letter.
	args[0] = args[0].charAt(0) + args[0].charAt(1).toUpperCase() + args[0].slice(2);

	//Finds the role that corresponds to the color they want to set their name to.
	let role = message.guild.roles.find(r => r.name === args[0]);
	if (!role) return message.channel.send("Please choose a valid color.");

	//Sets the user that will have their name change colors.
	let colored = message.member;
	//If they already have the color set.
	if(colored.roles.has(role.id)) return message.channel.send("You're already that color!");
	//Removes all other colors the user might have. This makes it so when a user switches from
	//for example, Yellow to Blue, they won't keep the role for Yellow.
	await colored.removeRoles(colors);

	//Sets the user to that color and notifies them.
	colored.addRole(role.id);
	message.channel.send("You are now that color.");
}

module.exports.help = {
	name: "color"
}