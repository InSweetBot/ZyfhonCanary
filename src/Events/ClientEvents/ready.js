const chalk = require('chalk')

module.exports = async (client) => {

    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(``)
    console.log(`+--------------------------------------------------------------`)
    console.log(`|                                                                                          `)
    console.log(`|  ● ${chalk.cyan.bold(`Servidores`)}: ${Number(client.guilds.cache.size).toLocaleString()}`)
    console.log(`|  ● ${chalk.cyan.bold(`Usuários`)}: ${Number(client.users.cache.size).toLocaleString()}   `)
    console.log(`|  ● ${chalk.cyan.bold(`Emojis`)}: ${Number(client.emojis.cache.size).toLocaleString()}    `)
    console.log(`|  ● ${chalk.cyan.bold(`Canais`)}: ${Number(client.channels.cache.size).toLocaleString()}  `)
    console.log(`|  ● ${chalk.cyan.bold(`Comandos`)}: ${Number(client.commands.size).toLocaleString()}      `)
    console.log(`|                                                                                          `)
    console.log(`+--------------------------------------------------------------`)
    console.log(`[${chalk.cyan.bold(`${client.user.username}`)}] Conexão com a API efetuada sem erros!`)

    const presences = [
        { name: ` ZyfhonCanary `, type: "PLAYING" },
        { name: ` Suporte Técnico. `, type: "PLAYING" },
    ]

    setInterval(() => {
        const selected = presences[Math.floor(Math.random() * presences.length)]
        client.user.setPresence({ activity: selected })
    }, 5000)
}