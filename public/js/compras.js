function alertGuardar(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se guardo la compra"
    });
}

function alertEditar(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se edito la compra"
    });
}

function alertCambiarEstado() {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Estas cambiando el estado de la compra",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cambiar el estado"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Cambiado!",
            text: "El estado ha sido cambiado.",
            icon: "success"
          });
        }
      });
}