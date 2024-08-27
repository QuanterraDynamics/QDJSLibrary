const { EmbedBuilder } = require("discord.js")

function userHasOwnerRights(message, { boolean, reply, replyType }) {
    const isOwner = boolean === "true";
    const embed = new EmbedBuilder()
    .setDescription(isOwner ? `You have the **owner** permissions of the guild.` : `You don't have the **owner** permissions of the guild.`)
    .setColor(isOwner ? `#5cf17e` : `#FF5733`);

    return reply === true ? message.reply({ embeds: [embed], ephemeral: false }) : message.channel.send({ embeds: [embed], ephemeral: false });
}

module.exports = { userHasOwnerRights }