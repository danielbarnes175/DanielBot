const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	message.channel.send("Here are the following commands: ");
	message.channel.send("avatar: Get the avatar of a user with ~avatar @user");
	message.channel.send("bestgirl: Randomly selects the best girl of the server using ~bestgirl");
	message.channel.send("happyday: Randomly generates a happy day using ~happyday");
	message.channel.send("moron: Tells the owner of the bot he is a moron using ~moron");
	message.channel.send("mute: Mutes a user using ~mute @user if you have the correct permissions");
	message.channel.send("unmute: Unmutes a user using ~unmute @user if you have the correct permissions");
	message.channel.send("userinfo: Gives information of a user using ~userinfo @user");
}

module.exports.help = {
	name: "commands"
}