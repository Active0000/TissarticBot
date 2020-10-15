const Discord = require('discord.js');
const ms = require("ms");
const ytdl = require("ytdl-core");
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
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();

    if (command === 'bro') {
        client.commands.get('bro').execute(message, args);
    } else if (command == 'bruh') {
        client.commands.get('bruh').execute(message, args);
    }else if (command == 'T') {
        client.commands.get('T').execute(message, args);
    } else if (command == 'activewho?') {
        client.commands.get('activewho?').execute(message, args);
    } else if (command == 'say') {
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

    } else if (command == 'mute') {

        
        const modRole = message.guild.roles.cache.find(role => role.name === "Mods");
        if (!modRole)
            return console.log("The Mods role does not exist");

        if (!message.member.roles.cache.has(modRole.id))
            return message.reply("You can't use this command.");


        var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if (!person) return message.reply("Couldn't find that member!");

        let mainRole = message.guild.roles.cache.find(role => role.name === "User")
        let muteRole = message.guild.roles.cache.find(role => role.name === "MuteUser")

        if (!muteRole) return message.reply("Couldn't find that mute role!")

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

            message.channel.send(`@${person.user.tag} has been unmuted!`)

        }, ms(time));
    }
});
client.login(token);