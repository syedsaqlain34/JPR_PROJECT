const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");

const app = express();

/* CONNECT DATABASE */
connectDB();

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* SERVE FRONTEND FILES */
app.use(express.static(path.join(__dirname, "../pages")));
app.use(express.static(path.join(__dirname, "../css")));
app.use(express.static(path.join(__dirname, "../images")));
app.use(express.static(path.join(__dirname, "../")));

/* ROUTES */
app.use("/api/auth", require("./routes/auth"));

/* DEFAULT ROUTE */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/signup.html"));
});

/* START SERVER */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


