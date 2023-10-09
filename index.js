var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      if (err) {
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url == "/urunler") {
    fs.readFile("urunler.html", (err, html) => {
      if (err) {
        res.end("Internal Server Error");
        return;
      }

      res.write(html);
      res.end();
    });
  } else {
    //
    fs.readFile("404.html", (err, html) => {
      if (err) {
        res.end("Internal Server Error");
        return;
      }
      res.write(html);
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Node.js server at port 3000");
});
