class Cliente {
    constructor(nombre, apellido, email, contraseña, fechaNacimiento, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contraseña = contraseña;
        this.fechaNacimiento = fechaNacimiento;
        this.pais = pais;
    }
}


var listaClientes = JSON.parse(localStorage.getItem('clientes')) || [];


function registrarCliente(event) {
    event.preventDefault();

    var nombre = document.getElementById('firstname').value;
    
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var pais = document.querySelector('#register-form select').value;

    
    var cliente = new Cliente(nombre, apellido, email, contraseña, fechaNacimiento, pais);
    listaClientes.push(cliente);

    
    localStorage.setItem('clientes', JSON.stringify(listaClientes));

    
    document.getElementById('register-form').reset();
    alert('Registro completado exitosamente');
}


function iniciarSesion(event) {
    event.preventDefault();

    var email = document.getElementById('login-email').value;
    var contraseña = document.getElementById('login-password').value;

    
    var clienteEncontrado = listaClientes.find(cliente => cliente.email === email && cliente.contraseña === contraseña);

    if (clienteEncontrado) {
        alert('Inicio de sesión exitoso para ' + clienteEncontrado.nombre);
        
    } else {
        alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
}

// Event listeners para los formularios de registro e inicio de sesión
document.getElementById('register-form').addEventListener('submit', registrarCliente);
document.getElementById('login-form').addEventListener('submit', iniciarSesion);