function findLongestWordLength(str) {
 let n1=0;
 let n2=0;
 let l=str.length
 let bg=0;
while (n1<l){ n2=n2+1


if ((str[n2]==' ') | (n2==l)) {
if (n2-n1>bg) {bg=n2-n1-1};
n1=n2}

}

 
return bg;
}
