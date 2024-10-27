//Facto
// function facto(item)
// {
//     if(item==0)return 1;
// return item * facto(item-1);
// }

// let result = facto(5);
// console.log(result);

// ** Reverse array using recursion
temp=0;
function reverseArray(item,start,end){
    if(start <= end)
    {
        temp = item[start];
        item[start] = item[end];
        item[end]=temp; 
        reverseArray(item,start+1,end-1);
        return item;
    }
   
}
const data = [1,2,3,4,5];
const rData = reverseArray(data,0,data.length-1);
console.log(rData);