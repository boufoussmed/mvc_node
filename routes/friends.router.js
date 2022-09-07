const express = require('express')
const friendscontroller = require('../controllers/friends.controller')
const friendsRouter = express.Router()

friendsRouter.use((req, res) => {
  console.log('IP adress is : ', req.ip)
  req.next()
})

friendsRouter.get('/:friendId', friendscontroller.getFriend)
friendsRouter.get('/', friendscontroller.getFriends)
friendsRouter.post('/', friendscontroller.postFriend)

module.exports = friendsRouter
