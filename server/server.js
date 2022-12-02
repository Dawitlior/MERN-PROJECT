const dotenv = require("dotenv");
dotenv.config();
/**-------------------------------------------------------- */
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
/**---------------------------------- */
const DB = require("./DB");
/**---------------------------------- */

const OrderRouter = require("./routes/order-route");
const ProductRouter = require('./routes/product-route');
const StoresRouter = require('./routes/stores-router');
const DepartmentRouter = require('./routes/department-route');


/**-------------------------------------------- */
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

/**------------------------------ */
app.use("/orders", OrderRouter);
app.use("/products", ProductRouter);
app.use("/stores",StoresRouter);
app.use("/departments",DepartmentRouter);

/**------------------------------ */
app.get("/", (request, response) => {
  return response.send({ success: true, message: "welcome to my site" });
});

app.listen(port, () => {
  console.log(`Welcome, you on port ${port}`);
});

/**-------------------------------------------------------- */

if (process.env.NODE_ENV === "production") {
  /**save static files */
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

/**-------------------------------------------------------- */
