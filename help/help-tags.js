const Discord = require('discord.js')

module.exports = {
    name: 'help-tags',
    description: 'Zegit alle infos zu den Tags',
    aliases: ['h-t'],
    cooldown: 30,
    execute(message, args, client) {

        const embedtags = new Discord.MessageEmbed()
        .setColor("GREEM")
        .setTitle("Help Tags")
        .setDescription("*Coming Soon!*")


        .addField("Contact us!", "Report errors, bugs, or submit a request to support!\n`x!rayxsupport (inhalt)`\nOr join our Support Server:\nhttps://discord.gg/C6sqJxu")

        return message.channel.send(embedtags)
    }
}