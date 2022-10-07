let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
    usuario = usuarioStorage;

    let mensaje = `Bienvenido ${usuario}`;
    alert(mensaje);
}else{
    usuario = prompt("Ingrese su usuario");
    sessionStorage.setItem("usuario", usuario);
}

cerrarSesion.addEventListener("click",()=>{
    sessionStorage.clear();
    alert("Sesión cerrada ¡Gracias por su visita!");
});