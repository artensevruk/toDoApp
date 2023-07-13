import http from "http";
http.createServer((request , response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.end(JSON.stringify(toDos));
}).listen(3000);

const toDos = [{ text: "Lean JS", done: false, id: 0 }];

