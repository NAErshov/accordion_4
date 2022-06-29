// Ищем все элементы
document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click' , () => { // тут мы говорим, когда мы нажимаем на этот элемент, делай что-то
        const parent = item.parentNode; // определяем родителя

        parent.classList.toggle('accordion-item--active')
    })
)
    
