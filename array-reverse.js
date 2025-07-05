let num=[1,2,3,4,5,6,7,8,9,10];
let pot=[];
for (let i = 0; i < num.length; i++) {
    let newNum=num[i]
    pot.unshift(newNum)
}
console.log(pot);


let letter=['a','b','c','d','e','f','g','h'];
let pot2=[];
for (const i of letter) {
    pot2.unshift(i)
}
console.log(pot2);
