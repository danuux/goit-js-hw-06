let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', () =>{
    counterValue -=1;
    document.getElementById('value').textContent = counterValue;
})
incrementButton.addEventListener('click', () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
});


