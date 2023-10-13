const express = require("express");
const app = express();

//detail sayfası hazırlarken req params ile çağrıyoruz
app.use("/products/:id", (req, res) => {
  res.send(req.params);
  res.send("Products details");
});

app.use("/products", (req, res) => {
  res.send("products");
});

//ilk karşılaşılan geldiği için "/" altta durması lazım

app.use("/", (req, res) => {
  res.send("anasayfa");
});

app.listen(3000, () => {
  console.log("Listening go port 3000");
});
