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

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var nombre = document.getElementById('firstname').value;
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var pais = document.querySelector('#register-form select').value;

    
    var cliente = new Cliente(nombre, apellido, email, contraseña, fechaNacimiento, pais);

    
    listaClientes.push(cliente);

    
    document.getElementById('register-form').reset();

    console.log(listaClientes); 
    for (let i = 0; i < listaClientes.length; i++) 
        {
        alert('Cliente ' + (i+1) + ': ' + 
              '\nNombre: ' + listaClientes[i].nombre +
              '\nApellido: ' + listaClientes[i].apellido +
              '\nEmail: ' + listaClientes[i].email +
              '\nFecha de Nacimiento: ' + listaClientes[i].fechaNacimiento);
    }
    document.getElementById('register-form').reset();
});


var listaClientes = [];
