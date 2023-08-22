const Discord = require('discord.js')
const mongoose = require('mongoose')

const warns = require('../models/warns')

module.exports = {
    name: 'warn',
    description: 'Warnt einen Benutzer!',
    cooldown: 3,
    execute(message, args, client) {

        const embedpermission = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setTitle("Unausreichende Berechtigung")
        .setDescription(`Du bist nicht berechtigt, diesen Befehl auszuführen!`)
        .setFooter("Mehr Infos dazu bekommst du im Support!")

        const embedfinduser = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setTitle("Benutzer Erwähnen")
        .setDescription('__Wie Erwähne ich einen Benutzer:__\n1. @username - Erwähnt einen User in dem du nach seinem Namen suchst\n2. Rechtsklick => @username - Mache einen Rechtsklick auf einen Benutzer und drücke auf "Erwähnung"')


        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        if(!mentionedMember) return message.channel.send(embedfinduser)
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(embedpermission)
        const reasonn = args.slice(2).join(" ")
        if(!reasonn) return message.channel.send(new Discord.MessageEmbed().setDescription("**Ein Fehler ist aufgetreten:** Du musst angeben, warum du den Benutzer Warnen möchtest!"))

        warns.findOne({ Guild: message.guild.id, User: mentionedMember.id }, async(err, data) =>{
            if(err) console.log(err)
            if(!data){
                let newWarns = new warns({
                    User: mentionedMember.id,
                    Guild: message.guild.id,
                    Warns:[
                        {
                        Moderator: message.author.id,
                        Reason: args.slice(2).join(" ")
                        }
                    ]
                })
                newWarns.save()
                message.channel.send(`${mentionedMember.user.tag} wurde wegen **${args.slice(2).join(" ")}** gewarnt!`)
            }else{
                data.Warns.unshift({
                    Moderator: message.author.id,
                    Reason: args.slice(2).join(" ")
                })
                data.save()
                message.channel.send(`${mentionedMember.user.tag} wurde wegen **${args.slice(2).join(" ")}** gewarnt! Warns: **${data.Warns.length}**`)
            }
        })


    }
}