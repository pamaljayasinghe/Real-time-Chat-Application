// Required dependencies
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Store connected users
const users = new Set();

// WebSocket connection handling
wss.on("connection", (ws) => {
  console.log("New client connected");

  // Add user to connected users
  users.add(ws);

  // Broadcast online users count
  broadcastUserCount();

  // Handle incoming messages
  ws.on("message", (data) => {
    const message = JSON.parse(data);

    // Add timestamp to message
    message.timestamp = new Date().toISOString();

    // Broadcast message to all connected clients
    broadcast(message);
  });

  // Handle client disconnection
  ws.on("close", () => {
    console.log("Client disconnected");
    users.delete(ws);
    broadcastUserCount();
  });
});

// Broadcast message to all connected clients
function broadcast(message) {
  users.forEach((user) => {
    user.send(JSON.stringify(message));
  });
}

// Broadcast user count
function broadcastUserCount() {
  const userCount = { type: "userCount", count: users.size };
  broadcast(userCount);
}

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
