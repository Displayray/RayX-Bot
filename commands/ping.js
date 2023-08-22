const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'ping',
    description: 'zeigt den wert der Reaktionszeit an!',
    aliases: ['p'],
    cooldown: 3,
    execute(message, args, client) {

        const embedping = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("PING!")
        .setDescription("Pong! :ping_pong: Dauerte "+client.ws.ping+"ms")

        return message.channel.send(embedping)
    }
}