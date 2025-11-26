const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>JUSTINE ANGELO K. JAVIER</h1>
    <p>Section: IT BA-4101</p>
    <blockquote>"Life is like riding a bicycle. To keep your balance, you must keep moving." —Albert Einstein</blockquote>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
