let names = ["Scmaya", "Saeety", "Sbnta", "Sdimu", "Seima"];
names.sort()
console.log(names);


// Ascending Order
let num = [16, 56, 83, 12, 19, 11, 44, 23, 77, 54, 66, 39];
num.sort((a, b) => a - b)
console.log(num);


// Descending Order
let num2 = [16, 56, 83, 12, 19, 11, 44, 23, 77, 54, 66, 39];
num2.sort((a, b) => b - a)
console.log(num2);


// Object Sorting
let colors=[
    {color:'red',num:23},
    {color:'white',num:12},
    {color:'blue',num:29},
    {color:'green',num:33},
    {color:'orange',num:15}
]
colors.sort((a,b)=>a.num-b.num)
console.log(colors);
