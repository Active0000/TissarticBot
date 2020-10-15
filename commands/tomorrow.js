const moment = require(`moment`);


module.exports = {
    name: 'tomorrow',
    description: "gives tomorrow's date",
    execute(message, args){
        message.channel.send('Tomorrow is: ' + moment().add(1, 'day').format('MMMM D YYYY'));
    }
}