const Discord = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'Startet eine Umfrage!',
    cooldown: 60,
    async execute(message, args, client) {

        if(message.author.bot) return

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




    message.delete()
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(embedpermission)
    let pollChannel = message.mentions.channels.first()
    if(!pollChannel) return message.channel.send(embedfinduser)
    let pollDescription = args.slice(2).join(' ')
    if(!pollDescription) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a text!"))


        let embedpoll = new Discord.MessageEmbed()
        .setTitle(`📊 Poll! started by: ${message.author.username} 📊`)
        .setDescription(`**${pollDescription}**`)
        .setColor("RANDOM")
        let MessageEmbed = await pollChannel.send(embedpoll)
        

        await MessageEmbed.react('👍')
        await MessageEmbed.react('👎')

    }
}