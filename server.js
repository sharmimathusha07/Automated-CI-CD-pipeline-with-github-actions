const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Automated CI/CD Pipeline is running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Application is healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
