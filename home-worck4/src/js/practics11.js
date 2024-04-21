///-------------__GET__---------------

// async function featchBooks() {
//   return fetch('http://localhost:4040/books').then(response => response.json);
// }

// featchBooks();

// function featchBooksById(id) {
//   return fetch(`http://localhost:4040/books/${id}`).then(
//     response => response.json
//   );
// }

// featchBooksById(3);
// featchBooks();

//=================================================================

//-------------__POST__---------------

// const book = {
//   title: 'bestbook',
//   author: 'me',
//   ganres: ['jazz', 'tehno'],
//   rating: 5.72,
// };

// function postBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'aplication/json',
//     },
//     body: JSON.stringify(book),
//   };
//   fetch('http://localhost:4040/books', options).then(response => response.json);
// }

// postBook(book);
//--------------------------------------------

///////////----------------__PUTCH__--------

// function update(update, bookId) {
//   const options = {
//     method: 'PUTCH',
//     headers: {
//       'Content-Type': 'aplication/json',
//     },
//     body: JSON.stringify(update),
//   };

//   fetch(`http://localhost:4040/books/${bookId}`, options);
// }

// update({ author: 'me' }, 3);

function getFruit(name) {
  const fruits = {
    strawbery: 'pop',
    apple: 'rock',
    domen: 'pa',
  };

  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

async function makeSmoothie() {
  console.time('when ');
  const apple = getFruit('apple');

  const strawbery = getFruit('strawbery');
  const allFruit = await Promise.all([apple, strawbery]);
  console.log(allFruit);
  console.timeEnd('when ');
}

makeSmoothie();
