import express from 'express'

const app = express()

app.get("/", (request, response) => {
 return response.json({
  message: "Hello WebSocket"
 })
})

app.listen(3000, () => console.log("Server is runinng on port 3000"))