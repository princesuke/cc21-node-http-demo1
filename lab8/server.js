import http from "http";
import dayjs from "dayjs";
import os from "os";

const server = http.createServer((req, res) => {
  console.log(req.headers.host);
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  //   const path = urlObj.pathname;

  //   console.log(req.url);

  if (req.url === "/") res.end("Hello Node.js");
  else if (req.url === "/about") res.end("This is about page.");
  else if (req.url === "/date")
    res.end("Today is " + dayjs().format("YYYY-MM-DD"));
  else if (req.url === "/os") res.end(`Your Os is: [${os.platform()}]`);
  else if (req.url.startsWith("/room")) {
    const roomId = req.url.split("/")[2];
    res.end(`This is Room page, id: ${roomId ?? 0}`);
  } else if (req.url.startsWith("/search")) {
    const name = urlObj.searchParams.get("name");
    const age = urlObj.searchParams.get("age");
    // console.log(urlObj.searchParams);
    res.end(`This is search page, name: ${name}, age: ${age}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
