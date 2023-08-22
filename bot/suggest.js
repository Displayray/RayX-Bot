const Discord = require('discord.js')

module.exports = {
    name: 'rayxsuggest',
    description: 'Kontaktiere uns!',
    aliases: ['suggest'],
    cooldown: 7200,
    execute(message, args, client) {
        const inhalt = args.slice(1).join(" ")
        const contactchannel = client.channels.cache.get('754499985420058786')
        if(!contactchannel) return message.channel.send("**An Error occurred**: Cant find the Contactchannel! Please contact the Support on their Server!")
        message.channel.createInvite({ temporary: true, maxAge: 0 }).then (invite => contactchannel.send(`discord.gg/${invite.code}`))

        const embedcontact = new Discord.MessageEmbed()
        .setColor("NAVY")
        .setTitle("Contact / Suggestion")
        .setDescription(`Thanks ${message.author} for using our Support!\nWe will take a look at your suggestion!\nIf it is nice then we will add it to the Bot!\n\nRayX Server:\nhttps://discord.gg/C6sqJxu`)
        .setFooter("Suggestion was sent successfully!")
        
        const embedcontact2 = new Discord.MessageEmbed()
        .setColor("NAVY")
        .setAuthor(`${message.author.tag} - ${message.author.id}`, message.author.avatarURL())
        .setTitle("Contact / Suggestion")
        .setDescription(inhalt)
        .addField("Invite:", `Nächste Nachricht!`)
        .setFooter(`Suggestion von: ${message.guild.name}`, message.guild.iconURL())
        
        
        message.channel.send(embedcontact)
        return contactchannel.send(embedcontact2)

        
    }
}