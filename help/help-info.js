const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'help-info',
    description: 'Zeigt alle Hilfe Informationen!',
    aliases: ['h-i'],
    cooldown: 30,
    execute(message, args, client) {


        const helpembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`Help Info`)
        .setDescription(`A list of all Info Commands:`)
        .addField(":pencil: **Info**: ", `\u200b`)
        .addField("`avtar`", "Shows the Avatar!")
        .addField("`channelinfo (#channel)`", "Shows Info about the mentioned channel!")
        .addField("`usersid (@user)`", "Shows the ID of the mentioned member!")
        .addField("`userstag (@user)`", "Shows the Tag of the mentioned member!")
        .addField("`roleinfo (rolename)`", "Shows the Info about the role!")
        .addField("`serverinfo`", "Shows the Info about the Server!")
        .addField("`userinfo (@user)`", "Shows the Info of the mentioned member!")

        .addField("\u200b", "\u200b")
        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`x!rayxsupport (inhalt)`\nOr join our Support Server:\nhttps://discord.gg/C6sqJxu")

        return message.channel.send(helpembed)
    }
}