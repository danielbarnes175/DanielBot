/*
 This command sends a referral link to the Online Text Based MMORPG "Torn City"

 Usage is defined as ~torn
*/
module.exports.run = async (bot, message, args) => {
	message.channel.send("Have you ever played Torn? Try it out here: https://www.torn.com/1605235");
}

module.exports.help = {
	name: "torn",
	description: "Provides a link to the online text based MMORPG \"Torn City\"",
	usage: "~torn"
}