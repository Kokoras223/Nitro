exports.run = (message, bot, send) => {
  
    if (!bot.music.registry.has(message.channel.guild.id)) return send("**There is no music playing**")

    let player = bot.music.registry.get(message.channel.guild.id)

    if (player.checkPerm(message)) return

    player.setChannel(message.channel.id)

    send("**Now Playing messages will be sent to this channel**")

}

exports.conf = {
  userPerm:[],
  botPerm:["SEND_MESSAGES"],
  coolDown:0,
  dm:true,
  category:"",
  help:"",
  args:"",
}