document.addEventListener('DOMContentLoaded', () => {
    // Veritabanı simülasyonu
    const carDatabase = [
        {
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
        },
        {
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
        },
        {
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
        },
        // Daha fazla araç eklenebilir
    ];

    // DOM elementleri
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const modeButton = document.querySelector('.btn-mode');
    const rentButtons = document.querySelectorAll('.rent-btn');

    // Arama fonksiyonu
    function performSearch(query) {
        if (!query) {
            searchResults.classList.remove('active');
            return;
        }

        const results = carDatabase.filter(car => 
            car.brand.toLowerCase().includes(query.toLowerCase()) ||
            car.model.toLowerCase().includes(query.toLowerCase())
        );

        displaySearchResults(results);
    }

    // Arama sonuçlarını görüntüleme
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="result-info">
                        <h4>Sonuç bulunamadı</h4>
                        <p>Farklı bir arama yapmayı deneyin</p>
                    </div>
                </div>
            `;
        } else {
            results.forEach(car => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                    <div class="result-info">
                        <h4>${car.brand} ${car.model}</h4>
                        <p>${car.year} · ${car.fuel} · ${car.price} TL/gün</p>
                    </div>
                `;
                
                resultItem.addEventListener('click', () => {
                    showCarDetails(car);
                });
                
                searchResults.appendChild(resultItem);
            });
        }
        
        searchResults.classList.add('active');
    }

    // Araç detaylarını gösterme
    function showCarDetails(car) {
        const detailsHTML = `
            <div class="car-details">
                <h3>${car.brand} ${car.model}</h3>
                <p>Yıl: ${car.year}</p>
                <p>Yakıt: ${car.fuel}</p>
                <p>Vites: ${car.transmission}</p>
                <p>Kapasite: ${car.capacity}</p>
                <p>Bagaj: ${car.luggage}</p>
                <p>Günlük Fiyat: ${car.price} TL</p>
            </div>
        `;
        
        // Burada detayları göstermek için bir modal veya başka bir UI elementi kullanılabilir
        alert(`${car.brand} ${car.model} seçildi!\nGünlük fiyat: ${car.price} TL`);
    }

    // Event Listeners
    let searchDebounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });

    // Sayfa tıklamalarını dinle
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Kategori butonları
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Burada kategori filtreleme mantığı eklenebilir
        });
    });

    // Koyu/Açık mod geçişi
    let isDarkMode = true;
    modeButton.addEventListener('click', () => {
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
    });

    // Kiralama butonları
    rentButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const carCard = e.target.closest('.car-card');
            const carName = carCard.querySelector('h3').textContent;
            const price = carCard.querySelector('.price').textContent;
            
            // Burada kiralama işlemi başlatılabilir
            alert(`${carName} için kiralama işlemi başlatılıyor.\nFiyat: ${price}`);
        });
    });

    // Sayfa yüklendiğinde varsayılan aramaları göster
    performSearch('');
});