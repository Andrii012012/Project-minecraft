<?php
// 	use PHPMailer\PHPMailer\PHPMailer;
// 	use PHPMailer\PHPMailer\Exception;

// 	require 'phpmailer/src/Exception.php';
// 	require 'phpmailer/src/PHPMailer.php';
// 	require 'phpmailer/src/SMTP.php';

// 	$email = $_POST['email'];

// 	$mail = new PHPMailer(true);
// 	$mail->CharSet = 'UTF-8';
// 	$mail->setLanguage('ru', 'phpmailer/language/');
// 	$mail->IsHTML(true);

	
// 	$mail->isSMTP();                                            //Send using SMTP
// 	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
// 	$mail->SMTPAuth   = true;           
// 	$mail->SMTPSecure = 'ssl';                      //Enable SMTP authentication
// 	$mail->Username   = 'growworldhelps@gmail.com';                     //SMTP username
// 	$mail->Password   = '050547795525565';                               //SMTP password
// 	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
// 	$mail->Port       = 465;                 
	

// 	//Від кого лист
// 	$mail->setFrom('growworldhelps@gmail.com', '050547795525565'); // Вказати потрібний E-mail
// 	//Кому відправити
// 	$mail->addAddress($email); // Вказати потрібний E-mail
// 	//Тема листа
// 	$mail->Subject = 'Восстановление пароля"';

// 	//Тіло листа
// 	$body = '<h1>Восстановление пароля</h1>';

// 	//if(trim(!empty($_POST['email']))){
// 		//$body.=$_POST['email'];
// 	//}	
	
// 	/*
// 	//Прикріпити файл
// 	if (!empty($_FILES['image']['tmp_name'])) {
// 		//шлях завантаження файлу
// 		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
// 		//грузимо файл
// 		if (copy($_FILES['image']['tmp_name'], $filePath)){
// 			$fileAttach = $filePath;
// 			$body.='<p><strong>Фото у додатку</strong>';
// 			$mail->addAttachment($fileAttach);
// 		}
// 	}
// 	*/

// 	$mail->Body = $body;

// 	//Відправляємо
// 	if (!$mail->send()) {
// 		$message = 'Помилка';
// 	} else {
// 		$message = 'Дані надіслані!';
// 	}

// 	$response = ['message' => $message];

// 	header('Content-type: application/json');
// 	echo json_encode($response);
?>