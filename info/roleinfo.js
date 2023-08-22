const Discord = require('discord.js')


module.exports = {
    name: 'roleinfo',
    description: 'Shows the info about a Role!',
    useage: "》Usage:\n``<Rolename>```",
    aliases: ['ri'],
    cooldown: 3,
    execute(message, args, client) {

        const embedfinduser = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(message.author.tag)
        .setTitle("Role name")
        .setDescription('__**How to** run this command without mention a role:__\n1. @rollenname - Mention a role with their names but without **the @**.\nPay attention to upper and lower case!')

        if(message.content.includes === "@") return message.channel.send("Um diesen Command ausführen zu können, brauchst du lediglich nur den Namen der Rolle und musst sie nicht Pingen!")

        const mentionedRole = message.guild.roles.cache.find(role => role.name === `${args[1]}`) || message.guild.roles.cache.get(args[1])
        
        if(!mentionedRole) return message.channel.send(embedfinduser) 

        let roleinfo = {
            name: mentionedRole.name,
            id: mentionedRole.id,
            permissions: mentionedRole.permissions,
            color: mentionedRole.hexColor,
            mentionable: mentionedRole.mentionable,
            managed: mentionedRole.managed,
            hoist: mentionedRole.hoist,
            createdat: mentionedRole.createdAt,
        }

        const embedri = new Discord.MessageEmbed()
        .setColor(roleinfo.color)
        .setThumbnail(message.guild.iconURL())
        .addField("**Name**: ", `**${roleinfo.name}**`, true)
        .addField("**Id**: ", roleinfo.id, true)
        .addField("**Color**: ", roleinfo.color, true)
        .addField("**Mentionable**: ", roleinfo.mentionable, true)
        .addField("**Ranked**: ", roleinfo.hoist, true)
        .addField("**Created at**: ", roleinfo.createdat, true)

        return message.channel.send(embedri)
        

    }
}