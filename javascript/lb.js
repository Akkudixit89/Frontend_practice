function calculatearea(length,breadth)
{
    return length*breadth;
}
let l=prompt=("enter the number");
let lb=Number(l);
let b=prompt=("enter the number");
let wb=Number(b);
if(isNaN(lb))
    console.log("enter the valid argument");
else if(isNaN(wb))
    console.log("enter the valid number");
else{
    console.log(calculatearea())
}