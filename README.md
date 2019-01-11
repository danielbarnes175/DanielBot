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

**Disclaimer 2:** I highly recommend that you use the bot I host rather than try to set it up on your own. When I add features, I test them on my bot already running, so there may be bugs I don't know about caused by events that only show up when you first add the bot to the server. Additionally, if you want the bot to stay up to date, if you host it on your own it would be your job to update the files. If you use the one that I am hosting, then the files are updated for you (I update them, and push them to production). One more thing is that if you fork the repository instead of cloning it, then if you need any assistance I will be able to see what version of the code you are on. This will allow for more efficient troubleshooting.

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
	   
   **Disclaimer:** If you want to make changes and save them to GitHub, then you should fork the repository, and then clone your forked version rather than use my files.
4. Use the following command:

	  ```npm install```

	Once that is complete use another command:

   	  ```npm install -g nodemon```

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
