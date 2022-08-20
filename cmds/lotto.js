const fs = require('fs')
const Discord = require('discord.js')

/*
 This command starts a raffle for the server. Anyone can join with ~join

 When the person raffling wants to select a winner, they can type in ~draw.
*/
module.exports.run = async (bot, message, args) => {
  var body = JSON.parse(fs.readFileSync('./lotto.json', 'utf8'))
  var server = message.guild.id

  for (var i = 0; i < body.servers.length; i++) {
    if (body.servers[i].server == server) return message.channel.send('There is already a lotto running!')
  }

  if (args.length === 0) return message.channel.send('Please provide what you are lotto-ing, i.e. ~lotto 1 frog')

  let lottoStarter = message.author.id
  let item = ''

  for (var i = 0; i < args.length; i++) {
    if (i != args.length - 1) {
      item += args[i] + ' '
    } else {
      item += args[i]
    }
  }

  let newServer = {
    'server': server,
    'item': item,
    'starter': lottoStarter,
    'entrants': []
  }

  body.servers.push(newServer)

  fs.writeFile('./lotto.json', JSON.stringify(body, null, 2), err => {
    if (err) throw err
  })

  let embed = new Discord.RichEmbed()
    .setTitle('Lotto Started!')
    .setDescription(`A lotto has been started!`)
    .addField('Item', `${item}`)
    .addField('How To Join', 'Type ~join to join!')
    .setColor('f21d4b')

  return message.channel.send(embed)
}

module.exports.help = {
  name: 'lotto',
  description: 'Raffle something with this command! users can join with ~join and you can pick a person with ~draw',
  usage: '~lotto the thing you are raffling'
}
