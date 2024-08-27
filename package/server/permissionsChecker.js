const embedBuilder = require("../functions/embedBuilder")

// src/server/permissionsChecker.js
async function permissionsChecker(message, { type, response, reply }) {
    if (type === "owner") {
        const isOwner = message.guild.ownerId === message.author.id ? "true" : "false";
        if(response === "boolean") {
            return isOwner
        } else if (response === "card") {
            await embedBuilder.userHasOwnerRights(message, { boolean: isOwner, reply: reply, replyType: "reply" })
        }
    } else return
}

module.exports = permissionsChecker;
