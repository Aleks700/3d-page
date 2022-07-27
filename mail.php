
<?php 
<<<<<<< HEAD
echo 'working11134'."\r\n";
// $name = $_POST['name'];
// $email = $_POST['email'];
// $message = $_POST['message'];
// $massage = "php worsted langaigh in the world".$name;
// $to = 'alekstok97@mail.ru';
// $subject = 'message from work';
// $sending_message = "message from".$name.''.$message;
// //header("Location: https://www.google.com");

// $headers = "From: noreply@yoursite.com"."\r\n"."CC:".$name;
// // print mail($to, $subject,$massage);
// echo $name;
header('HTTP/1.1 404');
=======


$email = $_POST['email'];



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
>>>>>>> 8d42d60ac3397b2501c86759c85deff763754bad

?>