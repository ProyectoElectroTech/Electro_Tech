const login = document.querySelector('#login');
const procesar = (event) => {
    event.preventDefault()

    const datos = new FormData(event.target);
    const datosComp = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosComp));
}
login.addEventListener('submit',procesar);