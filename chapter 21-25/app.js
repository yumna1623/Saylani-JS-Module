
// ----------------------------------- question 1 -----------------
// let firstName = prompt("Enter First name")
// let secName = prompt("Enter second name")
// let FullName=firstName+secName;
// alert("welcome"+FullName)

// ----------------------------------- question 2 -----------------
// let mobile  = prompt("enter your fav mob name")
// let lengthh = 0
// for (let index = 0; index < mobile.length; index++) {
//     lengthh++

// }
// console.log(lengthh);
// document.write("my fav phone is  "+ mobile +" and length of string is " +  lengthh)

// ----------------------------------- question 3 -----------------

// ----------------------------------- question 4 -----------------

// ----------------------------------- question 5 -----------------
// let word = "pakistani"
// for (let i = 0; i < word.length; i++) {
//     if(i==3){
//         document.write("character at index " + i + " = " + word[i] )
//     }
    
// }

// ----------------------------------- question 6 -----------------
// let word = "pakistani";

//         for (let i = 0; i < word.length; i++) {
//             if (i === 3) {
//                 let result = "Character at index ".concat(i, " = ", word[i]);
//                 document.write(result);
//             }
//         }


// ----------------------------------- question 7 -----------------

// let city1 = "hyderabad"
// if (city1.includes("hyder")) {
//     document.write("Before replacement: " + city1 + "<br>");
//     let city2 = city1.replace("hyder", "islam");
//     document.write("After replacement: " + city2);
// }




// ----------------------------------- question 8-----------------
// var message = "ali and sami are bestfriends. they play football and cricket"

// let update = message.replaceAll("and","&")

// document.write("original text <br>")
// document.write(message + "<br>")
// document.write("after update  <br>")
// document.write(update)




// ----------------------------------- question 9 -----------------
// var str = "472"
// document.write("Before conversion: <br>");
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br><br>");

// var num = Number(str)
// document.write("Before conversion: <br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num + "<br><br>");



// ----------------------------------- question 10 -----------------
// let userinp = prompt("enter any word i'll change it to capitalize form")
// let capForm = userinp.toLocaleUpperCase()
// document.write(capForm)


// ----------------------------------- question 11-----------------
// ----------------------------------- question 12-----------------
// ----------------------------------- question 13-----------------
// ----------------------------------- question 14-----------------
// ----------------------------------- question 15-----------------



// ----------------------------------- question 16-----------------
// var university = "university of karachi"
// let array = university.split("")
// array.forEach(function(char)  {
//     document.write(char + "<br>")
    
// });




// ----------------------------------- question 17-----------------
// let input = prompt("enter any word i will tell the last char of it")
// let lastChar = input[input.length-1]
// alert("The last character of the word is: " + lastChar);



// ----------------------------------- question 18-----------------
// let text = "the quick brown fox jumps over the lazy dog. .";
// let wordToFind = "the";
// let count = text.split(wordToFind).length - 1;
// document.getElementById("result").innerText =`The word "${wordToFind}" occurs ${count} time(s) in the given text.`;