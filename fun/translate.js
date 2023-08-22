const Discord = require('discord.js')
const translate = require('translate-google')

module.exports = {
    name: 'translate',
    aliases: ["translate"],
    description: 'Übersetzt einen Text!',
    cooldown: 3,
    async execute(message, args, client) {
        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a language!"))
        const text = args.slice(2).join(" ")
        if(!text) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a text!"))

        translate(`${text}`, {to: `${args[1]}`}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Übersetze...")
            .addField("Eingabe:", `\`\`\`css\n${text}\`\`\``)
            .addField(`Ausgabe (${args[1]}):`, `\`\`\`css\n${res}\`\`\``)
    
    
            message.channel.send(embed)
            
        }).catch(err => {
            message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** Maybe the Language shortcut is invalid! <https://wiki.selfhtml.org/wiki/Sprachk%C3%BCrzel#.C3.9Cbersicht_zu_Sprachenk.C3.BCrzeln_nach_ISO_639-1>"))
            })




    }
}