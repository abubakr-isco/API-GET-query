// API отдаёт имена на английском и американские номера,
// поэтому подставляем имена на русском и узбекские номера по id пользователя
const localUsers = {
  1: { name: 'Алишер Каримов', phone: '+998 90 123 45 67' },
  2: { name: 'Дилноза Юсупова', phone: '+998 91 234 56 78' },
  3: { name: 'Бобур Рахимов', phone: '+998 93 345 67 89' },
  4: { name: 'Малика Азизова', phone: '+998 94 456 78 90' },
  5: { name: 'Жасур Турсунов', phone: '+998 97 567 89 01' },
  6: { name: 'Нигора Хасанова', phone: '+998 99 678 90 12' },
  7: { name: 'Санжар Абдуллаев', phone: '+998 88 789 01 23' },
  8: { name: 'Шахзода Мирзаева', phone: '+998 95 890 12 34' },
  9: { name: 'Отабек Назаров', phone: '+998 33 901 23 45' },
  10: { name: 'Камила Исмаилова', phone: '+998 77 012 34 56' }
};

// Загружаем пользователей сразу при открытии страницы
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    const users = response.data;  // массив из 10 пользователей
    const container = document.querySelector('.users-list');
    let html = '';

    console.log(users);  // проверьте структуру

    users.forEach(function(user) {
      const local = localUsers[user.id] || {};
      const name = local.name || user.name;
      const phone = local.phone || user.phone;

      html += `
        <div class="user-card">
          <h3>${name}</h3>
          <p>📧 ${user.email}</p>
          <p>📱 ${phone}</p>
        </div>
      `;
    });

    container.innerHTML = html;
  })
  .catch(function(error) {
    console.log('Ошибка:', error);
    document.querySelector('.users-list').innerHTML =
      '<p class="error">Не удалось загрузить пользователей. Проверьте интернет.</p>';
  });
