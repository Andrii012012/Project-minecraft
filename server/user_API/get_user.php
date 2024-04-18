<?php
 function getUser($connect){

   include './constants/massage_error.php';

    $user = $_POST['getUser'];

     $result_connect_data_users = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `login` = '$user'");

     $user = mysqli_fetch_assoc($result_connect_data_users);
      if(!$user){
         echo $ERROR_USER_NOT_FOUND;
         exit();
      } else {  

        $key = $user['servers'];

         $get_user = mysqli_query($connect, "SELECT * FROM `info_game` WHERE `identifier` = '$key'");

         $rows = [];

          while($item = $get_user->fetch_assoc()){
             $rows[] = $item;
          }

         $user['servers'] = $rows; 
       
         $json = json_encode($user);
          echo $json;
      } 
       $connect->close();
  }
?>