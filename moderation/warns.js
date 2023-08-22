const warns = require('../models/warns')
const Discord = require('discord.js')

module.exports = {
    name: 'warns',
    description: "List all warns of a member!",
    aliases: ["warnings"],
    cooldown: 3,
    execute(message, args, client) {

        const embedfinduser = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setTitle("Benutzer Erwähnen")
        .setDescription('__Wie Erwähne ich einen Benutzer:__\n1. @username - Erwähnt einen User in dem du nach seinem Namen suchst\n2. Rechtsklick => @username - Mache einen Rechtsklick auf einen Benutzer und drücke auf "Erwähnung"')



        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        if(!mentionedMember) return message.channel.send
        warns.find({ Guild: message.guild.id, User: mentionedMember.id }, async(err, data) => {
            if(err) console.log(err)
            if(!data.length) return message.channel.send(`${mentionedMember.user.tag} hat keine vorhandenen Warns!`)
            const embedwarns = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag)
            .setTitle(`${mentionedMember.user.tag}'s Warns in **${message.guild.name}**!`)
            .setDescription(data.map(d => {
                return d.Warns.map((w,i) => `\`\`\`${i} - Moderator: ${message.guild.members.cache.get(w.Moderator).user.tag}\nReason: ${w.Reason}\`\`\` `).join("")
            }))
            message.channel.send(embedwarns)
        })

    }


}