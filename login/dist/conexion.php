<?php
$mysqliConect = new mysqli("localhost", "root", "","electrotech");
if(!$mysqliConect){
    echo "Error al conectar a la base de datos";
}
$email=$_POST['email'];
$pass=$_POST['pass'];
$fecha = date("d/m/y"); 
$insertar = "INSERT INTO login(email,pass,fecha) VALUES ('$email','$pass','$fecha')";
if(mysqli_query($mysqliConect, $insertar)){
    echo "";
    
}else{
    echo "Error al guardar datos";
}
?>