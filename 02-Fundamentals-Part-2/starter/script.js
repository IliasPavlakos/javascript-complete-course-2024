'use strict';

function logger(message){
    console.log(message)
}

let hasDriversLicense = false;
let passTest = true;

if(passTest){
    hasDriversLicense = true;
}

if(hasDriversLicense){
    logger("I can drive");
}