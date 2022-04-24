let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'h') {
      conn.write('Say: Hello!');
    }
    if (key === 'g') {
      conn.write('Say: Gotcha!');
    }
    if (key === '9') {
      conn.write('Say: :(');
    }
    if (key === '0') {
      conn.write('Say: :)');
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};