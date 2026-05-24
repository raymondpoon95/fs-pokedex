const express = require('express')
const cors = require('cors')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
