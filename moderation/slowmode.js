const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'slowmode',
    description: 'Legt den Slow-Modus eines Channels fest!',
    cooldown: 5,
    execute(message, args, client) {
        if(message.author.bot) return
        if(!message.content.startsWith(prefix)) return

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
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(embedpermission)
        if (!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a cooldown in seconds!"))
        if (!isNaN) return message.channel.send(new Discord.MessageEmbed().setDescription(`**An Error occurred:** Specification is not a number!`))

        message.channel.setRateLimitPerUser(args[1]) 
        return message.channel.send(new Discord.MessageEmbed().setTitle(smchannel).setDescription(`**Slowmode set to: ${args[1]}seconds!**`))
  
    }
}