const Discord = require('discord.js');
const fs = require('fs');
// const ytdl = require("ytdl-core");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.textReplies = new Discord.Collection();
const textRepliesFiles = fs.readdirSync('./commands/textReplies/').filter(file => file.endsWith('.js'));
for (const file of textRepliesFiles) {
    const textReply = require(`./commands/textReplies/${file}`);
    client.textReplies.set(textReply.name, textReply);
}

client.once('ready', () => {
    console.log('Tissartic is alive!');
});

client.on('message', async (message) => {

    const args = message.content.slice(prefix.length).split(/ +/);
    const textReply = message.content.toLowerCase();
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)){
        if (!client.textReplies.has(textReply))
            return;
    try {
        client.textReplies.get(textReply).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Error for textReply');
    }
    } else if (client.commands.has(command)) {
        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('Error for command');
        }
    }
});
client.login(token);

