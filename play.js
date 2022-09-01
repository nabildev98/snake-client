const connect = require("./client");
// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",
//     port: 50541,
//   });

// interpret incoming data as text

// };
// setup interface to handle user input from stdin

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener
  return stdin;
};
setupInput();
console.log("Connecting ...");
