//  Let’s play a mind game

function mindGame(number){
    if(typeof number == 'number'){
    let multiplyNumber = number * 3;
    let sumNumber = multiplyNumber + 10;
    let divideNumber = sumNumber / 2;
    let subtractNumber = divideNumber - 5; 
    return subtractNumber;
    } else {
        return "Input is not in a correct format"
    }

}
// This function is mainly help to do multiplication, sum, divition and subtraction. 

let num = 5;
let result = mindGame(num);
console.log(result);

// Finding even or odd
function evenOdd(word){
   if(typeof word == "string"){
    if(word.length % 2 == 0){
        return "even";
    } else{
        return "odd";
    }
   } else{
    return "Input is not in a correct format."
   }
}

// This function help us to find a string has even word or odd word.

let word = "chatgpt"
console.log(evenOdd(word));

// Is Less or Greater than seven

function isLGSeven(number){
   let subtractNumber = number - 7;
   if(typeof number == "number"){
    if(subtractNumber < 7){
        return subtractNumber;
       } else{
        let multiplyNumber = number * 2;
        return multiplyNumber;
       }
   } else{
    return "Input is not in a correct format."
   }
}

// This function help us to find that our subtract number is greater than 7 or not.

let number = 15;
console.log(isLGSeven(number));

// Finding Bad data

let array = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
let element = 0;
let badNumber = 0;
function findingBadData(array){
   if(Array.isArray(array) == true){
    for(let i = 0; i < array.length; i++){
        element = array[i];
        if(element < 0){
            badNumber++;
        }
    }
    return badNumber;
   } else{
    return "Input is not in a correct format."
   }
}

// This function mainly find how many negative numbers we have in our array.

console.log(findingBadData(array));

// Convert your gems into diamond

let firstGemsPower = 21;
let secondGemsPower = 32;
let thirdGemsPower = 43;
function gemsToDiamond(gemsNo1, gemsNo2, gemsNo3){
    if(typeof gemsNo1 == "number" && typeof gemsNo2 == "number" && typeof gemsNo3 == "number"){
        let total = (gemsNo1 * firstGemsPower) + (gemsNo2 * secondGemsPower) + (gemsNo3 * thirdGemsPower);
    if(total > 1000 * 2){
        let getDiamonds = total - 2000;
        return getDiamonds;
    }
    return total;
    } else{
        return "Input is not in a correct format."
    }
}

// This function mainly find how many diamond we will get.

let gemsNo1 = 100;
let gemsNo2 = 5;
let gemsNo3 = 1;

let ans = gemsToDiamond(gemsNo1, gemsNo2, gemsNo3);
console.log(ans);