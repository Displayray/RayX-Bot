const Discord = require('discord.js')
const canva = require('canvacord');

module.exports = {
    name: 'beautiful',
    description: 'beautiful!',
    useage: "》Usage:\n``<Tag Member with @>```",
    cooldown: 120,
    async execute(message, args, client) {
        const mentionedMember = message.mentions.members.first()
        if(!mentionedMember) {
            let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"})

            let image = await canva.beautiful(avatar)
    
            let btfl = new Discord.MessageAttachment(image, "btfl.gif")
    
            return message.channel.send(btfl)
        }


        let avatar = mentionedMember.user.displayAvatarURL({dynamic: false, format: "png"})

        let image = await canva.beautiful(avatar)

        let btfl = new Discord.MessageAttachment(image, "btfl.gif")

        return message.channel.send(btfl)
    }
}