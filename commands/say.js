
module.exports = {
    name: 'say',
    description: "make the bot say something",
    execute(message, args){let sentence = message.content.replace('T-say', '').trim();
        message.channel.send(sentence);
            message.delete(); 
    }
}