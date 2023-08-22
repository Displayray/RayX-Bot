const Discord = require('discord.js')
const canva = require('canvacord');

module.exports = {
    name: 'catched',
    description: 'Catched!',
    aliases: ["jail"],
    useage: "》Usage:\n``<Tag Member with @>```",
    cooldown: 120,
    async execute(message, args, client) {
        const mentionedMember = message.mentions.members.first()
        if(!mentionedMember) {
            let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"})

            let image = await canva.jail(avatar)
    
            let jail = new Discord.MessageAttachment(image, "jail.gif")
    
            return message.channel.send(jail)
        }


        let avatar = mentionedMember.user.displayAvatarURL({dynamic: false, format: "png"})

        let image = await canva.jail(avatar)

        let jail = new Discord.MessageAttachment(image, "jail.gif")

        return message.channel.send(jail)
    }
}