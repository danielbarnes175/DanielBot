/*
 This command takes multiple people and randomly decides which user is correct.

 Usage is defined as ~whichoneisright @user1 @user2
*/
module.exports.run = async (bot, message, args) => {
  let numberOfThings = args.length
  if (numberOfThings == 0) return message.channel.send('Please enter in some choices.')

  // Randomly decides which argument is "correct"
  let whichThing = Math.floor(Math.random() * numberOfThings)

  // Returns that whichever argument was selected is correct.
  message.channel.send(args[whichThing] + ' is correct.')
}

module.exports.help = {
  name: 'whichoneisright',
  description: 'Given any number of parameters, decides which one is right',
  usage: '~whichoneisright thing1 thing2 thing3 etc'
}
