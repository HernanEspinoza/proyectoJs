/*function producto(info){
    this.img = info.imagen;
    this.nombre = info.nombre;
    this.precio = info.precio;
    
  }

  let producto1 = new Producto(
    {
      imagen: "aasdf",
      nombre: "Golden State Warriors - Camiseta 2022",
      precio: 15000
      
      
    }
) 

let producto2 = new Producto(
    {
      imagen: "aasdf",
      nombre: "Chicago Bulls - Camiseta 2022",
      precio: 15000
      
      
    }
) 

let producto3 = new Producto(
    {
      imagen: "aasdf",
      nombre: "Milwaukee Bucks - Camiseta 2022",
      precio: 15000
      
      
    }
) 

let producto4 = new Producto(
    {
      imagen: "aasdf",
      nombre: "Zapatillas Nike Kyrie 6",
      precio: 40000
     
      
    }
) 

let producto5 = new Producto(
    {
      imagen: "aasdf",
      nombre: "Zapatillas Nike Lebron 19",
      precio: 45000
      
      
    }
) 

let producto6 = new Producto(
    {
      imagen: "aasdf",
      nombre: "Nike NBA PG 6",
      precio: 30000
      
      
    }
) 

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);


const productos = [
  {nombre: 'Golden State Warriors', cantidad: 5},
  {nombre: 'Chicago Bulls', cantidad: 2},
  {nombre: 'Milwaukee Bucks', cantidad: 1}
]

const resultado = productos.find( producto => producto.nombre === 'Golden State Warriors' );

console.log(resultado);*/

const producto = [
  {nombre: "Warriors"},
  {nombre: "Bulls"},
  {nombre: "Bucks"},
  {nombre: "Nike Lebron"},
  {nombre: "Nike Kyrie"},
  {nombre: "Nike PG 6"}
];

let encontrarProducto = prompt("Ingrese el producto a buscar");
let productoEncontrado = producto.find(producto => producto.nombre === encontrarProducto);
if(productoEncontrado !== undefined) {
  alert(`El producto ${encontrarProducto} está disponible`);
}else {
  alert(`El prodcuto ${encontrarProducto} no está disponible`);
}; 