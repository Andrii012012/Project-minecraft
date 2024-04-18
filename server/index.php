<?php 
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
     require './user_API/updata_password.php';

     $action = isset($_GET['action']) ? $_GET['action'] : '';
    
      switch($action){
         case 'signin': {
            sign($connect);
            break;
         }
         case 'register': {
            register($connect);
            break;
         }
         case 'get_team_project': {
            getTeam($connect);
            break;
         }
         case 'updata': {
            updata($connect);
            break;
         }
         case 'get_user': {
            getUser($connect);
            break;
         }
         case 'buy_privilege': {
            buyPrivilege($connect);
            break;
         }
         case 'buy_game_monay': { 
            buy_game_monay($connect);
            break;
         }
         case 'buy_unban': {
            buy_unban($connect);
            break;
         }
         case 'updata_password': {
            updata_password($connect);
            break;
         }
      }
?>
