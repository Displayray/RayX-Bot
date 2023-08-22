const Discord = require('discord.js')
const canva = require('canvacord');

module.exports = {
    name: 'changemymind',
    aliases: ["cmm", "change-my-mind"],
    description: 'CHNAGE MY MIND!!!',
    useage: "》Usage:\n``<text>```",
    cooldown: 120,
    async execute(message, args, client) {
        let text = args.slice(1).join(" ")

        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a text!"))

        let image = await canva.changemymind(text)

        let changemymind = new Discord.MessageAttachment(image, "cmm.png")

        return message.channel.send(changemymind)
    }
}