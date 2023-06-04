const express = require("express");
const LoginC = require("./controller/LoginC");
const RegisterC = require("./controller/RegisterC");
const app = express();
const cors = require("cors");
const OrderC = require("./controller/OrderC");
const GetOrders = require("./controller/GetOrders");

const multer = require("multer");
const Postblog = require("./controller/Postblog");
const Addproduct = require("./controller/Addproduct");
const Adlogin = require("./controller/Adlogin");
const AllOrders = require("./controller/AllOrders");
const AllProducts = require("./controller/AllProducts");
const HomePro = require("./controller/HomePro");
const Homedis = require("./controller/Homedis");
const AllDise = require("./controller/AllDise");
const Diynamicd = require("./controller/Diynamicd");
const VideoC = require("./controller/VideoC");
const OTPgen = require("./controller/OTPgen");

app.use(cors());
app.use(express.json());
require("./conn");

require("dotenv").config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static("uploads"))

app.post("/login", LoginC);
app.post("/api/video", VideoC);
app.post('/adlog', Adlogin)
app.get('/api/homepro',HomePro)
app.get('/api/homedis',Homedis)
app.get('/api/dise',AllDise);
app.post('/api/otp',OTPgen)
app.post("/register", RegisterC);
app.post("/order", OrderC);
app.get("/api/orders", AllOrders);
app.get("/api/products", AllProducts);
app.get("/post/:id", Diynamicd);
app.post("/orders/my", GetOrders);
app.post("/api/product/add", upload.single("productimg"), Addproduct);
app.post("/uploadblog", upload.single("image"), Postblog);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server stared at ${PORT}`);
});
