// Lets verify that the script loads
console.log("Vi kommer åt scriptet");

// global variables
//let candies = 

loadData();
// Load content to FrontEnd, read all files in folder "images/" and populate something

function loadData(){

    const imgFolder = './images/';
    const fs = require('fs');

    fs.readdir(imgFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
}


/*
const folder = process.argv.slice(2)[0];
const fs = require('fs');

fs.readdirSync(folder).forEach(file => {
    console.log(file);
})
*/


