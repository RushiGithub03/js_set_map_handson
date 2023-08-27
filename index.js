// Question-1 
// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str="abcadeecfb";

        let str2 = str.split(""); //gives the array with seperate alphabet

        let s =new Set(str2); //takes the array and set object is created

        // console.log(s);

        let s2 = [...s];

        let s3 = s2.join("");
        console.log(s3);


        // question-2

//         "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

let inp = "abcadeecfb";
let ans = new Map();
for(let char of inp) {
    if (ans.has(char)) {
        ans.set(char, ans.get(char)+1);
    }

    else {
        ans.set(char,1);
    }
}

 for(let [ke,value] of ans) {
    console.log(`${ke}=${value}`);
 }


