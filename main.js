//const strings = ['a', 'b', 'c', 'd'];


//console.log(strings[2]);

//strings.push('e'); //O(1)
//strings.pop(); //O(1)

//strings.unshift('x'); //O(n);
//strings.shift(); //O(n);

//strings.splice(2, 0, 'r');//O(n);
//console.log(strings);

// Two Types of ARRAY 1) Static : fix in size, Dynamic Array;

//Refernce Type 
///let object1 = { value: 10 };
//let object2 = object1;

//let object3 = { value: 10 };

//console.log(object1 === object2);
//console.log(object1 == object2);

//console.log(object1 == object3);
//console.log(object1 === object3);
//object2.value = 15;
//console.log(object1.value);

//Context in Javascript
//const thisCheck = {
// a: function () {
//     console.log(this);
//// }
//}

//  Creating an Array Class

/*class myArr {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get() {
        return this.length;
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    pop() {
        if (this.length > 0) {
            delete this.data[this.length - 1];
            this.length--;
        }
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;

    }
}

const newArray = new myArr();
newArray.push("Hello");
newArray.push("Samu");
newArray.push("Ashu");
newArray.push("Hari");
newArray.delete(0);
console.log(newArray);*/

//Reverse a String Fun Interview Questions

/*function reverseString(str) {
    let tempArr = [];
    tempArr.push(str.split(' ').map((item) => item.split('').reverse().join('')));
    console.log(tempArr.toString().replace(/,/g, ' '));
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}
const reverseString3 = (str) => [...str].reverse().join('')
console.log(reverseString("Hello Everyone Good Morning!"));*/

// Merge Sorted Arrays
/*let resultArr = [];
let pendingArr = [];
function mergeSortedArrays(arr1, arr2) {
    //console.log(arr1.concat(arr2).sort((a, b) => a - b));
    let concatArr = arr1.concat(arr2);
    let temp = 0;
    for (let i = 0; i < concatArr.length - 1; i++) {
        for (let j = i + 1; j < concatArr.length; j++) {
            if (concatArr[j] < concatArr[i]) {
                temp = concatArr[j];
                concatArr[j] = concatArr[i];
                concatArr[i] = temp;
            }
        }
    }
    console.log(concatArr);
}*/

/*function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}*/



//console.log(mergeSortedArrays([100, 3, 4, 31], [4, 61, 30]));

/*function twoSum(arr, target) {
    debugger;
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] >= 0) {
            return [obj[arr[i]], i];
        }

        obj[target - arr[i]] = i;
    }
    console.log(obj);
}*/



//console.log(twoSum([2, 45, 11, 7], 45));

/* function moveZeroes(arr) {
    /* let nonZero = [];
     let zero = [];
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] == 0) {
             zero.push(arr[i]);
         } else {
             nonZero.push(arr[i]);
         }
     }
     return nonZero.concat(zero);*/
/*return arr.sort((a, b) => {
    a - b
});*/

/*let zeroArray = [];
let i = 0;

while (i < arr.length) {
    if (arr[i] == 0) {
        arr.splice(i, 1);
        zeroArray.push(0);
    } else {
        i++;
    }

}
zeroArray.forEach(zero => arr.push(0));
return arr;*/

/* for (let i = arr.length; i >= 0; i--) {
     if (arr[i] == 0) {
         arr.splice(i, 1);
         arr.push(0);
     }
 }
 return arr;*/
//} */

//console.log(moveZeroes([0, 1, 0, 3, 12]));

//Find Duplicates

/*function findDuplicate(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        debugger;
        if (!obj.hasOwnProperty([arr[i]])) {
            obj[arr[i]] = arr[i];
        } else {
            return true;
        }
    }
    return false;
}

console.log(findDuplicate([0, 4, 5, 0, 6]));*/

/* var rotate = function (nums, k) {
    let temp = nums.splice(k + 1, nums.length);
    return temp.concat(nums);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));*/

/*function findMaxSumInArray(arr) {
    let maxSum = 0;
    let partialSum = 0;
    let indexArr = [];
    for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        if (partialSum >= maxSum) {
            indexArr.push(i);
        }
        else {
            if (!(i + 1 == arr.length)) {
                if (!(arr[i] > arr[i + 1])) {
                    indexArr = [];
                }
            }
        }
        maxSum = Math.max(maxSum, partialSum);
        partialSum = partialSum < 0 ? 0 : partialSum;
    }
    console.log("Maximum Index is" + indexArr);
    return maxSum;
}*/
// O(n)^2
function findMaxSumInArray(arr) {
    let maxSum = 0;
    let curTime = Date.now();
    for (let i = 0; i < arr.length; i++) {
        let partialSum = 0;
        for (let j = i; j < arr.length; j++) {
            partialSum += arr[j];
            maxSum = Math.max(maxSum, partialSum);
        }
    }
    console.log((Date.now() - curTime) / 1000);
    return maxSum;
}

//Linear Algorithm

function findMaxSumInArrayShort(arr) {
    let maxSum = 0;
    let partialSum = 0;
    debugger;
    let curTime = Date.now();
    for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        partialSum = partialSum > 0 ? partialSum : 0;
    }
    console.log((Date.now() - curTime) / 1000);
    return maxSum;
}

console.log(findMaxSumInArrayShort([-1, 2, 3, -9, 11]));
console.log("Hello");
//http://127.0.0.1:5500/
