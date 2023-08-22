const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'help-rayx',
    description: 'Zeigt alle Hilfe Informationen!',
    aliases: ['h-rx'],
    cooldown: 30,
    execute(message, args, client) {


        const helpembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`Help RayX`)
        .setDescription(`All RayX Informations:`)
        .addField(":robot: **RayX**: ", `\u200b`)
        .addField("**Name**: ", "RayX Development")
        .addField("**Gegründet**: ", "Fri Sep 04 2020")
        .addField("**Owner**: ", "Displayray#2041")
        .addField("**Bot**: ", client.user)
        .addField("**Bot Invite**: ", "<https://discord.com/api/oauth2/authorize?client_id=751460959884804256&permissions=8&scope=bot>")
        .addField("**Bot Developed by**: ", "Displayray#2041")
        .addField("**Mehr Bot infos =>** ", "x!botinfo")
        .addField("Commands:", "\u200b")
        .addField("`botinfo`", "Shows the infos about this Bot!")
        .addField("`invite`", "Sends a Bot-Invite!")
        .addField("`ping`", "Shows the Bots ping!")
        .addField("`suggest`", "Sends us your suggestion!")
        .addField("`rayxsupport`", "Contact us!")

        .addField("\u200b", "\u200b")
        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`x!rayxsupport (inhalt)`\nOr join our Support Server:\nhttps://discord.gg/C6sqJxu")

        return message.channel.send(helpembed)
    }
}