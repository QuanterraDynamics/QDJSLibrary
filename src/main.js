const { Client, IntentsBitField, ActivityType, Status, EmbedBuilder } = require("discord.js");
require("dotenv").config()
const qdjs = require("qdjs")

const client = new Client({
    intents: [3276799]
})

client.on("messageCreate", async message => {
    let args = message.content.split(" ")
    let prefix = ""

    if(message.content.startsWith(prefix+"pc")) {
        return qdjs.server.permissionsChecker(message, { type: "owner", response: "card", reply: true, replyType: "reply" })
    }
})

client.login(process.env.QPCORETOKEN).then(console.log("Bot connected"))

// #2b2d31 color basic