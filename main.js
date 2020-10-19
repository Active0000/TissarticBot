const Discord = require('discord.js');
const ms = require("ms");
// const ytdl = require("ytdl-core");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();


const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Tissartic is alive!');
});


client.on('message', async (message) => {

    const textP = message.content;
    switch (textP) {
        case 'bro': 
            message.channel.send('sup bro');
            break;
        case 'bro': 
            message.channel.send('bruh');
            break;
        case '-sigh-': 
            message.channel.send('i wish i could sigh');
            break;
        case 'T-T': 
            message.channel.send('Cry some more');
            break;
        case 'T_T': 
            message.channel.send('Awww....cry some moree');
            break;
        case 'active who?': 
            message.channel.send('https://www.youtube.com/channel/UCqKJCoUaOTEz80V2l1jPMFQ');
            message.channel.send('https://twitter.com/Active0000_');
            break;
        case 'kys':
            message.delete(); 
            message.channel.send('oi mate thats not nice');
            break;
        case 'slurs':
            message.delete(); 
            message.channel.send('whoa are you the ceo of racism??');
            break;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();

    if (command === 'say') {
        client.commands.get('say').execute(message, args);
    } else if (command == 'today') {
        client.commands.get('today').execute(message, args);
    } else if (command == 'tomorrow') {
        client.commands.get('tomorrow').execute(message, args);
    } else if (command == 'yesterday') {
        client.commands.get('yesterday').execute(message, args);
    } else if (command == 'timer1min') {
        message.channel.send("Timer set for 1 minute!");
        setTimeout(() => { message.channel.send("It's been 1 minute! @everyone"); }, 10000);
    } else if (command == 'timer5min') {
        message.channel.send("Timer set for 5 minutes!");
        setTimeout(() => { message.channel.send("It's been 5 minutes! @everyone"); }, 300000);
    } else if (command == 'timer10min') {
        message.channel.send("Timer set for 10 minutes!");
        setTimeout(() => { message.channel.send("It's been 10 minutes! @everyone"); }, 600000);
    } else if (command == 'timer1hour') {
        message.channel.send("Timer set for 1 hour!");
        setTimeout(() => { message.channel.send("It's been 1 hour! @everyone"); }, 3600000);
    } else if (command == 'kick') {
        const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
        if (!modRole)
            return console.log("The Mods role does not exist");

        if (!message.member.roles.cache.has(modRole.id))
            return message.reply("You can't use this command.");

        if (!args[0]) message.channel.send('You need to @ a member!');

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.kick("Member has been kicked.").then(() => {
                    message.reply(`Sucessfully kicked ${user.tag}`);
                }).catch(err => {
                    message.reply('Unable to kick member.');
                    console.log(err);
                });
            } else {
                message.reply("That user is not in the server.");
            }
        } else {
            message.reply("That user is not in the guild.");
        }

    } else if (command == 'ban') {
        const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
        if (!modRole)
            return console.log("The Mods role does not exist");

        if (!message.member.roles.cache.has(modRole.id))
            return message.reply("You can't use this command.");

        if (!args[0]) message.channel.send('You need to @ a member!');

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.kick("Member has been BANNED.").then(() => {
                    message.reply(`Sucessfully BANNED ${user.tag}`);
                }).catch(err => {
                    message.reply('Unable to ban member.');
                    console.log(err);
                });
            } else {
                message.reply("That user is not in the server.");
            }
        } else {
            message.reply("That user is not in the guild.");
        }

    } else if (command == 'muteT') {
        const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
        if (!modRole)
            return console.log("The Mods role does not exist");

        if (!message.member.roles.cache.has(modRole.id))
            return message.reply("You can't use this command.");


        var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if (!person) 
            return message.reply("Couldn't find that member!");

        let mainRole = message.guild.roles.cache.find(role => role.name === "User")
        let muteRole = message.guild.roles.cache.find(role => role.name === "MuteUser")

        if (!muteRole) 
            return message.reply("Couldn't find that mute role!")

        var time = args[1];

        if (!time) {
            return message.reply("You need to specify a time!");
        }
        person.roles.remove(mainRole.id);
        person.roles.add(muteRole.id);

        message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);

        setTimeout(function () {
            person.roles.add(mainRole.id);
            person.roles.remove(muteRole.id);

            message.channel.send(`@${person.user.tag} has been timely unmuted!`)

        }, ms(time));

    } else if (command == 'unmute') {
        const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
        if (!modRole)
            return console.log("The Mods role does not exist");

        if (!message.member.roles.cache.has(modRole.id))
            return message.reply("You can't use this command.");

        var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if (!person) 
            return message.reply("Couldn't find that member!");

        let mainRole = message.guild.roles.cache.find(role => role.name === "User")
        let muteRole = message.guild.roles.cache.find(role => role.name === "MuteUser")

        if (!muteRole) 
            return message.reply("Couldn't find that mute role!")

        person.roles.add(mainRole.id);
        person.roles.remove(muteRole.id);

        message.channel.send(`@${person.user.tag} has been manually unmuted!`)

    } else if (command == 'mute') {

        const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
        if (!modRole)
            return console.log("The Mods role does not exist");

        if (!message.member.roles.cache.has(modRole.id))
            return message.reply("You can't use this command.");


        var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if (!person) 
            return message.reply("Couldn't find that member!");

        let mainRole = message.guild.roles.cache.find(role => role.name === "User")
        let muteRole = message.guild.roles.cache.find(role => role.name === "MuteUser")

        if (!muteRole) 
            return message.reply("Couldn't find that mute role!")

        person.roles.add(muteRole.id);
        person.roles.remove(mainRole.id);

        message.channel.send(`@${person.user.tag} has been permanently muted!`)
    }
});
client.login(token);
