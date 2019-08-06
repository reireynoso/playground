const name = "Rei"
const userAge = 29

const user = {
    name,
    age: userAge,
    location: "Jersey City"
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, price, stock, salePrice} = product
console.log(label)