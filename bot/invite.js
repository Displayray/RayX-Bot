const Discord = require('discord.js')

module.exports = {
    name: 'invitebot',
    description: 'Schickt einen Bot Invite!',
    cooldown: 7200,
    execute(message, args, client) {

        const embedinv = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Bot Invite:")
        .setDescription(`<https://discord.com/api/oauth2/authorize?client_id=759110596896882751&permissions=8&scope=bot>`)

        return message.channel.send(embedinv)
    }
}