const categoryItems = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoryItems.length);

// Iterare

categoryItems.forEach(categoryItem => {
    const title = categoryItem.querySelector('h2').textContent;
    const listElements = categoryItem.querySelectorAll('ul li');

    console.log(`Category: ${title}`);
    console.log(`Elements: ${listElements.length}`);
});

