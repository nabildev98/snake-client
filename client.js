const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data); //Comment out or remove the "hard-coded" Move: up message to the server.
  });
  return conn;
};

module.exports = connect;
