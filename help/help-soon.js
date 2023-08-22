const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'help-soon',
    description: 'Zeigt alle Hilfe Informationen!',
    aliases: ['h-s'],
    cooldown: 30,
    execute(message, args, client) {


        const helpembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(message.guild.iconURL())
        .setTitle(`Help Soon`)
        .setDescription(`A list of things who coming soon!:`)
        .addField(":arrow_right: **Coming Soon**: ", `\u200b`)
        .addField("Lots of commands are in production!", "Just wait \:D")
        .addField("`Per Server Commands`", "You can create Custom Commands. ")



        .addField("\u200b", "\u200b")
        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`x!rayxsupport (inhalt)`\nOr join our Support Server:\nhttps://discord.gg/C6sqJxu")

        return message.channel.send(helpembed)
    }
}