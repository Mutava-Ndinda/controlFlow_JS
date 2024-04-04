//Q1.console the first fuor items multiplied by itself and last two added by 10.Return the array with the new values
function  arrayOfNumbers(arr){
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(i<4){
            newArray.push(arr[i]*arr[i])
        }
        else if(i>=-2){
            newArray.push(arr[i]+10)
        }
        else break
    }
    return newArray
}

console.log(arrayOfNumbers([2,3,4,5,7,8]))

//Q2.use a while loop to iterata and break when the item is equal to the fourth index
const numbers = (arrNum)=>{
    let i=0
    while(i<arrNum.length){
        if(i===4){
            break
        }
        console.log(arrNum[i]);
    i++;
    
    }
};
numbers([1,2,3,4,5,6,7,8,9])

//Q3. useea continue statement when the item is at the second index
const arrayOfFruits=(fruits)=>{
 for(let i=0;i<fruits.length;i++){
    if(i===2){
        continue;
    }
    console.log(fruits[i]);
 }
};
arrayOfFruits(['apple','plum','banana','strawberries','kiwi'])

//Q4.Write a function that accepts an array of strings and console.logs each element using a for loop.
const arrayOfStrings = (arrStr)=>{
for(i=0;i<arrStr.length;i++){
    console.log(arrStr[i])
}
}
arrayOfStrings(["Jhope","Jimin","Suga","Taehyung"])





//Q5.Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
const reverseStr = (arrRev)=>{
    let i=0
    while(i<arrRev.length){
        if(i===0){
            console.log(arrRev.reverse());
        }
    break
    }
};
reverseStr(["Bangtan"])
