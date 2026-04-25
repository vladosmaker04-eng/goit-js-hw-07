const categories = document.querySelectorAll('#categories .item');
console.log(`Кількість категорій: ${categories.length}`);
categories.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const count = item.querySelectorAll('ul li').length;
  console.log(`${title}: ${count} items`);
});