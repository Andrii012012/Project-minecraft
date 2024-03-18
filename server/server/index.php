<?php 

 ob_start();
  session_start();
   header("Access-Control-Allow-Origin: *");
     require_once './sendmail.php';
     require_once './connect/connect.php';
     require './constants/massage_error.php';
     require './user_API/signin.php';
     require './user_API/register.php';
     require './user_API/get_team_project.php';
     require './user_API/updata.php';
     require './user_API/get_user.php';
     require './user_API/buy_privilege.php';
     require './user_API/buy_game_monay.php';
     require './user_API/buy_unban.php';

     $sign = $_POST['sign'];
     $register = $_POST['register'];
     $get_team = $_POST['status'];
     $updata = $_POST['updata'];
     $recovery = $_POST['recovery'];
     $get_user = $_POST['getUser'];
     $buy_privilege = $_POST['buyPrivilege'];
     $game_monay = $_POST['buyGameMoney'];
     $buy_unban = $_POST['buyUnban'];
    

      if($sign){
         sign($connect);
      } 
      if($register) {
         register($connect);
      }

      if($get_team){
         getTeam($connect);
      }
   
      if($updata){
          updata($connect);
      }

      if($get_user){
          getUser($connect);
      }

      if($buy_privilege){
         buyPrivilege($connect);
      }

      if($game_monay){
          buy_game_monay($connect);
      }

      if($buy_unban){
          buy_unban($connect);
      }
?>
