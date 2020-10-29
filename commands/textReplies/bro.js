module.exports = {
    name: 'bro',
    description: "literally just a ping command",
    execute(message, args){
        message.channel.send('oi bruv');
    }
}