// src/client/auditlog/channel.js
const { EmbedBuilder } = require("discord.js");
const { logServer } = require("../../config.json")

async function findOne(client, { channel }) {
    const guild = client.guilds.cache.get(logServer)
    let foundChannel = guild.channels.cache.get(channel);
    if (!foundChannel) {
        foundChannel = guild.channels.cache.find(ch => ch.name === channel && ch.isTextBased());
    }

    if(foundChannel) {
        return [true, foundChannel]
    } else return false
}

async function findOneAndRenew(client, { channel }) {
    const foundChannel = await findOne(client, { channel: channel })
    const guild = client.guilds.cache.get(logServer)
    if(foundChannel[0] === true) {
        const channel = await guild.channels.cache.get(foundChannel[1].id)
        await guild.channels.create({
            name: channel.name,
            type: channel.type,
            parent: channel.parent,
            position: channel.position,
            topic: channel.topic,
            nsfw: channel.nsfw,
            rateLimitPerUser: channel.rateLimitPerUser,
            permissionOverwrites: channel.permissionOverwrites.cache.map(overwrite => ({
                id: overwrite.id,
                allow: overwrite.allow.toArray(),
                deny: overwrite.deny.toArray()
            }))
        }).then(ch => channel.delete())

        return true
    } else return false
}

module.exports = [
    findOne,
    findOneAndRenew
]