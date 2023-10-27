<?php
$mysqliConect = new mysqli('localhost', 'root', '','electrotech');
if(!$mysqliConect){
    echo "Error al conectar a la base de datos";
}
$emaillog=$_POST['emaillog'];
$passlog=$_POST['passlog'];
$fechalog = date("d/m/y"); 
$insertar = "INSERT INTO logins(emaillog,passlog,fechalog) VALUES ('$emaillog','$passlog','$fechalog')";
if(mysqli_query($mysqliConect, $insertar)){
    echo "";
    
}else{
    echo "Error al guardar datos";
}

?>