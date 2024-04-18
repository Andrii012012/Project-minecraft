<?php
function buy_unban($connect){

   include './constants/massage_error.php';

    $id = $_POST['id'];
    $server_name = $_POST['server'];
    $server_id = $_POST['serverId'];
    $cost_unban = $_POST['costUnban'];

     $result__connect_data_users = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `id` = '$id'");

      if($result__connect_data_users){

      $user = mysqli_fetch_assoc($result__connect_data_users);

    $identifier_servers = $user['servers'];

     $monay_user = $user['coins'];

      if($monay_user >= $cost_unban){

     $result_connect_info_game = mysqli_query($connect, "SELECT * FROM `info_game` WHERE `identifier` = '$identifier_servers'");

      if($result_connect_info_game){

           $array_server_user = [];

         while($element = mysqli_fetch_assoc($result_connect_info_game)){
             if($element['server'] === $server_name){
                if($element['server_id'] === $server_id){
                  $array_server_user[] = $element;
                }
             }
         }

         $key = $array_server_user[0]['info_ban'];
         $updata_monay = $monay_user - $cost_unban;;

         mysqli_query($connect, "DELETE FROM `info_ban_user` WHERE `id` = '$key'");
          mysqli_query($connect, "UPDATE `data_users` SET `coins` = '$updata_monay' WHERE `id` = '$id'");

          $json = json_encode($user);
           
           echo $json;

   } else {
      echo $CONNECT_ERORR;
      exit();
   }
   } else {
      echo $ERROR_MONAY;
      exit();
   }
   } else {
       echo $CONNECT_ERORR;
       exit();
   }

   $connect->close();
}
?>