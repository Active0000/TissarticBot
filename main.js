const Discord = require('discord.js');

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

    const textP = message.content.toLowerCase();
    switch (textP) {
        case 'bro': 
            message.channel.send('sup bro');
            break;
        case 'good bot': 
            message.channel.send('thank you uwu');
            break;
        case 'smart bot': 
            message.channel.send('I HAVE A BIG BRAIN!');
            break;
        case 'bad bot': 
            message.channel.send(':c');
            break;
        case 'sexy bot': 
            message.channel.send('owo');
            break;
        case 'dumb bot': 
            message.channel.send('durrrrrrrrrrrr');
            break;
        case 'destiny': 
            message.channel.send('des-TINY the gnome manlet');
            break;
        case 'based': 
            message.channel.send('Based on what?');
            break;
        case 'fucking based': 
            message.channel.send('Hello, is this the based department??');
            break;
        case 'sunshine': 
            message.channel.send('Sunshineeee <3');
            break;
        case 'weirdo': 
            message.channel.send('im not a weirdo QQ');
            break;
        case 'anyone tryna run': 
            message.channel.send('yeah...but not with you...');
            break;
        case 'black people': 
            message.channel.send('do u luh blah ppl?');
            break;
        case 'white people': 
            message.channel.send('white ppl smh');
            break;
        case 'pog': 
            message.channel.send('poggerssss');
            break;
        case 'tru': 
            message.channel.send('FUCKINGGGGGGGGGG  TRUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
            break;
        case 'bruh': 
            message.channel.send('b-bruhhh');
            break;
        case '-sigh-': 
            message.channel.send('i wish i could sigh');
            break;
        case 'hmph': 
            message.channel.send('ooooo...they mad o.O');
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
    }else if (command == 'list') {
        client.commands.get('list').execute(message, args);
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
        client.commands.get('kick').execute(message, args);

    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args);

    } else if (command == 'timedmute') {
        client.commands.get('timedmute').execute(message, args);

    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args);

    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args);

    } else if (command == 'prune') {
        client.commands.get('prune').execute(message, args);
    }
});
client.login(token);
