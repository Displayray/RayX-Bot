const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = {
    name: 'meme',
    description: 'Shows a random meme!',
    cooldown: 3,
    async execute(message, args, client) {


        const subReddits = ["ComedyCemetery", "MemeEconomy", "memes", "PrequelMemes"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)
        const embedmeme = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Von /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        return message.channel.send(embedmeme)
    }
}