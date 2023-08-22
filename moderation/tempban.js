const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'tempban',
    description: 'Bannt einen Benutzer temporär!',
    aliases: ['tban'],
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



        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(embedpermission)

        if(!mentionedMember) return message.channel.send(embedfinduser)
        const regex = /\d+[smhdw]/.exec(args[2])
        if (!regex) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide how long you will tempban this member! \nor\nInvalid specification! => x!tempban (@user) 1s/m/h/d/w (reason)"))
        const reason = args.slice(3).join(" ")
        if(!reason) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide why you would tempban this member!"))
        if (ms(regex[0]) > 214748367) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant tempban a member longer than 25 days (will be fixed soon)!"))
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant ban this member!"))
        }
        if (mentionedMember.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant tempban yourself!"))



        const embedtban = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(mentionedMember.user.avatarURL())
        .setAuthor(`Runned by: ${message.author.tag}`, message.author.avatarURL())
        .setTitle(`**Action: TEMPBAN**`)
        .addField(`__User__: `, `${mentionedMember} - ${mentionedMember.id}`)
        .addField(`__Banned by__: `, `${message.author} - ${message.author.id}`)
        .addField(`__Reason__: `, reason)
        .addField(`__Duration__: `, regex)
        .setTimestamp()

        const embeddm = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(`Auto Notification`)
        .setTitle(`You got tempbanned from the ${message.guild.name} Server!`)
        .addField("__Reason__: ", reason)
        .addField("__Duration__: ", regex)

        try {
            mentionedMember.user.send(embeddm)
            .then(() => message.channel.send(new Discord.MessageEmbed().setDescription(`**Send:** Message has send to ${mentionedMember}!`)))
            
        } catch(err) {
            message.channel.send(new Discord.MessageEmbed().setDescription(`**An Error occurred:** Cannot send a message to this user!`))
        }
        message.channel.send(embedtban)
        mentionedMember.ban()
        setTimeout(() => {
            message.guild.members.unban(mentionedMember.id)
            message.channel.send(new Discord.MessageEmbed().setTitle("TEMPBAN").setColor("RED").setDescription(`<@${mentionedMember.id}> got unbanned after **${args[2]}**!`))
        }, ms(regex[0]))
        return undefined
    }
}