const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req, res)=>{
    return res.send("nice");
});


app.listen(port, () => console.log(`Listening on port ${port}!`))