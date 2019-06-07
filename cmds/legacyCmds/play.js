const Discord = module.require('discord.js')
// const discord-music = module.require("discord.js-music");

/*
 This command plays the audio from a given YouTube url in the voice channel that the one using
 the command is in.

 Usage is defined as ~play url
*/
module.exports.run = async (bot, message, args) => {
  // Plays audio from a YouTube video
  if (!message.member.voiceChannel) return message.channel.send('Please join a voice channel.')
  if (!args[0]) return message.channel.send('Please give a valid URL')

  let url = args[0]
}

module.exports.help = {
  name: 'play',
  description: 'Plays a song in the voice channel you are currently in.',
  usage: '~play url'
}
