const express = require('express');
const path = require('path');
const db = require('./config/database');
const userRoutes = require('./routes/user');
const branchRoutes = require('./routes/branch')
const { getAlertByBranch } = require("./controllers/alert")
const alertRoutes = require("./routes/alert")
const pincodeRoutes = require("./routes/pincode")

const cors = require('cors')
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/user', userRoutes);
app.use('/branch', branchRoutes);
app.use('/alert', alertRoutes);
app.use('/pincode', pincodeRoutes);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  }
}
);

var interval;

io.on("connection", (client) => {

  client.on("sendBranch",(data) => {
     interval = setInterval(() => { getAlertByBranch(io,data)} ,5000)
  })

  client.on("stopSendingBranch",() => {
    console.log("interval",interval)
    if(interval){
    clearInterval(interval);
    }
  })
  
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server started on port ${PORT}`));