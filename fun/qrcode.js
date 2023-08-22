const Discord = require('discord.js')
const canva = require('canvacord');

module.exports = {
    name: 'qrcode',
    aliases: ["qr", "QR"],
    description: 'Generate a QR Code',
    cooldown: 120,
    async execute(message, args, client) {
        let link = args.slice(1).join(" ")

        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a link!"))

        let image = await canva.createQRCode(link)

        let qrcodee = new Discord.MessageAttachment(image, "qr.png")

        return message.channel.send(qrcodee)
    }

}