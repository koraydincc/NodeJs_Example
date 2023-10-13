const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const data = [
  {
    id: 1,
    name: "iphone 14",
    price: 50000,
    isActive: true,
    imageUrl: "2.jpg",
  },
  {
    id: 2,
    name: "iphone 15",
    price: 70000,
    isActive: false,
    imageUrl: "1.jpg",
  },
  {
    id: 3,
    name: "iphone 13",
    price: 60000,
    isActive: true,
    imageUrl: "3.jpg",
  },
];

// ROUTELAR
// Ürün detaylarını req.params ile çağırırken
app.use("/products-details/:id", (req, res) => {
  const urun = data.find((u) => u.id == req.params.id);

  res.render("products-details", urun); // name değişkenini EJS şablonuna iletin
});

// Ürünler sayfası için route
app.get("/products", (req, res) => {
  // EJS şablonunu kullanarak ürün listesini görüntüle
  res.render("products", {
    urunler: data,
  });
});

// Ana sayfa için varsayılan route
app.get("/", (req, res) => {
  // EJS şablonunu kullanarak ana sayfayı görüntüle
  res.render("index");
});

app.listen(3000, () => {
  console.log("Port 3000 üzerinden dinleniyor");
});
