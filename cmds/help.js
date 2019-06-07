const fs = require('fs')
const Discord = require('discord.js')

/*
 This command returns a list of all commands currently available to use by the bot.

 Usage is defined as ~help
*/
module.exports.run = async (bot, message, args) => {
  var name = ''
  var desc = ''
  var usage = ''

  // Find all of the .js files in the cmds folder.
  fs.readdir('./cmds/', (err, files) => {
    if (err) console.error(err)

    let jsfiles = files.filter(f => f.split('.').pop() === 'js')

    // If the user is asking for help with a specific command.
    if (args[0] != null) {
      if (!jsfiles.includes(args[0] + '.js')) return message.channel.send('Please specify a valid command. Try ~help without parameters.')
      // Grab all of the information listed for each command.
      let props = require(`./${args[0]}`)
      name = props.help.name
      desc = props.help.description
      usage = props.help.usage

      // Create a new RichEmbed that gives information on the specific command.
      let embed = new Discord.RichEmbed()
        .setTitle(`${name}`)
        .setDescription(`${desc}`)
        .addField('Usage', `${usage}`)
        .setColor('f21d4b')

      message.channel.send(embed)
    } else {
      // Iterate through every file and make the name just the filename
      jsfiles.forEach((f, i) => {
        // Get rid of the .js at the end of each filename
        jsfiles[i] = jsfiles[i].substring(0, jsfiles[i].length - 3)
      })

      // Create a new RichEmbed that contains all of the commands.
      let embed = new Discord.RichEmbed()
        .setTitle('Commands')
        .setColor('f21d4b')
        .setDescription(jsfiles)

      message.channel.send(embed)
    }
  })
}

module.exports.help = {
  name: 'help',
  description: 'Gives information about every command.',
  usage: '~help or ~help command'
}
