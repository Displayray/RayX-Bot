const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'help-moderation',
    description: 'Zeigt alle Hilfe Informationen!',
    aliases: ['h-m', 'help-mod'],
    cooldown: 30,
    execute(message, args, client) {


        const helpembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(message.guild.iconURL())
        .setTitle(`Help Moderation`)
        .setDescription(`A list of all Moderation Commands:`)
        .addField(":shield: **Moderation**: ", `\u200b`)
        .addField("`ban (@user) (reason)`", "Bans a member permanently from the server!")
        .addField("`clear (number)`", "Deletes messages by the provided number!")
        .addField("`kick (@user) (reason)`", "Kicks a member from the server!")
        .addField("`poll (#channel) (text)`", "Creates a poll in the mentioned channel!")
        .addField("`slowmode (number)`", "Sets the slowmode to the provided bumber(in seconds)")
        .addField("`tempban (@user) (Duration(w,d,h,m,s)) (reason)`", "Bans a member temporarily!")
        .addField("`tempmute (@user) (Duration(w,d,h,m,s)) (reason)`", "Mutes a member temporarily")
        .addField("`unmute (@user)`", "Entmutes a member!")

        .addField("\u200b", "\u200b")
        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`x!rayxsupport (inhalt)`\nOr join our Support Server:\nhttps://discord.gg/C6sqJxu")

        return message.channel.send(helpembed)
    }
}