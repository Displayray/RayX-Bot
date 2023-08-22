const Discord = require('discord.js')

module.exports = {
    name: 'rayxsupport',
    description: 'Kontaktiere uns!',
    aliases: ['support'],
    cooldown: 7200,
    execute(message, args, client) {
        const inhalt = args.slice(1).join(" ")
        const contactchannel = client.channels.cache.get('754499985420058786')
        if(!contactchannel) return message.channel.send("**An Error occurred**: Cant find the Contactchannel! Please contact the Support on their Server!")
        message.channel.createInvite({ temporary: true, maxAge: 0 }).then (invite => contactchannel.send(`discord.gg/${invite.code}`))


        const embedcontact = new Discord.MessageEmbed()
        .setColor("NAVY")
        .setTitle("Contact / Support")
        .setDescription(`Thanks ${message.author} for using our Support!\nWe will help/reply as soon as possible!\n\nIf you have not received a response within 48 hours, please contact us directly on our server:\nhttps://discord.gg/C6sqJxu`)
        .setFooter("Request was sent successfully!")
        
        const embedcontact2 = new Discord.MessageEmbed()
        .setColor("NAVY")
        .setAuthor(`${message.author.tag} - ${message.author.id}`, message.author.avatarURL())
        .setTitle("Contact / Support")
        .setDescription(inhalt)
        .addField("Invite:", `Nächste Nachricht!`)
        .addField("Channel Id", message.channel.id)
        .setFooter(`Anfrage von: ${message.guild.name}`, message.guild.iconURL())
        
        
        message.channel.send(embedcontact)
        return contactchannel.send(embedcontact2)

        
    }
}