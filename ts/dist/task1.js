"use strict";
const parents = document.querySelectorAll('.item');
console.log('Number of categories:', parents.length);
parents.forEach(i => {
    var _a;
    console.log(`Category: ${(_a = i.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent}, `);
    console.log(`Elements: ${i.querySelectorAll('li').length}`);
});
//# sourceMappingURL=task1.js.map