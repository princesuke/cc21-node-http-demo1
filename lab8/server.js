import http from "http";
import dayjs from "dayjs";
import os from "os";

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Hello Node.js");
  else if (req.url === "/about") res.end("This is about page.");
  else if (req.url === "/date")
    res.end("Today is " + dayjs().format("YYYY-MM-DD"));
  else if (req.url === "/os") res.end(`Your Os is: [${os.platform()}]`);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
