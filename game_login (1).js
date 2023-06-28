function addUser (){
  player1_name = documet.getElementById ("player1_name_input").value;
  player2_name = documet.getElementById ("player2_name_input").value;
  player3_name = documet.getElementById ("player3_name_input").value;
 localSltorage.setItem("player1_name", player1_name);
 localSltorage.setItem("player2_name", player2_name);
 localSltorage.setItem("player3_name", player3_name);
 window.location = "game_page(1).html"
}


  

