const { Client, IntentsBitField, ActivityType, Status, EmbedBuilder } = require("discord.js");
require("dotenv").config()
const qdjs = require("qdjs")

const client = new Client({
    intents: [3276799]
})

client.on("messageCreate", async message => {
    let args = message.content.split(" ")
    let prefix = ""

    if(message.content.startsWith(prefix+"test")) {
        qdjs.savelog(client, message, `TESTTETSTSTTETSTSGHSDFGHJQSVGFDUYTEQTYUFUQSDGFHQSF`, { style: 1, name: "test", channel: "console" })
        //const renewChannel = qdjs.auditlog.channel.findOneAndRenew(client, { channel: "console" })
        //if(renewChannel != true) return console.log("test")
        //else return

        //qdjs.server.permissionsChecker(message, { type: "owner", response: "card", reply: true, replyType: "reply" })

        //const embed = qdjs.embedBuilder(1, { title: "QPCore Administrator Report", description: `**${client.user.username}** was removed from your guild by an administrator. The reason was not specified.\n\nPlease review the regulations on the use of **${client.user.username}** as well as Discord's **TOS**.`, color: "#6779e6" })
        //message.channel.send({ embeds: [embed], ephemeral: false })

        return 
    }
})

client.login(process.env.QPCORETOKEN).then(console.log("Bot connected"))

// #2b2d31 color basic