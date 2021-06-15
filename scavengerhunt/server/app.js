const express = require('express');
const path = require('path');
const db = require('./config/database');
const userRoutes = require('./routes/user');
const branchRoutes = require('./routes/branch')
const { getAlertByBranch } = require("./controllers/alert")
const alertRoutes = require("./routes/alert")

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes);
app.use('/branch', branchRoutes);
app.use('/alert', alertRoutes);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
     methods: ["GET", "POST"],
     allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  }
);

io.on("connection", (client) => {
  console.log("New client connected");


  client.on("joins", () => {
    io.emit({joins: []})
   })

});



const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server started on port ${PORT}`));