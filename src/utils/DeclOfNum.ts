/**
 * Функция для корректного отображения числительных
 * @param {Array} titles - ['Яблоко','Яблока','Яблок'] [1,2,5]
 * @param {number} n - Количество элементов
 * @returns {string}
 */
export const declOfNum = (
  n: number,
  titles = ['запись', 'записи', 'записей']
) =>
  titles[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];
