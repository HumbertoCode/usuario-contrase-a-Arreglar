
class Sesion {
    constructor(usuario, pass, usuarioRegistrado, contraseñaRegistrada) {
        this.usuario = usuario;
        this.pass = pass;
        this.usuarioRegistrado = usuarioRegistrado;
        this.contraseñaRegistrada = contraseñaRegistrada;
    }

    validar() {
        if (this.usuario === this.usuarioRegistrado && this.pass === this.contraseñaRegistrada) {
            alert('Inicio de sesión exitoso');
            this.redirigirPerfil();
        } else if (this.usuario !== this.usuarioRegistrado || this.pass !== this.contraseñaRegistrada) {
            alert('Usuario o contraseña incorrectos');
        }
    }

    redirigirPerfil() {
        window.location.href = perfil.html;
    }
}

function login() {
    let usuario = 'Humberto'; 
    let pass = '1234'; 

    let usuarioRegistrado = 'Humberto';
    let contraseñaRegistrada = '1234';

    let sesion = new Sesion(usuario, pass, usuarioRegistrado, contraseñaRegistrada);
    sesion.validar();
}



function mostrarInicioSesionExitoso() {
    Toastify({
        text: "Inicio de sesión exitoso",
        duration: 3000,
        close: true, 
        gravity: "top", 
        position: "center", 
        backgroundColor: "#4CAF50", 
    }).showToast();
}


