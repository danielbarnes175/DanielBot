const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

fs.readdir("./cmds/", (err, files) => {
	if (err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if (jsfiles.length <= 0) {
		console.log("No commands to load.")
		return;
	}

	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i+1}: ${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

bot.on('error', err => {
	console.error(err);
});

bot.on("ready", async () => {
	console.log(` `);
	console.log(`Servers bot is connected to [${bot.guilds.size}]:`);


	bot.guilds.forEach((f, i) => {
	console.log(`${f} connected.`);
	});

	let botCreator = bot.users.get("129000992762101761");
	try {
		botCreator.send(`Bot started on ${bot.guilds.array()} with name ${bot.user.username}`);
	} catch (e) {
		
	}

	console.log(` `);
	console.log('Bot is ready! ' + bot.user.username);

	//Runs through a loop that checks if the mute time for people is up
	bot.setInterval(() => {
		for(let i in bot.mutes) {
			let time = bot.mutes[i].time;
			let guildId = bot.mutes[i].guild;
			let guild = bot.guilds.get(guildId);
			if (!guild) continue;
			let member = guild.members.get(i);
			let mutedRole = guild.roles.find(r => r.name === "Muted");
			if (!mutedRole) continue;

			if(Date.now() > time) {
				// console.log(`${i} is now able to be unmuted`);

				member.removeRole(mutedRole);
				delete bot.mutes[i];

				fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
					if (err) throw err;
					console.log(`I have unmuted ${member.user.tag}.`);
				});
			}
		}
	}, 5000);


	//Creates the invite link and puts it in the console
	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});

bot.on("message", async message => {
	
	let guild = message.guild;
	//If it's by a bot and not in the bot-spam channel on a specific server I have then delete the bot message.
	if (guild && guild.id=='481982947197583360' && message.author.bot && message.channel.name != "bot-spam")
		return message.delete();


	//If it's another bot or if its in a dm, don't do anything.
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	//Ignore if they don't start with '~'
	if (!command.startsWith(prefix)) return;

	let cmd = bot.commands.get(command.slice(prefix.length));
	if (cmd) cmd.run(bot, message, args);

});

bot.login(botSettings.token);