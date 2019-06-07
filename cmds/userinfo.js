const Discord = module.require('discord.js')

/*
 This command gives information about a user.

 Usage is defined as ~userinfo @user or ~userinfo
 If a user is defined, it will give information about that user, otherwise it will give information
 about the one using the command.
*/
module.exports.run = async (bot, message, args) => {
  // Sets the user who will have information given for. It is either the first user mentioned,
  // or the person that used te command.
  let who = message.mentions.users.first() || message.author

  // Creates a RichEmbed with information about the user.
  let embed = new Discord.RichEmbed()
    .setAuthor(who.username)
    .setDescription("This is the user's info!")
    .setColor('#9B59B6')
    .addField('Full Username', `${who.username}#${who.discriminator}`)
    .addField('ID', who.id)
    .addField('Created At', who.createdAt)

  // Sends the embed in the text channel.
  message.channel.send({ embed: embed })
}

module.exports.help = {
  name: 'userinfo',
  description: 'Provides information about a user',
  usage: '~userinfo or ~userinfo @user'
}
