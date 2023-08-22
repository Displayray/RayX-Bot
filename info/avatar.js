const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'avatar',
    description: 'Shows the avatar of a Member',
    aliases: ['getusersavatar', 'usersavatar'],
    useage: "》Usage:\n``<Tag Member with @>```",
    cooldown: 3,
    execute(message, args, client) {
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[1]) 

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



        
        if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(embedpermission)

        const embedavatarauthor = new Discord.MessageEmbed()
        .setTitle(`Avatar`)
        .setDescription(`Avatar von ${message.author}!`)
        .setImage(message.author.avatarURL())

        if(!mentionedMember) return message.channel.send(embedavatarauthor)

        const embedavatar = new Discord.MessageEmbed()
        .setTitle(`Avatar`)
        .setDescription(`Avatar von ${mentionedMember}!`)
        .setImage(mentionedMember.user.avatarURL())

        return message.channel.send(embedavatar)
    }
}