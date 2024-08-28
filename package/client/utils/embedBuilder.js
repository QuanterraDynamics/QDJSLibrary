// src/client/embedBuilder.js
const { EmbedBuilder } = require("discord.js");

function embedBuilder(style, { title, description, color, timestamp, footer }) {
    const embed = new EmbedBuilder()
    .setColor(color)
    .setDescription('' || description);

    if (title) embed.setTitle(title);
    if (timestamp) embed.setTimestamp();
    if (footer) embed.setFooter({ text: footer });

    return embed;
}

module.exports = embedBuilder;
