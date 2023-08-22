const Discord = require('discord.js')
const canva = require('canvacord');

module.exports = {
    name: 'trigger',
    description: 'Triggered!',
    cooldown: 120,
    async execute(message, args, client) {
        let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"})

        let image = await canva.trigger(avatar)

        let triggered = new Discord.MessageAttachment(image, "triggered.gif")

        return message.channel.send(triggered)
    }
}