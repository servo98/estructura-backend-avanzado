PROYECTO Backend Avanzado NoSQL

Hacer un API con nodejs + express.js + mongo + mongoose de
un sistema de cine

Pseudo requerimientos:

- Existen 3 roles en el sistema:
    -Admin
    -Empleados
    -Clientes

- Para poder registrar a un usuario en el sistema se debarán ingresar los siguientes datos:
    -DNI
    -Nombres
    -Apellidos
    -Fecha de nacimiento
    -Rol
    -Teléfono
    -Correo
    -Contraseña
    -Username

- Para poder registrar una película en el sistema se deberán ingresar los siguientes datos:
    -Nombre
    -Director
    -Fecha de lanzamiento
    -Calificación
    -Duración
    -Género

- Se podrá registrar los boletos que compran los clientes. Para registrar un boleto comprado del cliente se necesita ingrear los siguientes datos:
    -Cliente
    -Cantidad de boletos
    -Valor del boleto
    -Valor total 
    -Hora de la función
    -Asientos

- Se podrán consultar las películas existentes y se podrán filtrar por:
    -Título
    -Fecha de lanzamiento
    -Calificación
    -Género

- También se podrán consultar los clientes que existan en el sistema

- Se puede consultar el historial de boletos comprados




Bonus de seguridad:
    -Solo los empleados podrán consultar a los los clientes
    -Solo los administradores podrán consultar empleados
    -Los clientes son los únicos que pueden comprar sus propios boletos
    -Todos pueden consultar películas
    -Solo puedo consultar mi propio historial de boletos




Entregable

-Rutas
    -Verbo (POST PUT GET ETC)
    -body necesario
    -URL param necesario
    -Respuesta esperada



| Término  |  Propósito | Reversible  |  Uso típico |  
|---|---|---|---|
|hashing   |   Crear un representación única y fija de datos |  No  | Almacenar passwords y verificar integridad  |
| Encriptado  |  Proteger datos convertiéndolos en un formato ilegible |  Sí | Transmisión segura de datos o almacenamiento seguro  |
| Ofuscado  |  Ofuscar código o los datos para dificultar su comprensión |  Sí parcialmente |  Proteger la propiedad intelectual y prevenir ingeniería inversa |
| Codificación |Convertir datos a un formato en específico |Sí |Transmitir datos a través de la red|

