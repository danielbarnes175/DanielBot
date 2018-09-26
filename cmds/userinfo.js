const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	let who = message.mentions.users.first() || message.author;
	let embed = new Discord.RichEmbed()
			.setAuthor(who.username)
			.setDescription("This is the user's info!")
			.setColor("#9B59B6")
			.addField("Full Username", `${who.username}#${who.discriminator}`)
			.addField("ID", who.id)
			.addField("Created At", who.createdAt);


		message.channel.send({embed: embed});
}

module.exports.help = {
	name: "userinfo"
}