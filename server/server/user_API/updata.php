<?php
function updata($connect){

   include './constants/massage_error.php';
     
    function validation($item, $size, $name){
      $black_list = [".js", ".php", ".html", ".scss", ".css", ".ts", ".exe", ".cgi", ".aspx", ".asp", ".htm", ".py", ".xml", ".rb"];

      if(preg_match("/$item\$/i", $name)) return false;

     if($size > 2 * 1024 * 1024) return false;

      return true;
    }

     $id = $_POST['id'];
     $avatar = $_FILES['avatar'];
     $skin = $_FILES['skin'];
     $description = $_POST['shortDescription'];
     $old_password = $_POST['oldPassword'];
     $new_password = $_POST['newPassword'];

     function getData($data){
      $json = json_encode($data);
      
      echo $json;

       exit();
     }

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

      if($description){
         if(strlen($description) > 100){
          echo $ERROR_TOO_MUCH_TEXT;
          exit();
         } else { 
          mysqli_query($connect, "UPDATE `data_users` SET `short_description` = '$description' WHERE `id` = $id" );
          getData($user);
         }
      }

      if($avatar || $skin){
     $rows = array($avatar, $skin);

    if(count($rows) > 0){
     foreach($rows as $item){
        if($item !== null || $item !== '');
       $size = $item['size'];
       $name = $item['name'];
       $type = $item['type'];

        $image_name = md5(microtime()).'.'.substr($type, strlen("image/"));

        if(validation($item, $size, $name)){
          if(move_uploaded_file($item['tmp_name'], 'C:\Users\Andrey\GrowWorld\src\assets\upload\avatars/'.$image_name)){
              if($avatar){
                 mysqli_query($connect, "UPDATE `data_users` SET `avatar` = '$image_name'  WHERE `id` = $id");
              } else if($skin){
                 mysqli_query($connect, "UPDATE `data_users` SET `skin` = '$image_name' WHERE `id` = $id");
              }

               getData($user);

          } else{
            echo $CONNECT_DB;
            exit();
         }
        } else {
          echo $ERROR_NOT_DOWNLOAD_FIEL;
          exit();
        }

     }
    }
   }

   $connect->close();
}
?>