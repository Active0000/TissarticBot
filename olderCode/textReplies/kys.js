module.exports = {
    name: 'kys',
    description: "funny meme",
    execute(message, args){
        message.delete();
        message.channel.send('oi mate thats not nice nor funny');
    }
}