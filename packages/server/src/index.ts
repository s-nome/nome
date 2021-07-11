import express from "express";

const app = express();
app.use(express.json())

app.get("/api", (req, res) => {
  const response = [
    { message: "Hello world from server!" }
  ]
  res.json(response);
});

app.listen(3030, () => console.log("Server is running"));
