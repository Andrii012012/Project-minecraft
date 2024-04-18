<?php
   function updata_password($connect){

     include './constants/massage_error.php';
     $id = $_POST['id'];
     $old_password = $_POST['oldPassword'];
     $new_password = $_POST['newPassword'];

    $result_connect_data_users = mysqli_query($connect, "SELECT * FROM `data_users` WHERE id='$id'");

     $user = mysqli_fetch_assoc($result_connect_data_users);

      if(!empty($old_password) && !empty($new_password)){
         $password = $user['password'];
          if(md5($old_password) == $password){
             $new_password = filter_var(md5($new_password));
              mysqli_query($connect, "UPDATE `data_users` SET `password` = '$new_password' WHERE `id` = $id");
          } else {
             echo $WRONG_PASSWORD;
             exit();
          }
        }

        $json = json_encode($user);
      
        echo $json;

     $connect->close();
   }
?>