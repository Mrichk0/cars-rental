const input = document.querySelector('#name-input') as HTMLInputElement
const output = document.querySelector('#name-output')!


   input.addEventListener('input', (e): void => {

      (e.target as HTMLInputElement).value === "" ? output.textContent = 'Anonymous' : output.textContent = (e.target as HTMLInputElement).value
   })


