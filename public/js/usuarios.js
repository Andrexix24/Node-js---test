function mostrarPassword(){
    var cambio = document.getElementById("txtPassword");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

function alertGuardar(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se guardo el usuario",
    });
}

function alertEditar(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se edito el usuario",
    });
}

function alertCambiarEstado() {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Estas cambiando el estado del usuario",
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

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#ShowPassword').click(function () {
    $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
});
});

