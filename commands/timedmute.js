const ms = require("ms");

module.exports = {
    name: 'timedmute',
    description: "mutes user for sepcified time",
    execute(message, args) {

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

    }
}