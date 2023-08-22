const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'Löscht Nachrichten bezogen auf einer Anzahl!',
    aliases: ['purge'],
    cooldown: 3,
    execute(message, args, client) {
        message.delete()



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




        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embedpermission);
        if(!args[1]) return message.reply(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide how many messages you want to delete!"))
        message.channel.bulkDelete(args[1]);

        var embedclear = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL())
        .setColor("RED")
        .setDescription(`I deleted ${args[1]} messages!`)
       
        message.channel.send(embedclear)
    }
}