var client = require('./client');

var call = {
  triggerCall: function(reminder) {
    return client.makeCall({
      to: reminder.user.phone,
      from: '+16165225251',
      url: 'http://e9d08b8b.ngrok.io/call/twiml/' + reminder.user._id + '/' + reminder._id
    }, function(error, response) {
      console.log(error || response);
    });
  }
}

module.exports = call;
