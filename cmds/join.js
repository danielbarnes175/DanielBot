const fs = require('fs')
const Discord = require('discord.js')

/*
 This command allows a user to join the raffle..
*/
module.exports.run = async (bot, message, args) => {
  var body = JSON.parse(fs.readFileSync('./lotto.json', 'utf8'))
  var item = ''

  for (var i = 0; i < body.servers.length; i++) {
    if (body.servers[i].server == message.guild.id) {
      if (message.author.id == body.servers[i].starter) {
        let embed = new Discord.RichEmbed()
          .setTitle(`You can't enter your own lotto, `)
          .setDescription(`${message.author}`)
          .setColor('FFFF00')
        return message.channel.send(embed)
      }

      for (var j = 0; j < body.servers[i].entrants.length; j++) {
        if (body.servers[i].entrants[j].id == message.author.id) {
          let embed = new Discord.RichEmbed()
            .setTitle(`You are already entered, `)
            .setDescription(`${message.author}`)
            .setColor('FFFF00')
          return message.channel.send(embed)
        }
      }

      let entrant = { 'id': message.author.id, 'name': message.author.username }

      item = body.servers[i].item
      body.servers[i].entrants.push(entrant)

      fs.writeFile('./lotto.json', JSON.stringify(body, null, 2), err => {
        if (err) throw err
      })

      let embed = new Discord.RichEmbed()
        .setTitle('Lotto!')
        .setDescription(`${message.author} has been added to the raffle for:`)
        .addField(`${item}`, 'Join the lotto with ~join!')
        .setColor('FFFF00')

      return message.channel.send(embed)
    }
  }
  let embed = new Discord.RichEmbed()
    .setTitle('There is no lotto currently running!')
    .setColor('FFFF00')

  return message.channel.send(embed)
}

module.exports.help = {
  name: 'join',
  description: 'Join the raffle, assuming there is one running of course.',
  usage: '~join'
}
