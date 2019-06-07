/*
 This command logs in the console that the person running the bot is a moron.
 There will be no noticeable output for regular users using the command.

 Usage is defined as ~moron
*/
module.exports.run = async (bot, message, args) => {
  console.log("You're a moron")
}

module.exports.help = {
  name: 'moron',
  description: "Call the person running the bot a moron. You won't see the message, but they will.",
  usage: '~moron'
}
