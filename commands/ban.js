module.exports = {
    name: 'ban',
    description: "bans user",
    execute(message, args) {

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
                member.ban("Member has been BANNED.").then(() => {
                    message.reply(`Sucessfully BANNED ${user.tag}`);
                }).catch(err => {
                    message.reply('Unable to ban member.');
                    console.log(err);
                });
            } else {
                message.reply("That user is not in the server.");
            }
        } else {
            message.reply(".");
        }
    }
}