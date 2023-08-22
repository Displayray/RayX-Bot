const Discord = require('discord.js')
const { prefix } = require('../config.json')
const ms = require('ms')
const moment = require('moment')
require("moment-duration-format");


module.exports = {
    name: 'botinfo',
    description: 'Zeigt die Infos über den RayX Bot!',
    aliases: ['bi'],
    cooldown: 3,
    execute(message, args, client) {
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

        let embedbinfo = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL())
        .addField("**Name**: ", `${client.user}`, true)
        .addField("**Id**: ", `${client.user.id}`, true)
        .addField("**Prefix**: ", `**${prefix}**`, true)
        .addField("**Coded by**: ", "<@465462991840739341>", true)
        .addField("**Ping**: ", "Pong! :ping_pong: Takes "+client.ws.ping+"ms", true)
        .addField("**Uptime**: ", duration)
        .addField("**Created at**: ", `${client.user.createdAt}`, true)


        message.channel.send(embedbinfo);

    }
}