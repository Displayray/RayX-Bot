const Discord = require('discord.js')

module.exports = {
    name: 'say',
    description: 'Bot will say a message for you!',
    useage: "》Usage:\n``<#channel> <text>```",
    cooldown: 120,
    async execute(message, args, client) {

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


        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send()

        const saychannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
        if(!saychannel) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to tag a channel!"))

        const say = args.slice(2).join (" ")
        if(!say) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need provide a text!"))

        return saychannel.send(`${say}\nVon: ${message.author.tag}`)

    }
}