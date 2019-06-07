/*
 This command returns a random user in the server.
 Usage is defined as ~bestgirl
*/
module.exports.run = async (bot, message, args) => {
  // Gets an array of all the members in the server.
  let members = Array.from(message.member.guild.members)

  // Randomly generates an integer from 0-number of members in the server.
  var who = Math.floor(Math.random() * members.length)

  // Sends a message saying which user is the best girl.
  message.channel.send(`${members[who][1]} is best girl.`)
}

module.exports.help = {
  name: 'bestgirl',
  description: 'Returns the best girl in the server',
  usage: '~bestgirl'
}
