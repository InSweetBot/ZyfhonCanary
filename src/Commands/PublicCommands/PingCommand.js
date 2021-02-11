const { MessageEmbed } = require('discord.js');

module.exports = {
    help: {
        name: "ping",
        aliases: ['pin']
    }, async run({ client, message, args }) {
        return message.channel.send(`**Ping**: ${client.ws.ping}`);
    }
}