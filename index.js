const express = require("express");
const LoginC = require("./controller/LoginC");
const RegisterC = require("./controller/RegisterC");
const app = express();
const cors = require("cors");
const OrderC = require("./controller/OrderC");

app.use(cors());
app.use(express.json());
require("./conn");

require("dotenv").config();

app.post("/login", LoginC);

app.post("/register", RegisterC);
app.post('/order',OrderC)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server stared at ${PORT}`);
});
