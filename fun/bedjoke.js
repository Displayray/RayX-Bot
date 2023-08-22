const Discord = require('discord.js')
const canva = require('canvacord');

module.exports = {
    name: 'bedjoke',
    description: 'Bedjoke!',
    useage: "》Usage:\n``<Tag Member with @>```",
    cooldown: 120,
    async execute(message, args, client) {
        const mentionedMember = message.mentions.members.first()
        if(!mentionedMember) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to mention/tag a user!"))

        let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"})
        let avatar2 = mentionedMember.user.displayAvatarURL({dynamic: false, format: "png"})

        let image = await canva.bed(avatar, avatar2)

        let btfl = new Discord.MessageAttachment(image, "bed.gif")

        return message.channel.send(btfl)
    }
}