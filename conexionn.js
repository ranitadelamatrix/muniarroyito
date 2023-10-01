import 'mysql2' 

const mysqll = require('mysql2');


// Configuración de la conexión a la base de datos
const connection = mysqll.createConnection({
  host: 'localhost',      // Cambia esto según la dirección de tu servidor MySQL
  user: 'root',     // Cambia esto al nombre de usuario de tu base de datos
  password: 'pancho1677', // Cambia esto a la contraseña de tu base de datos
  database: 'arroyito' // Cambia esto al nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err); // el error
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
  
  // Realizar una consulta de ejemplo
  /*connection.query('SELECT * FROM arroyito', (err, results) => { //aqui tenemos que cambiar el nombre dela tabla
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    console.log('Resultados de la consulta:', results);*/

    // Insertar un nuevo registro en la tabla
  
});
function tramite(a){
  const nuevoRegistro = { id_tramite: 1, ciudadanos_dni: 33693178, tramite: "trejo", fecha:"28/09/2223",tramite: 'licencia' }; // Cambia los valores según tus necesidades
    connection.query('INSERT INTO tramite SET ?', nuevoRegistro, (err, result) => {
      if (err) {
        console.error('Error al insertar el nuevo registro:', err);
        return;
      }
      console.log('Nuevo registro insertado con ID:', result.insertId);
    
    // Cerrar la conexión
    connection.end();
  })
}
function dni(){
let documento = document.getElementById("documento").value
console.log(documento)}
function verificardni(a){


const sql = 'SELECT nombre FROM ciudadanos WHERE id_dni = ?';
connection.query(sql, [documento], (err, results) => {
  if (err) {
    console.error('Error al buscar datos en MySQL: ' + err);
    return;
  }

  if (results.length > 0) {
    // Los resultados de la consulta están en el array "results"
    console.log('Datos encontrados:', results);
  } else {
    console.log('No se encontraron datos para el número de documento:', documento);
  }

  // Cierra la conexión a la base de datos cuando hayas terminado
  connection.end();
})};


 // verificardni(documento)
  

