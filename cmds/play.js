const Discord = module.require("discord.js");
//const discord-music = module.require("discord.js-music");

module.exports.run = async (bot, message, args) => {
	//Plays audio from a YouTube video
	if (!message.member.voiceChannel) return message.channel.send("Please join a voice channel.");
	if (!args[0]) return message.channel.send("Please give a valid URL");
}

module.exports.help = {
	name: "play"
}