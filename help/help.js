const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'help',
    description: 'Zeigt alle Hilfe Informationen!',
    aliases: ['h'],
    cooldown: 30,
    execute(message, args, client) {

        const helpembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(message.guild.iconURL())
        .setTitle(`Prefix: ${prefix}`)
        .setDescription(`New updates **Coming Soon**`)
        .addField(":pencil: **Info**: ", "`help-info`", true)
        .addField(":shield: **Moderation**: ", "`help-moderation`", true)
        .addField(":grin: **Fun**: ", "`help-fun`", true)
        .addField(":label: **Custom Commands**: ", "`help-tags`", true)
        .addField(":robot: **RayX**: ", "`help-rayx`", true)
        .addField(":arrow_right: **Coming Soon**: ", "`help-soon`", true)
        .addField("\u200b", "\u200b")
        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`x!rayxsupport (inhalt)`\nOr join our Support Server:\nhttps://discord.gg/C6sqJxu")


        return message.channel.send(helpembed)
        
    }
}