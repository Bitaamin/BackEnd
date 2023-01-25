const express = require("express");
const cors = require("cors");

const port = 3030;
const app = express();

app.use(cors());


app.get("/", (request, response) => {
    response.json({ status: true, result: [{ id: 1, name: "Baldan" }, { id: 2, name: "Namsrai" }, { id: 3, name: "Dorj" }] });
    console.log(response);
});


app.get("/add", (request, response) => {
    const { a, b } = request.query;

    let result = Number(a) + Number(b);
    response.json({ value: Number(a) + Number(b) });
});

app.listen(port, () => {
    console.log("Server running" + port);
})