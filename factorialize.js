function factorialize(num) {
  
  let i=0n
  for (i=num-1;i>1;i--){
  num=num*i;
  }
  
  if (num) {return num;} else {return 1;}
}
