var player = 0;

function play() {
    player++;
    document.getElementById("game").innerHTML =
        '<p>PLAYER' + player + '</p>' +
        '<p>Name:  <input type="text" id="name" placeholder="Name"> </p>' +
        '<p>' +
        'Select Class: ' +
        '<select id="class">' +
        '<option>Soldier</option><option>General</option><option>Strateg</option>' +
        '</select>' +
        '</p>' +
        '<button class="button_02" onclick="dowload()">NEXT</button>';
}

var player_1_name;
var player_1_class;
var player_2_name;
var player_2_class;
function finish(id,color,number,x) {
    number.style="transition:  color 0.5s;";
    id.style="transition:  background-color 0.5s;";
    id.style.backgroundColor = color;
    number.innerHTML = "x"+x;
     number.style.color = color;
     
    
}
function dowload() {
    if (player == 1) {
        player_1_name = document.getElementById("name").value;
        player_1_class = document.getElementById("class").value;
        play();
    } else if (player == 2) {
        player_2_name = document.getElementById("name").value;
        player_2_class = document.getElementById("class").value;
        player = 0;
        //alert(player_1_name + " " + player_2_name);
       set_window()
    }
}
let object;
let shiper = [5,3,2,1];
let red_div;
var  yes 
var  no 
let board_01;
let board_02;
let header;
let the_end=0;
function set_window()
{

    player++;
    if(player==1)
    {
    board_01 = document.createElement("div");
    board_01.id = "board_01";
    board_01.className = "board";
    board_02= document.createElement("div");
    board_02.id = "board_02";
    board_02.className = "board";
    header=document.getElementById("header");
    header.innerHTML="Hello "+player_1_name;
    board_01.innerHTML=
    "<center><h2>SET YOUR SHIPS</h2></center>"+
    "<div  id='ship_00' class='ships' class='color'></div><div class='number' id='number0'>x5</div>"+
    "<div id='ship_01' class='ships' class='color'></div><div class='number' id='number1'>x3</div>"+
    "<div id='ship_02' class='ships' class='color'></div><div class='number' id='number2'>x2</div>"+
    "<div id='ship_03' class='ships' class='color'></div><div class='number' id='number3'>x1</div>";
    
    var existing_div_01 = document.getElementById("aside");
     existing_div_01.replaceWith(board_01);
    var existing_div_02=document.getElementById("content");
     existing_div_02.replaceWith(board_02);
//wypelnienie    
     tresc_diva="";
     yes = new Audio("yes.wav");
     no = new Audio("no.wav");
     for(i=0;i<420;i++)
     {
         if((i+1)%21!=0)
         tresc_diva=tresc_diva+'<div class="field" id='+i+'></div>'
         else if((i+1)%21==0)
         {
             tresc_diva=tresc_diva+'<div style="clear:both" class="wall" id='+i+'></div>';
         }
     }
    }
    else if(player==2)
     {
        header.innerHTML="Hello "+player_2_name;
        for(i=0;i<4;i++)
        {
            the_end=0;
            ships[i].classList.remove("block");
            let number0=document.getElementById("number" + i);
            let id0 = document.getElementById("ship_0" + i);
            if(i==0) finish(id0,"black",number0,5)
            else finish(id0,"black",number0,(4-i))
            shiper = [5,3,2,1];
        }

        
     }
     else 
     {
        alert("git")
        player=0;
        document.getElementById("board_02").innerHTML=
     '<div class=game_1>'+tresc_diva+'</div>';
     alert("git")
     document.getElementById("board_01").innerHTML=
     '<div class=game_1>'+tresc_diva+'</div>';
     }
     if(player==1 || player==2)
     {
     document.getElementById("board_02").innerHTML=
     '<div class=game_1>'+tresc_diva+'</div>';
     set_ships()
     }
     
}
function change_shiper(i,j)
{
    if(j==true)
    {
   
    shiper[i]--;
    document.getElementById("number"+i).innerText="x"+shiper[i];
    }
    else 
    {
    shiper[i]++;
    document.getElementById("number"+i).innerText="x"+shiper[i]; 
    }
}
let ships;
 function set_ships() {
    
    if(player==1)
    {
    ships = document.getElementsByClassName("ships");
    board_01 = document.getElementById("board_01");
     board_02 = document.getElementById("board_02");
    }
    
   
    for ( i = 0; i < ships.length; i++) {
        ships[i].addEventListener("click", (function get(i) {
            return function start() {
                if (shiper[i] > 0) {
                change_shiper(i,true)
                ships[i].classList.add("block");
                      
                
                
              
                function change_hover(event) {
                    hover(event, i);
                }
                
                function change_hover_2(event) {
                    hover_2(event, i);
                }
                
                function delet(event) {
                    
                    let delet_div = event.target;
                   if(delet_div.tagName == "DIV" && delet_div.classList.contains("ships") )
                   {
                    change_shiper(i,false);
                    document.removeEventListener("mousemove", moveObject);
                    board_02.removeEventListener("mousemove", change_hover);
                    board_02.removeEventListener("mouseout", change_hover_2);
                    remove();
                    
                    board_02.removeEventListener("mousedown", change);
                    document.removeEventListener("keyup", rotation);
                    ships[i].classList.remove("block");
                    board_01.removeEventListener("mousedown", delet);
                    
                    if (shiper[i] > 0 && number.style.color=='green') {
                        finish(id, "black",number,1);
                    
                        } 
                   
                   }
                }
                
                function change(event) {
                    
                   
                    let div=event.target;
                    if(div.classList.contains("field_hover"))
                    {
                        
                    yes.play();
                    put_div(event, i)
                    remove();
                    document.removeEventListener("mousemove", moveObject);
                    board_02.removeEventListener("mousemove", change_hover);
                    board_02.removeEventListener("mouseout", change_hover_2);
                    
                    
                    board_02.removeEventListener("mousedown", change);
                    document.removeEventListener("keyup", rotation);
                    board_01.removeEventListener("mousedown", delet);
                    the_end++;
                    
                    if (shiper[i] > 0) ships[i].classList.remove("block");
                   
                    if(the_end==11) 
                    {
                    set_window(); 
                   
                    }
                    }
                    else
                    {
                        no.play();
                        object.classList.remove("objects");
                        object.classList.add("red_div");
                        
                        setTimeout(function() {
                            object.classList.remove("red_div");
                            
                            object.classList.add("objects");
                        }, 500);
                    }
                    
                }
                
                function rotation(event) {
                        if (event.key === "g" || event.key === "G") {
                            
                           
                        board_02.removeEventListener("mousemove", change_hover);
                        board_02.removeEventListener("mouseout", change_hover_2);
                        change_id(i)
                        delete_hover();
                        board_02.addEventListener("mousemove", change_hover);
                        delete_hover();
                        board_02.addEventListener("mouseout", change_hover_2);
                        delete_hover();
                        }
                    }
                    
                    create_Element(i);
                    
                    document.addEventListener("mousemove", moveObject);
                    board_02.addEventListener("mousemove", change_hover);
                    board_02.addEventListener("mouseout", change_hover_2);
                    board_01.addEventListener("mousedown", delet);
                    
                    
                    board_02.addEventListener("mousedown", change);
                    
                    document.addEventListener("keyup", rotation);
                    var number=document.getElementById("number" + i);
                    var id = document.getElementById("ship_0" + i);
                        if (shiper[i] == 0 ) {
                          
                        finish(id, "green",number,0);
                        
                        ships[i].removeEventListener("click", start)

                        } 
                    
                        
                }
                    
                
                } 
                
         
           
            
        })(i));
        
    }

};



       
let before_div =[];
let after_div =[];
let right_div =[];
let left_div =[];
let clicked_div;
function create_Element(i)
{
  object = document.createElement("div");
    object.id = "object_0" + i + "_p";
    
    
    ships[i].appendChild(object);
   
    object.classList.add("objects");
                    
}
function change_class(class_now,class_after,...divs)
{
    for (let i1 = 0; i1 < divs.length; i1++) {
        divs[i1].classList.remove(class_now);
            divs[i1].classList.add(class_after);
        }
           
}
function moveObject(e) {
    
        object.style.left = `${e.pageX}px`;
        object.style.top = `${e.pageY}px`;
}

function change_id(i)
{
    if(object.id == "object_0"+i+"_p")object.id = "object_0"+i+"_h";
   else if(object.id == "object_0"+i+"_h")object.id = "object_0"+i+"_p";
    else object.id="";
           
}
function remove()
{
    object.remove();
} 
function delete_hover()
{
     all_divs_1=document.getElementsByClassName("field_hover");
     all_divs_2=document.getElementsByClassName("field_red");
     for(let i=0; i<all_divs_1.length;i++)
     change_class("field_hover","field",all_divs_1[i]);
     for(let i=0; i<all_divs_2.length;i++)
     change_class("field_red","field",all_divs_2[i]);
}




function set_Attribute(i,div,ktory) {
    div.setAttribute("block","true");
    if (i==0 && ktory==0) {
       
        if(before_div[0])before_div[0].setAttribute("block","true");
        if(left_div[4])left_div[4].setAttribute("block","true");
        if(right_div[4])right_div[4].setAttribute("block","true");
        if(after_div[0])after_div[0].setAttribute("block","true");
    }
    
    else if (i==1) {
        if(ktory==1)
        {
            if(after_div[0])after_div[0].setAttribute("block","true");
        
        for(i1=0;i1<2; i1++)
        {
             if(before_div[i1])before_div[i1].setAttribute("block","true");
            if(left_div[i1+3])left_div[i1+3].setAttribute("block","true");
            if(right_div[i1+3])right_div[i1+3].setAttribute("block","true");
        
        }
        }
        else if(ktory==2)
        {
            if(before_div[0])before_div[0].setAttribute("block","true");
            for(i1=0;i1<2; i1++)
            {
        
        if(after_div[i1])after_div[i1].setAttribute("block","true");
        if(left_div[i1+4])left_div[i1+4].setAttribute("block","true");
        if(right_div[i1+4])right_div[i1+4].setAttribute("block","true");
            }
        }
    }
    else if (i==2) {
        if(ktory==0)
        {
       for(i1=0;i1<2; i1++)
        {
            if(before_div[i1])before_div[i1].setAttribute("block","true");
            if(after_div[i1])after_div[i1].setAttribute("block","true");
        }
        for(i1=3;i1<6; i1++)
         {
            if(left_div[i1])left_div[i1].setAttribute("block","true");
            if(right_div[i1])right_div[i1].setAttribute("block","true");
         }
    
        }
        else if(ktory==1)
        {
            for(i1=0;i1<3; i1++)
            {
                if(before_div[i1])before_div[i1].setAttribute("block","true");
                if(left_div[i1+2])left_div[i1+2].setAttribute("block","true");
                if(right_div[i1+2])right_div[i1+2].setAttribute("block","true");
            }
        
        }
        else if(ktory==2)
        {
            for(i1=0;i1<3; i1++)
            {
                if(after_div[i1])after_div[i1].setAttribute("block","true");
                if(left_div[i1+4])left_div[i1+4].setAttribute("block","true");
                if(right_div[i1+4])right_div[i1+4].setAttribute("block","true");
            }
        }
    }
    else if (i==3) {
        if(ktory==0)
        {
       for(i1=0;i1<3; i1++)
        {
            if(before_div[i1])before_div[i1].setAttribute("block","true");
            if(after_div[i1])after_div[i1].setAttribute("block","true");
        }
        for(i1=2;i1<7; i1++)
         {
            if(left_div[i1])left_div[i1].setAttribute("block","true");
            if(right_div[i1])right_div[i1].setAttribute("block","true");
         }
    
        }
        else if(ktory==1)
        {
            for(i1=0;i1<5; i1++)
            {
                if(before_div[i1])before_div[i1].setAttribute("block","true");

            }
            for(i1=0;i1<6; i1++)
            {
                if(left_div[i1])left_div[i1].setAttribute("block","true");
                if(right_div[i1])right_div[i1].setAttribute("block","true");
            }
        
        }
        else if(ktory==2)
        {
            for(i1=0;i1<5; i1++)
            {
                if(after_div[i1])after_div[i1].setAttribute("block","true");
    
            }
            for(i1=4;i1<9; i1++)
            {
                if(left_div[i1])left_div[i1].setAttribute("block","true");
                if(right_div[i1])right_div[i1].setAttribute("block","true");
            }
        }
        else if(ktory==3)
        {
            if(after_div[0])after_div[0].setAttribute("block","true");
            for(i1=0;i1<4; i1++)
            {
                if(before_div[i1])before_div[i1].setAttribute("block","true");
                
    
            }
            for(i1=1;i1<6; i1++)
            {
                if(left_div[i1])left_div[i1].setAttribute("block","true");
                if(right_div[i1])right_div[i1].setAttribute("block","true");
    
            }
        }
        else if(ktory==4)
        {
            if(before_div[0])before_div[0].setAttribute("block","true");
            for(i1=0;i1<4; i1++)
            {
                if(after_div[i1])after_div[i1].setAttribute("block","true");
                
    
            }
            for(i1=3;i1<8; i1++)
            {
                if(left_div[i1])left_div[i1].setAttribute("block","true");
                if(right_div[i1])right_div[i1].setAttribute("block","true");
    
            }
            
        }
    }
    
}

function attribute(...divs) {
    
    for (let i1 = 0; i1 < divs.length; i1++) {
        if ((divs[i1]) && divs[i1].getAttribute("block")) {
            return false;
        }
    }
    return true;
}
function class_list(class_Name, ...divs) {
   
    for (let i1 = 0; i1 < divs.length; i1++) {
        if (!divs[i1].classList.contains(class_Name)) {
            return false;
           
        }
    }
    return true;
}
function wall(...divs) {
    for (let i = 0; i < divs.length; i++) {
     
      if (!divs[i].classList.contains("field")) {
        return false;
      }
      
    }
  
    return true;
  }
  function wall_2(...divs) {
    for (let i = 0; i < divs.length; i++) {
     
      if (!divs[i].classList.contains("field_hover") && !divs[i].classList.contains("field_red")) {
        return false;
      }
      
    }
  
    return true;
  }

  function wall_3(...divs) {
    for (let i = 0; i < divs.length; i++) {
     
      if (!divs[i].classList.contains("field_hover") && !divs[i].classList.contains("field_red")) {
        return false;
      }
      
    }
  
    return true;
  }
  function save(which,ships_player,...divs)
  {
    
    for (let i = 0; i < divs.length; i++) {
        for (let j = 0; j < 6; j++) {
            if (ships_player[which][j] == 0) {
                ships_player[which][j] = divs[i].id;
                break;
            }
        }
    }
    
                
  }

let ships_player_1=[[0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0]];
let ships_player_2=[[0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0]];
function put_div(event, i) {
    clicked_div = event.target;
    let id = parseInt(clicked_div.id);
   
    if (clicked_div.tagName == "DIV" && clicked_div.classList.contains("field_hover") || clicked_div.classList.contains("field_red")) {
        if(object.id=="object_0"+i+"_p")
        {
        for(i1=0;i1<5; i1++)
          {  before_div[i1]=document.getElementById(id - 21*(i1+1));
            after_div[i1]=document.getElementById(id + 21*(i1+1));
          }
          for(i1=0;i1<10; i1++)
          {  left_div[i1]=document.getElementById(id - 85+(i1*21));
            right_div[i1]=document.getElementById(id - 83+(i1*21));
          }
        }
        else if(object.id=="object_0"+i+"_h")
         {
             for(i1=0;i1<5; i1++)
          {  before_div[i1]=document.getElementById(id - 1*(i1+1));
            after_div[i1]=document.getElementById(id + 1*(i1+1));
          }
          for(i1=0;i1<10; i1++)
          {  left_div[i1]=document.getElementById(id - 26+(i1+1));
            right_div[i1]=document.getElementById(id + 16+(i1+1));
          }
         } 
        
        if (i == 0)
        {   
           
                
                change_class("field_hover", "field_ship",clicked_div);
                set_Attribute(i,clicked_div,0);
                if (player==1)
                save(i,ships_player_1,clicked_div)
                else
                save(i,ships_player_2,clicked_div)
        }
        else if (i == 1)
        {
            if (before_div[0]) 
            {
                change_class("field_hover", "field_ship",clicked_div,before_div[0] );
                set_Attribute(i, clicked_div, 1);
                if (player==1)
                save(i,ships_player_1,clicked_div,before_div[0])
                else
                save(i,ships_player_2,clicked_div,before_div[0])
            } 
            else if(!before_div[0] || !wall_3(before_div[0]))
                {
                   
                change_class("field_hover", "field_ship",clicked_div,after_div[0] );
                set_Attribute(i, clicked_div, 1);
                if (player==1)
                save(i,ships_player_1,clicked_div,after_div[0])
                else
                save(i,ships_player_2,clicked_div,after_div[0])
                }
                
        }
        else if (i == 2 ) 
        {
          
            if (before_div[0] && after_div[0] && wall_3(before_div[0],after_div[0])) 
            {
               change_class("field_hover", "field_ship",clicked_div,before_div[0],after_div[0] );
                set_Attribute(i, clicked_div, 0);
                if (player==1)
                save(i,ships_player_1,clicked_div,after_div[0],before_div[0])
                else
                save(i,ships_player_2,clicked_div,after_div[0],before_div[0])
                }
            } 
            else if (before_div[0] && !after_div[0] || !wall_3(after_div[0]))
            {
                change_class("field_hover", "field_ship",clicked_div,...before_div.slice(0,2));
                set_Attribute(i, clicked_div, 1);
                if (player==1)
                save(i,ships_player_1,clicked_div,...before_div.slice(0,2))
                else
                save(i,ships_player_2,clicked_div,...before_div.slice(0,2))
            } 
            else if (!before_div[0] && after_div[0] || !wall_3(before_div[0])) 
            {
                change_class("field_hover", "field_ship",clicked_div,...after_div.slice(0,2));
                set_Attribute(i, clicked_div, 2);
                if (player==1)
                save(i,ships_player_1,clicked_div,...after_div.slice(0,2))
                else
                save(i,ships_player_2,clicked_div,...after_div.slice(0,2))
            }
        
        else if(i==3 )
        {
            if(before_div[0] && after_div[0] && before_div[1] && after_div[1] && wall_3(...before_div.slice(0,2),...after_div.slice(0,2)))
            {
                change_class("field_hover", "field_ship",clicked_div,...after_div.slice(0,2),...before_div.slice(0,2));
                set_Attribute(i, clicked_div, 0);
                if (player==1)
                save(i,ships_player_1,clicked_div,...after_div.slice(0,2),...before_div.slice(0,2))
                else
                save(i,ships_player_2,clicked_div,...after_div.slice(0,2),...before_div.slice(0,2))
            }
            else if(before_div[0] && !after_div[0] && before_div[1] && !after_div[1] || !wall_3(after_div[0]))
            {
                change_class("field_hover", "field_ship",clicked_div,...before_div.slice(0,4));
                set_Attribute(i, clicked_div, 1);
                if (player==1)
                save(i,ships_player_1,clicked_div,...before_div.slice(0,4))
                else
                save(i,ships_player_2,clicked_div,...before_div.slice(0,4))
            }
            else if(!before_div[0] && after_div[0] && !before_div[1] && after_div[1] || !wall_3(before_div[0]))
            {
                change_class("field_hover", "field_ship",clicked_div,...after_div.slice(0,4));
                set_Attribute(i, clicked_div, 2);
                if (player==1)
                save(i,ships_player_1,clicked_div,...after_div.slice(0,4))
                else
                save(i,ships_player_2,clicked_div,...after_div.slice(0,4))
            } 
            else if(before_div[0] && after_div[0] && before_div[1] && !after_div[1] || !wall_3(after_div[1]))
            {
                change_class("field_hover", "field_ship",clicked_div,after_div[0],...before_div.slice(0,3));
                set_Attribute(i, clicked_div, 3);
                if (player==1)
                save(i,ships_player_1,clicked_div,after_div[0],...before_div.slice(0,3))
                else
                save(i,ships_player_2,clicked_div,after_div[0],...before_div.slice(0,3))
            } 
            else if(before_div[0] && after_div[0] && !before_div[1] && after_div[1] || !wall_3(before_div[1]))
            {
                change_class("field_hover", "field_ship",clicked_div,before_div[0],...after_div.slice(0,3));
                set_Attribute(i, clicked_div, 4);
                if (player==1)
                save(i,ships_player_1,clicked_div,before_div[0],...after_div.slice(0,3))
                else
                save(i,ships_player_2,clicked_div,before_div[0],...after_div.slice(0,3))
                
            }
        }
        
    }
}

function hover (event,i)
{
    let hover_div = event.target;
    let id = parseInt(hover_div.id);
    if (hover_div.tagName == "DIV"&& hover_div.classList.contains("field")  ) {
        if(object.id=="object_0"+i+"_p")
        {
        for(i1=0;i1<5; i1++)
          {  before_div[i1]=document.getElementById(id - 21*(i1+1));
            after_div[i1]=document.getElementById(id + 21*(i1+1));
          }
          for(i1=0;i1<10; i1++)
          {  left_div[i1]=document.getElementById(id - 85+(i1*21));
            right_div[i1]=document.getElementById(id - 83+(i1*21));
          }
        }
        else if(object.id=="object_0"+i+"_h")
         {
             for(i1=0;i1<5; i1++)
          {  before_div[i1]=document.getElementById(id - 1*(i1+1));
            after_div[i1]=document.getElementById(id + 1*(i1+1));
          }
          for(i1=0;i1<10; i1++)
          {  left_div[i1]=document.getElementById(id - 26+(i1+1));
            right_div[i1]=document.getElementById(id + 16+(i1+1));
          }
        } 
        if (i == 0 ) 
        {
            if(attribute(hover_div)) change_class("field","field_hover",hover_div); 
            else change_class("field","field_red",hover_div);
               
            
        } 
        else if (i == 1  ) 
        {
            
            if (before_div[0] && wall(before_div[0])) 
            {
            
                if(attribute(before_div[0],hover_div) ) 
                
                change_class("field","field_hover",hover_div,before_div[0]);
                
                else
                change_class("field","field_red",hover_div,before_div[0]);
            } 
            else 
            {
                
                if( attribute(after_div[0],hover_div)) change_class("field","field_hover",hover_div,after_div[0]);
                else change_class("field","field_red",hover_div,after_div[0]);
            }
        }  
         
        
        else if (i == 2) 
        {
            if (before_div[0] && after_div[0] &&  wall(before_div[0],after_div[0]) )
            {
                if(attribute(after_div[0],hover_div,before_div[0])) change_class("field","field_hover",hover_div,after_div[0],before_div[0]);
                else change_class("field","field_red",hover_div,after_div[0],before_div[0]);
            } 
            else if (before_div[0] && !after_div[0]  || !wall(after_div[0]))  
            {
              if( wall(before_div[1]) &&   wall(before_div[0]))
              {
                if(attribute(hover_div,...before_div.slice(0,2))) change_class("field","field_hover",hover_div,...before_div.slice(0,2));
                else change_class("field","field_red",hover_div,...before_div.slice(0,2));
               }
               else if(!wall(before_div[1])) change_class("field","field_red",hover_div,before_div[0]);
               else change_class("field","field_red",hover_div);
               
            } 
            else if (!before_div[0] && after_div[0] || !wall(before_div[0]) )
            {
                if( wall(after_div[1]) &&   wall(after_div[0]))
                {
                if(attribute(hover_div,...after_div.slice(0,2))) change_class("field","field_hover",hover_div,...after_div.slice(0,2));
                else change_class("field","field_red",hover_div,...after_div.slice(0,2));
                }
                else if(!wall(after_div[1])) change_class("field","field_red",hover_div,after_div[0]);
                else change_class("field","field_red",hover_div); 
            }
        }
        else if(i==3)
        {
            if(before_div[0] && after_div[0] && before_div[1] && after_div[1] && wall(...before_div.slice(0,2),...after_div.slice(0,2)))
            {
                
                if(attribute(hover_div,...before_div.slice(0,2),...after_div.slice(0,2))) change_class("field","field_hover",hover_div,...before_div.slice(0,2),...after_div.slice(0,2));
                else 
                change_class("field","field_red",hover_div,...before_div.slice(0,2),...after_div.slice(0,2));
                
            }
            else if(before_div[0] && !after_div[0] && before_div[1] && !after_div[1] || !wall(after_div[0]))
            {
                
                if( wall(...before_div.slice(0,4)))
                {
                    if(attribute(hover_div,...before_div.slice(0,4))) change_class("field","field_hover",hover_div,...before_div.slice(0,4));
                    else change_class("field","field_red",hover_div,...before_div.slice(0,4),);   
                }
                else if( wall(...before_div.slice(0,3)) &&   !wall(before_div[3]))
                {
                    change_class("field","field_red",hover_div,...before_div.slice(0,3));
                }
                else if( wall(...before_div.slice(0,2)) && !wall(before_div[2],before_div[3]) )
                {
                    change_class("field","field_red",hover_div,...before_div.slice(0,2));
                }
                else if( wall(before_div[0]) && !wall(before_div[1],before_div[2],before_div[3]) )
                {
                    change_class("field","field_red",hover_div,before_div[0]);
                }
                else if( !wall(...after_div.slice(0,4)) )
                {
                    change_class("field","field_red",hover_div);
                }
                
                 
            }
            else if(!before_div[0] && after_div[0] && !before_div[1] && after_div[1] || !wall(before_div[0]))
            {
                if( wall(...after_div.slice(0,4)))
                {
                    if(attribute(hover_div,...after_div.slice(0,4))) change_class("field","field_hover",hover_div,...after_div.slice(0,4));
                    else change_class("field","field_red",hover_div,...after_div.slice(0,4),);   
                }
                else if( wall(...after_div.slice(0,3)) &&   !wall(after_div[3]))
                {
                    change_class("field","field_red",hover_div,...after_div.slice(0,3));
                }
                else if( wall(...after_div.slice(0,2)) && !wall(after_div[2],after_div[3]) )
                {
                    change_class("field","field_red",hover_div,...after_div.slice(0,2));
                }
                else if( wall(after_div[0]) && !wall(after_div[1],after_div[2],after_div[3]) )
                {
                    change_class("field","field_red",hover_div,after_div[0]);
                }
                else if( !wall(...after_div.slice(0,4)) )
                {
                    change_class("field","field_red",hover_div);
                }
            } 
            else if(before_div[0] && after_div[0] && before_div[1] && !after_div[1] || !wall(after_div[1]))
            {
                if(wall(after_div[0],...before_div.slice(0,3)))
                {
                    if(attribute(hover_div,after_div[0],...before_div.slice(0,3))) change_class("field","field_hover",hover_div,after_div[0],...before_div.slice(0,3));
                    else change_class("field","field_red",hover_div,after_div[0],...before_div.slice(0,3));
                }
                else if(wall(after_div[0],...before_div.slice(0,2))&& !wall(before_div[2]))
                {
                   change_class("field","field_red",hover_div,after_div[0],...before_div.slice(0,2));
                }
                else if(wall(after_div[0],before_div[0])&& !wall(before_div[2],before_div[1]))
                {
                   change_class("field","field_red",hover_div,after_div[0],before_div[0])
                }
                else if(wall(after_div[0])&& !wall(...before_div.slice(0,3)))
                {
                   change_class("field","field_red",hover_div,after_div[0]);
                }
                else if(!wall(after_div[0],...before_div.slice(0,3)))
                {
                   change_class("field","field_red",hover_div);
                }
            } 
            else if(before_div[0] && after_div[0] && !before_div[1] && after_div[1] || !wall(before_div[1]))
            {
                if(wall(before_div[0],...after_div.slice(0,3)))
                {
                    if(attribute(hover_div,before_div[0],...after_div.slice(0,3))) change_class("field","field_hover",hover_div,before_div[0],...after_div.slice(0,3));
                    else
                    change_class("field","field_red",hover_div,before_div[0],...after_div.slice(0,3));
                }
                else if(wall(before_div[0],...after_div.slice(0,2))&& !wall(after_div[2]))
                {
                   
                   change_class("field","field_red",hover_div,before_div[0],...after_div.slice(0,2));
                }
                else if(wall(before_div[0],after_div[0])&& !wall(after_div[2],after_div[1]))
                {
                   
                   change_class("field","field_red",hover_div,before_div[0],after_div[0])
                }
                else if(wall(before_div[0])&& !wall(...after_div.slice(0,3)))
                {
                  
                   change_class("field","field_red",hover_div,before_div[0]);
                }
                else if(!wall(before_div[0],...after_div.slice(0,3)))
                {
                   change_class("field","field_red",hover_div);
                }
            }
        }
    }
}

function hover_2 (event,i)
{
    let hover_div = event.target;
    let id = parseInt(hover_div.id);
    if (hover_div.tagName == "DIV" && (hover_div.classList.contains("field_hover") || hover_div.classList.contains("field_red"))) {
        if(object.id=="object_0"+i+"_p")
        {
        for(i1=0;i1<5; i1++)
          {  before_div[i1]=document.getElementById(id - 21*(i1+1));
            after_div[i1]=document.getElementById(id + 21*(i1+1));
          }
          for(i1=0;i1<10; i1++)
          {  left_div[i1]=document.getElementById(id - 85+(i1*21));
            right_div[i1]=document.getElementById(id - 83+(i1*21));
          }
        }
        else if(object.id=="object_0"+i+"_h")
         {
             for(i1=0;i1<5; i1++)
          {  before_div[i1]=document.getElementById(id - 1*(i1+1));
            after_div[i1]=document.getElementById(id + 1*(i1+1));
          }
          for(i1=0;i1<10; i1++)
          {  left_div[i1]=document.getElementById(id - 26+(i1+1));
            right_div[i1]=document.getElementById(id + 16+(i1+1));
          }
        }  
        if (i == 0) 
        {
            if(class_list("field_hover",hover_div)) change_class("field_hover","field",hover_div,);
            else if(class_list("field_red",hover_div)) change_class("field_red","field",hover_div);
        } 
        else if (i == 1) 
        {
            if (before_div[0] && wall_2(before_div[0])) 
            {
            
                if(class_list("field_hover",hover_div,before_div[0])) change_class("field_hover","field",hover_div,before_div[0]);
                else  change_class("field_red","field",hover_div,before_div[0]);
            } 
            else if(!before_div[0] || !wall_2(before_div[0]))
            {
                if(class_list("field_hover",hover_div,after_div[0])) change_class("field_hover","field",hover_div,after_div[0]);
                else  change_class("field_red","field",hover_div,after_div[0]);
            }
        } 
        else if (i == 2) 
        {
            if (before_div[0] && after_div[0]  && wall_2(before_div[0],after_div[0]))
            {
                
                if(class_list("field_hover",hover_div,after_div[0],before_div[0])) change_class("field_hover","field",hover_div,after_div[0],before_div[0])
                else  change_class("field_red","field",hover_div,after_div[0],before_div[0])
            } 
            else if (before_div[0] && !after_div[0] || !wall_2(after_div[0])) 
            {
              
                if(wall_2(before_div[1]) && wall_2(before_div[0]))
                {
                 
                if(class_list("field_hover",hover_div,...before_div.slice(0,2))) change_class("field_hover","field",hover_div,...before_div.slice(0,2))
                else change_class("field_red","field",hover_div,...before_div.slice(0,2))
                }
                else if(!wall_2(before_div[1]) && wall_2(before_div[0]) )  change_class("field_red","field",hover_div,before_div[0])
                else change_class("field_red","field",hover_div)
                
            } 
            else if (!before_div[0] && after_div[0] || !wall_2(before_div[0])  ) 
            {
                
                if(wall_2(after_div[1]) && wall_2(after_div[0]) )
                {
                if(class_list("field_hover",hover_div,...after_div.slice(0,2))) change_class("field_hover","field",hover_div,...after_div.slice(0,2))
                else change_class("field_red","field",hover_div,...after_div.slice(0,2))
                }
                else if(!wall_2(after_div[1]) && wall_2(after_div[0])) change_class("field_red","field",hover_div,after_div[0]);
                else  change_class("field_red","field",hover_div);
            }
        }
        else if(i==3)
        {
            if(before_div[0] && after_div[0] && before_div[1] && after_div[1] && wall_2(...before_div.slice(0,2),...after_div.slice(0,2)))
            {
                if(class_list("field_hover",hover_div,...after_div.slice(0,2),...before_div.slice(0,2))) change_class("field_hover","field",hover_div,...after_div.slice(0,2),...before_div.slice(0,2))
                else change_class("field_red","field",hover_div,...after_div.slice(0,2),...before_div.slice(0,2))
            }
            else if(before_div[0] && !after_div[0] && before_div[1] && !after_div[1] || !wall_2(after_div[0]))
            {
                if( wall_2(...before_div.slice(0,4)))
                {
                    if(class_list("field_hover",hover_div,...before_div.slice(0,4))) change_class("field_hover","field",hover_div,...before_div.slice(0,4));
                    else change_class("field_red","field",hover_div,...before_div.slice(0,4),);   
                }
                else if( wall_2(...before_div.slice(0,3)) &&   !wall_2(before_div[3]))
                {
                    change_class("field_red","field",hover_div,...before_div.slice(0,3));
                }
                else if( wall_2(...before_div.slice(0,2)) && !wall_2(before_div[2],before_div[3]) )
                {
                    change_class("field_red","field",hover_div,...before_div.slice(0,2));
                }
                else if( wall_2(before_div[0]) && !wall_2(before_div[1],before_div[2],before_div[3]) )
                {
                    change_class("field_red","field",hover_div,before_div[0]);
                }
                else if( !wall_2(...after_div.slice(0,4)) )
                {
                    change_class("field_red","field",hover_div);
                }
                
            }
            else if(!before_div[0] && after_div[0] && !before_div[1] && after_div[1] || !wall_2(before_div[0]))
            {
             if( wall_2(...after_div.slice(0,4)))
                {
                    if(class_list("field_hover",hover_div,...after_div.slice(0,4))) change_class("field_hover","field",hover_div,...after_div.slice(0,4));
                    else change_class("field_red","field",hover_div,...after_div.slice(0,4),);   
                }
                else if( wall_2(...after_div.slice(0,3)) &&   !wall_2(after_div[3]))
                {
                    change_class("field_red","field",hover_div,...after_div.slice(0,3));
                }
                else if( wall_2(...after_div.slice(0,2)) && !wall_2(after_div[2],after_div[3]) )
                {
                    change_class("field_red","field",hover_div,...after_div.slice(0,2));
                }
                else if( wall_2(after_div[0]) && !wall_2(after_div[1],after_div[2],after_div[3]) )
                {
                    change_class("field_red","field",hover_div,after_div[0]);
                }
                else if( !wall_2(...after_div.slice(0,4)) )
                {
                    change_class("field_red","field",hover_div);
                }
            }
            else if(before_div[0] && after_div[0] && before_div[1] && !after_div[1] || !wall_2(after_div[1]))
            {
                if(wall_2(after_div[0],...before_div.slice(0,3)))
                {
                    if(class_list(hover_div,after_div[0],...before_div.slice(0,3))) change_class("field_hover","field",hover_div,after_div[0],...before_div.slice(0,3));
                    else change_class("field_red","field",hover_div,after_div[0],...before_div.slice(0,3));
                }
                else if(wall_2(after_div[0],...before_div.slice(0,2))&& !wall_2(before_div[2]))
                {
                   change_class("field_red","field",hover_div,after_div[0],...before_div.slice(0,2));
                }
                else if(wall_2(after_div[0],before_div[0])&& !wall_2(before_div[2],before_div[1]))
                {
                   change_class("field_red","field",hover_div,after_div[0],before_div[0])
                }
                else if(wall_2(after_div[0])&& !wall_2(...before_div.slice(0,3)))
                {
                   change_class("field_red","field",hover_div,after_div[0]);
                }
                else if(!wall_2(after_div[0],...before_div.slice(0,3)))
                {
                   change_class("field_red","field",hover_div);
                }
            } 
            else if(before_div[0] && after_div[0] && !before_div[1] && after_div[1] || !wall_2(before_div[1]))
            {
                if(wall_2(before_div[0],...after_div.slice(0,3)))
                {
                    if(class_list("field_hover",hover_div,before_div[0],...after_div.slice(0,3))) change_class("field_hover","field",hover_div,before_div[0],...after_div.slice(0,3));
                    else change_class("field_red","field",hover_div,before_div[0],...after_div.slice(0,3));
                }
                else if(wall_2(before_div[0],...after_div.slice(0,2))&& !wall_2(after_div[2]))
                {
                   change_class("field_red","field",hover_div,before_div[0],...after_div.slice(0,2));
                }
                else if(wall_2(before_div[0],after_div[0])&& !wall_2(after_div[2],after_div[1]))
                {
                   change_class("field_red","field",hover_div,before_div[0],after_div[0])
                }
                else if(wall_2(before_div[0])&& !wall_2(...after_div.slice(0,3)))
                {
                   change_class("field_red","field",hover_div,before_div[0]);
                }
                else if(!wall_2(before_div[0],...after_div.slice(0,3)))
                {
                   change_class("field_red","field",hover_div);
                }
            }
        }
    }
} 
    




  


