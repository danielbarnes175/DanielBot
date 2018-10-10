/*
 This command takes multiple people and randomly decides which user is correct.

 Usage is defined as ~whichoneisright @user1 @user2
*/
module.exports.run = async (bot, message, args) => {
	let numberOfPeople = args.length;

	//Randomly decides which argument is "correct"
	let whichPerson = Math.floor(Math.random() * numberOfPeople);

	//Returns that whichever argument was selected is correct.
	message.channel.send(args[whichPerson] + " is correct.")
}

module.exports.help = {
	name: "whichoneisright",
	description: "Given any number of parameters, decides which one is right",
	usage: "~whichoneisright thing1 thing2 thing3 etc"
}