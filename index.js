//Variables.........

//carrito de compras
let mBurguer = document.querySelector("#menuHamburguesa");
let carShopping = document.querySelector(".principalProduct");
let exitCarShopping = document.querySelector("#menuHamburguesa2");
let enviarPedido = document.querySelector("#pedir");

//agregar al carrito
let btn = document.querySelectorAll(".btn-compras");
let datosAgregados = document.querySelector("#productos");
let namee = document.querySelector("#nombre");
let precio =document.querySelector("#precio");
let lorem = document.querySelector("#lorem");
let total = document.querySelector("#total");

let precioTotal = 0;

let agregarDatos = (event) =>{
    let parent = event.target.parentElement.parentElement
    let nombreProducto = parent.querySelector("#nombre").textContent
    let precioProducto = parseFloat(parent.querySelector("#precio").textContent)

    let agregarCompra = document.createElement (`h4`);
    agregarCompra.textContent = nombreProducto + " " + precioProducto;
    datosAgregados.appendChild(agregarCompra);

    precioTotal += precioProducto;
    total.textContent = "Total: " + precioTotal + " S/";

    lorem.style.display = "none";
}

exitCarShopping.addEventListener("click",  exitcar = () =>{
    carShopping.style.display = "none";
    mBurguer.style.display = "flex";
    exitCarShopping.style.display = "none"}
    );

mBurguer.addEventListener("click", menuHover = () =>{
    carShopping.style.display = "flex";
    mBurguer.style.display = "none";
    exitCarShopping.style.display = "flex";
    });

btn.forEach(button => {
    button.addEventListener("click", agregarDatos);
});


