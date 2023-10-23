const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res)=>{
    return res.json({message: "Hey, bro backend is running on port: "+PORT})
});

app.listen(PORT, ()=> console.log(`Server is running on the port:${PORT}`));
