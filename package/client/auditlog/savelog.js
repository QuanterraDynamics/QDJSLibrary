// src/client/auditlog/savelog.js
const { EmbedBuilder } = require("discord.js");
const { logServer } = require("../config.json")

function embedStyles(user, name, content, style) {
    if(style === 1) {
        const userAvatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
        const embed = new EmbedBuilder()
        .setAuthor({ name: `${user.user.username} created an audit log event`, iconURL: userAvatar })
        .setTitle(`Event: \`${name}\``)
        .setDescription(`${content}`)
        .setColor(`F0E68C`)
        .setTimestamp()
        .setFooter({ text: `QDJSLibrary Audit Log`, iconURL: userAvatar });
        return embed 
    }

    else return
}

async function savelog(client, user, content, { name, type, channel, style }) {
    const guild = client.guilds.cache.get(logServer)
    if(guild) {
        if(channel) {
            const foundChannel = guild.channels.cache.find(c => c.name === channel);
            if(foundChannel) {
                const embed = embedStyles(user, name, content, style);
                return foundChannel.send({ embeds: [embed], ephemeral: false })
            } else return console.log(`ERROR: channel named ${channel} not found on log server`)
        } else return
    } else return console.log(`ERROR: ${client.user.username} is not on the log server`)
}

module.exports = [
    savelog
]
