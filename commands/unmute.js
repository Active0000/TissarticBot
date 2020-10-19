module.exports = {
    name: 'unmute',
    description: "unmutes user manually",
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

        person.roles.add(mainRole.id);
        person.roles.remove(muteRole.id);

        message.channel.send(`@${person.user.tag} has been manually unmuted!`)

    }
}