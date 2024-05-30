document.getElementById('main').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;

   
    var clienteEncontrado = listaClientes.find(cliente => 
        cliente.email === email && cliente.contraseña === contraseña);

    if (clienteEncontrado) {
        alert('Inicio de sesión exitoso para ' + clienteEncontrado.nombre);
        
        window.location.href = 'index.html'; 
    } else {
        alert('Credenciales incorrectas, por favor verifica y vuelve a intentarlo.');
    }
});