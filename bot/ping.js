const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'ping',
    description: 'Zeigt die Reaktionszeit/Ping in ms an!',
    aliases: ['p'],
    cooldown: 3,
    execute(message, args, client) {

        const embedping = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("PING!")
        .setDescription("Pong! :ping_pong: Takes "+client.ws.ping+"ms")

        return message.channel.send(embedping)
    }
}