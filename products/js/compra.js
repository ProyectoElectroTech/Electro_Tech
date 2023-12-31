const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito2 = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito2.addEventListener('click', (e)=>{compra.eliminarProducto(e)});
    compra.calcularTotal();
    procesarCompraBtn.addEventListener('click', procesarCompra);
}

function procesarCompra(e){
    //e.preventDefault();
    if(compra.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            timer: 2500,
            showConfirmButton: false
          }).then(function(){
              window.location = "productos.html";
          })
    }
    else if(cliente.value === '' || correo.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            timer: 2500,
            showConfirmButton: false
          })
    }
    else{
        emailjs.init('0cyFgQKWFDXCIzaGs')
        
        const btn = document.getElementById('procesar-compra');

        document.getElementById('procesar-pago')
        .addEventListener('submit', function(event) {
        event.preventDefault();

            const cargandoGif = document.querySelector('#cargando');
            cargandoGif.style.display='block';

            const enviado = document.createElement('img');
            enviado.src = '/products/img/mail.gif';
            enviado.style.display = 'block';
            enviado.width = '150';
            //Apartado de configuracion en la plataforma EmailJS
        const serviceID = 'service_tl29ldo';
        const templateID = 'template_zqm0u9f';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            
                    cargandoGif.style.display = 'none';
                    document.querySelector('#loaders').appendChild(enviado);
                    setTimeout(() => {
                        enviado.remove();
                        compra.vaciarLocalStorage();
                        /*EDITAR LO DE PRODUCTOS*/
                        window.location = "productos.html";
                    }, 2500);

            }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
            });
        });

    }
}
