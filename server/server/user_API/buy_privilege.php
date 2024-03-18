<?php 
 function buyPrivilege($connect){

   include './constants/massage_error.php';

    $id = $_POST['id'];
    $server = $_POST['server'];
    $server_id = $_POST['serverId'];
    $privilege = $_POST['privilege'];
    $price = $_POST['price'];
    $duration = $_POST['duration'];
    $duration_privilege = null;

     if($duration === '1'){
        $duration_privilege = time() + (30 * 24 * 60 * 60 );
     } else if($duration === '2'){
         $duration_privilege = time() + (60 * 24 * 60 * 60 );
     } else if($duration === '3'){
          $duration_privilege = time() + (90 * 24 * 60 * 60 );
     }  else if($duration === 'Навсегда'){
            $duration_privilege = 'Навсегда';
     }          

   $result_connect_data_users = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `id` = '$id'");


    $data = mysqli_fetch_assoc($result_connect_data_users);

    $identifier = $data['servers'];

    $money = $data['coins'];
     if($money >= $price){
    $result_connect_info_about_server = mysqli_query($connect, "SELECT * FROM `info_game` WHERE `identifier` = '$identifier'");

     $all_servers_user = array();

      while($r = $result_connect_info_about_server->fetch_assoc()){
           if($r['server'] === $server){
                $all_servers_user[] = $r;
           }
      }

      $selected_sever_name = null;
      $selected_server_id = null;
      $selected_server_identifier = null;


      foreach($all_servers_user as $item){
         if($item['server_id'] === $server_id){
            $selected_sever_name = $item['server'];
            $selected_server_id = $item['server_id'];
            $selected_server_identifier = $item['identifier'];
         }
      }


        if($selected_server_id && $selected_sever_name && $selected_server_identifier){
           $updata_money = $money - $price;
           mysqli_query($connect, "UPDATE `info_game` SET `status`='$privilege', `duration_status` = '$duration_privilege' WHERE `identifier` = '$selected_server_identifier' AND `server` = '$selected_sever_name' AND `server_id` = '$selected_server_id'");
           mysqli_query($connect, "UPDATE `data_users` SET `coins` = '$updata_money' WHERE `id` = '$id'");
        }  else {
           echo $ERROR_SERVER_NOT_FOUND;
           exit();
        }

     } else {
        echo $ERROR_MONAY;
        exit();
     }

      $json = json_encode($data);

       echo $json;

    $connect->close(); 
 }
?>