const { MessageEmbed } = require('discord.js');
const { prefix } = require(`../../../config.json`)

module.exports = async (client, message) => {
	if (message.author.bot || message.channel.type === 'dm') return;
	
	const isPrefix = prefix
	if (!message.content.startsWith(isPrefix)) return;

	const args = message.content.slice(isPrefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

	const command = client.commands.find(c => c.help.name.toLowerCase() === cmd || (c.help.aliases && c.help.aliases.includes(cmd)))
	if (command) {
        return command.run({ client, message, args }) 
    } else {
        return;
    }
}