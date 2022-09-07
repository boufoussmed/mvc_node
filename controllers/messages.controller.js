const path = require('path')

function getMessages (req, res) {
  res.render('messages', {
    title: 'Greetings',
    friend: 'Elon MAsk'
  })
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'kasbah.jpg'))

// res.send('New messages ...   ')
}

function postMessages (req, res) {
  console.log('updating messages ... ')
}

module.exports = {
getMessages,postMessages}
