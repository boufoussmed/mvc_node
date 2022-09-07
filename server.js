const express = require('express')
const path = require('path')

const friendRouter = require('./routes/friends.router')
const messageRouter = require('./routes/messages.router')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000

app.use((req, res, next) => {

  const start = Date.now()
  next()

  const interval = Date.now() - start

  console.log(`${req.method}  ${req.baseUrl}${req.url}  ${interval}ms`)
})

app.use('/site', express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.get('/', (req, res) => {

  res.render('index', {
    title: 'The old Kasbah before earthquake',
    caption: 'Kasbah Agadir Oufla'
  })
})

app.use('/friends', friendRouter)
app.use('/messages', messageRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} ... `)
})
