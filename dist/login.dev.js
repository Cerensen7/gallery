"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  var googleLoginBtn = document.getElementById('googleLogin');
  var appleLoginBtn = document.getElementById('appleLogin'); // Form doğrulama fonksiyonları

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  } // Input alanları için anlık doğrulama


  emailInput.addEventListener('input', function () {
    if (!validateEmail(this.value)) {
      emailError.textContent = 'Geçerli bir e-posta adresi giriniz';
      this.classList.add('error');
    } else {
      emailError.textContent = '';
      this.classList.remove('error');
    }
  });
  passwordInput.addEventListener('input', function () {
    if (!validatePassword(this.value)) {
      passwordError.textContent = 'Şifre en az 6 karakter olmalıdır';
      this.classList.add('error');
    } else {
      passwordError.textContent = '';
      this.classList.remove('error');
    }
  }); // Form gönderimi

  loginForm.addEventListener('submit', function _callee(e) {
    var formData, isValid, response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault(); // Form verilerini al

            formData = {
              email: emailInput.value,
              password: passwordInput.value,
              remember: document.getElementById('remember').checked
            }; // Form doğrulama

            isValid = true;

            if (!validateEmail(formData.email)) {
              emailError.textContent = 'Geçerli bir e-posta adresi giriniz';
              isValid = false;
            }

            if (!validatePassword(formData.password)) {
              passwordError.textContent = 'Şifre en az 6 karakter olmalıdır';
              isValid = false;
            }

            if (isValid) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            _context.prev = 7;
            _context.next = 10;
            return regeneratorRuntime.awrap(fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            }));

          case 10:
            response = _context.sent;
            _context.next = 13;
            return regeneratorRuntime.awrap(response.json());

          case 13:
            data = _context.sent;

            if (response.ok) {
              // Başarılı giriş
              localStorage.setItem('token', data.token);
              window.location.href = '/dashboard'; // Kullanıcıyı dashboard'a yönlendir
            } else {
              // Hata mesajını göster
              alert(data.message || 'Giriş başarısız');
            }

            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](7);
            console.error('Giriş hatası:', _context.t0);
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[7, 17]]);
  }); // Sosyal medya girişleri

  googleLoginBtn.addEventListener('click', function () {
    // Google OAuth entegrasyonu
    console.log('Google ile giriş yapılıyor...');
  });
  appleLoginBtn.addEventListener('click', function () {
    // Apple OAuth entegrasyonu
    console.log('Apple ile giriş yapılıyor...');
  });
}); // Tema değiştirme işlevi

var themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    var isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
} // Sayfa yüklendiğinde tema tercihini kontrol et


var savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.toggle('dark', savedTheme === 'dark');
}
//# sourceMappingURL=login.dev.js.map
