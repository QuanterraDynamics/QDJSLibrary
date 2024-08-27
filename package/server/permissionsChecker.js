const embedBuilder = require("../functions/embedBuilder")

// src/server/permissionsChecker.js
async function permissionsChecker(message, { type, response, reply, replyType }) {
    if (type === "owner") {
        const isOwner = message.guild.ownerId === message.author.id ? "true" : "false";
        if(response === "boolean") {
            return isOwner
        } else if (response === "card") {
            const func = await embedBuilder.userHasOwnerRights(message, { boolean: isOwner, reply: reply, replyType: replyType })
            if(reply === false) return
            else return func
        }
    } else return
}

module.exports = permissionsChecker;
