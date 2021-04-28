<?php

if(isset($_POST['submit'])){
  $name=$_POST['name'];
  $emailfrom=$_POST['email'];
  $msg=$_POST['msg'];

  $mailto= "calartsplaydance@outlook.com";
  $headers= "from: ".$emailfrom;
  $txt="name: " .$name." ./n/n".$msg;


  mail($mailto, $txt, $headers);
  header("Location: index.html^mailsend");
}

?>
