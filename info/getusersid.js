const Discord = require('discord.js')

module.exports = {
    name: 'getusersid',
    description: 'Shows the ID of a Member!',
    useage: "》Usage:\n``<Tag Member with @>```",
    aliases: ['usersid'],
    cooldown: 3,
    execute(message, args, client) {

        const mentionedMember = message.mentions.members.first() || message.author || message.guild.members.cache.get(args[1])

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

        return message.channel.send(new Discord.MessageEmbed().setTitle("GET USERS ID").setDescription(`**ID:** ${mentionedMember.id}`))
    }
}