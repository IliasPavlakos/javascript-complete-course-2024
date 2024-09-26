'use strict';

function logger(message){
    console.log(message)
}

const print1 = function(){
    console.log(1)
}

let hasDriversLicense = false;
let passTest = true;

if(passTest){
    hasDriversLicense = true;
}

if(hasDriversLicense){
    logger("I can drive");
}

print1();