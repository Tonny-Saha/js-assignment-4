//  Let’s play a mind game

// function mindGame(number){
//     let multiplyNumber = number * 3;
//     let sumNumber = multiplyNumber + 10;
//     let divideNumber = sumNumber / 2;
//     let subtractNumber = divideNumber - 5; 
//     console.log(subtractNumber);
// }

// let number = 5;
// let result = mindGame(number);
// console.log(result);

// Finding even or odd
// function evenOdd(){
//     if(word.length % 2 == 0){
//         return "even";
//     } else{
//         return "odd";
//     }
// }

// let word = "chatgpt"
// console.log(evenOdd(word));

// Is Less or Greater than seven

// function isLGSeven(number){
//    let subtractNumber = number - 7;
//    if(subtractNumber < 7){
//     return subtractNumber;
//    } else{
//     let multiplyNumber = number * 2;
//     return multiplyNumber;
//    }
// }
// let number = 15;
// console.log(isLGSeven(number));

// Finding Bad data

// let array = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
// let element = 0;
// let badNumber = 0;
// function findingBadData(array){
//     for(let i = 0; i < array.length; i++){
//         element = array[i];
//         if(element < 0){
//             badNumber++;
//         }
//     }
    
//     return badNumber;
// }
// console.log(findingBadData(array));

// Convert your gems into diamond

let firstGemsPower = 21;
let secondGemsPower = 32;
let thirdGemsPower = 43;
function gemsToDiamond(gemsNo1, gemsNo2, gemsNo3){
    let total = (gemsNo1 * firstGemsPower) + (gemsNo2 * secondGemsPower) + (gemsNo3 * thirdGemsPower);
    if(total > 1000 * 2){
        let getDiamonds = total - 2000;
        return getDiamonds;
    }
    return total;
}

let gemsNo1 = 100;
let gemsNo2 = 5;
let gemsNo3 = 1;

console.log(gemsToDiamond(gemsNo1, gemsNo2, gemsNo3));