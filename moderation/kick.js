const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'kick',
    description: 'Kickt einen Benutzer!',
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





        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(embedpermission)
        if(!mentionedMember) return message.channel.send(embedfinduser)
        const reason = args.slice(2).join(" ")
        if(!reason) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide why you will kick this Member!"))
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant kick this Member!"))
        }
        if (mentionedMember.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You cant kick yourself!"))


        const embedkick = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(mentionedMember.user.avatarURL())
        .setAuthor(`Runned by: ${message.author.tag}`, message.author.avatarURL())
        .setTitle(`**Action: KICK**`)
        .addField(`__User__: `, `${mentionedMember} - ${mentionedMember.id}`)
        .addField(`__Kicked by__: `, `${message.author} - ${message.author.id}`)
        .addField(`__Reason__: `, reason)
        .setTimestamp()

        const embeddm = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(`Auto Notification`)
        .setTitle(`You got kicked from the ${message.guild.name} Server!`)
        .addField("__Reason__: ", reason)


        try {
            mentionedMember.user.send(embeddm)
            .then(() => message.channel.send(new Discord.MessageEmbed().setDescription(`**Send:** Message has send to ${mentionedMember}!`)))
            
        } catch(err) {
            message.channel.send(new Discord.MessageEmbed().setDescription(`**An Error occurred:** Cannot send a message to this user!`))
        }
        mentionedMember.kick()
        message.channel.send(embedkick)

    }
}