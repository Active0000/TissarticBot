const moment = require(`moment`);

module.exports = {
    name: 'yesterday',
    description: "gives yesterday's date",
    execute(message, args){
        message.channel.send('Yesterday was: ' + moment().add(-1, 'day').format('MMMM D YYYY'));
    }
}