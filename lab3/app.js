//B1: khai bao http module (chay web)
const http = require("http");
//B2: khai bao port cua web server
//Note: muốn deploy lên hosting (Heroku)
//thì cần phải set port với process.env.PORT
const port = process.env.PORT || 8000;
//B3 tao server
//request : client => server
//response : server => client
const app = http.createServer((req, res) => {
    res.statusCode = 200; //HTTP_OK
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello everyone</h1>")
    res.write("<h2>I am learning NodeJS</h2>");
    res.write(
      "<h3>My web page has been deployed to Heroku successfully !</h3>");
    res.write("<h3>test nodemon</h3>")
    res.end();
})
//B4 chay web
//note: console.log ko bat buoc
app.listen(port, () => {
    console.log("Server is listening at http://localhost:" + port);
});