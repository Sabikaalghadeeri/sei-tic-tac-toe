let title = document.querySelector('.title')
let turn = 'X'
let squares = []
let allSquares = ['num1','num2','num3','num4','num5','num6','num7','num8','num9']
function end(n1,n2,n3){
    title.innerHTML = `${squares[n1]} is the winner🎉`
    document.getElementById('num'+n1)
    document.getElementById('num'+n2)
    document.getElementById('num'+n3)
   console.log(`n1= ${n1}, n2= ${n2}, n3= ${n3}` )

   }
// check and declear for winner
function winner(){

    for(i=1; i<10; i++){
        squares[i] = document.getElementById('num'+i).innerHTML
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        end(1,2,3)
     }
     else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != ''){
        end(4,5,6)
     }
     else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
        end(7,8,9)
     }
     else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != ''){
        end(1,4,7)
     }
     else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        end(2,5,8)
     }
     else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        end(3,6,9)
     }
     else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != ''){
        end(1,5,9)
     }
     else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ''){
        end(3,5,7)
     }
      else if (squares[1] !=='' &&  squares[2] !=='' && squares[3] !=='' && squares[4] !=='' &&  squares[5] !==''&& squares[6] !=='' && squares[7] !=='' && squares[8] !=='' && squares[9] !==''){
      title.innerHTML = 'DRAW'
     }

     // Reset Function
     function Reset(){
      document.getElementById(num1).innerHTML=''
      document.getElementById(num2).innerHTML=''
      document.getElementById(num3).innerHTML=''
      document.getElementById(num4).innerHTML=''
      document.getElementById(num5).innerHTML=''
      document.getElementById(num6).innerHTML=''
      document.getElementById(num7).innerHTML=''
      document.getElementById(num8).innerHTML=''
      document.getElementById(num9).innerHTML=''
     }
     
    
}
function game(id){
    let element = document.getElementById(id)
    if(turn === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X'
        turn = 'O'
        title.innerHTML = 'Your turn player O'
    }
    else if( turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O'
        turn = 'X'
        title.innerHTML = 'Your turn player X'
    }
    console.log(id)
   winner()
}