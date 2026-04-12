/*
// Raw node server

const http = require("http");

const server = http.ctreateServer((req, res) => {
  if (req.method == "GET" && req.url == "/menu") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ items: ["Thali", "Biryani"] }));
  } else if (req.method == "POST" && req.url == "/order") {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    const order = JSON.parse(data);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "received", order }));
  }
});
*/
