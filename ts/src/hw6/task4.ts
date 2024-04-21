const incrementBtn = document.querySelector('[data-action="increment"]')!
const decrementBtn = document.querySelector('[data-action="decrement"]')!
const value = document.querySelector('#value') as HTMLFormElement




const counter = {
   result: 0,

    increment():void {
      this.result +=1
    },

    decrement():void {
        this.result -=1
    }
}

incrementBtn.addEventListener('click', () => {
    counter.increment()
value.textContent = counter.result.toString()
})

decrementBtn.addEventListener('click', () => {
    counter.decrement()
value.textContent = counter.result.toString()
})

