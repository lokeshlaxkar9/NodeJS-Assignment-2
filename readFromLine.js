const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Please enter you name: ", (name) => {
  console.log(`Hello ${name}!`);
  readLine.close();
});
