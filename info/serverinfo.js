const Discord = require('discord.js')

module.exports = {
    name: 'serverinfo',
    description: 'Shows the info about the Server!',
    aliases: ['si'],
    cooldown: 3,
    execute(message, args, client) {

        if(!message.guild) return

        let server = {
            logo: message.guild.iconURL(),
            name: message.guild.name,
            createdAt: message.guild.createdAt,
            id: message.guild.id,
            owner: message.guild.owner.user,
            region: message.guild.region,
            verified: message.guild.verified,
            members: message.guild.memberCount,
            channels: message.guild.channels.cache.size,
            roles: message.guild.roles.cache.size,

        }

        let embedsinfo = new Discord.MessageEmbed()
        .setTitle("**ServerInfo**")
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL({ dynamic: true}))
        .addField("**Name**: ", server.name, true)
        .addField("**Id**: ", server.id, true)
        .addField("**Owner**: ",server.owner, true)
        .addField("**Region**: ",server.region, true)
        .addField("**Verified**: ",server.verified, true)
        .addField("**Members**: ",server.members, true)
        .addField("**Channels**: ", server.channels, true)
        .addField("**Roles**: ", server.roles, true)
        .addField("**Created at**: ", server.createdAt, true)

        return message.channel.send(embedsinfo)
    }
}