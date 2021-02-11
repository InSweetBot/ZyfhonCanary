const { readdirSync } = require('fs')
const { token } = require('./config.json')

const { Client, Intents } = require('discord.js')
const client = new Client({ fetchAllMembers: true, ws: { intents: Intents.ALL } })

readdirSync('./src/Loaders').forEach(l => require(`./src/Loaders/${l}`)(client))

client.login(token)