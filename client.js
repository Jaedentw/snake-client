const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.242.211' ,
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected");
    conn.write('Name: JTW')
  });

  conn.on("data", (data) => {
    console.log(data);
  })
  
  return conn;
};

console.log("Connecting ...");


module.exports = {connect};