const express = require("express");
const app = express();
const port = process.env.PORT || 1001;

// app.get("/", (req, res) => res.type("html").send(html));

app.use(express.static("website"));
app.use(express.static("website/images"));

app.listen(port, () => console.log(`myResume listening on port ${port}`));
