# Real-time Chat Application

A simple real-time chat application built with Node.js, Express, and WebSocket. This application allows users to send and receive messages in real-time, displays user presence, and includes message timestamps.

## Features

- Real-time message broadcasting
- User presence tracking (number of online users)
- Message timestamps
- Simple username system
- Responsive design
- Auto-scrolling message container

## Prerequisites:

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 12.0 or higher)
- npm (comes with Node.js)
- Git

## Installation:

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/chat-app.git
cd chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
chat-app/
│
├── public/
│   └── index.html    # Frontend code
│
├── server.js         # Backend server code
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Technical Details

### Backend
- **Express.js**: Web application framework
- **ws**: WebSocket library for Node.js
- Features:
  - WebSocket server implementation
  - User connection management
  - Message broadcasting
  - User count tracking

### Frontend
- **HTML/CSS/JavaScript**
- Features:
  - WebSocket client implementation
  - Real-time message display
  - User interface
  - Message input handling
  - Timestamp formatting

## Usage

1. Start the server using `node server.js`
2. Open the application in your browser.
3. Enter your username
4. Start sending messages
5. Messages will appear in real-time for all connected users
6. The number of online users is displayed at the top

## Development

To modify the application:

1. Backend changes:
   - Edit `server.js` for server-side logic
   - Restart the server after changes

2. Frontend changes:
   - Modify `public/index.html` for UI/client-side changes
   - Refresh the browser to see updates.

