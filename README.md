DanielBot is a project that created by Daniel Barnes. The bot is a bot for Discord and contains many different commands. The code is in JavaScript and uses Node.JS for installing dependencies. The main dependency that is used is Discord.JS

For questions relating to the project, feel free to email me at danielbarnes175@gmail.com

TODO
-------------------------------------------------------------------------------------------------------
1. Update and fix the help commands. Currently it sends each command as a separate message, but this is limited based on the number of commands and Discord's limit on how fast messages can be sent. I plan to fix it by embedding the commands in a Discord.JS RichEmbed

2. Create a command for playing music. Most Discord bots that I've seen create a "queue" of songs to play. I want my music functionality to just have the ability to request a specific song, and once it plays that song, it forgets about it, rather than keeping it in the playlist.

3. Ability to host the bot 24/7. Currently the bot is only running if I'm running the program on my computer. I would prefer if I could figure out how to host is on a separate device so it isn't reliant on me. Currently thinking of hosting it on a Raspberry Pi.

4. Ability to pull JSONs from the web without an API. Most of the current commands get JSON files from various APIs. I want to construct my own JSON files, or figure out a way to do it without the API so I'm not reliant on others having a working API. (For example some commands got outdated because the APIs went down)

5. Add comments to explain what each command does. Pretty self explanatory

6. Not necessarily a command, but for a game I play "Torn City", there's an API available, and I would like to pull data from that API to notify me of when certain things happen in game. See api.torn.com