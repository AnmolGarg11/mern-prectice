const express = require("express");
const app = express();

//middleware
app.use(express.json());
app.use(require("./Backend/Routes/routes"));





// start server
const port = 5000;
app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
})