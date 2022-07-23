
<?php 
// $name = $_POST['name'];
// $email = $_POST['email'];
// $message = $_POST['message'];
// $to = "alekstok97@mail.ru";
// $subject = "mail from website";
// $text = "Name = ".$name ."\r\n Email = " .$email. "\Message =".$message;


// if($email!=NULL){
//     mail($to,$subject,$text,$headers);
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$massage = "php worsted langaigh in the world".$name;
$to = 'alekstok97@mail.ru';
$subject = 'message from work';
$sending_message = "message from".$name.''.$message;
//header("Location: https://www.google.com");

$headers = "From: noreply@yoursite.com"."\r\n"."CC:".$name;
print mail($to, $subject,$massage);
echo $name;
//$toEmail = "Alekstok97@mail.ru";
//if(!empty($_POST['send'])){
//$name = $_POST["name"];
//$email = $_POST["email"];
//$email = $_POST["email"];
//$text = $_POST["text"];
//}

//if(mail($toEmail,))





?>