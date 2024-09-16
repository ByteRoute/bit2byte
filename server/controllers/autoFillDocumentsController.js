const crypto = require('crypto');
const fs = require('fs');
const tesseract = require('node-tesseract-ocr')

/*
    To do: 
        Change absolute path to relative path
*/


exports.ocr = async() => {
    const config = {
      lang: "eng"
    }
    tesseract
    .recognize("/Users/rathore/Documents/GitHub/bit2byte/testsubject.png", config)
    .then((text) => {
        console.log("Result:", text)
    })
    .catch((error) => {
        console.log(error.message)
    })
}