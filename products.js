
const list = document.querySelector('ul')
const buttonEach = document.querySelector('.show-all')
const buttonMap = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')


function formatCurrency(value) {

    const newValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}


function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {

        myLi += `<li>
             <img src=${product.src} alt="">
                 <p>${product.name}</p>
                 <p class="item-price">${formatCurrency(product.price)}</p>
         </li>`

    })

    list.innerHTML = myLi


}



function mapAllitens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}


function sumAllitems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `<li>
             
                <p>O valor total dos produtos é de ${formatCurrency(totalValue)}</p>
         </li>`
}


function filterAllitems() {

    const filterItems = menuOptions.filter((product) => product.vegan)

    showAll(filterItems)
}



buttonEach.addEventListener('click', () => showAll(menuOptions))
buttonMap.addEventListener('click', mapAllitens)
sumAll.addEventListener('click', sumAllitems)
filterAll.addEventListener('click', filterAllitems)