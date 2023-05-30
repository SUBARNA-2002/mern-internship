// let a=10;
// console.log(a);
// function sum(a,b){
//     return a+b;
// }
// console.log('sum of a and b is :',sum(5,6))

// let b=[1,2,3,4,5]
// b.push(6);
// b.pop();
// console.log(b)
// let i=0;
// while(i<b.length){
//     console.log(b[i]);
//     i++;
// }
// for(let i=0;i<b.length;i++){
//     console.log(b[i]);
// }
//assignment
let c=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<c.length;i++){
    if(c[i]%2==0)
    console.log(c[i])
}

console.log("prime number");
for(let i=0;i<c.length;i++){
    let count=0
    for(let j=2;j<c[i];j++){
        if(c[i]%j==0)
        count++;
        
    }
    if(count==0)
    console.log(c[i])
}