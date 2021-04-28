<?php

if(isset($_POST['submit'])){
  $name=$_POST['name'];
  $email=$_POST['email'];
  $msg=$_POST['msg'];

  $to= 'calartsplaydance@gmail.com';
  $subject='form submit';
  $message="name: " .$name. "/n". "msg: ". "/n/n".$msg;
  $headers= "from: ".$email;

  if(mail($to, $subject, $message, $headers)){
    echo"<h1>sent! thank you </h1>";
  }else{
    echo "something went wrong";
  }
}

?>
