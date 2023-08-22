const Discord = require('discord.js')



module.exports = {
    name: 'unmute',
    description: 'Entmuted einen Benutzer!',
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

        let role = message.guild.roles.cache.find(role => role.name === "Muted");

        if (!role) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** I cant find the 'Muted' role.\nPlease create one! If you dont know how, then contact us!"))
        const reason = args.slice(3).join(" ")

        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(embedpermission)
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** I dont have the perms to manage roles!"))
        if (!args[1]) return message.channel.send(embedfinduser)
        if (!mentionedMember) return message.channel.send(embedfinduser)
        if (!mentionedMember.roles.cache.has(role)) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** This member isn't muted!"))
        if (!args[2]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide why you will tempmute this member!"))
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant unmute this Member!"))
        }
        if (mentionedMember.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant unmute yourself!"))
        var embedumute = new Discord.MessageEmbed()
        .setAuthor(`Runned by: ${message.author.tag}`, message.author.avatarURL())
        .setTitle(`**Action: UNMUTE**`)
        .setThumbnail(mentionedMember.user.displayAvatarURL())
        .setColor("RED")
        .setTimestamp()
        .setDescription(`
    **Benutzer:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
    **Aktion:** Entmute
    **Grund:** ${reason || "Nicht angegeben"}
    **Channel:** ${message.channel}
        `)
        .addField(`__User__: `, `${mentionedMember} - ${mentionedMember.id}`)
        .addField(`__Unmuted by__: `, `${message.author} - ${message.author.id}`)
        .addField(`__Reason__: `, `${reason || "None"}`)
        message.channel.send(embedumute)
        mentionedMember.roles.remove(role.id)
        return undefined
    }
    
}