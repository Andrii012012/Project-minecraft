<?php
function buy_game_monay($connect){

   include './constants/massage_error.php';
    
    $id = $_POST['id'];
    $server = $_POST['server'];
    $server_id = $_POST['serverId'];
    $game_monay = $_POST['coins'];
    $monay = $_POST['monay'];
    $minus_monay = $_POST['minusMonay'];

     $result_connect_data_users = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `id` = '$id'");

      $all_user_data = $result_connect_data_users->fetch_assoc();
     
      if($all_user_data){
        $identifier = $all_user_data['servers'];
         
          $result_connect_info_game = mysqli_query($connect, "SELECT * FROM `info_game` WHERE `identifier` = '$identifier'");

          if($result_connect_info_game){
             $rows_need_servers = [];

              while($item = mysqli_fetch_assoc($result_connect_info_game)){
                 if($item['server'] === $server){
                   $rows_need_servers[] = $item;
                 } 
              }

              $rows_need_server = [];

              foreach($rows_need_servers as $item){
                 if($item['server_id'] === $server_id){
                   $rows_need_server[] = $item;
                 }
              }

               if($rows_need_server){
                  if($monay >= $minus_monay){
                     $updata_money = $monay - $minus_monay;
                      mysqli_query($connect, "UPDATE `data_users` SET `coins` = '$updata_money' WHERE `id` = '$id'");
                      mysqli_query($connect, "UPDATE `info_game` SET `monay` = '$game_monay' WHERE `identifier` = '$identifier' AND `server` = '$server' AND `server_id` = '$server_id'");
                  } else {
                      echo $ERROR_MONAY;
                      exit();
                  }
               } else {
                  echo $ERROR_SERVER_NOT_FOUND;
                  exit();
               }

          } else {
             echo $CONNECT_DB;
             exit();
          }
      } else {
        echo $CONNECT_ERORR;
        exit();
      }

      $json = json_encode($all_user_data);
      echo $json;

    $connect->close();
 }

?>