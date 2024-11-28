// Список готелів
const hotelsData = [
  {
    city: "lviv",
    name: "Готель 'Велика гора'",
    location: "Львів",
    description: "Розташований у серці Львова. Безкоштовний Wi-Fi, ресторан, парковка.",
    price: "1200 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐",
    image: "фото/Львів1.jpg"
  },
  {
    city: "lviv",
    name: "Готель 'Львівська казка'",
    location: "Львів",
    description: "Готель із видом на площу Ринок. Усі зручності.",
    price: "1800 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐ ⭐",
    image: "фото/Львів2.jpg"
  },
  {
    city: "lviv",
    name: "Готель 'Зелений парк'",
    location: "Львів",
    description: "Затишний готель біля лісопарку. Комфортні номери.",
    price: "1000 грн/доба",
    rating: "⭐ ⭐ ⭐",
    image: "фото/Львів3.jpg"
  },
  {
    city: "kyiv",
    name: "Готель 'Київська перлина'",
    location: "Київ",
    description: "Розкішний готель біля центру. Басейн, спа-зона.",
    price: "2000 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐ ⭐",
    image: "фото/Львів4.jpg"
  },
  {
    city: "kyiv",
    name: "Готель 'Поділ Інн'",
    location: "Київ",
    description: "Готель у старовинному районі. Сучасний комфорт.",
    price: "1400 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐",
    image: "фото/Київ1.jpg"
  },
  {
    city: "kyiv",
    name: "Готель 'Золоті ворота'",
    location: "Київ",
    description: "Розташований поруч із Золотими воротами. Сніданок включено.",
    price: "1600 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐",
    image: "фото/Київ2.jpg"
  },
  {
    city: "odessa",
    name: "Готель 'Чорне море'",
    location: "Одеса",
    description: "Розташований біля моря. Пляж і басейн.",
    price: "1700 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐ ⭐",
    image: "фото/Одеса1.jpg"
  },
  {
    city: "odessa",
    name: "Готель 'Приморський'",
    location: "Одеса",
    description: "Затишний готель із видом на море.",
    price: "1500 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐",
    image: "фото/Одеса2.jpg"
  },
  {
    city: "odessa",
    name: "Готель 'Одеса Гранд'",
    location: "Одеса",
    description: "Розкішний готель у центрі Одеси. Повний спектр послуг.",
    price: "2500 грн/доба",
    rating: "⭐ ⭐ ⭐ ⭐ ⭐",
    image: "фото/Одеса3.jpg"
  }
];

// Завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
  // Перевіряємо, чи доступні потрібні елементи
  const citySelect = document.getElementById("city");
  const hotelsContainer = document.getElementById("hotels");

  if (!citySelect || !hotelsContainer) {
    console.error("Не знайдено елементи DOM: #city або #hotels");
    return;
  }

  // Функція для фільтрації готелів за містом
  function filterHotels() {
    const city = citySelect.value;
    hotelsContainer.innerHTML = ""; // Очищуємо попередні готелі

    // Фільтруємо готелі
    const filteredHotels = city === "all" ? hotelsData : hotelsData.filter(hotel => hotel.city === city);

    // Генеруємо HTML для кожного готелю
    filteredHotels.forEach(hotel => {
      const hotelCard = `
        <div class="hotel-card">
          <img src="${hotel.image}" alt="Фото готелю">
          <div class="hotel-details">
            <h3>${hotel.name}</h3>
            <p class="location">${hotel.location}</p>
            <p>${hotel.description}</p>
            <div class="rating">${hotel.rating}</div>
          </div>
          <div class="hotel-price">
            <span>${hotel.price}</span>
            <button class="btn-primary" onclick="window.location.href='hotel_booking.html'">Забронювати</button>
          </div>
        </div>
      `;
      hotelsContainer.innerHTML += hotelCard;
    });
  }

  // Слухач для вибору міста
  citySelect.addEventListener("change", filterHotels);

  // Завантаження всіх готелів при старті сторінки
  filterHotels();
});