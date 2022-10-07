const productos = [
    {id: 1, nombre: "Warriors", precio: 15000},
    {id: 2, nombre: "Bulls", precio: 15000},
    {id: 3, nombre: "Bucks", precio: 15000},
    {id: 4, nombre: "Nike Lebron", precio: 45000},
    {id: 5, nombre: "Nike Kyrie", precio: 35000},
    {id: 6, nombre: "Nike PG 6", precio: 20000},
  ];
  let contenedor = document.getElementById("contenedor");
  
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let inputs = e.target.children;
  
    let producto = productos.find((item) => item.nombre === inputs[0].value);
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${producto.id}</h2>
      <p>Nombre: ${producto.nombre}</p>
      <b>$${producto.precio}</b>
    `;
  
    contenedor.append(div);
  });

