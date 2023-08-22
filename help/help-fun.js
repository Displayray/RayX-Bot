const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'help-fun',
    description: 'Zeigt alle Hilfe Informationen!',
    aliases: ['h-f'],
    cooldown: 30,
    execute(message, args, client) {


        const helpembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(message.guild.iconURL())
        .setTitle(`Help Fun`)
        .setDescription(`A list of all Fun Commands:`)
        .addField(":grin: **Fun**: ", `\u200b`)

        .addField("`weather (City)`", "Shows the weather of a city!")
        .addField("`ascii (text)`", "Shows text as ascii!")
        .addField("`calculate (math-question)`", "Solves a math question!")
        .addField("`translate (language shortcut) (text)`", "Translates a text!")
        .addField("`batslap (@user)`", "Meme Picture")
        .addField("`beautiful (@user)`", "Meme Picture")
        .addField("`bedjoke (@user)`", "Meme Picture")
        .addField("`changemymind (Text)`", "ChangeMyMind Meme")
        .addField("`deleteshit (@user)`", "Meme Picture")
        .addField("`jail (@user)`", "Meme Picture")
        .addField("`rip (@user)`", "Meme Picture")
        .addField("`trigger`", "Meme Picture")
        .addField("`color (HEX-Code)`", "Shows HEX-Code as picture!")
        .addField("`qrcode (link)`", "Creates a QR-Code!")
        .addField("`say (#channel) (text)`", "Sends a message to a channel!")
        .addField("`rank`", "Shows your XP/Rank!")
        .addField("`leaderboard`", "Shows the leaderboard (Top 5 XP)!")


        .addField("\u200b", "\u200b")
        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`x!rayxsupport (inhalt)`\nOr join our Support Server:\nhttps://discord.gg/C6sqJxu")

        return message.channel.send(helpembed)
    }
}