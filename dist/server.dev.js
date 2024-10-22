"use strict";

var express = require("express");

var path = require("path");

var app = express(); // Statik dosyalar için public klasörünü kullan

app.use(express["static"]("public"));
app.use(express.json()); // Ana sayfa route'u

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
}); // Giriş sayfası route'u

app.get("/giris", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "giris.html"));
}); // Login API endpoint'i

app.post("/api/login", function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password; // Burada gerçek bir veritabanı kontrolü yapılacak
  // Şimdilik basit bir kontrol yapıyoruz

  if (email === "test@test.com" && password === "123456") {
    res.json({
      success: true,
      token: "dummy_token",
      message: "Giriş başarılı"
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Geçersiz email veya şifre"
    });
  }
}); // Sunucuyu başlat

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server http://localhost:".concat(PORT, " adresinde \xE7al\u0131\u015F\u0131yor"));
});
//# sourceMappingURL=server.dev.js.map
