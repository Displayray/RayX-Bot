const Discord = require('discord.js')
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    description: 'Shows Text in Ascii!',
    useage: "》Usage:\n``<text>```",
    cooldown: 130,
    async execute(message, args, client) {
        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a text!"))

        msg = args.slice(1).join(" ")

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Etwas ist schief gelaufen (Ascii)')
                console.dir(err)
            }
            if(data.length > 2000) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** Text is too long! it must be shorter then 2000 symbols!"))
            message.channel.send("```" + data + "```")
        })



    }
}