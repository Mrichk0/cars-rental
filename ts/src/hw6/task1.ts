const parents = document.querySelectorAll('.item')!

console.log('Number of categories:', parents.length);

parents.forEach(i => {
    console.log(`Category: ${i.firstElementChild?.textContent}, `);
    console.log(`Elements: ${i.querySelectorAll('li').length}`)
})
