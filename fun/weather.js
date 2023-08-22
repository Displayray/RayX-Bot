const Discord = require('discord.js')
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    description: 'Shows the weather!',
    cooldown: 20,
    async execute(message, args, client) {
        const city = args.join(" ");


        await weather.find({search: city, degreetype: 'F'}, function(err, result) {
            if (!city) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** You need to provide a city!"))
            if (err || result === undefined || result.length === 0) return message.channel.send(new Discord.MessageEmbed().setDescription("**An Error occurred:** Unknown city!"))

            let current = result[0].current;
            let location = result[0].location;

            const embedweather = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(current.observationpoint)
            .setDescription(`> ${current.skytext}`)
            .setThumbnail(current.imageUrl)
            .setTimestamp()
            

            .addField("longitude", location.long, true)
            .addField("wind", current.winddisplay, true)
            .addField("humidity", `${current.humidity}%`, true)
            .addField(`timezone`, `GMT ${location.timezone}`, true)
            .addField("temperature (F)", `${(current.feelslike )}°`, true)
            .addField("temperature (C)", `${(current.temperature - 32) * 5/9}°`, true)
            .addField("Observation time", current.observationtime, true)
            
            return message.channel.send(embedweather)
        })




    }
}