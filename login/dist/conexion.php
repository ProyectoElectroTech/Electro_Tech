<?php
$mysqliConect = mysqli_connect('localhost', 'root', '','electrotech');
if(!$mysqliConect){
    echo "Error al conectar a la base de datos";
}

/* Login*/
$emaillog= $_POST['emaillog'];
$passlog= $_POST['passlog'];
$insertarlog = "INSERT INTO logins(emaillog,passlog,fechalog) VALUES ('$emaillog','$passlog')";
if(mysqli_query($mysqliConect, $insertarlog)){
    echo "";
    
}else{
    echo "Error al guardar datos";
}

/*contact us*/
$name=$_POST['names'];
$phone=$_POST['phone'];
$emailcon=$_POST['emailcon'];
$subject=$_POST['subjects'];
$message=$_POST['messages']; 
$insertarcon = "INSERT INTO contact(names, phone, emailcon, subjects, messages,fechalog) VALUES ('$name','$phone','$emailcon', '$subjects','$messages')";
if(mysqli_query($mysqliConect, $insertarcon)){
    echo "";
    
}else{
    echo "Error al guardar datos";
}

/*singup*/

$emailup=$_POST['emailup'];
$passup=$_POST['passup'];
$confirm_pass=$_POST['confirm_pass'];
$insertarup = "INSERT INTO singups(emailup,passup,confirm_pass,fechaup) VALUES ('$emailup','$passup','$confirm_pass')";
if(mysqli_query($mysqliConect, $insertarup)){
    echo "";
    
}else{
    echo "Error al guardar datos";
}
?>