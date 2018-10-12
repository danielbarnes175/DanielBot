# DanielBot

DanielBot is a project created by Daniel Barnes. The bot is a bot for Discord and contains many different commands. The code is in JavaScript and uses NodeJS and the main dependency, DiscordJS.

The bot is hosted on AWS, so it will be online nearly 24/7. (The times it will be offline is if I am making changes to the hosted version. This will only be a temporary disruption of service)

For questions relating to the project, feel free to email me at danielbarnes175@gmail.com

If you would like to request a feature, please create a new issue. I don't have a specific template for you to use, just be sure to state exactly what you would like and I will take a look at it.

-------------------------------------------------------------------------------------------------------

# SETUP


## If you would like to add DanielBot to your server:

[Add DanielBot to my server.](https://discordapp.com/oauth2/authorize?client_id=471814348629868565&permissions=8&scope=bot)

## If you would like to host your own bot using the code from DanielBot:
**Disclaimer:** These instructions are for Windows. Mac and Linux instructions are coming soon^TM.

### Prequisites:

1. [NodeJS](https://nodejs.org/en/)
2. [Git](https://git-scm.com/downloads)
	
### Setup:

1. Open up the command window, or wherever you will be using git.
2. Navigate to the location that you would like to store the files for the bot.
	(For Example: cd Documents)
3. Use the following command:

   `git clone https://github.com/danielbarnes175/DanielBot.git`

	This will download the main files that contain all of the code. We will then need to download the dependencies.
4. Use the following command:

       `npm install`

	Once that is complete use another command:

   	   `npm install -g nodemon`

5. All of the dependencies should now be installed.
6. Create a bot using the Discord Developer Portal. [Here is a guide on how to add a bot in the developer portal](https://discordpy.readthedocs.io/en/rewrite/discord.html)
7. Create a file in the root DanielBot folder. The file will be named as follows:

	'botSettings.json'

8. In that file copy and paste the following code:

```
   {
	   "token": "",
	   "prefix": ""
   }
```

9. Be sure to fill out the information in between the second set of quotations for each line.
The token will be your Bot's token under "Bot" under the bot you created in step 6.
The prefix will be whatever you want to be used before a command. For example, if you add my default DanielBot to your server, it uses the prefix ~

Here is an example of how the botSettings.json file will look.

```
   {
	   "token": "DcxODE0MzQ4NjI5ODY4NTY1.DjqS5w.i55gMQ-ceDdBx-UQsUt1tsuv6Og",
	   "prefix": "~"
   }
 ```

   *Note that using this example will **NOT** work. You must use the token from your bot settings. Do not share this token! If someone else manages to get a hold of your token, they will be able to run their own code as your bot! People can and will use this to completely mess up any servers that your bot is in. (Trust me, I learned from experience)*

10. After this, you can just run the start.bat file in the root directory and the bot will start running!

-------------------------------------------------------------------------------------------------------

# TODO

1. Create a command for playing music. Most Discord bots that I've seen create a "queue" of songs to play. I want my music functionality to just have the ability to request a specific song, and once it plays that song, it forgets about it, rather than keeping it in the playlist.

2. Ability to pull JSONs from the web without an API. Most of the current commands get JSON files from various APIs. I want to construct my own JSON files, or figure out a way to do it without the API so I'm not reliant on others having a working API. (For example some commands got outdated because the APIs went down)

3. Not necessarily a command, but for a game I play "Torn City", there's an API available, and I would like to pull data from that API to notify me of when certain things happen in game. See api.torn.com
