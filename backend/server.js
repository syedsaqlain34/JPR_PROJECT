// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./db");

// const app = express();

// // connect database
// connectDB();

// // middlewares
// app.use(cors());
// app.use(express.json());

// // routes
// app.use("/api/auth", require("./routes/auth"));

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");

const app = express();

/* =======================
   CONNECT DATABASE
======================= */
connectDB();

/* =======================
   MIDDLEWARES
======================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   SERVE FRONTEND FILES
======================= */
// pages (HTML)
app.use(express.static(path.join(__dirname, "../pages")));

// css
app.use(express.static(path.join(__dirname, "../css")));

// images
app.use(express.static(path.join(__dirname, "../images")));

// js files (script.js etc.)
app.use(express.static(path.join(__dirname, "../")));

/* =======================
   API ROUTES
======================= */
app.use("/api/auth", require("./routes/auth"));

/* =======================
   DEFAULT ROUTE (optional)
======================= */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/index.html"));
});

/* =======================
   SERVER START
======================= */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

