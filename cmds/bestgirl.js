module.exports.run = async (bot, message, args) => {
	let members = Array.from(message.member.guild.members);
	var who = Math.floor(Math.random() * members.length);
	message.channel.send(`${members[who][1]} is best girl.`);
}

module.exports.help = {
	name: "bestgirl"
}