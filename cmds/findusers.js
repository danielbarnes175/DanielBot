/*
 This command will return a list of users with a specific phrase in their name.
 Usage is defined as ~findusers phrase
 
 For example,
 In a server with users @dave and @dave123, if someone were to type ~findusers dave
 It would return both @dave and @dave123. If the user were to type ~findusers 123
 It would only return @dave123
*/	
module.exports.run = async (bot, message, args) => {
	//Creates an array of all users in all servers that the bot is currently in.
	//This means that the findusers isn't just limited to the server that the command
	//was originally used in.
	let users = bot.users;

	//The first argument provided is what will be searched for in user's names.
	let searchTerm = args[0];
	if (!searchTerm) return message.channel.send("Please provide a search term.");

	//Finds all the users with the searchTerm in a part of their name.
	let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
	if (!matches) return message.channel.send("There are no users with that term in their name");

	//Sends the list of users, separated by a comma.
	message.channel.send(matches.map(u => u.tag).join(", "));
}

module.exports.help = {
	name: "findusers",
	description: "Returns list of users with a specific phrase in their name that are in servers that also contain DanielBot.",
	usage: "~findusers phrase"
}