/*
 This command will return a list of users with a specific phrase in their name.
 Usage is defined as ~findusers phrase
 
 For example,
 In a server with users @dave and @dave123, if someone were to type ~findusers dave
 It would return both @dave and @dave123. If the user were to type ~findusers 123
 It would only return @dave123
*/	
module.exports.run = async (bot, message, args) => {
	let users = bot.users;

	let searchTerm = args[0];
	if (!searchTerm) return message.channel.send("Please provide a search term.");

	let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
	if (!matches) return message.channel.send("There are no users with that term in their name");

	message.channel.send(matches.map(u => u.tag).join(", "));
}

module.exports.help = {
	name: "findusers"
}