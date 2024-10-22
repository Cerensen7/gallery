"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Veritabanı simülasyonu
  var carDatabase = [{
    id: 1,
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2023,
    type: 'Sedan',
    price: 1200,
    fuel: 'Benzin',
    transmission: 'Otomatik',
    capacity: '5 Kişilik',
    luggage: '4 Bavul',
    image: '/api/placeholder/280/160'
  }, {
    id: 2,
    brand: 'BMW',
    model: '320i',
    year: 2023,
    type: 'Sedan',
    price: 1150,
    fuel: 'Benzin',
    transmission: 'Otomatik',
    capacity: '5 Kişilik',
    luggage: '4 Bavul',
    image: '/api/placeholder/280/160'
  }, {
    id: 3,
    brand: 'Audi',
    model: 'A4',
    year: 2023,
    type: 'Sedan',
    price: 1180,
    fuel: 'Dizel',
    transmission: 'Otomatik',
    capacity: '5 Kişilik',
    luggage: '4 Bavul',
    image: '/api/placeholder/280/160'
  } // Daha fazla araç eklenebilir
  ]; // DOM elementleri

  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var categoryButtons = document.querySelectorAll('.category-btn');
  var modeButton = document.querySelector('.btn-mode');
  var rentButtons = document.querySelectorAll('.rent-btn'); // Arama fonksiyonu

  function performSearch(query) {
    if (!query) {
      searchResults.classList.remove('active');
      return;
    }

    var results = carDatabase.filter(function (car) {
      return car.brand.toLowerCase().includes(query.toLowerCase()) || car.model.toLowerCase().includes(query.toLowerCase());
    });
    displaySearchResults(results);
  } // Arama sonuçlarını görüntüleme


  function displaySearchResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
      searchResults.innerHTML = "\n                <div class=\"search-result-item\">\n                    <div class=\"result-info\">\n                        <h4>Sonu\xE7 bulunamad\u0131</h4>\n                        <p>Farkl\u0131 bir arama yapmay\u0131 deneyin</p>\n                    </div>\n                </div>\n            ";
    } else {
      results.forEach(function (car) {
        var resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = "\n                    <img src=\"".concat(car.image, "\" alt=\"").concat(car.brand, " ").concat(car.model, "\">\n                    <div class=\"result-info\">\n                        <h4>").concat(car.brand, " ").concat(car.model, "</h4>\n                        <p>").concat(car.year, " \xB7 ").concat(car.fuel, " \xB7 ").concat(car.price, " TL/g\xFCn</p>\n                    </div>\n                ");
        resultItem.addEventListener('click', function () {
          showCarDetails(car);
        });
        searchResults.appendChild(resultItem);
      });
    }

    searchResults.classList.add('active');
  } // Araç detaylarını gösterme


  function showCarDetails(car) {
    var detailsHTML = "\n            <div class=\"car-details\">\n                <h3>".concat(car.brand, " ").concat(car.model, "</h3>\n                <p>Y\u0131l: ").concat(car.year, "</p>\n                <p>Yak\u0131t: ").concat(car.fuel, "</p>\n                <p>Vites: ").concat(car.transmission, "</p>\n                <p>Kapasite: ").concat(car.capacity, "</p>\n                <p>Bagaj: ").concat(car.luggage, "</p>\n                <p>G\xFCnl\xFCk Fiyat: ").concat(car.price, " TL</p>\n            </div>\n        "); // Burada detayları göstermek için bir modal veya başka bir UI elementi kullanılabilir

    alert("".concat(car.brand, " ").concat(car.model, " se\xE7ildi!\nG\xFCnl\xFCk fiyat: ").concat(car.price, " TL"));
  } // Event Listeners


  var searchDebounceTimer;
  searchInput.addEventListener('input', function (e) {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(function () {
      performSearch(e.target.value);
    }, 300);
  }); // Sayfa tıklamalarını dinle

  document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('active');
    }
  }); // Kategori butonları

  categoryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      categoryButtons.forEach(function (btn) {
        return btn.classList.remove('active');
      });
      button.classList.add('active'); // Burada kategori filtreleme mantığı eklenebilir
    });
  }); // Koyu/Açık mod geçişi

  var isDarkMode = true;
  modeButton.addEventListener('click', function () {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      document.documentElement.style.setProperty('--bg-primary', '#1a1a1a');
      document.documentElement.style.setProperty('--bg-secondary', '#252525');
      document.documentElement.style.setProperty('--bg-tertiary', '#2f2f2f');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#a0a0a0');
      modeButton.textContent = '🌙';
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--bg-secondary', '#f5f5f5');
      document.documentElement.style.setProperty('--bg-tertiary', '#e5e5e5');
      document.documentElement.style.setProperty('--text-primary', '#000000');
      document.documentElement.style.setProperty('--text-secondary', '#666666');
      modeButton.textContent = '☀️';
    }
  }); // Kiralama butonları

  rentButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      var carCard = e.target.closest('.car-card');
      var carName = carCard.querySelector('h3').textContent;
      var price = carCard.querySelector('.price').textContent; // Burada kiralama işlemi başlatılabilir

      alert("".concat(carName, " i\xE7in kiralama i\u015Flemi ba\u015Flat\u0131l\u0131yor.\nFiyat: ").concat(price));
    });
  }); // Sayfa yüklendiğinde varsayılan aramaları göster

  performSearch('');
});
//# sourceMappingURL=scrript.dev.js.map
