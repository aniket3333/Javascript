let stack = [];
currentSize = stack.length;
let data = [];
dataSize=0;
console.log(stack);

function push(value)
{
  stack[currentSize] = value;
  currentSize+=1;
}
function pop()
{
  currentSize-=1;
  let lastElement = stack[currentSize]
  stack.length = currentSize;
  return lastElement;
}

function pushData(value)
{
    data[dataSize] = value;
    dataSize+=1;
}
for(let i=1;i<=5;i++)
{
push(i);
}
for(let i=1;i<=5;i++)
{
 const el= pop();
 pushData(el);
}
console.log(stack);
console.log(data);


