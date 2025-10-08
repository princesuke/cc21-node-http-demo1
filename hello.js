if (!process.argv[3]) {
  console.log("No argv [3]");
  return;
}

console.log("Hello Node.js", process.argv[2], process.argv[3]);
