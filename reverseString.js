function reverseString(str) {
  let le=str.length;
  let _str=''
  for (;le>0;le=le-1){

    _str=_str+str[le-1];

  }
  str=_str;

  return str;

}
