// const data = [];
// stackSize = data.length;
// maxSize=1;
// function push(value){
//     if(data.length<=maxSize)
//     {
//         data[stackSize] = value;
//         stackSize+=1;
//         return data;
//     }
   
// }
// const resultData = push(10);push(20);push(30);push(40)
// console.log(resultData);


//Pattern 
const data =['a','b','c','d','e','f','g','h','i','j'];
let lettter=0;
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=i;j++)
    {
        if(j%2==0)
        {
            document.write(data[lettter]);
        }
        else{
            document.write(data[lettter].toUpperCase());
        }
        
         lettter+=1;
    }
    document.write('</br>');

}
