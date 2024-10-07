alert("Hola , bienvenido a Bianx")
let edad = prompt("Por favor, ingresa tu edad:");
// Verifica si la edad es válida y si es mayor o igual a 17 años
if (edad !== null) {
    edad = parseInt(edad);
    
    if (!isNaN(edad) && edad >= 17) {
        alert("Eres mayor de 17 años. Puedes continuar.");
        // Aquí puedes añadir el código para continuar, por ejemplo, redirigir a otra página
    } else {
        alert("Lo siento, debes tener 17 años o más para continuar.");
        // Aquí puedes bloquear el acceso o redirigir a otra página
        window.location.href = "https://www.ejemplo.com/acceso-denegado";
    }
} else {
    alert("Debes ingresar tu edad para continuar.");
    // Aquí puedes manejar lo que sucede si el usuario cancela el prompt
}
