const formFilter = document.querySelector('.dropdown__box')
const btnFilter = document.querySelector('.dropdown__label')

btnFilter.addEventListener('click' , () => {
    formFilter.classList.toggle ('show')
})