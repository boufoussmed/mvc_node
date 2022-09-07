const friendModel = require('../models/friend.model')

function postFriend (req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name'
    })
  }
  const newFriend = {
    name: req.body.name,
    id: friendModel.length
  }
  friendModel.push(newFriend)
  res.json(newFriend)
}

function getFriends (req, res) {
  res.json(friendModel)
}

function getFriend (req, res) {
  const friendId = Number(req.params.friendId)

  const friend = friendModel[friendId]

  if (friend) {
    res.status(200).json(friend)
  }else {
    res.status(400).json({
      error: 'friend does not exist'
    })
  }
}

module.exports = {
postFriend,getFriends,getFriend}
