import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  //   console.log(req.url);
  if (req.url === "/about") {
    try {
      const data = await fs.readFile("./about.txt", "utf-8");
      res.end(data);
    } catch (err) {
      res.end("File not found");
    }
  } else if (req.url === "/json") {
    try {
      const data = await fs.readFile("./data.json", "utf-8");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    } catch (err) {
      res.end("File not found");
    }
  } else {
    res.end(`welcome url: ${req.url}`);
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
