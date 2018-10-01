const fs = require("fs");
const Discord = require("discord.js");

/*
 This command returns a list of all commands currently available to use by the bot.

 Usage is defined as ~help
*/
module.exports.run = async (bot, message, args) => {

	//Find all of the .js files in the cmds folder.
	fs.readdir("./cmds/", (err, files) => {
	if (err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");

	jsfiles.forEach((f, i) => {
		//Get rid of the .js at the end of each filename
		jsfiles[i] = jsfiles[i].substring(0,jsfiles[i].length-3);
	});

	//Create a new RichEmbed that contains all of the commands.
	let embed = new Discord.RichEmbed()
					.setTitle("Commands")
					.setColor("FFFFFF")
					.setDescription(jsfiles);

	//Send the RichEmbed that contains all of the commands.
	message.channel.send(embed);
	});
	
}

module.exports.help = {
	name: "help"
}