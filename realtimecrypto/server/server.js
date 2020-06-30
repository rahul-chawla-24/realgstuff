const server = require("http").createServer();
var moment = require("moment");

const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});

// 1. listen for socket connections
io.on("connection", async (client) => {
   setInterval(() => {
    client.emit("realtime", {
      date: moment(new Date()).format("MMM DD"),
      amt: "9993.99".toLocaleString("us-EN", {
        style: "currency",
        currency: "USD",
      }),
      pv: 9993.99,
      $: 9993.99,
    });
  }, 5000);
});

server.listen(5000, () => {
  console.log("server running");
});
