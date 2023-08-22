const Discord = require('discord.js')
const math = require('mathjs')

module.exports = {
    name: 'calculate',
    description: 'Solves a math question!',
    useage: "》Usage:\n``<question>```",
    cooldown: 3,
    async execute(message, args, client) {
        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a question!"))

        let resp;

        try {
            resp = math.evaluate(args.slice(1).join(" "))
        } catch (e) {
            return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** Invalid!"))
        }

        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Calculate...")
        .addField("Question:", `\`\`\`css\n${args.slice(1).join(" ")}\`\`\``)
        .addField("Answer:", `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed)




    }
}