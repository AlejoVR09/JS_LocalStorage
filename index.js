// a=["Alejo", "asdasd", "wwww", "aaaaa"]
// b={
//     nombre:'Alejo',
//     cargo:"Operario",
//     salario:4500000
// }

// localStorage.setItem('usuario',JSON.stringify(b))

// local=JSON.parse(localStorage.getItem('usuario'))
// console.log(local)

// b=[
//     {
//         nombre:'Alejo',
//         cargo:"Operario",
//         salario:4500000
//     },
//     {
//         nombre:'Carlos',
//         cargo:"Web ui",
//         salario:400000
//     },
//     {
//         nombre:'Juan',
//         cargo:"dev",
//         salario:50000
//     }

// ]

// localStorage.setItem('Users',JSON.stringify(b))

// local = JSON.parse(localStorage.getItem('Users'))

// local.forEach(dato => {
//     document.write(`Nombre: ${dato.nombre} -- Cargo: ${dato.cargo} -- Salario: ${dato.salario}<br>`)
//     console.log(dato)
// });
class producto {
    constructor(name, presentation, price, img){
        this.name=name
        this.presentation=presentation
        this.price=price
        this.img=img
    }
}

const d=document

let form = d.querySelector('.form')

let nombre = d.querySelector('.name-pro')
let presentation = d.querySelector('.presentation-pro')
let price = d.querySelector('.price-pro')
let img = d.querySelector('.image-pro')
let btnSave = d.querySelector('.btnSave')

btnSave.addEventListener("click", function(){
    if (
        nombre.value=="" ||
        presentation.value=="" ||
        price.value==""
    ) {
        alert("vacio")
    } 
    else {
        let product=new producto(nombre.value,presentation.value,price.value,img.value)
        alert(product)
        localSave(product)
    }
    
})

function localSave(Object) {
    let productos=[]
    let saved = JSON.parse(localStorage.getItem('Products'))
    alert(!!saved)
    if (!!saved) {
        productos=saved
    }

    productos.push(Object)
    localStorage.setItem('Products', productos)

    alert(JSON.parse(localStorage.getItem('Products')))
}