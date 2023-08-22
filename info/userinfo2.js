const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'userinfo',
    description: 'Shows the info about a Member!',
    aliases: ['ui'],
    cooldown: 30,
    execute(message, args, client) {

      const embedpermission = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(message.author.tag)
      .setTitle("Insufficient Permissions")
      .setDescription(`You are not authorized to use this command!`)
      .setFooter("You can get more information about this from support!")

      const embedfinduser = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(message.author.tag)
      .setTitle("Mention a Member")
      .setDescription('__**How to** mention a member:__\n1. @username - Mention a member by their name\n2. Click on them => Mention - Mention a member by clicking on them and press "Mention"')



        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        if(!mentionedMember) return message.channel.send(embedfinduser)

        const activities =
        mentionedMember.user.presence.activities.length === 0
        ? {
            status: "*None*",
            other: [],
          }
        : mentionedMember.user.presence.activities.reduce(
            (activities, activity) => {
              switch (activity.type) {
                case "CUSTOM_STATUS":
                  activities.status = `${
                    activity.emoji ? `${activity.emoji} | ` : ""
                  }${activity.state}`;
                  break;
                case "PLAYING":
                  activities.other.push(`${activity.type} ${activity.name}`);
                  break;
                case "LISTENING":
                  if (activity.name === "Spotify" && activity.assets) {
                    activities.other.push(
                      `${activity.details} by ${activity.state}`
                    );
                  }
                  break;
                default:
                  activities.other.push(activity.type);
              }

              return activities;
            },
            {
              status: "*None*",
              other: [],
            }
          );
        
        let y = Date.now() - message.guild.members.cache.get(mentionedMember.id).joinedAt;
        const joined = Math.floor(y / 86400000)
        const joineddate = moment.utc(mentionedMember.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")


        let userinfo = {
            avatar: mentionedMember.user.avatarURL(),
            name: mentionedMember,
            name2: mentionedMember.user.tag,
            nickname: mentionedMember.nickname || "None",
            erstelltAm: mentionedMember.user.createdAt,
            joinedat: `${joineddate}\n__ago ${joined} day(s)__ `,
            id: mentionedMember.id,
            status: mentionedMember.presence.status,
            activities: activities.other && activities.other.length ? activities.other.join(", ") : "None",
            roles: `<@&${mentionedMember._roles.join('> <@&')}>`,
            highestrole: mentionedMember.roles.highest || "None",
            hoistrole: mentionedMember.roles.hoist || "None",
            bot: mentionedMember.user.bot,

        }


        let embeduinfo = new Discord.MessageEmbed()
        .setColor(mentionedMember.roles.highest.hexColor)
        .setThumbnail(userinfo.avatar)
        .addField("**》__Name__**: ", `\u200b`)
        .addField("**User**: ", userinfo.name, true)
        .addField("**Name**: ", userinfo.name2, true)
        .addField("**Nickname**: ", userinfo.nickname, true)
        .addField("**Id**: ", userinfo.id, true)
        .addField(`\u200b`, `\u200b`)
        .addField("**》__Presence__**: ", `\u200b`)
        .addField("**Status**: ", userinfo.status, true)
        .addField("**Activity**: ", userinfo.activities, true)
        .addField(`\u200b`, `\u200b`)
        .addField("**》__Roles__**: ", `\u200b`)
        .addField("**Roles**: ", userinfo.roles, true)
        .addField("**Highest Rolle**: ", userinfo.highestrole, true)
        .addField("**Ranked with**: ", userinfo.hoistrole, true)
        .addField(`\u200b`, `\u200b`)
        .addField("**》__Extra__**: ", `\u200b`)
        .addField("**Bot**: ", userinfo.bot, true)
        .addField("**Created at**: ", userinfo.erstelltAm, true)
        .addField("**Joined at**: ", userinfo.joinedat, true)

        message.channel.send(embeduinfo);


    }
}