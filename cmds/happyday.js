const discord = require('discord.js')
const fs = require('fs')
// text1 is the list of adjectives
const text1 = fs.readFileSync('./words/adjectivelist.txt').toString('utf-8')
// text2 is the list of nouns
const text2 = fs.readFileSync('./words/nounlist.txt').toString('utf-8')
// text3 is the list of abstract nouns
const text3 = fs.readFileSync('./words/abstractnounlist.txt').toString('utf-8')

/*
 This command generates a random phrase following the struture
 "Happy" + adjective + noun + abstract noun + "Day!"

 Usage is defined as ~happyday
*/
module.exports.run = async (bot, message, args) => {
  // Generates a random phrase following the structure
  // "Happy" + adjective + noun + abstract noun + "Day!"

  // Find the adjective to use
  var adjByLine = text1.split('\n')
  var whichAdj = Math.floor(Math.random() * adjByLine.length)
  var adj = adjByLine[whichAdj]
  adj = adj.charAt(0).toUpperCase() + adj.slice(1)

  // Find the noun to use
  var textByLine = text2.split('\n')
  var whichNoun = Math.floor(Math.random() * textByLine.length)
  var noun = textByLine[whichNoun]
  noun = noun.charAt(0).toUpperCase() + noun.slice(1)

  // Find the abstract noun to use
  var abstractByLine = text3.split('\n')
  var whichAbs = Math.floor(Math.random() * abstractByLine.length)
  var abstract = abstractByLine[whichAbs]
  abstract = abstract.trim()
  abstract = abstract.charAt(0).toUpperCase() + abstract.slice(1)

  // Send the message into the text channel
  message.channel.send('Happy ' + adj + ' ' + noun + ' ' + abstract + ' Day!')
}

module.exports.help = {
  name: 'happyday',
  description: 'Returns a random day',
  usage: '~happyday'
}
