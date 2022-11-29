const dotenv = require("dotenv");
dotenv.config();
/**-------------------------------------------------------- */
const express = require("express");
const cors = require("cors");
const app = express();
const usersRouter = require("./routes/user-router");
const port = 8080;
/**---------------------------------- */
const DB = require("./DB");
/**---------------------------------- */

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);

app.get("/", (request, response) => {
  return response.send({ success: true, message: "welcome to my site" });
});

app.listen(port, () => {
  console.log(`Welcome, you on port ${port}`);
});

/**-------------------------------------------------------- */

if(process.env.NODE_ENV === 'production'){
  /**save static files */
  app.use(express.static(path.join(__dirname,'../client/build')));
  app.get("*",(request,response)=>{
    response.sendFile(path.join(__dirname,'../client/build','index.html'))
  })
}

/**-------------------------------------------------------- */
