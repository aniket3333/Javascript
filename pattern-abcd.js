let str ='maadam';

//{'m':'2'}
const result  = {};
console.log(result);

for(let i=0;i<str.length;i++)
{
   ch = str.charAt(i);
   if(!result[ch])
   {
           result[ch]=1;
   }
   else{
    result[ch]+=1;
   }
}
console.log(result);

