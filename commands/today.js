const moment = require(`moment`);

module.exports = {
    name: 'today',
    description: "gives today's date",
    execute(message, args){
        message.channel.send('Today is: ' + moment().format('MMMM Do') + ', ' + moment().format('hh:mm a'));
    }
}