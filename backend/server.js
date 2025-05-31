const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


// backend API endpointq
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' })
})

// const PORT = 5000
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
