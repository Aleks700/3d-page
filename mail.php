
<?php 


$email = $_POST['email'];

ini_set('SMTP', "localhost");
ini_set('smtp_port', "25");
ini_set('sendmail_from', "alekstok97@mail.ru");



if($email!=NULL){

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$massage = "message from".$name."email was".$email;
$to = 'alekstok97@mail.ru';
$subject = 'message from work';
$sending_message = "message from ".$name.'your email'.$email;


$headers = "From: noreply@yoursite.com"."\r\n"."CC:".$name;

print mail($to, $subject,$massage);

}

?>