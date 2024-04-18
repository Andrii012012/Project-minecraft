<?php
    function register($connect) {

      include './constants/massage_error.php';
        
        $login = filter_var(trim($_POST['login']));
        $password = filter_var(trim(md5($_POST['password'])));
        $email = filter_var(trim(($_POST['email'])));
        $date = json_decode($_POST['date']);
        $coins = 5;
    
        if(mb_strlen($login) >= 18 || mb_strlen($login) < 5){
           echo $ERROR_LOGIN_TO_NOT_LONG;
           exit();
        } 
        else if(mb_strlen($password) > 255 || mb_strlen($login) < 6){
          echo $ERROR_PASSWORD_TO_NOT_LONG;
          exit();
        }

          $result_connect_dataUsers = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `login` = '$login'");


            $user_login = mysqli_fetch_assoc($result_connect_dataUsers);

           if(!$user_login){
              $result_connect_dataUsers_get_email = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `email` = '$email'");
                
                 $get_email = mysqli_fetch_assoc($result_connect_dataUsers_get_email);
                
                if(!$get_email){
                      $result_connect_data_users = mysqli_query($connect, "INSERT INTO `data_users`(`id`, `login`, `password`, `email`, `is_team`, `status`, `servers`, `identifier`, `skin`, `avatar`, `date`, `short_description`, `coins`) VALUES (NULL,'$login','$password','$email','0','Игрок',NULL,NULL,NULL,'defaultAvatar.gif','$date',NULL,'$coins')");
                      $result_get_user = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `login` = '$login'");
                      $data_user = mysqli_fetch_assoc($result_get_user);
                      $json = json_encode($data_user );
                      echo $json; 
                     $connect->close();
                } else {
                  echo $ERROR_EMAIL_EXSISTS;
                }
        }   else{
           echo $ERROR_USER_EXSISTS;
        }
      }
?>