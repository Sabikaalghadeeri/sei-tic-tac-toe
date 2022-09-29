   //   else if (squares[1] !=='' &&  squares[2] !=='' && squares[3] !=='' && squares[4] !=='' &&  squares[] !==''&& squares[6] !=='' && squares[7] !=='' && squares[8]  && squares[9] !==''){
   //    title.innerHTML = 'DRAW'
   //   }

   let n1=1
   let n2=2
   let n3=3

   let allSquares = ['num1','num2','num3','num4','num5','num6','num7','num8','num9']
   for(let i = 0; i < 10; i++) { 
      if((n1==num[i]) || (n2 == num[i]) || (n3 == num[i])) {
         console.log(`skipping num[${num[i]}]`)
          continue; 
      }
      //document.getElementById("num[i]").disabled = true;
      console.log(`disabeling num[${num[i]}]`)
  }