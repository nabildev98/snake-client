const connect = require("./client");
const setupInput = require("./input");
// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",
//     port: 50541,
//   });

// interpret incoming data as text

// };
// setup interface to handle user input from stdin

// setupInput();
console.log("Connecting ...");
connect();

setupInput();
