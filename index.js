const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    },
]

let numero = 0
//Funcao para soma//
function somaProdutos(productsCart){
    for (let i = 0; i < productsCart.length; i++){
        numero += productsCart[i].price
    }
}
somaProdutos(productsCart)

//Criando as tags//
let body = document.querySelector('body')
let logo = document.createElement('h1')
logo.innerText = "Virtual Market"
let main = document.createElement('main')
let productList = document.createElement('ul')
let header = document.createElement('header')
let headerItem = document.createElement('span')
headerItem.innerText = "Item"
headerItem.classList.add('headItem')
let headerValor = document.createElement('span')
headerValor.classList.add('headValor')
headerValor.innerText = "Valor"
let section = document.createElement('section')
let soma = document.createElement('p')
let somaTotal = document.createElement('span')
somaTotal.innerText = "Total"
let somaNumeros = document.createElement('span')
somaNumeros.innerHTML = `R$ ${numero}`
somaNumeros.classList.add('somaNum')
let buttonEnd = document.createElement('button')
buttonEnd.innerHTML = "Finalizar"

//Renderizando Lista//
for (let i = 0; i < productsCart.length; i++){
    let productDetails = document.createElement('li')
    let productDetailsNome = document.createElement('span')
    let productDetailsPreco = document.createElement('span')

    productDetailsNome.innerText = productsCart[i].name
    productDetailsPreco.innerHTML =  `R$ ${productsCart[i].price}`

    productDetailsNome.classList.add('prodNome')
    productDetailsPreco.classList.add('prodPreco')
    
    
    productList.appendChild(productDetails)
    productDetails.appendChild(productDetailsNome)
    productDetails.appendChild(productDetailsPreco)
}


//Renderizando Tags//
body.appendChild(main)
main.appendChild(logo)
main.appendChild(header)
header.appendChild(headerItem)
header.appendChild(headerValor)
main.appendChild(productList)
main.appendChild(section)
section.appendChild(soma)
soma.appendChild(somaTotal)
soma.appendChild(somaNumeros)
section.appendChild(buttonEnd)