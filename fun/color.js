const Discord = require('discord.js')
const canva = require('canvacord');

module.exports = {
    name: 'color',
    aliases: ["farbe", "HEX"],
    description: 'Shows Color of the HEX-Code',
    useage: "》Usage:\n``<text>```",
    cooldown: 120,
    async execute(message, args, client) {
        let colorOfChoice = args.slice(1).join(" ")

        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a HEX-Code! Or the HEX-Code is invalid!"))

        let image = await canva.color(colorOfChoice)

        let color = new Discord.MessageAttachment(image, "color.png")

        return message.channel.send(color)
    }
}