let var1 = "Variable 1", var2 = "Variable 2", var3 = "Variable 3";

// Legal:
let $myVariable = "legal1";
let _myVariable = "legal2";
let myVariable1 = "legal3";
let myVariable = "legal4";
let name = "legal5";

/*
// Illegal (These will cause errors if uncommented)
let 1variable = "illegal1"; 
let my-variable = "illegal2";
let var = "illegal3";
let my variable = "illegal4";
let #myVariable = "illegal5";
*/

// Display rules for naming variables
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $, and _. For example $my_1stVariable.<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name.<br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JS keywords.");