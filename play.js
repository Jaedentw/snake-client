const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.24.209.12' ,
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected");
  });

  conn.on("data", (data) => {
    console.log(data);
  })
  
  return conn;
};

console.log("Connecting ...");
connect();