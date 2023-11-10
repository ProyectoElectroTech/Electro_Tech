
const formualrio = document.querySelector("#formlogin")
formualrio.addEventListener("submit",validarform)
function validarform(e){
    e.preventDefault();
    const emaillogin = document.querySelector("#emaillog").value
    const passlogin = document.querySelector("#passlog").value
}

let mysql = require('mysql')
let conection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'electrotech'
})
conection.connect((err) =>{
    if(err) throw err
    console.log('la conexion funciona')
})

//Datos Login
conection.query('SELECT * from logins', (err,rows)=>{
    if(err) throw err
    console.log('Datos de la tabla:')
    console.log(rows)
    console.log('la cantidad de resultados es:')
    console.log(rows.length)
})

//Datos Contact
/*conection.query('SELECT * from contact', (err,rows)=>{
    if(err) throw err
    console.log('Datos de la tabla:')
    console.log(rows)
    console.log('la cantidad de resultados es:')
    console.log(rows.length)
})*/

//Datos sing up
/*conection.query('SELECT * from singups', (err,rows)=>{
    if(err) throw err
    console.log('Datos de la tabla:')
    console.log(rows)
    console.log('la cantidad de resultados es:')
    console.log(rows.length)
})*/
conection.end();