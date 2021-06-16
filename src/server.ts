import express from 'express'
import { createServer } from "http";
import { Server } from "socket.io"

const app = express();

const server = createServer(app)

app.get("/", (request, response) => {
 return response.json({
  message: "Hello WebSocket"
 })
})

server.listen(3000, () => console.log("Server is runinng on port 3000"))