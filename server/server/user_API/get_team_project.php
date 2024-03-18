<?php 
 function getTeam($connect){

  include './constants/massage_error.php';

    $result_connect_data_users = mysqli_query($connect, "SELECT * FROM `data_users` WHERE `is_team` = '1'");
       
    if($result_connect_data_users){
      $rows = array();

     while($item = $result_connect_data_users->fetch_assoc()){
       $rows[] = $item;
     }

   $info_game = array();

    foreach($rows as $item){
      $server = $item['servers'];
       $id = $item['id'];
       $save_array = array();
       $result_connect_info_game = mysqli_query($connect, "SELECT * FROM `info_game` WHERE `identifier` = '$server'");
      while($r = $result_connect_info_game->fetch_assoc()){
        if($item['servers'] === $r['identifier']){
           $save_array[] = $r;
        }   
     }
       $item['servers'] = $save_array;
       $info_game[] = $item;
  }  


      $json = json_encode($info_game);
      echo $json;
    } else {
       echo $CONNECT_ERORR;
       exit();
    }
     $connect->close();
};

?>