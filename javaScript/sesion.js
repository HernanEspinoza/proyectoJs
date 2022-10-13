
iniciarSesion.addEventListener("click", ()=>{
    Swal.fire({
        title: 'Ingrese su usuario',
        input: 'text',
       
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        
       
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value}`,
            
          });
        }
      });
});

cerrarSesion.addEventListener("click",()=>{
    sessionStorage.clear();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sesión finalizada ¡Gracias por su visita!',
        showConfirmButton: false,
        timer: 1500
      })
});