const fs = require('fs');
const pdfParse = require('pdf-parse');

let dataBuffer = fs.readFileSync('Suriya_B_Frontend_Developer.pdf');

pdfParse(dataBuffer).then(function(data) {
    console.log("=== RESUME TEXT START ===");
    console.log(data.text);
    console.log("=== RESUME TEXT END ===");
}).catch(err => {
    console.error(err);
});
