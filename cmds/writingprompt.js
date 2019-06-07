const discord = require('discord.js')
const fs = require('fs')

/*
 Generates a random writing prompt for speed writing.

 Usage is defined as ~writingprompt
*/
module.exports.run = async (bot, message, args) => {
  var body = JSON.parse(fs.readFileSync('./words/writingprompts.json', 'utf8'))
  let prompt = ''
  let genre = ''
  let misc = ''
  let keyPoints = 0

  while (keyPoints < 2) {
    let i = Math.floor(Math.random() * body.plot_points.length)
    if (body.plot_points[i].seen == false) {
      prompt += body.plot_points[i].point
      body.plot_points[i].seen = true
      keyPoints += 1
      if (keyPoints == 1) prompt += ' + '
    }
  }

  while (genre == '') {
    i = Math.floor(Math.random() * body.genres.length)
    if (body.genres[i].seen == false) {
      genre = body.genres[i].genre
      body.genres[i].seen = true
    }
  }

  while (misc == '') {
    i = Math.floor(Math.random() * body.misc.length)
    if (body.misc[i].seen == false) {
      misc = body.misc[i].misc
      body.misc[i].seen = true
    }
  }

  let embed = new discord.RichEmbed()
    .setTitle('Writing Prompt')
    .setDescription(genre)
    .addField('Key Plot Points', prompt)
    .addField('Stipulation', misc)
    .setColor('FFFFFF')

  message.channel.send(embed)
}

module.exports.help = {
  name: 'writingprompt',
  description: 'Generates a random writing prompt for speed writing.',
  usage: '~writingprompt'
}
