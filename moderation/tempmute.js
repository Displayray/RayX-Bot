const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'tempmute',
    description: 'Muted einen Benutzer temporär!',
    aliases: ['tmute'],
    cooldown: 3,
    execute(message, args, client) {

        const embedpermission = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setTitle("Insufficient Permissions")
        .setDescription(`You are not authorized to use this command!`)
        .setFooter("You can get more information about this from support!")

        const embedfinduser = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setTitle("Mention a Member")
        .setDescription('__**How to** mention a member:__\n1. @username - Mention a member by their name\n2. Click on them => Mention - Mention a member by clicking on them and press "Mention"')



        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[1])




        //code
        let role = message.guild.roles.cache.find(role => role.name === "Muted");

        if (!role) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** I cant find the 'Muted' role.\nPlease create one! If you dont know how, then contact us!"))
        const reason = args.slice(3).join(" ")
        const regex = /\d+[smhdw]/.exec(args[2])
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(embedpermission)
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** I dont have the perms to manage roles!"))
        if (!args[1]) return message.channel.send(embedfinduser)
        if (!mentionedMember) return message.channel.send(embedfinduser)
        if (mentionedMember.roles.cache.has(role)) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** This member is allready muted!"))
        if (!args[2]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide why you will tempmute this member!"))
        if (!regex) return message.channel.send("Ungültige Angabe!")
        if (ms(regex[0]) > 214748367) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant tempmute a member longer than 25 days (will be fixed soon)!"))
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant tempmute this Member!"))
        }
        if (mentionedMember.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant tempmute yourself!"))
        var embedtmute = new Discord.MessageEmbed()
        .setAuthor(`Runned by: ${message.author.tag}`, message.author.avatarURL())
        .setThumbnail(mentionedMember.user.displayAvatarURL())
        .setColor("RED")
        .setTimestamp()
        .setTitle(`Action: TEMPMUTE`)
        .addField(`__User__: `, `${mentionedMember} - ${mentionedMember.id}`)
        .addField(`__Tempmuted by__: `, `${message.author} - ${message.author.id}`)
        .addField(`__Reason__: `, reason)
        .addField("__Duration__: ", regex)




        message.channel.send(embedtmute)
        mentionedMember.roles.add(role)
        setTimeout(() => {
            if(!mentionedMember.roles.cache.has(role.id)) return undefined
            mentionedMember.roles.remove(role.id)
            message.channel.send(new Discord.MessageEmbed().setDescription(`**${mentionedMember} got unmuted after ${regex[0]}!**`))
        }, ms(regex[0]))
        return undefined

    }
}