/*
 This command takes multiple people and randomly decides which user is correct.

 Usage is defined as ~whichoneisright @user1 @user2
*/
module.exports.run = async (bot, message, args) => {

	let numberOfPeople = args.length;

	let whichPerson = Math.floor(Math.random() * numberOfPeople);

	message.channel.send(args[whichPerson] + " is correct.")
}

module.exports.help = {
	name: "whichoneisright"
}