module.exports = {
    name: 'list',
    description: "list of all commands, list of keywords",
    execute(message, args){
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Tissartic Bot',
            url: 'https://twitter.com/active0000_',
            author: {
                name: 'Active0000',
                icon_url: 'https://pbs.twimg.com/profile_images/1293288995187695616/SwP0Nc4C_400x400.jpg',
                url: 'https://twitter.com/active0000_',
            },
            description: 'A list of commands and how to use them!',
            thumbnail: {
                url: 'https://pbs.twimg.com/profile_images/1293288995187695616/SwP0Nc4C_400x400.jpg',
            },
            fields: [
                {
                    name: '!today',
                    value: 'Gives todays date.',
                    inline: false
                },
                {
                    name: '!tomorrow',
                    value: 'Gives tomorrows date.',
                    inline: false,
                },
                {
                    name: '!yesterday',
                    value: 'Gives yesterdays date.',
                    inline: false,
                },
                {
                    name: '!say <message>',
                    value: 'Make the bot say <message>.',
                    inline: false,
                },
                {
                    name: '!timer1m',
                    value: 'Minmum timer: 1 minute. NOT DYNAMIC.',
                    inline: false,
                },                
                {
                    name: '!timer1h',
                    value: 'Maximum timer: 1 hour. NOT DYNAMIC.',
                    inline: false,
                },
//              {
//              name: '\u200b',
//              value: '\u200b',
//              inline: false,
//              },
                {
                    name: '!mute <@user>',
                    value: 'Mutes <@user>.',
                    inline: false,
                },
                {
                    name: '!unmute <@user>',
                    value: 'Unmutes <@user>.',
                    inline: false,
                },
                {
                    name: '!timedmute <@user> <time>',
                    value: 'Mutes <@user> for <time>. Time: 1s, 1m, 1h, 1d.',
                    inline: false,
                },
                {
                    name: '!kick <@user> {reason}',
                    value: 'Kicks <@user>, {reason} is optional.',
                    inline: true,
                },
                {
                    name: '!ban <@user> {reason}',
                    value: 'Bans <@user>, {reason} is optional.',
                    inline: false,
                },
                {
                    name: '!prune <#>',
                    value: 'Delete some <#> of messages.',
                    inline: false,
                },
                {
                    name: '!list',
                    value: 'List of commands lol.',
                    inline: false,
                }
            ],
            image: {
                url: 'https://media.discordapp.net/attachments/322224224322322433/767817874752274452/TissarticLOGOa.png',
            },
            timestamp: new Date(),
            footer: {
                text: 'Bot made by Active0000',
                icon_url: 'https://media.discordapp.net/attachments/322224224322322433/767818886975848448/TissarticLOGOb.png',
            },
        };
        message.channel.send({ embed: exampleEmbed });
    }
}