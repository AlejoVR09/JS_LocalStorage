a=["Alejo", "asdasd", "wwww", "aaaaa"]
b={
    nombre:'Alejo',
    cargo:"Operario",
    salario:4500000
}

localStorage.setItem('usuario',JSON.stringify(b))

local=JSON.parse(localStorage.getItem('usuario'))
console.log(local)

b=[
    {
        nombre:'Alejo',
        cargo:"Operario",
        salario:4500000
    },
    {
        nombre:'Carlos',
        cargo:"Web ui",
        salario:400000
    },
    {
        nombre:'Juan',
        cargo:"dev",
        salario:50000
    }

]

localStorage.setItem('Users',JSON.stringify(b))