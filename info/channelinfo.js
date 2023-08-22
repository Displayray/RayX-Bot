const Discord = require('discord.js')


module.exports = {
    name: 'channelinfo',
    description: 'Shows the info about a Channel',
    aliases: ['ci'],
    useage: "》Usage:\n``<Tag Channel with #>```",
    cooldown: 3,
    execute(message, args, client) {

        const embedfinduser = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setTitle("Mention a Channel")
        .setDescription('__**How to** mention a channel:__\n1. #channelname - Mention a channel by their names!')


        const mentionedChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
        if(!mentionedChannel) return message.channel.send(embedfinduser) 

        let channelinfo = {
            name: mentionedChannel.name,
            id: mentionedChannel.id,
            type: mentionedChannel.type,
            nsfw: mentionedChannel.nsfw,
            topic: mentionedChannel.topic || "Leer",
            createdat: mentionedChannel.createdAt,
            parent: mentionedChannel.parent,
        }

        const embedci = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL())
        .addField("**Name**: ", `**${channelinfo.name}**`, true)
        .addField("**Id**: ", channelinfo.id, true)
        .addField("**Type**: ", channelinfo.type, true)
        .addField("**Nsfw**: ", channelinfo.nsfw, true)
        .addField("**Description**: ", channelinfo.topic, true)
        .addField("**Category**: ", channelinfo.parent, true)
        .addField("**Created at**: ", channelinfo.createdat, true)

        return message.channel.send(embedci)
        

    }
}