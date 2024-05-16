<?php 
  function sign($connect){

   include './constants/massage_error.php';

    $login = filter_var(trim($_POST['login']));
    $password = filter_var(trim(md5($_POST['password'])));
   
      $result_connect_data_users = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `login` = '$login' AND `password` = '$password'");

      $user = $result_connect_data_users->fetch_assoc();

      if($user){

          $identifier = $user['servers'];       

          $date = time();
 
         $result_connect_info_game = mysqli_query($connect, "SELECT * FROM  `info_game` WHERE `identifier` = '$identifier'");

         $rows_servers = [];

            while($item = $result_connect_info_game->fetch_assoc()){
                $rows_servers[] = $item;
            }


          foreach($rows_servers as $element){

             if(intval($date) >= intval($element['durationStatus'])){
                mysqli_query($connect, "UPDATE `info_game` SET `status` = 'Игрок' WHERE `duration_status` <= '$date'");
             }
          }

              $info_ban_user = [];

              foreach($rows_servers as $item){
                 $info_ban_user[] = $item['info_ban'];
              }

             $save_info_ban_user = [];
              foreach($info_ban_user as $item){
                    $result_connect_info_ban_user = mysqli_query($connect, "SELECT * FROM `info_ban_user` WHERE `id` = '$item'");
                    $result_rows =  mysqli_fetch_assoc($result_connect_info_ban_user);
                    $save_info_ban_user[] = $result_rows;
              }

              $index = 0;

               foreach($rows_servers as $item){
                  $rows_servers[$index]['info_ban'] = $save_info_ban_user[$index];
                  $index++;
               }

          $user['servers'] = $rows_servers; 

        $json = json_encode($user);
        
            echo $json;

      $connect->close();
      exit();
   } else {
      echo $ERROR_USER_NOT_FOUND;
      exit();
      $connect->close();
      exit();
   }
  }
?>