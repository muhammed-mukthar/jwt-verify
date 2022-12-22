const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { authenicate } = require("./middileware/middleware");

app.use(express.json());

function sendtoken() {
  let token = jwt.sign(
    {
      data: "foobar",
    },
    "secret",
    { expiresIn: "30s" }
  );

  return token;
}

app.get("/", (req, res) => {
  let token = sendtoken();
  res.json({ data: token });
});

app.get("/auth", authenicate, (req, res) => {
  try {
    res.json({ data: "you are authenticated" });
  } catch (err) {
    res.status(500).json({ err: "error happende" });
  }
});

app.listen(5000, () => {
  console.log("server running on port 3000");
});
